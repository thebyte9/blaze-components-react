const tooltipDOMUtils = {
  getElementOffset(el: HTMLElement | null): { top: number; left: number } {
    let x = 0, y = 0;

    for (let element = el; element && !isNaN(element.offsetLeft) && !isNaN(element.offsetTop); element = element.offsetParent as HTMLElement | null) {
      x += element.offsetLeft - element.scrollLeft;
      y += element.offsetTop - element.scrollTop;
    }

    return { top: y, left: x };
  },

  style(node: HTMLElement, prop: string): string {
    return getComputedStyle(node)[prop];
  },

  scroll(node: HTMLElement): boolean {
    return (/^(auto|scroll|hidden|visible|inherit)$/i).test(`${this.style(node, 'overflow')}${this.style(node, 'overflow-y')}${this.style(node, 'overflow-x')}`);
  },

  getScrollParent(node: HTMLElement | null): HTMLElement {
    if (!node || node === document.body) {
      return document.body;
    }
    return this.scroll(node) ? node : this.getScrollParent(node.parentNode as HTMLElement | null);
  }
};

export default tooltipDOMUtils;
