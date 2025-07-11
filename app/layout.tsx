import './globals.css'
import type { Metadata } from 'next'
import { Providers } from './providers'

export const metadata: Metadata = {
  title: 'GitHub Review Tool',
  description: 'A comprehensive tool for reviewing GitHub repositories and code quality',
  keywords: ['github', 'code review', 'repository analysis', 'development tools'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans">
        <Providers>
          <div className="min-h-screen bg-gray-50">
            <main>{children}</main>
          </div>
        </Providers>
      </body>
    </html>
  )
}