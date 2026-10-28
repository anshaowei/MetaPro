import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'en-US',
  title: 'MetaPro',
  description: 'MetaPro User Manual',
  base: '/MetaPro/',
  head: [['link', { rel: 'icon', href: '/MetaPro/images/logo.png' }]],
  lastUpdated: true,
  themeConfig: {
    logo: '/images/logo.png',
    nav: [{ text: 'UserManual', link: '/guide/user-manual' }],
    sidebar: [
      {
        text: 'Guide',
        items: [{ text: 'User Manual', link: '/guide/user-manual' }],
      },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/CSi-Studio/MetaPro' },
    ],
    search: { provider: 'local' },
  },
})
