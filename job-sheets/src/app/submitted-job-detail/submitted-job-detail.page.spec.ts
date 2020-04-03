import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SubmittedJobDetailPage } from './submitted-job-detail.page';

describe('SubmittedJobDetailPage', () => {
  let component: SubmittedJobDetailPage;
  let fixture: ComponentFixture<SubmittedJobDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmittedJobDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SubmittedJobDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
