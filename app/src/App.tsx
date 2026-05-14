import type { JSX } from 'react'
import './styles.css'
import InfoCard from './InfoCard'
import ProjectItem from './ProjectItem'

function App(): JSX.Element {
  return (
    <div className="site">
      <div className="bg-image-placeholder"></div>
      <div className="noise"></div>
      <div className="vignette"></div>

      <header className="nav">
        <div className="nav-inner">
          <a href="#" className="logo">VD</a>
          <nav className="menu">
            <a className="active" href="#">Головна</a>
            <a href="#projects">Проєкти</a>
            <a href="#about">Про мене</a>
            <a href="#articles">Статті</a>
            <a href="#contacts">Контакти</a>
          </nav>
          <a href="#" className="lang">UA</a>
        </div>
      </header>

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

      <section className="sections" id="projects">
        <div className="project-row">
          <ProjectItem id="project-nivora" title="ONE PROJECT" description="Великий акцент на один головний проєкт або флагманську систему." />
          <ProjectItem id="project-deepviz" title="PROJECT TWO" description="Другий проєкт у спокійнішій горизонтальній сцені." />
          <ProjectItem id="project-codeboard" title="PROJECT THREE" description="Третій проєкт з власним прев'ю і коротким описом." />
        </div>

        <InfoCard
          tag="Інсайт"
          title="Методика та фокус"
          description="Короткий щільний блок з ключовими фактами: проблема, підхід, результат. Повторюваний формат для кожної серії."
        />

        <div className="project-row">
          <ProjectItem title="MODULE A" description="Малий проєкт або експеримент." />
          <ProjectItem title="MODULE B" description="Ще один проєкт у тій самій атмосфері." />
          <ProjectItem title="MODULE C" description="Третій елемент для щільнішої композиції." />
        </div>

        <InfoCard
          tag="Дані"
          title="Що саме тут важливо"
          description="Інформативний модуль із стислим поясненням: ціль, формат, ключовий ефект для продукту."
        />
      </section>

      <footer className="footer" id="contacts">
        <span>© Vitaliy Dyachuk</span>
        <span>Github — Linkedin — Telegram</span>
      </footer>
    </div>
  )
}

export default App
