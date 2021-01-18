import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-start-campaing',
  templateUrl: './start-campaing.page.html',
  styleUrls: ['./start-campaing.page.scss'],
})
export class StartCampaingPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
  goToRute() {
    this.navCtrl.navigateForward("menu/rute")
  }
}
