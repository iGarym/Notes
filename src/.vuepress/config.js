module.exports = {
  title: 'Notes',
  description: '距离 Markdown 工程师又近了一步呢',
  base: '/notes/',
  port: 1234,
  dest: 'dist',
  head: [
    ['link', { rel: 'icon', href: `/logo.png` }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['link', { rel: 'shortcut icon', href: '/logo.png', type: 'image/x-icon' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    [
      'meta',
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }
    ]
  ],
  serviceWorker: true,
  evergreen: true, // 仅兼容 evergreen 浏览器
  configureWebpack: {
    resolve: {
      alias: {
        '@': './'
      }
    }
  },
  markdown: {
    lineNumbers: true
    // toc: {
    //   includeLevel: [2, 3]
    // },
  },
  lastUpdated: '最后更新：',
  themeConfig: {
    repo: 'iGarym/notes',
    docsDir: 'src',
    editLinks: true,
    editLinkText: '发现了一个牛逼的 bug，帮忙改一下吧！',
    nav: [
      { text: '简介', link: '/introduction/' },
      { text: 'PHP', link: '/php/' }
    ]
  }
};
