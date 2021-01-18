import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SubscribeCampaingPage } from './subscribe-campaing.page';

describe('SubscribeCampaingPage', () => {
  let component: SubscribeCampaingPage;
  let fixture: ComponentFixture<SubscribeCampaingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubscribeCampaingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SubscribeCampaingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
