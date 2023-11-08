import Header from '@/components/Header';
import Footer from '@/components/Footer';

import './globals.css';
import { Providers } from '@/components/Providers';


export const metadata = {
  title: 'Next App',
  description: 'Next App description',
}

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Header />
            <main className='container'>{children}</main>
          <Footer />
        </Providers>        
      </body>
    </html>
  )
}

export default RootLayout;
