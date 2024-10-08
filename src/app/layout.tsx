import type { Metadata } from 'next'
import './globals.css'
import { ReactNode } from 'react'
import { base } from './fonts'

export const metadata: Metadata = {
    title: "Sean O'Connor",
    description:
        'Back-end & Android software developer, advocating for free/libre and open source software.',
}

export default function RootLayout({
    children,
}: Readonly<{ children: ReactNode }>) {
    return (
        <html lang='en' suppressHydrationWarning={true}>
            <body className={`${base.className}`}>{children}</body>
        </html>
    )
}
