import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DoctoworldListOfDoctorsPage } from './doctoworld-list-of-doctors.page';

describe('DoctoworldListOfDoctorsPage', () => {
  let component: DoctoworldListOfDoctorsPage;
  let fixture: ComponentFixture<DoctoworldListOfDoctorsPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctoworldListOfDoctorsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DoctoworldListOfDoctorsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
