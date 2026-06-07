'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const navLinks = [
  { href: '#about', label: 'About' },
  // { href: '#worship', label: 'Worship' },
  { href: '#sermons', label: 'Sermons' },
  // { href: '#community', label: 'Community' },
  { href: '#team', label: 'Our Team' },
  { href: '/blog', label: 'Blog' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#06091A]/95 backdrop-blur-md py-3 shadow-[0_2px_30px_rgba(0,0,0,0.4)]'
          : 'bg-transparent py-6'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 flex items-center justify-center overflow-hidden rounded-full">
            <Image
              src="/logo.jpeg"
              alt="Chapel of Pentecost logo"
              width={40}
              height={40}
              className="object-cover w-full h-full"
            />
          </div>
          <div>
            <span className="font-display text-cream-50 text-lg font-semibold tracking-wide leading-none block"
              style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', color: '#FDFAF4' }}>
              Chapel of Pentecost
            </span>
            <span className="font-sans text-gold-400 text-[10px] tracking-[0.2em] uppercase block"
              style={{ fontFamily: 'Jost, sans-serif', color: '#E8C060', fontSize: '10px', letterSpacing: '0.2em' }}>
              Anglican Church
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="nav-link font-sans text-[13px] tracking-[0.12em] uppercase text-cream-100 hover:text-gold-400 transition-colors duration-300"
                style={{ fontFamily: 'Jost, sans-serif', color: '#F7F0E0', fontSize: '13px', letterSpacing: '0.12em' }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#worship"
          className="hidden md:block font-sans text-[12px] tracking-widest uppercase px-5 py-2.5 border border-gold-500 text-gold-400 hover:bg-gold-500 hover:text-navy-950 transition-all duration-300"
          style={{ fontFamily: 'Jost, sans-serif', fontSize: '12px', letterSpacing: '0.15em', color: '#E8C060', borderColor: '#C9973A' }}
        >
          Visit Us
        </a>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-px bg-cream-100 transition-transform duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} style={{ backgroundColor: '#F7F0E0' }} />
          <span className={`block w-6 h-px bg-cream-100 transition-opacity duration-300 ${menuOpen ? 'opacity-0' : ''}`} style={{ backgroundColor: '#F7F0E0' }} />
          <span className={`block w-6 h-px bg-cream-100 transition-transform duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} style={{ backgroundColor: '#F7F0E0' }} />
        </button>
      </nav>

      {/* Mobile menu */}
      <div className={`md:hidden transition-all duration-500 overflow-hidden ${menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
        style={{ background: '#06091A' }}>
        <div className="px-6 pb-6 pt-2 flex flex-col gap-4 border-t border-gold-500/20" style={{ borderColor: 'rgba(201,151,58,0.2)' }}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-sans text-[13px] tracking-widest uppercase text-cream-100 hover:text-gold-400 transition-colors py-1"
              style={{ fontFamily: 'Jost, sans-serif', color: '#F7F0E0', fontSize: '13px' }}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  )
}
