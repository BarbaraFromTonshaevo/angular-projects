import { AfterContentInit, Component, ContentChild, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordion-body',
  template: `
  <div class="accordion__body" *ngIf="isOpen">
    <ng-content></ng-content>
  </div>
  `,
  styles: [`
    :host{
      display: black;
    }
  `]
})
export class AccordionBodyComponent implements OnInit {
  @ContentChild('bodyContent')
  public bodyContent!: ElementRef;
  public isOpen = false;
  constructor() { }

  ngOnInit(): void {
  }



}
