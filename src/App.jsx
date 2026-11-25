import { useState, Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Float, MeshDistortMaterial, Environment, ContactShadows } from '@react-three/drei'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowDown, ArrowRight, ArrowUpRight, Menu, X, Play, Waves, Leaf, Sparkles, MapPin, CalendarDays, Users, Instagram, Facebook, ChevronDown } from 'lucide-react'

const images = {
  hero: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2200&q=90',
  villa: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1400&q=85',
  pool: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1400&q=85',
  dining: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=85',
  spa: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=85',
  landscape: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=1800&q=85',
  room: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1200&q=85',
}

function LivingSculpture() {
  return (
    <Float speed={1.25} rotationIntensity={0.25} floatIntensity={0.55}>
      <mesh scale={1.45}>
        <icosahedronGeometry args={[1, 5]} />
        <MeshDistortMaterial color="#c9b58b" roughness={0.22} metalness={0.72} distort={0.28} speed={1.5} />
      </mesh>
    </Float>
  )
}

function Atmosphere() {
  return (
    <div className="hero-art" aria-hidden="true">
      <Canvas camera={{ position: [0, 0, 4.8], fov: 42 }} dpr={[1, 1.5]}>
        <ambientLight intensity={1.2} />
        <directionalLight position={[3, 4, 5]} intensity={2.4} />
        <pointLight position={[-3, -2, 2]} intensity={2} color="#8d9b75" />
        <Suspense fallback={null}>
          <LivingSculpture />
          <Environment preset="city" />
          <ContactShadows position={[0, -1.9, 0]} opacity={0.25} scale={5} blur={2.5} />
        </Suspense>
      </Canvas>
    </div>
  )
}

