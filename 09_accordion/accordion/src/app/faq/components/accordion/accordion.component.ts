import { AfterContentInit, Component, ContentChild, ElementRef, OnInit } from '@angular/core';
import { AccordionBodyComponent } from '../accordion-body/accordion-body.component';
import { AccordionHeaderComponent } from '../accordion-header/accordion-header.component';

@Component({
  selector: 'app-accordion',
  template: `
  <div class="accordion" [ngClass]="{active: isOpen}">
    <ng-content select="[header]"></ng-content>
    <ng-content select="[body]"></ng-content>
  </div>

  `
,
  styles: [`
    :host{
      display: block;
    }

    :host ::ng-deep p{
      color: green;
    }
  `]
})
export class AccordionComponent implements OnInit, AfterContentInit {
  @ContentChild(AccordionHeaderComponent)
  public headerComponent!: AccordionHeaderComponent;

  @ContentChild(AccordionBodyComponent)
  public bodyComponent!: AccordionBodyComponent;

  public isOpen = false;

  public toggle(): void{
    this.isOpen = !this.isOpen;
    this.bodyComponent.isOpen = this.isOpen;
  }
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
    console.log(this.headerComponent);
    console.log(this.bodyComponent);
  }
}
