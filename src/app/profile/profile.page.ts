import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import {
  AlertController,
  LoadingController,
  ModalController,
} from "@ionic/angular";
import { Storage } from "@ionic/storage";
import { RecognitionModalPage } from "../recognition-modal/recognition-modal.page";
import { ApiPublibikeBienestarService } from "../services/api-publibike-bienestar.service";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.page.html",
  styleUrls: ["./profile.page.scss"],
})
export class ProfilePage implements OnInit {
  loading: any;

  userId: { _id: String } = { _id: "" };
  user: {
    nombre: String;
    apellido: String;
    usuario: String;
    empresa: {
      nombre: String;
    };
    reconocimientos: any[];
    km_total: String;
    cal_total: String;
    co2_total: String;
    tiempo_total: String;
    peso: number;
  } = {
    nombre: "",
    apellido: "",
    usuario: "",
    empresa: {
      nombre: "",
    },
    reconocimientos: [],
    km_total: "0",
    cal_total: "0",
    co2_total: "0",
    tiempo_total: "0",
    peso: 0,
  };
  reconocimientos: any = [];
  slideOps = {
    initialSlide: 2,
    slidesPerView: 4,
    centeredSlides: true,
    speed: 400,
  };
  updateForm: FormGroup;
  validation_messages = {
    email: [
      { type: "required", message: "El Correo es requerido" },
      { type: "pattern", message: "Ingresa un correo válido" },
    ],
    empresa: {
      nombre: [{ type: "requerido", message: "La empresa es requerida" }],
    },
  };

  constructor(
    private storage: Storage,
    private formBuilder: FormBuilder,
    private apiService: ApiPublibikeBienestarService,
    private alertController: AlertController,
    private modalController: ModalController,
    private loadingCtrl: LoadingController
  ) {
    this.updateForm = this.formBuilder.group({
      email: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$"),
        ])
      ),
      empresa: {
        nombre: new FormControl("", Validators.compose([Validators.required])),
      },
    });
  }
  async ionViewDidEnter() {
    this.presentLoading();
    this.userId = await this.storage.get("userId");

    // console.log(this.userId)
    this.apiService.getUserData(this.userId._id).then(async (res) => {
      this.storage.set("userData", res);
      // this.user = await this.storage.get("userData");
      this.user = res;
      this.user.km_total = parseFloat(res.km_total).toFixed(1);
      this.user.cal_total = parseFloat(res.cal_total).toFixed(1);

      this.user.co2_total = parseFloat(res.co2_total).toFixed(1);
      this.user.tiempo_total = parseFloat(res.tiempo_total).toFixed(1);

      this.updateForm.patchValue(this.user);
    });
    this.reconocimientos = await this.apiService.getUserRecognition(
      this.userId._id
    );
    this.reconocimientos = this.reconocimientos.reconocimientos;
    this.loading.dismiss();
    console.log(this.reconocimientos);
  }
  async ionViewWillLeave() {
    this.presentLoading();
    this.userId = await this.storage.get("userId");

    // console.log(this.userId)
    this.apiService.getUserData(this.userId._id).then(async (res) => {
      console.log(res);
      this.storage.set("userData", res);
      this.user = await this.storage.get("userData");
      console.log(this.user);
      this.updateForm.patchValue(this.user);
    });
    this.reconocimientos = await this.apiService.getUserRecognition(
      this.userId._id
    );
    this.reconocimientos = this.reconocimientos.reconocimientos;
    this.loading.dismiss();
    console.log(this.reconocimientos);
  }
  update(userData) {
    console.log('este es el user data', userData)
    this.apiService.updateUser(userData).then(async () => {
      console.log("Datos actualizados");
      const alert = await this.alertController.create({
        cssClass: "my-custom-class",
        header: "Atención",
        message: "Datos actualizados correctamente",
        buttons: [
          {
            text: "Ok",
            // handler: () => {
            //   this.navCtrl.navigateForward("menu/home");
            // }
          },
        ],
      });
      await alert.present();
    });
  }
  async showRecognition(reconocimiento) {
    const recognition = await this.apiService.getRecognitions(
      reconocimiento.id
    );
    console.log(recognition);
    const modal = await this.modalController.create({
      component: RecognitionModalPage,
      componentProps: {
        categoria: reconocimiento.categoria,
        data: recognition,
      },
    });

    // modal.onDidDismiss().then(dataRetuned => {
    //   this.song = dataRetuned.data;
    // });

    return await modal.present();
  }
  async presentLoading() {
    this.loading = await this.loadingCtrl.create({
      cssClass: "my-custom-class",
      message: "Cargando...",
    });
    await this.loading.present();
  }
  ngOnInit() {}
}
