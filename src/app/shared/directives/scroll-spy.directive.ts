import {
  HostListener, Directive,
  AfterContentInit, ElementRef, Renderer2
} from '@angular/core';


@Directive({
  selector: '[scroll-spy]'
})
export class ScrollSpyDirective implements AfterContentInit {

  elements: Array<{
    $anchor: HTMLAnchorElement,
    targetSectionID: string,
    $targetSection: HTMLElement
  }> = [];


/**
 * State of the navigation 
 * navigate through navigation bar => TRUE
 * navigate by scrolling => FALSE
 */
  directNavigation: boolean = false;

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngAfterContentInit() {

    let $anchors: HTMLAnchorElement[] = this.elRef.nativeElement.querySelectorAll('a');

    for (let i = 0, length = $anchors.length; i < length; i++) {

      let id: string = this.getId($anchors[i]);

      this.elements.push({
        $anchor: $anchors[i],
        targetSectionID: id,
        $targetSection: this.getPeerElement(id)
      });

      this.bindClickEvent(this.elements[i].$anchor, (e: Event) => {

        e.preventDefault();

        let position = this.extractElementPosition(document, this.elements[i].$targetSection);

        this.directNavigation = true;

        window.scrollTo({
          top: position.top,
          left: 0,
          behavior: "smooth"
        });

        this.toggleHTMLClass(this.elements[i].$anchor);

        setTimeout(() => {
          this.directNavigation = false;
        }, 1500);

      });
    }
  }

  /**
   * Determine wether or not the class exist on a given element
   * @param {HTMLElement} $el 
   * @return {boolean}
   */
  private classExist($el: HTMLElement): boolean {

    let active: boolean = false;
    let length: number = $el.parentElement.classList.length;

    for (let i = 0; i < length; i++) {
      if ($el.parentElement.classList.item(i) === "active")
        active = true;
    }

    return active;
  }

  /**
   * Toggle an HTML Class on an element
   * @param {HTMLElement} $el 
   */
  private toggleHTMLClass($el: HTMLElement): void {

    if (this.classExist($el))
      return;

    for (let i = 0, length = this.elements.length; i < length; i++) {
      this.renderer.removeClass(
        this.elements[i].$anchor.parentNode,
        'active'
      );
    }

    this.renderer.addClass(
      $el.parentNode,
      'active'
    );
  }

  /**
   * Get the ID attribute of an html anchor element
   * @param {HTMLAnchorElement} el 
   * @return {string} 
   */
  private getId(el: HTMLAnchorElement): string {
    let id = el.href.split('#')[1];
    return id;
  }

  //todo inject Document Token
  /**
   * 
   * @param {string} id 
   */
  private getPeerElement(id: string): any {
    return document.querySelector('#' + id);
  }

  /**
   * Attach an event listener to Html element
   * @param {HTMLElement} $el 
   * @param callback 
   */
  private bindClickEvent($el: HTMLElement, callback: any): void {
    this.renderer.listen($el, 'click', callback);
  }

  @HostListener("window:scroll", []) onScroll() {

   

    if (this.directNavigation)
      return;


    let scrollTop = document.documentElement.scrollTop + (window.innerHeight / 2);

    for (let i = 0, length = this.elements.length; i < length; i++) {
      if (this.elements[i].$targetSection.offsetTop <= scrollTop) {
        this.toggleHTMLClass(this.elements[i].$anchor);
      }
    }

  }

  extractElementPosition(document: Document, targetElement: HTMLElement): { top: number, left: number } {

    let body = document.body;
    let docEl = document.documentElement;

    let windowPageYOffset: number = document.defaultView && document.defaultView.pageYOffset || undefined;
    let windowPageXOffset: number = document.defaultView && document.defaultView.pageXOffset || undefined;

    let scrollTop = windowPageYOffset || docEl.scrollTop || body.scrollTop;
    let scrollLeft = windowPageXOffset || docEl.scrollLeft || body.scrollLeft;

    let clientTop = docEl.clientTop || body.clientTop || 0;
    let clientLeft = docEl.clientLeft || body.clientLeft || 0;


    if (!targetElement) {
      // No element found, so return the current position to not cause any change in scroll position
      return { top: scrollTop, left: scrollLeft };
    }
    let box = targetElement.getBoundingClientRect();

    let top = box.top + scrollTop - clientTop;
    let left = box.left + scrollLeft - clientLeft;

    return { top: Math.round(top), left: Math.round(left) };
  }
}
