function isContentLoaded(init: any, reInit: any) {
  document.addEventListener('DOMContentLoaded', init);
  if (document.readyState === 'interactive' || document.readyState === 'complete') {
    init();
  }
  reInit(5000);
}

export default isContentLoaded;
