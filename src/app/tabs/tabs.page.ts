import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { MapModalPage } from '../map-modal/map-modal.page';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  constructor(
    private storage: Storage,
    private modalController: ModalController,
  ) { }

  async showMap() {
    const userId = await this.storage.get("userId");
    const modal = await this.modalController.create({
      component: MapModalPage,
      componentProps: {
        id: userId
      }
    });

    return await modal.present();
  }
}
