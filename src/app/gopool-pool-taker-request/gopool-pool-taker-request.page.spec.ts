import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GopoolPoolTakerRequestPage } from './gopool-pool-taker-request.page';

describe('GopoolPoolTakerRequestPage', () => {
  let component: GopoolPoolTakerRequestPage;
  let fixture: ComponentFixture<GopoolPoolTakerRequestPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GopoolPoolTakerRequestPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GopoolPoolTakerRequestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
