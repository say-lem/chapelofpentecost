import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/church-interior.JPG"
          alt="Church interior"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#06091A]/80 via-[#0A0E2A]/70 to-[#06091A]/90" />
        {/* Subtle texture */}
        <div className="absolute inset-0 texture-overlay" />
      </div>

      {/* Decorative vertical lines */}
      <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold-500/30 to-transparent hidden lg:block"
        style={{ background: 'linear-gradient(to bottom, transparent, rgba(201,151,58,0.3), transparent)' }} />
      <div className="absolute right-8 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold-500/30 to-transparent hidden lg:block"
        style={{ background: 'linear-gradient(to bottom, transparent, rgba(201,151,58,0.3), transparent)' }} />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Cross ornament */}
        <div className="flex justify-center mb-8 animate-fade-in-up animate-delay-100">
          <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10 opacity-80">
            <rect x="18" y="2" width="4" height="36" fill="#C9973A" />
            <rect x="4" y="12" width="32" height="4" fill="#C9973A" />
          </svg>
        </div>

        {/* Eyebrow */}
        <p
          className="animate-fade-in-up animate-delay-200 font-sans text-gold-400 text-[11px] tracking-[0.35em] uppercase mb-5"
          style={{ fontFamily: 'Jost, sans-serif', color: '#E8C060', fontSize: '11px', letterSpacing: '0.35em' }}
        >
          Hospital Chaplaincy · Est. 2004
        </p>

        {/* Headline */}
        <h1
          className="animate-fade-in-up animate-delay-300 font-display text-cream-50 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light leading-[1.05] mb-6"
          style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', color: '#FDFAF4' }}
        >
          Living by 
          <br />
          <em className="italic" style={{ color: '#E8C060' }}>Every Word </em>
          <br/>
          Of God
        </h1>

        {/* Ornament */}
        <div className="animate-fade-in-up animate-delay-400 flex items-center justify-center gap-4 my-7">
          <div className="h-px w-16" style={{ background: 'linear-gradient(to right, transparent, rgba(201,151,58,0.6))' }} />
          <svg viewBox="0 0 20 20" fill="none" className="w-3 h-3">
            <polygon points="10,1 12,8 19,8 13,13 15,20 10,15 5,20 7,13 1,8 8,8" fill="#C9973A" />
          </svg>
          <div className="h-px w-16" style={{ background: 'linear-gradient(to left, transparent, rgba(201,151,58,0.6))' }} />
        </div>

        {/* Subtext */}
        <p
          className="animate-fade-in-up animate-delay-400 font-body text-cream-200/80 text-xl leading-relaxed max-w-xl mx-auto mb-10"
          style={{ fontFamily: 'EB Garamond, Georgia, serif', color: 'rgba(237,227,204,0.8)', fontSize: '20px' }}
        >
          A home for those who seek the ancient liturgy, the apostolic faith,
          and the beauty of holiness.
        </p>

        {/* CTAs */}
        <div className="animate-fade-in-up animate-delay-500 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#worship"
            className="font-sans text-[12px] tracking-[0.2em] uppercase px-8 py-4 bg-gold-500 text-navy-950 hover:bg-gold-400 transition-all duration-300 font-medium"
            style={{ fontFamily: 'Jost, sans-serif', fontSize: '12px', letterSpacing: '0.2em', backgroundColor: '#C9973A', color: '#06091A' }}
          >
            Service Times
          </a>
          <a
            href="#online-worship"
            className="font-sans text-[12px] tracking-[0.2em] uppercase px-8 py-4 border border-cream-200/40 text-cream-100 hover:border-gold-500/60 hover:text-gold-400 transition-all duration-300"
            style={{ fontFamily: 'Jost, sans-serif', fontSize: '12px', letterSpacing: '0.2em', color: '#F7F0E0', border: '1px solid rgba(237,227,204,0.4)' }}
          >
            Online service
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="font-sans text-[10px] tracking-widest uppercase text-gold-500/60"
          style={{ fontFamily: 'Jost, sans-serif', fontSize: '10px', letterSpacing: '0.2em', color: 'rgba(201,151,58,0.6)' }}>
          Scroll
        </span>
        <div className="w-px h-8" style={{ background: 'linear-gradient(to bottom, rgba(201,151,58,0.6), transparent)' }} />
      </div>
    </section>
  )
}
