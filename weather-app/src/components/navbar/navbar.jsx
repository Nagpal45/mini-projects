"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import styles from './navbar.module.css'
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [active, setActive] = useState("home");

  const path = usePathname();

  useEffect(()=>{
    if(path == "/"){
      setActive("home");
    }
    if(path == "/about"){
      setActive("about");
    }
    if(path == "/servicesPage"){
      setActive("services");
    }
    if(path == "/contact"){
      setActive("contact");
    }
  },[path])

  return (
    <div className={styles.navbar}>
        <Link href="/"><div className={active == "home" ? styles.active : styles.navItem}>Home</div></Link>
        <Link href="/about"><div className={active == "about" ? styles.active : styles.navItem}>About</div></Link>
        <Link href="/servicesPage"><div className={active == "services" ? styles.active : styles.navItem}>Services</div></Link>
        <Link href="/contact"><div className={active == "contact" ? styles.active : styles.navItem}>Contact</div></Link>
    </div>
  )
}