const experiences = [
  { no: '01', title: 'The art of stillness', tag: 'WELLNESS', image: images.spa, text: 'Rituals that restore. Spaces that let the world fall away.' },
  { no: '02', title: 'A table worth travelling for', tag: 'CULINARY', image: images.dining, text: 'Seasonal ingredients, local stories and considered flavours.' },
  { no: '03', title: 'Closer to the wild', tag: 'NATURE', image: images.landscape, text: 'Find your own rhythm in landscapes shaped by time.' },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [tourOpen, setTourOpen] = useState(false)
  const [arrival, setArrival] = useState('')
  const [departure, setDeparture] = useState('')
  const [guests, setGuests] = useState('2 Guests')

  const closeMenu = () => setMenuOpen(false)
  const bookingHref = `mailto:stay@luxora.example?subject=${encodeURIComponent('LUXORA stay enquiry')}&body=${encodeURIComponent(`Arrival: ${arrival || 'To be confirmed'}\nDeparture: ${departure || 'To be confirmed'}\nGuests: ${guests}`)}`

  return (
    <main>
      <header className="topbar">
        <a className="wordmark" href="#home" onClick={closeMenu}>LUXORA<span>PRIVATE RETREATS</span></a>
        <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
          <a href="#story" onClick={closeMenu}>Our story</a>
          <a href="#stay" onClick={closeMenu}>The stay</a>
          <a href="#experiences" onClick={closeMenu}>Experiences</a>
          <a href="#journal" onClick={closeMenu}>Journal</a>
          <a className="mobile-book" href="#reserve" onClick={closeMenu}>Plan your stay <ArrowUpRight size={14}/></a>
        </nav>
        <a className="nav-cta" href="#reserve">Plan your stay <ArrowUpRight size={15}/></a>
        <button className="menu-toggle" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X/> : <Menu/>}</button>
      </header>

      <section className="hero" id="home" style={{ backgroundImage: `linear-gradient(90deg, rgba(9,17,14,.78) 0%, rgba(9,17,14,.36) 48%, rgba(9,17,14,.12) 100%), url(${images.hero})` }}>
        <div className="hero-grain" />
        <div className="hero-copy">
          <motion.p className="eyebrow light" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8 }}>A DIFFERENT KIND OF ESCAPE <span /></motion.p>
          <motion.h1 initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: .12 }}>A world<br/><em>apart.</em></motion.h1>
          <motion.p className="hero-description" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: .4 }}>Somewhere between the extraordinary<br/>and the effortlessly yours.</motion.p>
          <motion.div className="hero-actions" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .6 }}>
            <a className="button button-light" href="#stay">Discover LUXORA <ArrowUpRight size={16}/></a>
            <button className="play-link" onClick={() => setTourOpen(true)}><span><Play size={13} fill="currentColor"/></span> Explore the film</button>
          </motion.div>
        </div>
        <div className="hero-bottom">
          <span>PRIVATE RETREATS · EST. 2025</span>
          <a href="#story">SCROLL TO DISCOVER <ArrowDown size={13}/></a>
          <span className="hero-coordinate">11° 04' N&nbsp; / &nbsp;76° 56' E</span>
        </div>
        <Atmosphere />
      </section>

      <section className="intro section-pad" id="story">
        <div className="intro-side"><span className="section-index">01 / THE PHILOSOPHY</span><span className="vertical-note">HOSPITALITY, REIMAGINED</span></div>
        <div className="intro-main">
          <p className="eyebrow">BEYOND THE EXPECTED</p>
          <h2>Luxury is not what<br/>you see. It is <em>how you feel.</em></h2>
          <div className="intro-bottom">
            <p className="body-copy">A sanctuary shaped by its surroundings and guided by a simple belief: the most memorable journeys leave room for wonder. At LUXORA, every detail has a purpose, every moment has a little more meaning.</p>
            <a className="text-link" href="#experiences">The LUXORA philosophy <ArrowUpRight size={16}/></a>
          </div>
        </div>
        <div className="intro-image"><img src={images.villa} alt="Contemporary private villa surrounded by tropical greenery"/><span>01 — A PLACE TO BELONG</span></div>
      </section>

      <section className="stay-section" id="stay">
        <div className="stay-image" style={{ backgroundImage: `url(${images.pool})` }}>
          <div className="stay-image-label"><span>THE RESIDENCES</span><span>01 — 04</span></div>
        </div>
        <div className="stay-content">
          <p className="eyebrow light">02 / THE STAY</p>
          <h2>Space to<br/><em>simply be.</em></h2>
          <p className="stay-copy">Private villas, thoughtful architecture and the kind of quiet that stays with you long after you leave.</p>
          <div className="stay-features">
            <div><Waves/><span>Private pools<br/><small>Unhurried mornings</small></span></div>
            <div><Leaf/><span>Natural materials<br/><small>Rooted in place</small></span></div>
            <div><Sparkles/><span>Personal service<br/><small>Never one-size-fits-all</small></span></div>
          </div>
          <a className="button button-outline" href="#reserve">Explore the residences <ArrowUpRight size={16}/></a>
        </div>
      </section>

      <section className="experiences section-pad" id="experiences">
        <div className="section-heading">
          <div><p className="eyebrow">03 / THE EXPERIENCES</p><h2>Moments that<br/><em>become memories.</em></h2></div>
          <p className="heading-note">Not an itinerary. An invitation<br/>to experience more.</p>
        </div>
        <div className="experience-grid">
          {experiences.map((item) => (
            <article className="experience-card" key={item.no}>
              <div className="experience-image"><img src={item.image} alt={item.title}/><span className="image-arrow"><ArrowUpRight size={19}/></span></div>
              <div className="experience-meta"><span>{item.no} / {item.tag}</span><span>DISCOVER</span></div>
              <h3>{item.title}</h3><p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="quote-band" style={{ backgroundImage: `linear-gradient(rgba(14,24,20,.62),rgba(14,24,20,.62)),url(${images.landscape})` }}>
        <span className="quote-mark">“</span>
        <blockquote>Travel is not always about<br/>going further. Sometimes it is<br/>about <em>feeling more.</em></blockquote>
        <span className="quote-caption">THE LUXORA WAY</span>
      </section>

      <section className="journal section-pad" id="journal">
        <div className="journal-top"><div><p className="eyebrow">04 / THE JOURNAL</p><h2>Notes from<br/><em>elsewhere.</em></h2></div><a className="text-link" href="#reserve">Discover our world <ArrowUpRight size={16}/></a></div>
        <div className="journal-feature">
          <img src={images.room} alt="Warm, considered resort suite interior"/>
          <div className="journal-caption"><span>THE ART OF SLOW LIVING · 6 MIN READ</span><h3>The beauty of<br/>doing absolutely nothing.</h3><a href="#reserve">READ THE STORY <ArrowUpRight size={15}/></a></div>
        </div>
      </section>

      <section className="reserve-section" id="reserve">
        <div className="reserve-copy"><p className="eyebrow light">YOUR STORY STARTS HERE</p><h2>Make room<br/>for <em>wonder.</em></h2><p>Tell us when you would like to disappear. We will take care of the details.</p></div>
        <div className="booking-panel">
          <div className="booking-title"><span>PLAN YOUR STAY</span><span>PERSONAL ENQUIRIES</span></div>
          <div className="booking-fields">
            <label><span><CalendarDays size={15}/> ARRIVAL</span><input type="date" value={arrival} onChange={e => setArrival(e.target.value)}/></label>
            <label><span><CalendarDays size={15}/> DEPARTURE</span><input type="date" value={departure} min={arrival || undefined} onChange={e => setDeparture(e.target.value)}/></label>
            <label><span><Users size={15}/> GUESTS</span><select value={guests} onChange={e => setGuests(e.target.value)}><option>1 Guest</option><option>2 Guests</option><option>3 Guests</option><option>4 Guests</option><option>5+ Guests</option></select></label>
          </div>
          <a className="button button-gold" href={bookingHref}>Enquire about your stay <ArrowUpRight size={16}/></a>
          <p className="booking-note">A member of our team will personally assist with your enquiry.</p>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-main"><a className="wordmark footer-logo" href="#home">LUXORA<span>PRIVATE RETREATS</span></a><p>Find your somewhere.</p><a className="footer-mail" href="mailto:stay@luxora.example">stay@luxora.example <ArrowUpRight size={15}/></a></div>
        <div className="footer-bottom"><span>© 2025 LUXORA PRIVATE RETREATS</span><span>MADE FOR THE MOMENTS THAT MATTER</span><div><a href="#home" aria-label="Instagram"><Instagram size={16}/></a><a href="#home" aria-label="Facebook"><Facebook size={16}/></a></div><a href="#home">BACK TO TOP ↑</a></div>
      </footer>

      <AnimatePresence>
        {tourOpen && <motion.div className="tour-modal" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setTourOpen(false)}><button className="modal-close" onClick={() => setTourOpen(false)} aria-label="Close"><X/></button><div className="tour-content" onClick={e => e.stopPropagation()}><div className="tour-placeholder" style={{ backgroundImage: `linear-gradient(rgba(7,14,11,.45),rgba(7,14,11,.65)),url(${images.hero})` }}><span className="tour-play"><Play fill="currentColor"/></span><p>THE LUXORA FILM</p><small>YOUR PRIVATE WORLD AWAITS</small></div><p className="tour-disclaimer">Cinematic film experience coming soon.</p></div></motion.div>}
      </AnimatePresence>
    </main>
  )
}

export default App