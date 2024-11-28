import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DoctoworldAppointmentDetailPage } from './doctoworld-appointment-detail.page';

describe('DoctoworldAppointmentDetailPage', () => {
  let component: DoctoworldAppointmentDetailPage;
  let fixture: ComponentFixture<DoctoworldAppointmentDetailPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctoworldAppointmentDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DoctoworldAppointmentDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
