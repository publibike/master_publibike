import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-recognition-modal',
  templateUrl: './recognition-modal.page.html',
  styleUrls: ['./recognition-modal.page.scss'],
})
export class RecognitionModalPage implements OnInit {

  categoria: String;
  data:{
    nombre: any,
    establecimiento: any,
    beneficio: any,
    activacion_km: any,
    estado: any
  };

  constructor(
    private navParams: NavParams,
    private modalController: ModalController
    ) { }

  ionViewDidEnter() {
    this.categoria = this.navParams.data.categoria;
    this.data = this.navParams.data.data;
  }

  async closeModal() {
    await this.modalController.dismiss();
  }

  ngOnInit() {
  }

}
