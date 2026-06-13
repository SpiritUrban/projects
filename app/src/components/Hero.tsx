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
        <p>Розробка для мене — це поєднання логіки, естетики та системного мислення.</p>
        <br />
        <p>Я дивлюся на продукт одночасно очима розробника, дизайнера та користувача.</p>
        <br />
        <p>Кожен проєкт — це не набір сторінок, а цифровий простір зі своєю структурою, логікою та характером.</p>
      </div>
    </main>
  )
}

export default Hero
