import { Component, OnInit } from '@angular/core';
import { LoadingController, ModalController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { RecognitionModalPage } from '../recognition-modal/recognition-modal.page';
import { ApiPublibikeBienestarService } from '../services/api-publibike-bienestar.service';

@Component({
  selector: 'app-recognitions',
  templateUrl: './recognitions.page.html',
  styleUrls: ['./recognitions.page.scss'],
})
export class RecognitionsPage implements OnInit {
  loading : any;
  empresaId: String = "";
  reconocimientos: any = [];
  movilidad: any = [];
  bienestar: any = [];
  alianzas: any = [];
  ocio: any = [];
  constructor(
    private storage: Storage,
    private modalController: ModalController,
    private loadingCtrl: LoadingController,
    private apiService: ApiPublibikeBienestarService,
  ) { }

  async ionViewDidEnter() {
    this.presentLoading();
    const user = await this.storage.get("userData");
    this.empresaId = user.empresa.id;
    this.reconocimientos = await this.apiService.getCompanyRecognitios(this.empresaId);
    this.reconocimientos = this.reconocimientos.reconocimientos;
    this.movilidad = this.reconocimientos.filter((item) => {
      return item.categoria === 'Movilidad limpia'
    })
    this.bienestar = this.reconocimientos.filter((item) => {
      return item.categoria === 'Bienestar'
    })
    this.alianzas = this.reconocimientos.filter((item) => {
      return item.categoria === 'Alianzas'
    })
    this.ocio = this.reconocimientos.filter((item) => {
      return item.categoria === 'Ocio'
    })
    this.loading.dismiss();
  }
  async showRecognition(reconocimiento) {
    const recognition = await this.apiService.getRecognitions(reconocimiento.id);
    console.log(recognition);
    const modal = await this.modalController.create({
      component: RecognitionModalPage,
      componentProps: {
        categoria: reconocimiento.categoria,
        data: recognition
      }
    });

    // modal.onDidDismiss().then(dataRetuned => {
    //   this.song = dataRetuned.data;
    // });

    return await modal.present();
  }
  async presentLoading() {
    this.loading = await this.loadingCtrl.create({
      cssClass: 'my-custom-class',
      message: 'Cargando...'
    });
    await this.loading.present();
  }
  ngOnInit() {
  }

}
