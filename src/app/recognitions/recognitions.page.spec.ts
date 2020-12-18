import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RecognitionsPage } from './recognitions.page';

describe('RecognitionsPage', () => {
  let component: RecognitionsPage;
  let fixture: ComponentFixture<RecognitionsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecognitionsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RecognitionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
