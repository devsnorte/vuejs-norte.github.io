module.exports = {
  title: 'Vue.js Norte',
  description: 'Comunidade de desenvolvedores Vue.js do Norte do Brasil',
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
    // Assumes GitHub. Can also be a full GitLab url.
    repo: 'vuejs-norte/vuejs-norte.github.io',
    // Customising the header label
    repoLabel: 'Github',

    // Optional options for generating "Edit this page" link

    // if your docs are in a different repo from your main project:
    docsRepo: 'vuejs-norte/vuejs-norte.github.io',
    // if your docs are not at the root of the repo:
    docsDir: 'docs',
    // if your docs are in a specific branch (defaults to 'master'):
    docsBranch: 'dev',
    // defaults to false, set to true to enable
    editLinks: true,
    // custom text for edit link. Defaults to "Edit this page"
    editLinkText: 'Ajude a atualizar essa página!'
  }
}
