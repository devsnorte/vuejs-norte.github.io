module.exports = {
  title: 'Vue.js Norte',
  description: 'Comunidade de desenvolvedores Vue.js do Norte do Brasil',
  theme: 'yuu',
  themeConfig: {
    yuu: {
      defaultDarkTheme: true,
      disableThemeIgnore: true,
      colorThemes: [],
      defaultColorTheme: 'green',
		},
    logo: 'https://raw.githubusercontent.com/vuejs-norte/artworks/master/png/logo-256x256.png',
    nav: [
      { text: 'Início', link: '/' },
      { text: 'Comunidade', link: '/comunidade/' },
      { text: 'Utilidades', link: '/utilidades/' },
      { text: 'Links', link: '/links/' },
    ],
    sidebar: [
      ['/', 'Início'],
      ['/comunidade/', 'Comunidade'],
      ['/utilidades/', 'Utilidades'],
      ['/links/', 'Links'],
    ],
    docsDir: 'docs',
    docsBranch: 'dev',
    editLinks: true,
    sidebarDepth: 1,
    editLinkText: 'Ajude a atualizar essa página!'
  }
}
