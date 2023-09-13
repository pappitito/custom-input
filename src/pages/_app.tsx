import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Montserrat } from '@next/font/google'


const montserrat = Montserrat({subsets: ['latin']})

export default function App({ Component, pageProps }: AppProps) {
  return <main className={montserrat.className}>
            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
           <Component {...pageProps} />
  </main>
}
