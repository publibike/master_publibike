import { Component } from '@angular/core';
import { BackgroundMode } from '@ionic-native/background-mode/ngx';
// import { CallNumberOriginal } from '@ionic-native/call-number';
import { LoadingController, NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { ApiPublibikeMarcaService } from '../services/api-publibike-marca.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  loading: any;
  userId: { _id: String } = { _id: "" };
  user: {
    nombre: String,
    apellido: String,
    ganancia_total: number,
    km_total: number,
    cal_total: number,
    co2_total: number,
    campanas: any
  } = {
      nombre: "",
      apellido: "",
      ganancia_total: 0,
      km_total: 0,
      cal_total: 0,
      co2_total: 0,
      campanas: []
    };

  constructor(
    private navCtrl: NavController,
    private storage: Storage,
    private apiService: ApiPublibikeMarcaService,
    private loadingCtrl: LoadingController,
    private backgroundMode: BackgroundMode, 
    // private callNumber: CallNumberOriginal
  ) { }

  async ionViewDidEnter() {
    console.log("en home")
    this.presentLoading()
    this.userId = await this.storage.get("userId");
    this.user = await this.apiService.getUserData(this.userId._id)
    await this.apiService.getUserData(this.userId._id).then(async (res) => {
      this.storage.set("userData", res);
      this.user = await this.storage.get("userData");
      console.log(res)
      this.loading.dismiss();
    })

    // this.backgroundMode.enable();
    // this.backgroundMode.on("activate").subscribe(() => {
    //   this.callNumber.callNumber('3507935088', true)
    //     .then(res => console.log('Launched dialer!', res))
    //     .catch(err => console.log('Error launching dialer', err));    
    // })
  }
  // async ionViewWillLeave() {
  //   console.log("en home")
  //   this.presentLoading()
  //   this.userId = await this.storage.get("userId");
  //   this.user = await this.apiService.getUserData(this.userId._id)
  //   this.apiService.getUserData(this.userId._id).then(async (res) => {
  //     this.storage.set("userData", res);
  //     this.user = await this.storage.get("userData");
  //     console.log(res)
  //     this.loading.dismiss();
  //   })


  //   // this.backgroundMode.enable();
  //   // this.backgroundMode.on("activate").subscribe(() => {
  //   //   this.callNumber.callNumber('3507935088', true)
  //   //     .then(res => console.log('Launched dialer!', res))
  //   //     .catch(err => console.log('Error launching dialer', err));    
  //   // })
  // }

  async presentLoading() {
    this.loading = await this.loadingCtrl.create({
      cssClass: 'my-custom-class',
      message: 'Cargando...'
    });
    await this.loading.present();
  }
  goToRute() {
    this.navCtrl.navigateForward("menu/rute")
  }
  goToCampaings() {
    this.navCtrl.navigateForward("menu/campaings")
  }

}
