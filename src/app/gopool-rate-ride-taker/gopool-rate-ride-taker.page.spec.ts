import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GopoolRateRideTakerPage } from './gopool-rate-ride-taker.page';

describe('GopoolRateRideTakerPage', () => {
  let component: GopoolRateRideTakerPage;
  let fixture: ComponentFixture<GopoolRateRideTakerPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GopoolRateRideTakerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GopoolRateRideTakerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
