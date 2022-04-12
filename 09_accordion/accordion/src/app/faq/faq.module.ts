import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaqPageComponent } from './pages/faq-page/faq-page.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { AccordionBodyComponent } from './components/accordion-body/accordion-body.component';
import { AccordionHeaderComponent } from './components/accordion-header/accordion-header.component';
import { AccordionGroupComponent } from './components/accordion-group/accordion-group.component';



@NgModule({
  declarations: [
    FaqPageComponent,
    AccordionComponent,
    AccordionBodyComponent,
    AccordionHeaderComponent,
    AccordionGroupComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FaqPageComponent
  ]
})
export class FaqModule { }
