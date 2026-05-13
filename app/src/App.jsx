import './styles.css'

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
          <a className="project" id="project-nivora" href="#">
            <img src="/img/laptop.png" alt="Laptop" className="laptop" />
            <div className="plate"><h3>ONE PROJECT</h3><p>Великий акцент на один головний проект або флагманську систему.</p><span className="more">Переглянути →</span></div>
          </a>
          <a className="project" id="project-deepviz" href="#">
            <img src="/img/laptop.png" alt="Laptop" className="laptop" />
            <div className="plate"><h3>PROJECT TWO</h3><p>Другий проект у спокійнішій горизонтальній сцені.</p><span className="more">Переглянути →</span></div>
          </a>
          <a className="project" id="project-codeboard" href="#">
            <img src="/img/laptop.png" alt="Laptop" className="laptop" />
            <div className="plate"><h3>PROJECT THREE</h3><p>Третій проект з власним прев’ю і коротким описом.</p><span className="more">Переглянути →</span></div>
          </a>
        </div>

        <div className="info-card">
          <span className="info-tag">Інсайт</span>
          <h3>Методика та фокус</h3>
          <p>Короткий щільний блок з ключовими фактами: проблема, підхід, результат. Повторюваний формат для кожної серії.</p>
        </div>

        <div className="project-row">
          <a className="project" href="#">
            <img src="/img/laptop.png" alt="Laptop" className="laptop" />
            <div className="plate"><h3>MODULE A</h3><p>Малий проект або експеримент.</p><span className="more">Переглянути →</span></div>
          </a>
          <a className="project" href="#">
            <img src="/img/laptop.png" alt="Laptop" className="laptop" />
            <div className="plate"><h3>MODULE B</h3><p>Ще один проект у тій самій атмосфері.</p><span className="more">Переглянути →</span></div>
          </a>
          <a className="project" href="#">
            <img src="/img/laptop.png" alt="Laptop" className="laptop" />
            <div className="plate"><h3>MODULE C</h3><p>Третій елемент для щільнішої композиції.</p><span className="more">Переглянути →</span></div>
          </a>
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
