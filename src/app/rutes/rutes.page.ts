import { Component, OnInit } from '@angular/core';
import { LoadingController, NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { ApiPublibikeMarcaService } from '../services/api-publibike-marca.service';

@Component({
  selector: 'app-rutes',
  templateUrl: './rutes.page.html',
  styleUrls: ['./rutes.page.scss'],
})
export class RutesPage implements OnInit {

  loading: any;
  userId: { _id: String } = { _id: "" };
  rutes: any = [];

  constructor(
    private apiService: ApiPublibikeMarcaService,
    private navCtrl: NavController,
    private loadingCtrl: LoadingController,
    private storage: Storage) { }

  ngOnInit() {
  }
  async ionViewDidEnter() {
    this.presentLoading();
    const id = await this.storage.get("userData");
    this.userId = await this.storage.get("userId");
    this.rutes = await this.apiService.getUserRoutes(this.userId._id)
    console.log(this.rutes)
    this.rutes = this.rutes.recorridos;
    console.log(this.rutes)
    this.loading.dismiss();
  }
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
    this.navCtrl.navigateForward("menu/campaings");
  }
}
