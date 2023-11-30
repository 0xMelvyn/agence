import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Votre agence",
  description: "Exemple de site d'agence immbolière",
}

export default function RootLayout({ children }) {
  return (
    <html className='bg-white' lang="fr">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
