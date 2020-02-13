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
    themeConfig: {
      logo: 'https://raw.githubusercontent.com/vuejs-norte/artworks/master/png/logo-256x256.png',
      nav: [
        { text: 'Início', link: '/' },
        { text: 'Comunidade', link: '/comunidade/' },
        { text: 'Links', link: '/links/' }
      ],
      sidebar: [
        ['/', 'Início'],
        ['/comunidade/', 'Comunidade'],
        ['/links/', 'Links']
      ],
      repo: 'vuejs-norte/vuejs-norte.github.io',
      repoLabel: 'Github',
      docsRepo: 'vuejs-norte/vuejs-norte.github.io',
      docsDir: 'docs',
      docsBranch: 'dev',
      editLinks: true,
      sidebarDepth: 1,
      editLinkText: 'Ajude a atualizar essa página!'
    }
  }
}
