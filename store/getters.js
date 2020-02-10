export default {
  getMenuOpen: state => state.menuOpen,

  getModalName: state => state.modalName,
  getModalOpen: state => state.modalOpen,

  getPageHeight: state => state.pageData.winH,
  getPageWidth: state => state.pageData.winW,

  getPageScrollY: state => state.pageData.scrollTop,

  getPageMouseX: state => (state.pageData.mouse ? state.pageData.mouse.x : 0),
  getPageMouseY: state => (state.pageData.mouse ? state.pageData.mouse.y : 0),

  getPostReady: state => state.postReady,
  getPageReady: state => state.pageReady,

  getPageName: state => state.pageName,
}
