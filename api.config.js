// extends 継承
// base どこをルートとするか
module.exports = {
  api: {
    meta: {
      get: {
        '/': '/',
      },
    },
    post: {
      get: {
        '/posts': 'posts',
        '/posts/:id': 'posts',
      },
      post: {
        '/posts': 'posts',
      },
      put: {
        '/posts/:id': 'posts',
      },
      delete: {
        '/posts/:id': 'posts',
      },
    },
  },
  map: {
    post: {
      base: '',
      props: {
        title: 'title',
        type: 'type',
        link: 'link',
        date: 'date',
        image: 'featured_image',
        terms: {
          extends: 'terms',
          // base: 'terms.magazine_linkage',
          // base: 'terms.wired_category', - sample
          base: 'terms.magazine_linkage',
          props: {},
        },
        category: {
          extends: 'terms',
          base: 'terms.category',
          props: {},
        },
      },
    },
    page: {
      extends: 'post',
    },
    terms: {
      name: 'name',
      parent: 'parent',
    },
  },
}
