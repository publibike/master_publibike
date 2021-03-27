import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {

  slideOpts = {
    initialSlide: 0,
    slidesPerView: 1,
    centeredSlides: true,
    speed: 400
  };
  slides = [
    {
      imagen:"assets/img/intro_1.jpg"
    },
    {
      imagen:"assets/img/intro_2.jpg"
    },
    {
      imagen:"assets/img/intro_3.jpg"
    },
    {
      imagen:"assets/img/intro_4.jpg"
    },
    {
      imagen:"assets/img/intro_5.jpg"
    },
    {
      imagen:"assets/img/intro_6.jpg"
    },
    {
      imagen:"assets/img/intro_7.jpg"
    }
  ];
  constructor(
    private router: Router,
    private storage: Storage,
    private navCtrl: NavController
  ) { }

  async ngOnInit() {
    const show = await this.storage.get("isIntroShowed");
    console.log(show);
    if(show===true){
      this.navCtrl.navigateForward("login");
    }
  }
 async ionViewWillEnter(){
    // const show = await this.storage.get("isIntroShowed");
    // console.log(show);
    // if(show===true){
    //   this.navCtrl.navigateForward("login");
    // }
  }
  finish() {
    this.storage.set("isIntroShowed", true);
    this.router.navigateByUrl("login");
  }
}
