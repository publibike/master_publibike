import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RutePage } from './rute.page';

describe('RutePage', () => {
  let component: RutePage;
  let fixture: ComponentFixture<RutePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RutePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
