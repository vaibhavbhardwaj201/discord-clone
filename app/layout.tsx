import './globals.css'
import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'

import { ClerkProvider } from '@clerk/nextjs'

const font = Open_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Discord Clone',
  description: 'Secure way to connect with your colleagues and friends with several channels like chat, audio, video, etc',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    // We need to wrap our app with <ClerkProvider> to provide active session and user context to Clerk's hooks and components.
    <ClerkProvider>
      <html lang="en">
        <body className={font.className}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}
