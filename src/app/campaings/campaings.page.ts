import { Component, OnInit } from '@angular/core';
import { LoadingController, NavComponentWithProps, NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { ApiPublibikeMarcaService } from '../services/api-publibike-marca.service';

@Component({
  selector: 'app-campaings',
  templateUrl: './campaings.page.html',
  styleUrls: ['./campaings.page.scss'],
})
export class CampaingsPage implements OnInit {

  loading: any;
  campaings: any = [];
  myCampaings: any = [];
  companies: any = [];
  slideOps = {
    initialSlide: 2,
    slidesPerView: 2,
    centeredSlides: false,
    speed: 400
  };

  constructor(
    private storage: Storage,
    private loadingCtrl: LoadingController,
    private apiService: ApiPublibikeMarcaService,
    private navCtrl: NavController
  ) { }

  async ionViewDidEnter() {
    this.presentLoading();
    let user = await this.storage.get("userId")
    user = await this.apiService.getUserData(user._id)
    // this.campaings = await this.apiService.getCampaings()
    this.campaings = user.campanas
    console.log(this.campaings)
    this.companies = await this.apiService.getCompanies()
    console.log(this.companies)
    this.loading.dismiss();

  }

  ngOnInit() {
  }

  async presentLoading() {
    this.loading = await this.loadingCtrl.create({
      cssClass: 'my-custom-class',
      message: 'Cargando...'
    });
    await this.loading.present();
  }
  goToSubscribeCampaing(id) {
    console.log(id)
    this.navCtrl.navigateForward(["menu/subscribe-campaing", id]);
  }
  goToStartCampaing(id) {
    console.log(id)
    this.navCtrl.navigateForward(["menu/start-campaing", id]);
  }
}
