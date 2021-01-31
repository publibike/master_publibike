import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController, LoadingController, NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { ApiPublibikeMarcaService } from '../services/api-publibike-marca.service';

@Component({
  selector: 'app-subscribe-campaing',
  templateUrl: './subscribe-campaing.page.html',
  styleUrls: ['./subscribe-campaing.page.scss'],
})
export class SubscribeCampaingPage {

  params = null;
  campaing: any = {}
  user: any = {}

  constructor(
    private navCtrl: NavController,
    private activeRoute: ActivatedRoute,
    private storage: Storage,
    private loadingCtrl: LoadingController,
    private apiService: ApiPublibikeMarcaService,
    private alertController: AlertController
  ) { }

  async ionViewDidEnter() {
    this.params = this.activeRoute.snapshot.paramMap.get('id')
    console.log(this.params)
    this.campaing = await this.apiService.getCampaing(this.params)
    console.log(this.campaing)
    this.user = await this.storage.get("userId")
    console.log(this.user)

    // this.campaing = user.campanas.filter((item) => {
    //   return item._id === this.params
    // })
  }
  async registerToCampaing() {
    const campToSend = {
      id: this.campaing._id,
      imagen: this.campaing.imagen,
      nombre: this.campaing.nombre,
      pago_km: this.campaing.pago_km,
      zona: this.campaing.zona,
      fecha_inicio: this.campaing.fecha_inicio,
      fecha_final: this.campaing.fecha_final,
      estado: this.campaing.estado
    }
    const response = await this.apiService.registerCampaing(campToSend)
    
    let alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Atención',
      // subHeader: '¿Estas movilizandote a pie?',
      message: `${response}`,
      buttons: [{
        text: 'Ok',
        handler: () => {
          this.goToCampaings()
        }
      }]
    });
    await alert.present();
  }
  goToCampaings() {
    this.navCtrl.navigateForward("menu/campaings");
  }
}
