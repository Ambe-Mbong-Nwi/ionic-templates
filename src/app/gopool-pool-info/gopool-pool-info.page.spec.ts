import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GopoolPoolInfoPage } from './gopool-pool-info.page';

describe('GopoolPoolInfoPage', () => {
  let component: GopoolPoolInfoPage;
  let fixture: ComponentFixture<GopoolPoolInfoPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GopoolPoolInfoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GopoolPoolInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
