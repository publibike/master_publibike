import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StartCampaingPage } from './start-campaing.page';

describe('StartCampaingPage', () => {
  let component: StartCampaingPage;
  let fixture: ComponentFixture<StartCampaingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartCampaingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StartCampaingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
