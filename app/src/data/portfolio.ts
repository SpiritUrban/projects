export interface ProjectDetails {
  tagline?: string
  overview: string
  points: string[]
}

export interface PortfolioProject {
  id?: string
  title: string
  description: string
  href?: string
  videoUrl?: string
  previewImage?: string
  details?: ProjectDetails
}

const productImage = (fileName: string): string => `img/products/${fileName}`

export const navigationItems = [
  { label: 'Головна', href: '#', active: true },
  { label: 'Проєкти', href: '#projects' },
  { label: 'Про мене', href: 'https://spiriturban.github.io/' },
  // { label: 'Статті', href: '#articles' },
  { label: 'Контакти', href: 'https://spiriturban.github.io/#mentoring' },
]

export const featuredProjects: PortfolioProject[] = [
  {
    id: 'project-mytransfer',
    title: 'MY TRANSFER',
    description: 'Багатомовна платформа індивідуальних трансферів між Польщею, Україною та країнами Європи з SEO-архітектурою, інтеграцією Google Reviews і масштабованою системою маршрутів.',
    href: 'https://my-transfer.com.ua',
    previewImage: productImage('my-transfer.png'),
    details: {
      tagline: 'SEO-first платформа міжнародних трансферів.',
      overview: 'MY TRANSFER — це комерційний сервіс індивідуальних пасажирських перевезень між Польщею, Україною та Європою. Я відповідав за архітектуру сайту, SEO-структуру, багатомовність, інтеграцію зовнішніх сервісів, автоматизацію контенту та розвиток платформи як інструменту залучення клієнтів.',
      points: [
        'Спроєктував SEO-архітектуру для сотень маршрутів і тисяч локалізованих сторінок українською, польською, англійською, литовською та російською мовами.',
        'Реалізував інтеграцію Google Reviews через Places API з власною системою кешування, логуванням запитів і багатомовною підтримкою відгуків.',
        'Оптимізував sitemap, robots.txt, Schema.org, Open Graph, breadcrumbs і FAQ-розмітку для покращення індексації та органічного трафіку.',
        'Створив масштабовану систему генерації маршрутів для трансферів між містами, аеропортами та прикордонними переходами Польщі й Європи.',
        'Виконав повний цикл робіт: розробка, деплой, SEO, аналітика, інтеграції, підтримка production-середовища та розвиток функціоналу на основі бізнес-потреб клієнта.',
      ],
    },
  },
  {
    id: 'project-atomcode',
    title: 'ATOMCODE',
    description: 'Освітня платформа для вивчення програмування через атомарні уроки, інтерактивні матеріали та практичні проєкти.',
    href: 'https://spiriturban.github.io/AtomCode/uk/js-atoms/if/',
    previewImage: productImage('atomcode.png'),
    details: {
      tagline: 'Програмування маленькими зрозумілими кроками.',
      overview: 'ATOMCODE — це авторська освітня платформа для навчання програмуванню через короткі атомарні уроки. Проєкт поєднує навчальні курси, візуальні матеріали, практичні завдання та власну методику подачі знань, яка допомагає новачкам рухатися від базових понять до створення реальних вебзастосунків.',
      points: [
        'Розробив структуру навчання на основі атомарних уроків, де кожна тема пояснює лише одну концепцію без перевантаження інформацією.',
        'Створив систему курсів із JavaScript, вебтехнологій та фундаментальних знань програміста з акцентом на практичне застосування.',
        'Автоматизував генерацію навчального контенту, ілюстрацій, прикладів коду та допоміжних матеріалів для масштабування платформи.',
        'Поєднав роль розробника, ментора та автора контенту: від архітектури платформи до створення навчальної методології та матеріалів.',
        'Платформа використовується для індивідуального навчання, менторства та підготовки початківців до роботи з сучасним JavaScript-стеком.',
      ],
    },
  },
  {
    id: 'project-nivora',
    title: 'KEYWAVE',
    description: 'Редактор вебанімацій, де сцена зберігається в JSON, а SVG використовується лише для відображення.',
    href: 'https://spiriturban.github.io/kw/',
    videoUrl: 'https://www.youtube.com/watch?v=A48MZ41ofOA&t=1s',
    previewImage: productImage('keywave.png'),
    details: {
      tagline: 'Візуальна композиція часу для web.',
      overview: 'KEYWAVE — це легкий редактор motion-сцен для web. У ньому можна рухати, обертати, масштабувати й ключувати SVG-елементи, а результат зберігається як JSON-сцена, яку потім відтворює player.',
      points: [
        'JSON є єдиним джерелом правди: editor і player працюють з одними й тими самими scene data.',
        'Підтримує move, rotate, scale, keyframes, opacity, visibility і базові morph-контроли для path assets.',
        'Експортує demo HTML або повний пакет: HTML, JSON, SVG і optional player.',
      ],
    },
  },
  {
    id: 'project-deepviz',
    title: 'EXPERIENCE',
    description: 'Сайт-таймлайн про мій досвід, проєкти, технології та пропорційний рівень навичок.',
    href: 'https://spiriturban.github.io/experience/',
    videoUrl: 'https://www.youtube.com/watch?v=YOyV9mBAow0',
    previewImage: productImage('experience.png'),
    details: {
      tagline: 'Таймлайн досвіду, проєктів і технологій.',
      overview: 'EXPERIENCE — це персональний сайт, який структурує мій досвід через таймлайн, проєкти і зручну навігацію. Він допомагає швидко зрозуміти, з якими технологіями я працював, у яких проєктах вони застосовані і як між собою співвідносяться мої навички.',
      points: [
        'Показує досвід у форматі таймлайну, щоб було видно розвиток у часі.',
        'Пов’язує кожен проєкт із технологіями, на яких він був зроблений.',
        'Візуалізує рівні скілів, їх пропорційне співвідношення і кількість років досвіду по кожному напряму.',
      ],
    },
  },
  {
    id: 'project-codeboard',
    title: 'JS BEGINNERS 2026',
    description: 'Практичний курс JavaScript з нуля до перших інтерактивних веб-проєктів.',
    href: 'https://spiriturban.github.io/javascript-beginners-2026/#/',
    videoUrl: 'https://www.youtube.com/watch?v=GdA6I_qvqgs',
    previewImage: productImage('js-beginners-2026.png'),
    details: {
      tagline: 'JavaScript для першого впевненого старту.',
      overview: 'JS BEGINNERS 2026 — це практичний курс для новачків без досвіду програмування. Він веде від першого console.log() до DOM, подій, інтерактивних сторінок і фінального проєкту.',
      points: [
        'Пояснює JavaScript поступово: від базового синтаксису до роботи зі сторінкою.',
        'Дає практику з DOM, подіями та невеликими інтерактивними інтерфейсами.',
        'Готує базу, після якої можна впевненіше рухатися далі в React або Node.js.',
      ],
    },
  },
]

