export default class LazyLoad {
  constructor(selector = 'img.lazy-load') {
    this.images = [].slice.call(document.querySelectorAll(selector));
  }

  start() {
    this.setupIntersectionObserver();
    this.processScroll(this.images);
  }

  setupIntersectionObserver(rootElement = null) {
    const options = {
      root: rootElement,
      rootMargin: '50px 0px',
      threshold: 0.01,
    };
    this.intersectionObserver = new IntersectionObserver(this.intersectCallback.bind(this), options);
  }

  intersectCallback(entries, observer) {
    entries.forEach((entry) => {
      // Are we in viewport?
      if (entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        // Don't block the main thread
        window.requestIdleCallback((_) => {
          this.loadImage(entry.target);
        });
      }
    });
  }

  processScroll(elements) {
    elements.forEach((lazyElement) => {
      this.intersectionObserver.observe(lazyElement);
    });
  }

  loadImage(element) {
    const src = element.dataset.src;
    const width = element.getAttribute('width');
    const height = element.getAttribute('height');

    const img = new Image();
    img.src = src;
    img.width = width;
    img.height = height;
    img.addEventListener('load', (_) => {
      element.parentNode.replaceChild(img, element);
    });
  }
}
