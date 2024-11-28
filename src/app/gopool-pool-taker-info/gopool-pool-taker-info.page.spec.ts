import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GopoolPoolTakerInfoPage } from './gopool-pool-taker-info.page';

describe('GopoolPoolTakerInfoPage', () => {
  let component: GopoolPoolTakerInfoPage;
  let fixture: ComponentFixture<GopoolPoolTakerInfoPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GopoolPoolTakerInfoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GopoolPoolTakerInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
