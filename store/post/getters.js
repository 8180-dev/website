export default {
  getCachePosts: state => state.cachePosts,
  getPosts: state => state.posts,
  getPosts1: state => [...state.posts].slice(0, 6),
  getPosts5: state => [...state.posts].slice(6, 22),
  getPosts6: state => [...state.posts].slice(6, 15),
  // getPosts6: state => [...state.posts].slice(6, 60),
}
