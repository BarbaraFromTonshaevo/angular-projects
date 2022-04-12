import { Component, ContentChildren, OnInit, QueryList } from '@angular/core';
import { AccordionComponent } from '../../components/accordion/accordion.component';

@Component({
  selector: 'app-faq-page',
  template: `
  <p>here will be accordion</p>

  <div class="container container-grid">
    <app-accordion-group class="grid--col-10">
      <app-accordion>
        <app-accordion-header header>Каким способом можно оплатить заказ</app-accordion-header>
        <app-accordion-body body>
          <div class="payment" #bodyContent>
            <p>
              Вы можете забронировать товар в любом магазтне re:Store. Сразу после получения и подтварждения заказ вы можете оплатить и забрать заказ в выбранном магазине.
            </p>
            <div class="payment__options">
              <p class="weight-semibold">Оплата</p>
              <ul class="list_options">
                <li>оплата онлайн</li>
                <li>картой или наличными при получении</li>
                <li>по счету банковским переводом</li>
              </ul>
            </div>
            <button (click)="btnClick()">Отправить</button>
          </div>
        </app-accordion-body>
      </app-accordion>
      <app-accordion>
        <app-accordion-header header>Возврат товара надлежайшего качества</app-accordion-header>
        <app-accordion-body body>
          <p>
            В первую очередь, необходимо знать, что согласно статье 25 Закона РФ «О защите прав потребителей» от 07.02.1992 г. № 2300-1 (далее Закон), потребитель вправе в течение четырнадцати дней, не считая дня покупки, обменять непродовольственный товар надлежащего качества на аналогичный товар у продавца, у которого этот товар был приобретен, если указанный товар не подошел по форме, габаритам, фасону, расцветке.
          </p>
        </app-accordion-body>
      </app-accordion>
      <app-accordion>
        <app-accordion-header header>Возврат товара ненадлежайшего качества</app-accordion-header>
        <app-accordion-body body>
        <p>
          Продавец обязан вернуть вам деньги (или возместить расходы на ремонт) в течение 10 дней со дня предъявления претензии. За каждый день задержки выполнения требования продавец (импортер или изготовитель) должен будет заплатить неустойку в размере одного процента от цены товара. Заменить товар продавец обязан в течение семи дней, а если нужна дополнительная проверка качества товара продавцом, то в течение 20 дней.
        </p>
        </app-accordion-body>
      </app-accordion>
    </app-accordion-group>
  </div>

  `,
  styles: [`
  `]
})
export class FaqPageComponent implements OnInit {

  btnClick(){
    console.log('btnClick');
  }
  constructor() { }

  ngOnInit(): void {
  }

}
