import data from '@/lib/data'
import dbConnect from '@/lib/dbConnect'
import ProductModel from '@/lib/models/ProductModel'
import UserModel from '@/lib/models/UserModel'
import { NextRequest, NextResponse } from 'next/server'

export const GET = async (request: NextRequest) => {
  const { users, products } = data
  await dbConnect()
  await UserModel.deleteMany()
  await UserModel.insertMany(users)

  await ProductModel.deleteMany()

  // Create a set to check for duplicate slugs
  const slugSet = new Set()
  const uniqueProducts = products.filter(product => {
    if (slugSet.has(product.slug)) {
      console.warn(`Duplicate slug found and ignored: ${product.slug}`)
      return false
    }
    slugSet.add(product.slug)
    return true
  })

  try {
    await ProductModel.insertMany(uniqueProducts, { ordered: false })
  } catch (error) {
    if (error instanceof Error && error.name === 'BulkWriteError' && 'writeErrors' in error) {
      console.error('Duplicate key error:', error)
    } else {
      console.error('An unexpected error occurred:', error)
    }
  }

  return NextResponse.json({
    message: 'seeded successfully',
    users,
    products: uniqueProducts,
  })
}
