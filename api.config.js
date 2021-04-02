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
    works: {
      get: {
        '/works': 'works',
        '/works/:id': 'works',
      },
      post: {
        '/works': 'works',
      },
      put: {
        '/works/:id': 'works',
      },
      delete: {
        '/works/:id': 'works',
      },
    },
  },
  map: {
    post: {
      base: '',
      props: {
        id: 'id',
        slug: 'slug',
        title: 'title.rendered',
        date: 'date',
        acf: 'date',
        content: 'content.rendered',
      },
    },
    works: {
      base: '',
      props: {
        id: 'id',
        slug: 'slug',
        title: 'title.rendered',
        date: 'date',
        acf: 'acf',
        order: 'acf.order',
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
