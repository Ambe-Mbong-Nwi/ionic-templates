import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DoctoworldCreatePillRemindersPage } from './doctoworld-create-pill-reminders.page';

describe('DoctoworldCreatePillRemindersPage', () => {
  let component: DoctoworldCreatePillRemindersPage;
  let fixture: ComponentFixture<DoctoworldCreatePillRemindersPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctoworldCreatePillRemindersPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DoctoworldCreatePillRemindersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
