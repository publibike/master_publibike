import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  constructor(
    private menu: MenuController,
    private navCtrl: NavController,
    private storage: Storage
  ) { }

  ngOnInit() {
  }

  closeMenu() {
    this.menu.close();
  }
  logout() {
    this.storage.remove("isUserLoggedIn");
    this.navCtrl.navigateRoot("/login");
  }
  goToHome(){
    this.navCtrl.navigateForward("menu/home");
    this.menu.close();
  }
  goToProfile() {
    console.log("perfil")
    this.navCtrl.navigateForward("menu/profile");
    this.menu.close();
  }
  goToCampaings() {
    this.navCtrl.navigateForward("menu/campaings");
    this.menu.close();
  }
  goToRutes() {
    this.navCtrl.navigateForward("menu/rutes");
    this.menu.close();
  }
  // goToIntro(){
  //   this.storage.remove("isIntroShowed");
  //   this.navCtrl.navigateForward("menu/intro");
  //   this.menu.close();
  // }

}
