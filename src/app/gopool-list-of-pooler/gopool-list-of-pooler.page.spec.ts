import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GopoolListOfPoolerPage } from './gopool-list-of-pooler.page';

describe('GopoolListOfPoolerPage', () => {
  let component: GopoolListOfPoolerPage;
  let fixture: ComponentFixture<GopoolListOfPoolerPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GopoolListOfPoolerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GopoolListOfPoolerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
