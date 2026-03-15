import { useState, useEffect } from 'react'
import { translations } from './translations'
import { SocialIcons } from './SocialIcons'
import './App.css'

const LOGO = import.meta.env.BASE_URL + 'logo-formation360.png'

const ADDRESS = '3327 Harmony Church Rd, Gainesville, GA 30507'
const MAP_QUERY = encodeURIComponent(ADDRESS)
const GOOGLE_MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${MAP_QUERY}`
const GOOGLE_MAPS_EMBED = `https://www.google.com/maps?q=${MAP_QUERY}&output=embed`
const DIRECTIONS_BASE = 'https://www.google.com/maps/dir/'
const directionsFrom = {
  north: `${DIRECTIONS_BASE}${encodeURIComponent('Dahlonega, GA')}/${MAP_QUERY}`,
  south: `${DIRECTIONS_BASE}${encodeURIComponent('Atlanta, GA')}/${MAP_QUERY}`,
  east: `${DIRECTIONS_BASE}${encodeURIComponent('Athens, GA')}/${MAP_QUERY}`,
  west: `${DIRECTIONS_BASE}${encodeURIComponent('Rome, GA')}/${MAP_QUERY}`,
}

const WA_NUMBER = '16783815907'
const WA_MESSAGE = 'Hola, me interesa Formation 360 Soccer & Life Program.'
const WHATSAPP_URL = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_MESSAGE)}`

const IconSun = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="5" />
    <line x1="12" y1="1" x2="12" y2="3" />
    <line x1="12" y1="21" x2="12" y2="23" />
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
    <line x1="1" y1="12" x2="3" y2="12" />
    <line x1="21" y1="12" x2="23" y2="12" />
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
  </svg>
)
const IconMoon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
)

function App() {
  const [lang, setLang] = useState(() => {
    const saved = localStorage.getItem('formation360-lang')
    return saved === 'en' ? 'en' : 'es'
  })
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('formation360-theme')
    return saved === 'dark' ? 'dark' : 'light'
  })
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])
  const [formData, setFormData] = useState({
    nombrePadre: '',
    nombreJugador: '',
    edadJugador: '',
    telefono: '',
    correo: '',
    ciudad: '',
    interes: 'clase-prueba'
  })

  const t = translations[lang]

  const switchLang = () => {
    const next = lang === 'es' ? 'en' : 'es'
    setLang(next)
    localStorage.setItem('formation360-lang', next)
  }

  const switchTheme = () => {
    const next = theme === 'light' ? 'dark' : 'light'
    setTheme(next)
    localStorage.setItem('formation360-theme', next)
    document.documentElement.setAttribute('data-theme', next)
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(t.alert)
  }

  return (
    <div className="landing">
      {/* HEADER */}
      <header className="header">
        <nav className="nav">
          <a href="#" className="logo logo-circle">
            <img src={LOGO} alt="Formation 360" />
          </a>
          <ul className={`nav-links ${menuOpen ? 'nav-open' : ''}`}>
            <li><a href="#filosofia" onClick={() => setMenuOpen(false)}>{t.nav.filosofia}</a></li>
            <li><a href="#programa" onClick={() => setMenuOpen(false)}>{t.nav.programa}</a></li>
            <li><a href="#servicios" onClick={() => setMenuOpen(false)}>{t.nav.servicios}</a></li>
            <li><a href="#staff" onClick={() => setMenuOpen(false)}>{t.nav.staff}</a></li>
            <li><a href="#coaching" onClick={() => setMenuOpen(false)}>{t.nav.coaching}</a></li>
            <li><a href="#ubicacion" onClick={() => setMenuOpen(false)}>{t.nav.ubicacion}</a></li>
            <li><a href="#contacto" className="btn-nav" onClick={() => setMenuOpen(false)}>{t.nav.cta}</a></li>
            <li>
              <button type="button" className="theme-toggle" onClick={switchTheme} aria-label={theme === 'light' ? t.nav.themeDark : t.nav.themeLight} title={theme === 'light' ? t.nav.themeDark : t.nav.themeLight}>
                {theme === 'light' ? <IconMoon /> : <IconSun />}
              </button>
            </li>
            <li>
              <button type="button" className="lang-switch" onClick={switchLang} aria-label="Cambiar idioma">
                {lang === 'es' ? 'EN' : 'ES'}
              </button>
            </li>
          </ul>
          <div className="header-actions">
            <SocialIcons variant="header" />
            <button type="button" className="theme-toggle theme-toggle-mobile" onClick={switchTheme} aria-label={theme === 'light' ? t.nav.themeDark : t.nav.themeLight}>
              {theme === 'light' ? <IconMoon /> : <IconSun />}
            </button>
            <button type="button" className="lang-switch lang-switch-mobile" onClick={switchLang} aria-label="Cambiar idioma">
              {lang === 'es' ? 'EN' : 'ES'}
            </button>
            <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menú">☰</button>
          </div>
        </nav>
      </header>

      {/* HERO - padding-top evita overlap con header fijo */}
      <section className="hero" id="hero">
        <div className="hero-bg">
          <div className="hero-gradient"></div>
          <div className="hero-pattern"></div>
          <div className="hero-glow"></div>
        </div>
        <div className="hero-content">
          <div className="hero-logo-wrap">
            <img src={LOGO} alt="Formation 360" className="hero-logo logo-circle" />
          </div>
          <p className="hero-subtitle">{t.hero.subtitle}</p>
          <h1 className="hero-title">{t.hero.title}</h1>
          <p className="hero-desc">{t.hero.desc}</p>
          <div className="hero-cta">
            <a href="#contacto" className="btn btn-primary">{t.hero.btnPrimary}</a>
            <a href="#filosofia" className="btn btn-secondary">{t.hero.btnSecondary}</a>
          </div>
        </div>
        <div className="hero-scroll">
          <span>{t.hero.scroll}</span>
          <div className="scroll-indicator"></div>
        </div>
      </section>

      {/* FILOSOFÍA */}
      <section id="filosofia" className="section filosofia">
        <div className="container">
          <span className="section-badge">{t.filosofia.badge}</span>
          <h2 className="section-title">{t.filosofia.title}</h2>
          <p className="section-subtitle">{t.filosofia.subtitle}</p>
          <div className="pilares-grid">
            <article className="pilar-card">
              <div className="pilar-icon">1</div>
              <h3>{t.filosofia.p1.title}</h3>
              <p>{t.filosofia.p1.text}</p>
            </article>
            <article className="pilar-card pilar-featured">
              <div className="pilar-icon">2</div>
              <h3>{t.filosofia.p2.title}</h3>
              <p>{t.filosofia.p2.text}</p>
            </article>
            <article className="pilar-card">
              <div className="pilar-icon">3</div>
              <h3>{t.filosofia.p3.title}</h3>
              <p>{t.filosofia.p3.text}</p>
            </article>
          </div>
        </div>
      </section>

      {/* PROGRAMA */}
      <section id="programa" className="section programa">
        <div className="container">
          <span className="section-badge">{t.programa.badge}</span>
          <h2 className="section-title">{t.programa.title}</h2>
          <p className="section-subtitle">{t.programa.subtitle}</p>
          <div className="sesion-timeline">
            <div className="sesion-item"><span className="sesion-time"><span className="sesion-time-num">5</span><span className="sesion-time-label">min</span></span><h4 className="sesion-title">{t.programa.s1.title}</h4></div>
            <div className="sesion-item"><span className="sesion-time"><span className="sesion-time-num">15</span><span className="sesion-time-label">min</span></span><h4 className="sesion-title">{t.programa.s2.title}</h4></div>
            <div className="sesion-item"><span className="sesion-time"><span className="sesion-time-num">20</span><span className="sesion-time-label">min</span></span><h4 className="sesion-title">{t.programa.s3.title}</h4></div>
            <div className="sesion-item"><span className="sesion-time"><span className="sesion-time-num">10</span><span className="sesion-time-label">min</span></span><h4 className="sesion-title">{t.programa.s4.title}</h4></div>
            <div className="sesion-item"><span className="sesion-time"><span className="sesion-time-num">5</span><span className="sesion-time-label">min</span></span><h4 className="sesion-title">{t.programa.s5.title}</h4></div>
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section id="servicios" className="section servicios">
        <div className="container">
          <span className="section-badge">{t.servicios.badge}</span>
          <h2 className="section-title">{t.servicios.title}</h2>
          <div className="servicios-grid">
            <article className="servicio-card"><div className="servicio-icon">⚽</div><h3>{t.servicios.s1.title}</h3><p>{t.servicios.s1.text}</p></article>
            <article className="servicio-card"><div className="servicio-icon">🧠</div><h3>{t.servicios.s2.title}</h3><p>{t.servicios.s2.text}</p></article>
            <article className="servicio-card"><div className="servicio-icon">💎</div><h3>{t.servicios.s3.title}</h3><p>{t.servicios.s3.text}</p></article>
            <article className="servicio-card"><div className="servicio-icon">📊</div><h3>{t.servicios.s4.title}</h3><p>{t.servicios.s4.text}</p></article>
          </div>
        </div>
      </section>

      {/* STAFF */}
      <section id="staff" className="section staff">
        <div className="container">
          <span className="section-badge">{t.staff.badge}</span>
          <h2 className="section-title">{t.staff.title}</h2>
          <p className="section-subtitle">{t.staff.subtitle}</p>
          <div className="staff-grid">
            <article className="staff-card"><div className="staff-avatar">👨‍🏫</div><h3>{t.staff.s1.title}</h3><p>{t.staff.s1.text}</p></article>
            <article className="staff-card"><div className="staff-avatar">🎯</div><h3>{t.staff.s2.title}</h3><p>{t.staff.s2.text}</p></article>
            <article className="staff-card"><div className="staff-avatar">⚡</div><h3>{t.staff.s3.title}</h3><p>{t.staff.s3.text}</p></article>
          </div>
        </div>
      </section>

      {/* REPRESENTACIÓN */}
      <section className="section representacion">
        <div className="container">
          <span className="section-badge">{t.representacion.badge}</span>
          <h2 className="section-title">{t.representacion.title}</h2>
          <p className="section-subtitle">{t.representacion.subtitle}</p>
          <div className="rep-content">
            <div className="rep-card"><h3>{t.representacion.r1.title}</h3><p>{t.representacion.r1.text}</p></div>
            <div className="rep-card"><h3>{t.representacion.r2.title}</h3><p>{t.representacion.r2.text}</p></div>
          </div>
        </div>
      </section>

      {/* COACHING */}
      <section id="coaching" className="section coaching">
        <div className="container">
          <span className="section-badge">{t.coaching.badge}</span>
          <h2 className="section-title">{t.coaching.title}</h2>
          <div className="coaching-grid">
            <article className="coaching-card"><div className="coaching-icon">👨‍👩‍👧</div><h3>{t.coaching.c1.title}</h3><p>{t.coaching.c1.text}</p></article>
            <article className="coaching-card"><div className="coaching-icon">🎓</div><h3>{t.coaching.c2.title}</h3><p>{t.coaching.c2.text}</p></article>
          </div>
        </div>
      </section>

      {/* RESULTADOS */}
      <section className="section resultados">
        <div className="container">
          <span className="section-badge">{t.resultados.badge}</span>
          <h2 className="section-title">{t.resultados.title}</h2>
          <div className="resultados-grid">
            {t.resultados.benefits.map((benefit, i) => (
              <article key={i} className="resultado-card">
                <span className="resultado-check">✓</span>
                <h3 className="resultado-card-title">{benefit.title}</h3>
                <p className="resultado-card-desc">{benefit.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="section contacto">
        <div className="container">
          <div className="contacto-content">
            <div className="contacto-info">
              <h2 className="section-title">{t.contacto.title}</h2>
              <p>{t.contacto.intro}</p>
              <ul className="contacto-list">
                {t.contacto.list.map((item, i) => <li key={i}>✓ {item}</li>)}
              </ul>
              <div className="contacto-follow">
                <p className="contacto-follow-text">{t.contacto.followUs}</p>
                <SocialIcons variant="contacto" />
                <p className="contacto-follow-networks">{t.contacto.followUsNetworks}</p>
                <p className="contacto-bring-friend">{t.contacto.bringFriend}</p>
              </div>
              <p className="familia-tag">{t.contacto.familia}</p>
            </div>
            <form onSubmit={handleSubmit} className="formulario">
              <h3>{t.contacto.formTitle}</h3>
              <input type="text" name="nombrePadre" placeholder={t.contacto.placeholders.parent} value={formData.nombrePadre} onChange={handleChange} required />
              <input type="text" name="nombreJugador" placeholder={t.contacto.placeholders.player} value={formData.nombreJugador} onChange={handleChange} required />
              <input type="text" name="edadJugador" placeholder={t.contacto.placeholders.age} value={formData.edadJugador} onChange={handleChange} required />
              <input type="tel" name="telefono" placeholder={t.contacto.placeholders.phone} value={formData.telefono} onChange={handleChange} required />
              <input type="email" name="correo" placeholder={t.contacto.placeholders.email} value={formData.correo} onChange={handleChange} required />
              <input type="text" name="ciudad" placeholder={t.contacto.placeholders.city} value={formData.ciudad} onChange={handleChange} />
              <select name="interes" value={formData.interes} onChange={handleChange}>
                <option value="clase-prueba">{t.contacto.options.trial}</option>
                <option value="mas-info">{t.contacto.options.info}</option>
                <option value="no-ahora">{t.contacto.options.later}</option>
              </select>
              <button type="submit" className="btn btn-primary btn-full">{t.contacto.submit}</button>
              <p className="form-footer">{t.contacto.footer}</p>
            </form>
          </div>
        </div>
      </section>

      {/* UBICACIÓN / MAPA Y CÓMO LLEGAR */}
      <section id="ubicacion" className="section ubicacion">
        <div className="container">
          <span className="section-badge">{t.ubicacion.badge}</span>
          <h2 className="section-title">{t.ubicacion.title}</h2>
          <p className="section-subtitle ubicacion-subtitle">{t.ubicacion.subtitle}</p>
          <div className="ubicacion-address-block">
            <span className="ubicacion-pin" aria-hidden="true">📍</span>
            <address className="ubicacion-address">{t.ubicacion.address}</address>
          </div>
          <a href={GOOGLE_MAPS_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-map">
            {t.ubicacion.viewOnMap}
          </a>
          <div className="ubicacion-map-wrap">
            <iframe
              title="Formation 360 - Ubicación"
              src={GOOGLE_MAPS_EMBED}
              width="100%"
              height="320"
              style={{ border: 0, borderRadius: '12px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="ubicacion-directions">
            <h3 className="ubicacion-directions-title">{t.ubicacion.getDirections}</h3>
            <p className="ubicacion-directions-desc">{t.ubicacion.directionsDesc}</p>
            <div className="ubicacion-routes">
              <a href={directionsFrom.north} target="_blank" rel="noopener noreferrer" className="route-btn">
                <span className="route-arrow">↑</span> {t.ubicacion.fromNorth}
              </a>
              <a href={directionsFrom.south} target="_blank" rel="noopener noreferrer" className="route-btn">
                <span className="route-arrow">↓</span> {t.ubicacion.fromSouth}
              </a>
              <a href={directionsFrom.east} target="_blank" rel="noopener noreferrer" className="route-btn">
                <span className="route-arrow">→</span> {t.ubicacion.fromEast}
              </a>
              <a href={directionsFrom.west} target="_blank" rel="noopener noreferrer" className="route-btn">
                <span className="route-arrow">←</span> {t.ubicacion.fromWest}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container">
          <div className="footer-logo-wrap">
            <img src={LOGO} alt="Formation 360" className="footer-logo logo-circle" />
          </div>
          <SocialIcons variant="footer" />
          <div className="footer-address">
            <span className="footer-pin" aria-hidden="true">📍</span>
            <address>{t.footer.address}</address>
          </div>
          <p className="footer-tagline">{t.footer.tagline}</p>
          <p className="footer-copy">{t.footer.copy}</p>
        </div>
      </footer>

      {/* Botón flotante WhatsApp */}
      <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="whatsapp-float" aria-label="Escribir por WhatsApp">
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
    </div>
  )
}

export default App
