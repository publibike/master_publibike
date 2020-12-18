import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RecognitionModalPage } from './recognition-modal.page';

describe('RecognitionModalPage', () => {
  let component: RecognitionModalPage;
  let fixture: ComponentFixture<RecognitionModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecognitionModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RecognitionModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
