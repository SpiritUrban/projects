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
    description: 'Visual time composition for the web. JSON-driven editor and player for SVG motion scenes.',
    href: 'https://spiriturban.github.io/kw/',
    previewImage: '/img/products/keywave.png',
    details: {
      tagline: 'Visual time composition for the web.',
      overview: 'KEYWAVE — це lightweight JSON-driven редактор motion-сцен. Він дозволяє створювати, ключувати й відтворювати SVG-анімації як portable scene data без залежності від конкретної платформи.',
      points: [
        'Editor і player читають одні й ті самі JSON scene data.',
        'Підтримує move, rotate, scale, keyframes, opacity, visibility і прості morph-контроли для path assets.',
        'Може експортувати demo HTML або повний пакет HTML + JSON + SVG + optional player.',
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
