import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadingController, NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { ApiPublibikeMarcaService } from '../services/api-publibike-marca.service';

@Component({
  selector: 'app-start-campaing',
  templateUrl: './start-campaing.page.html',
  styleUrls: ['./start-campaing.page.scss'],
})
export class StartCampaingPage {

  params = null;
  campaing: any = {}

  constructor(
    private navCtrl: NavController,
    private activeRoute: ActivatedRoute,
    private storage: Storage,
    private apiService: ApiPublibikeMarcaService,
    private loadingCtrl: LoadingController
  ) { }

  async ionViewDidEnter() {
    this.params = this.activeRoute.snapshot.paramMap.get('id')
    console.log(this.params)
    let user = await this.storage.get("userId")
    user = await this.apiService.getUserData(user._id)
    let result = user.campanas.filter((item) => {
      return item.id === this.params
    })
    this.campaing = result[0]
  }
  async goToRute() {
    await this.apiService.updateActualCampaing(this.campaing)
    this.navCtrl.navigateForward("menu/rute")
  }
}
