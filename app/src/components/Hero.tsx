import type { JSX } from 'react'

function Hero(): JSX.Element {
  return (
    <main className="hero">
      <section className="intro">
        <div className="eyebrow"><span className="glyph" /> Digital creator</div>
        <h1>Віталій<br />Дячук</h1>
        <div className="subtitle">Розробка. Дизайн. Системи.</div>
        <p className="lead">Я створюю цифрові продукти, що поєднують технології, естетику, практичність і живу архітектуру мислення.</p>
        <a className="cta" href="#projects"><span>Переглянути проєкти</span><span>→</span></a>
      </section>

      <div className="quote-card">
        <p>Це не просто портфоліо розробника — це цифрова майстерня, яка працює як інтерактивний простір для кожного артефакту.</p>
      </div>
    </main>
  )
}

export default Hero
