import styles from '@/app/styles/navbar.module.css'
import Image from 'next/image'
import Link from 'next/link'
import Nav from './Nav'

const Header = () => {
  return (
    <header className={`${styles.main_header}`}>

        {/*=========
            LOGO  
         ===========*/}

        <div className={styles.navbar_brand}>
            <Link href="/">
            <Image 
            src='/logo.png'
            alt='Logo'
            width={150}
            height={40}
            />
            </Link>
        </div>

        {/*=========
           NAV MENU 
         ===========*/}

          <Nav/>

    </header>
  )
}

export default Header