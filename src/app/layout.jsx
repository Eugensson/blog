import Header from '@/components/Header';
import Footer from '@/components/Footer';

import './globals.css';


export const metadata = {
  title: 'Next App',
  description: 'Next App description',
}

const RootLayout = ({ children }) => {
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

export default RootLayout;
