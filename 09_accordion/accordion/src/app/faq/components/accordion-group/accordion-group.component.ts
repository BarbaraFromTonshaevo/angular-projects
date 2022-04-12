import { AfterContentInit, Component, ContentChildren, OnInit, QueryList } from '@angular/core';
import { mapTo, merge, Observable, tap } from 'rxjs';
import { AccordionComponent } from '../accordion/accordion.component';

@Component({
  selector: 'app-accordion-group',
  template: `
    <div class="accordion__container">
      <ng-content></ng-content>
    </div>
  `,
  styles: [`

  `]
})
export class AccordionGroupComponent implements OnInit, AfterContentInit {
  @ContentChildren(AccordionComponent)
  public components!: QueryList<AccordionComponent>

  constructor() { }

  ngOnInit(): void {
  }
  ngAfterContentInit(): void {
    const clicks$: Array<Observable<AccordionComponent>> = this.components.map(accordion => accordion.headerComponent.click$.pipe(mapTo(accordion)));
    merge(...clicks$).pipe(
      tap(c => console.log(c))
    ).subscribe(accordion => accordion.toggle())
  }
}
