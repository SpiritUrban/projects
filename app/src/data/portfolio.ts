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
  previewImage?: string
  details?: ProjectDetails
}

export const navigationItems = [
  { label: 'Головна', href: '#', active: true },
  { label: 'Проєкти', href: '#projects' },
  { label: 'Про мене', href: '#about' },
  { label: 'Статті', href: '#articles' },
  { label: 'Контакти', href: '#contacts' },
]

export const featuredProjects: PortfolioProject[] = [
  {
    id: 'project-nivora',
    title: 'KEYWAVE',
    description: 'Редактор вебанімацій, де сцена зберігається в JSON, а SVG використовується лише для відображення.',
    href: 'https://spiriturban.github.io/kw/',
    previewImage: '/img/products/keywave.png',
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
    title: 'PROJECT TWO',
    description: 'Другий проєкт у спокійнішій горизонтальній сцені.',
  },
  {
    id: 'project-codeboard',
    title: 'PROJECT THREE',
    description: "Третій проєкт з власним прев'ю і коротким описом.",
  },
]

export const moduleProjects: PortfolioProject[] = [
  {
    title: 'MODULE A',
    description: 'Малий проєкт або експеримент.',
  },
  {
    title: 'MODULE B',
    description: 'Ще один проєкт у тій самій атмосфері.',
  },
  {
    title: 'MODULE C',
    description: 'Третій елемент для щільнішої композиції.',
  },
]

export const infoCards = [
  {
    tag: 'Інсайт',
    title: 'Методика та фокус',
    description: 'Короткий щільний блок з ключовими фактами: проблема, підхід, результат. Повторюваний формат для кожної серії.',
  },
  {
    tag: 'Дані',
    title: 'Що саме тут важливо',
    description: 'Інформативний модуль із стислим поясненням: ціль, формат, ключовий ефект для продукту.',
  },
]
