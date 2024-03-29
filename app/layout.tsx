import './globals.css'
import { Iceberg } from 'next/font/google'
import Menu from './components/menu'
import Fotter from './components/fotter'

export const metadata = {
  title: 'Welcome To PIAIC',
  description: 'Generated by create next app',
}

const iceberg=Iceberg({
  subsets:['latin'],
  variable:'--font-iceberg',
  display:'swap',
  weight:"400"
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${iceberg.variable}   font-iceberg`}>
      <body className='relative p-0 m-0'>
        <Menu/>
        {children}
        <Fotter/>
      </body>
    </html>
  )
}
