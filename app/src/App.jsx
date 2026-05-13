import './styles.css'
import ProjectItem from './ProjectItem'

function App() {
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
            <a href="#projects">Проекти</a>
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
          <a className="cta" href="#projects"><span>Переглянути проекти</span><span>→</span></a>
        </section>

        <div className="quote-card">
          <p>Це не просто портфоліо розробника — це цифрова майстерня, яка працює як інтерактивний простір для кожного артефакту.</p>
        </div>
      </main>

      <section className="sections" id="projects">
        <div className="project-row">
          <ProjectItem id="project-nivora" title="ONE PROJECT" description="Великий акцент на один головний проект або флагманську систему." />
          <ProjectItem id="project-deepviz" title="PROJECT TWO" description="Другий проект у спокійнішій горизонтальній сцені." />
          <ProjectItem id="project-codeboard" title="PROJECT THREE" description="Третій проект з власним прев'ю і коротким описом." />
        </div>

        <div className="info-card">
          <span className="info-tag">Інсайт</span>
          <h3>Методика та фокус</h3>
          <p>Короткий щільний блок з ключовими фактами: проблема, підхід, результат. Повторюваний формат для кожної серії.</p>
        </div>

        <div className="project-row">
          <ProjectItem title="MODULE A" description="Малий проект або експеримент." />
          <ProjectItem title="MODULE B" description="Ще один проект у тій самій атмосфері." />
          <ProjectItem title="MODULE C" description="Третій елемент для щільнішої композиції." />
        </div>

        <div className="info-card">
          <span className="info-tag">Дані</span>
          <h3>Що саме тут важливо</h3>
          <p>Інформативний модуль із стислим поясненням: ціль, формат, ключовий ефект для продукту.</p>
        </div>
      </section>

      <footer className="footer" id="contacts">
        <span>© Vitaliy Dyachuk</span>
        <span>Github — Linkedin — Telegram</span>
      </footer>
    </div>
  )
}

export default App
