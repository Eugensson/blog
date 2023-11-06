import Header from '@/components/Header'
import './globals.css'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Next App',
  description: 'Next App description',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className='container'>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
