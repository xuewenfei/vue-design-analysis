module.exports = {
  base: '/vue-design-analyis/',
  title: 'Vue技术内幕并技术揭秘',
  ga: 'UA-120533817-1',
  description: '逐行级别的 Vue 源码分析',
  head: [
    ['script', { async: '', src: 'http://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js' }],
    ['link', { rel: 'icon', href: '/logo.png' }]
  ],
  markdown: {
    toc: {
      includeLevel: [2, 3, 4, 5, 6]
    }
  },
  themeConfig: {
    repo: 'xuewenfei/vue-design-analysis',
    docsDir: 'docs',
    editLinks: true,
    editLinkText: '错别字纠正',
    sidebarDepth: 3,
    nav: [
      {
        text: '数据驱动',
        link: '/vue-analysis/data-driven/',
      },
      {
        text: '组件化',
        link: '/vue-analysis/components/',
      },
      {
        text: '深入响应式原理',
        link: '/vue-analysis/reactive/',
      },
      {
        text: '扩展',
        link: '/vue-analysis/extend/',
      },
      {
        text: '编译',
        link: '/vue-analysis/compile/',
      },
      {
        text: 'Vue技术内幕正文',
        link: '/vue-design/art/',
      },
      {
        text: '附录',
        link: '/vue-design/appendix/'
      },
      {
        text: '扩展阅读',
        link: '/vue-design/more/'
      },
      {
        text: '辅助工具',
        link: '/vue-design/tools/'
      },
      {
        text: '人之初',
        link: '/vue-design/donate/'
      },
      {
        text: '关于',
        link: '/vue-design/about/'
      }
    ],
    sidebar: {
      '/vue-design/art/': [
        {
          title: '正文(持续更新...)',
          children: [
            '',
            '1start-learn',
            '2vue-constructor',
            '3vue-example',
            '4vue-normalize',
            '5vue-merge',
            '6vue-init-start',
            '7vue-reactive',
            '8vue-reactive-dep-watch',
            '9vue-state-init',
            '80vue-compiler-start',
            '81vue-lexical-analysis',
            '82vue-parsing',
            '83vue-parsing-2',
            '84vue-codegen',
            '85vue-vdom',
            '86vue-vdom-patch'
          ]
        }
      ],
      '/vue-design/appendix/': [
        {
          title: '附录',
          children: [
            '',
            'vue-prototype',
            'vue-global-api',
            'vue-ins',
            'core-util',
            'web-util',
            'shared-util',
            'compiler-options',
            'ast'
          ]
        }
      ],
      '/vue-design/more/': [
        {
          title: '扩展阅读',
          children: [
            '',
            'vue-hoc'
          ]
        }
      ],
      '/vue-analysis/data-driven/': [
        {
          title: '数据驱动',
          children: [
            ['', 'Introduction'],
            'new-vue',
            'mounted',
            'render',
            'virtual-dom',
            'create-element',
            'update'
          ]
        }
      ],
      '/vue-analysis/components/': [
        {
          title: '组件化',
          children: [
            ['', 'Introduction'],
            'create-component',
            'patch',
            'merge-option',
            'lifecycle',
            'component-register',
            'async-component'
          ]
        }
      ],
      '/vue-analysis/reactive/': [
        {
          title: '深入响应式原理',
          children: [
            ['', 'Introduction'],
            'reactive-object',
            'getters',
            'setters',
            'next-tick',
            'questions',
            'computed-watcher',
            'component-update',
            'summary'
          ]
        }
      ],
      '/vue-analysis/extend/': [
        {
          title: '扩展',
          children: [
           ['', 'Introduction'],
            'event',
            'v-model',
            'slot',
            'keep-alive',
            'tansition',
            'tansition-group'
          ]
        }
      ],
      '/vue-analysis/compile/': [
        {
          title: '编译',
          children: [
           ['/', 'Introduction'],
            'compile/entrance',
            'compile/parse',
            'compile/optimize',
            'compile/codegen'
          ]
        }
      ]
    }
  }
}
