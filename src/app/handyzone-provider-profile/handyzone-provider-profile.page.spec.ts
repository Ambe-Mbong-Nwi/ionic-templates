import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HandyzoneProviderProfilePage } from './handyzone-provider-profile.page';

describe('HandyzoneProviderProfilePage', () => {
  let component: HandyzoneProviderProfilePage;
  let fixture: ComponentFixture<HandyzoneProviderProfilePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HandyzoneProviderProfilePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HandyzoneProviderProfilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
