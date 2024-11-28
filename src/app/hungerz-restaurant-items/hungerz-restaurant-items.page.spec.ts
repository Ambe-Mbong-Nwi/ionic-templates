import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HungerzRestaurantItemsPage } from './hungerz-restaurant-items.page';

describe('HungerzRestaurantItemsPage', () => {
  let component: HungerzRestaurantItemsPage;
  let fixture: ComponentFixture<HungerzRestaurantItemsPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HungerzRestaurantItemsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HungerzRestaurantItemsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
