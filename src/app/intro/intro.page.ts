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
      imageSrc: "assets/img/logo-publibike-dark.png",
      imageAlt: "Publibike Logo",
      title: "BIENVENIDO",
      subTitle: "",
      description: `Aprende a moverte a tu ritmo.`,
      icon: "bicycle"
    },
    {
      imageSrc: "assets/img/logo-publibike-dark.png",
      imageAlt: "Publibike Logo",
      title: "Primero",
      subTitle: "",
      description: `Da click en Iniciar Nuevo Recorrido`,
      icon: "bicycle"
    },
    {
      imageSrc: "assets/img/logo-publibike-dark.png",
      imageAlt: "Publibike Logo",
      title: "Segundo",
      subTitle: "",
      description: `Da click en el boton de Routing`,
      icon: "bicycle"
    },
    {
      imageSrc: "assets/img/logo-publibike-dark.png",
      imageAlt: "Publibike Logo",
      title: "Tercero",
      subTitle: "",
      description: `Coloca el punto inicial y final de la ruta a realizar`,
      icon: "bicycle"
    },
    {
      imageSrc: "assets/img/logo-publibike-dark.png",
      imageAlt: "Publibike Logo",
      title: "Cuarto",
      subTitle: "",
      description: `Selecciona entre: 
      s1. Ciclovia. 2.Principiante: Ciclorutas. 3.IntermedioA: Peatonal. 4.IntermedioB: . y 5.Avanzado: Malla vehicular `,
      icon: "bicycle"
    }
  ];
  constructor(
    private router: Router,
    private storage: Storage,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }
//  async ionViewDidEnter(){
//     const show = await this.storage.get("isIntroShowed");
//     console.log(show);
//     if(show===true){
//       this.navCtrl.navigateForward("menu/home");
//     }
//   }
  finish() {
    this.storage.set("isIntroShowed", true);
    this.router.navigateByUrl("login");
  }
}
