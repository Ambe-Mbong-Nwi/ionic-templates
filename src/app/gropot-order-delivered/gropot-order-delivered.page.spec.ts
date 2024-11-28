import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GropotOrderDeliveredPage } from './gropot-order-delivered.page';

describe('GropotOrderDeliveredPage', () => {
  let component: GropotOrderDeliveredPage;
  let fixture: ComponentFixture<GropotOrderDeliveredPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GropotOrderDeliveredPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GropotOrderDeliveredPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