export const moduleProjects: PortfolioProject[] = [
  {
    title: 'NodeX DSL',
    description: 'JSON-first UI builder для швидкого прототипування інтерфейсів із детермінованим React/MUI export.',
    href: 'https://spiriturban.github.io/nodex-dsl/#/editor',
    videoUrl: 'https://www.youtube.com/watch?v=Mbny729KvDo&t=2s',
    previewImage: productImage('nodex-dsl.png'),
    details: {
      tagline: 'JSON-first UI builder для devs і AI.',
      overview: 'NodeX DSL — це редактор структури інтерфейсу з єдиним DSL-контрактом. Він показує дерево, властивості вузлів і live preview, а на виході дає чистий React/MUI код без непередбачуваних полів і ручного drag-and-drop хаосу.',
      points: [
        'Один readable JSON є джерелом правди для структури інтерфейсу.',
        'Жорсткий DSL-контракт прибирає розбіжності між описом, JSON і кодом.',
        'Експортує детермінований JSX, який легше валідовати, тестувати і генерувати через AI.',
      ],
    },
  },
  {
    id: 'project-feron',
    title: 'FERON',
    description: 'Комплексна система управління мережею готелів із PWA, голосовими сервісами та багатомовною підтримкою.',
    videoUrl: 'https://www.youtube.com/watch?v=yemSMoBZEPo',
    previewImage: productImage('feron.png'),
    details: {
      tagline: 'Angular і Node.js для готельної мережі та smart-сервісу.',
      overview: 'FERON — це масштабований MVP 2022 року для автоматизації мережі готелів. Система поєднує головний сервер і готелі-сателіти, PWA для відвідувачів, адмін-панелі для персоналу, інтеграції Google та IBM для перекладів, Text-to-Speech, Speech-to-Text і роботи з розумними колонками.',
      points: [
        'Рольова модель охоплює суперадміністратора, адміністратора готелю та відвідувача з окремими сценаріями для управління мережею, номерами, персоналом, гостями й запитами на обслуговування.',
        'Підтримує багатомовні чати, генерацію аудіо з тексту, голосове керування, QR-вхід, PWA-встановлення, маршрути через Google Maps і планувальник сервісних або рекламних повідомлень.',
        'Проєкт пройшов повний цикл розробки за п’ять кварталів: від архітектури бази даних, UI та CRUD-модулів до API-інтеграцій, автоматизованих тестових сценаріїв і фінальної PWA-оптимізації.',
      ],
    },
  },
  {
    id: 'project-crystal',
    title: 'CRYSTAL SYSTEM',
    description: 'Production booking platform для клінінгової компанії з Нью-Йорка та Нью-Джерсі з динамічним pricing engine.',
    previewImage: productImage('crystal.png'),
    details: {
      tagline: 'Angular, Node.js і бізнес-логіка бронювання в production.',
      overview: 'Crystal System Cleaning Corp — це production-платформа бронювання для клінінгової компанії, яка працювала приблизно чотири роки з реальними клієнтськими заявками та розрахунком вартості послуг. Проєкт поєднував Angular, Node.js, Angular Material і Heroku, а ключовою частиною була логіка бронювання та калькулятор ціни для residential, office і commercial service flows.',
      points: [
        'Розробляв frontend architecture, backend-частину, multi-step booking flow, адаптивний UI, customer lead funnel і підтримував production deployment на Heroku.',
        'Спроєктував dynamic pricing engine, який рахував вартість клінінгу на основі конфігурованих бізнес-параметрів, комерційних правил і типу сервісу.',
        'Платформа жила в production у 2021–2025 роках, тому включала довгострокову підтримку, багфікси, зміни бізнес-логіки, UX-покращення та адаптацію під реальні операційні потреби клієнта.',
      ],
    },
  },
  {
    title: 'WORK.UA PARSER',
    description: 'Локальна вебпрограма для збору, перегляду й упорядкування вакансій з Work.ua.',
    href: 'https://github.com/SpiritUrban/parser',
    previewImage: productImage('parser.png'),
    details: {
      tagline: 'Парсер вакансій із локальною базою та live-оновленням.',
      overview: 'WORK.UA PARSER — це локальний інструмент для пошуку вакансій за ключем, перевірки зарплат і роботи зі статусами. React-клієнт показує результати в браузері, Express/Socket.IO сервер парсить Work.ua, а SQLite зберігає вакансії, зарплатну історію, описи й позначки rejected або removed.',
      points: [
        'Парсить заданий діапазон сторінок, підтримує remote-фільтр і групує результати за пошуковим ключем.',
        'Довантажує повний опис вакансії тільки за потреби та дозволяє повторно перевіряти зарплату для окремої позиції або категорії.',
        'Допомагає відсівати нерелевантні, видалені й беззарплатні вакансії та експортує дані у JSONL для подальшого аналізу.',
      ],
    },
  },
  {
    title: 'CHEKNIS',
    description: 'Система м’якого самоспостереження без оцінювання, тиску й гейміфікації.',
    href: 'https://cheknis.vercel.app/',
    previewImage: productImage('cheknis.png'),
    details: {
      tagline: 'Швидка орієнтація у власному стані.',
      overview: 'CHEKNIS — це інструмент для короткого самочеку через чотири шкали: clarity, focus, presence і tension. Він визначає нейтральний StateId, дає мікроякір і допомагає зафіксувати стан без оцінки, поспіху або спроби втримати увагу користувача.',
      points: [
        'Чек займає близько 10 секунд і побудований навколо простих шкал 0–4.',
        'Логіка винесена в packages-first monorepo: домен, scoring, history, contracts, storage і UI-kit живуть окремими модулями.',
        'Продукт спирається на канон документації PRODUCT, DOMAIN, ARCHITECTURE і TOOLS, щоб рішення не суперечили голосу й межам системи.',
      ],
    },
  },
]

export const infoCards = [
  {
    tag: 'Підхід',
    title: 'Від ідеї до робочої системи',
    description: 'Я не зупиняюся на красивому інтерфейсі: продумую домен, сценарії, дані, архітектуру і те, як продукт буде розвиватися після першої версії.',
  },
  {
    tag: 'Фокус',
    title: 'Продукти з чіткою логікою',
    description: 'У моїх проєктах важливі не тільки технології, а й сенс: редактор анімацій, парсер вакансій, навчальний курс чи система самоспостереження мають зрозумілу задачу і завершений користувацький досвід.',
  },
]
