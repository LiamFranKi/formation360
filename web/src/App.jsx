import { useState } from 'react'
import { translations } from './translations'
import { SocialIcons } from './SocialIcons'
import './App.css'

function App() {
  const [lang, setLang] = useState(() => {
    const saved = localStorage.getItem('formation360-lang')
    return saved === 'en' ? 'en' : 'es'
  })
  const [menuOpen, setMenuOpen] = useState(false)
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
            <img src="/logo-formation360.png" alt="Formation 360" />
          </a>
          <ul className={`nav-links ${menuOpen ? 'nav-open' : ''}`}>
            <li><a href="#filosofia" onClick={() => setMenuOpen(false)}>{t.nav.filosofia}</a></li>
            <li><a href="#programa" onClick={() => setMenuOpen(false)}>{t.nav.programa}</a></li>
            <li><a href="#servicios" onClick={() => setMenuOpen(false)}>{t.nav.servicios}</a></li>
            <li><a href="#staff" onClick={() => setMenuOpen(false)}>{t.nav.staff}</a></li>
            <li><a href="#coaching" onClick={() => setMenuOpen(false)}>{t.nav.coaching}</a></li>
            <li><a href="#contacto" className="btn-nav" onClick={() => setMenuOpen(false)}>{t.nav.cta}</a></li>
            <li>
              <button type="button" className="lang-switch" onClick={switchLang} aria-label="Cambiar idioma">
                {lang === 'es' ? 'EN' : 'ES'}
              </button>
            </li>
          </ul>
          <div className="header-actions">
            <SocialIcons variant="header" />
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
            <img src="/logo-formation360.png" alt="Formation 360" className="hero-logo logo-circle" />
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
            <div className="sesion-item"><span className="sesion-time">5 min</span><div className="sesion-content"><h4>{t.programa.s1.title}</h4><p>{t.programa.s1.text}</p></div></div>
            <div className="sesion-item"><span className="sesion-time">15 min</span><div className="sesion-content"><h4>{t.programa.s2.title}</h4><p>{t.programa.s2.text}</p></div></div>
            <div className="sesion-item"><span className="sesion-time">20 min</span><div className="sesion-content"><h4>{t.programa.s3.title}</h4><p>{t.programa.s3.text}</p></div></div>
            <div className="sesion-item"><span className="sesion-time">10 min</span><div className="sesion-content"><h4>{t.programa.s4.title}</h4><p>{t.programa.s4.text}</p></div></div>
            <div className="sesion-item"><span className="sesion-time">5 min</span><div className="sesion-content"><h4>{t.programa.s5.title}</h4><p>{t.programa.s5.text}</p></div></div>
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
          <ul className="resultados-list">
            {t.resultados.items.map((item, i) => (
              <li key={i}>✓ {item}</li>
            ))}
          </ul>
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

      {/* FOOTER */}
      <footer className="footer">
        <div className="container">
          <div className="footer-logo-wrap">
            <img src="/logo-formation360.png" alt="Formation 360" className="footer-logo logo-circle" />
          </div>
          <SocialIcons variant="footer" />
          <p className="footer-tagline">{t.footer.tagline}</p>
          <p className="footer-copy">{t.footer.copy}</p>
        </div>
      </footer>
    </div>
  )
}

export default App
