function isContentLoaded(init: any, reInit: any) {
  document.addEventListener("DOMContentLoaded", init);
  if (
    document.readyState === "interactive" ||
    document.readyState === "complete"
  ) {
    init();
  }
  reInit();
}

export default isContentLoaded;
