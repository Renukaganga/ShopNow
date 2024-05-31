// src/components/Providers.tsx
import { SessionProvider } from 'next-auth/react'
import ClientProviders from './ClientProviders'

export default function Providers({
  children,
  session,
}: {
  children: React.ReactNode,
  session: any
}) {
  return (
    <SessionProvider session={session}>
      <ClientProviders>{children}</ClientProviders>
    </SessionProvider>
  )
}
