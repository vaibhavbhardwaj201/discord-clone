import './globals.css'
import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'

import { ClerkProvider } from '@clerk/nextjs'
import { ThemeProvider } from '@/components/providers/theme-provider'
import { cn } from '@/lib/utils'

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
      <html lang="en" suppressHydrationWarning>
        <body className={cn(
          font.className,
          'bg-white dark:bg-[#313338]')}>
          <ThemeProvider
            attribute='class'
            defaultTheme='dark'
            enableSystem={false}
            storageKey='app-theme' >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}
