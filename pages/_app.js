import '../styles/globals.css'
import Link from 'next/link'
import colorLogo from '../public/images/steakLogoColor.png'
import wallet from '../public/images/walletIcon.png'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <nav className="bg-black font-sans font-bold border-b p-5 flex justify-between items-center">
        <div className='flex items-center '>
          <a href='/'>
            <img src={colorLogo} />
          </a>
          <a href='/'>
            <p className="text-white text-2xl font-bold pl-3">Medium-Rare</p>
          </a>
        </div>
        <div className="flex font-sans text-gray-400 items-center">
          <Link href="/">
            <a className="mr-4 hover:text-white">
              Explore
            </a>
          </Link>
          <Link href="/create-nft">
            <a className="mr-6 hover:text-white">
              Create
            </a>
          </Link>
          <Link href="/my-nfts">
            <a className="mr-6 hover:text-white">
              My NFTs
            </a>
          </Link>
          <Link href="/dashboard">
            <a className=" hover:text-white">
              <img src={wallet} />
            </a>
          </Link>
        </div>
      </nav>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp