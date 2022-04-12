import { Component, ElementRef, OnInit } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';

@Component({
  selector: 'app-accordion-header',
  template: `
  <div class="accordion__header">
    <div class="accordion__header-content">
      <div class="accordion__title">
        <ng-content></ng-content>
      </div>
    </div>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" class="accordion__icon">
      <path
        d="M6 9L12 15L18 9"
        stroke="black"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </div>
  `,
  styles: [`
    :host{
      display: block;
    }
  `]
})
export class AccordionHeaderComponent implements OnInit {
  public isOpen = false;
  public click$: Observable<Event> = fromEvent(this.host.nativeElement, 'click')
  constructor(private host: ElementRef) { }

  ngOnInit(): void {
  }

}
