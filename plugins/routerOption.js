export default ({ app, store }) => {
  app.router.afterEach((to, _from) => {
    console.log('🚕 page move to', to.name)
    store.dispatch('setPageName', to.name)
  })
}
