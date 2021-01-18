import { Component, OnInit } from '@angular/core';
import { NavComponentWithProps, NavController } from '@ionic/angular';

@Component({
  selector: 'app-campaings',
  templateUrl: './campaings.page.html',
  styleUrls: ['./campaings.page.scss'],
})
export class CampaingsPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
  goToSubscribeCampaing(){
    this.navCtrl.navigateForward("menu/subscribe-campaing");
  }
  goToStartCampaing(){
    this.navCtrl.navigateForward("menu/start-campaing");
  }
}
