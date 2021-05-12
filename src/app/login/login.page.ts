import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from "@angular/forms";
import { AuthenticateService } from "../services/authenticate.service";
import { ApiPublibikeBienestarService } from "../services/api-publibike-bienestar.service";
import {
  LoadingController,
  NavController,
  AlertController,
} from "@ionic/angular";
import { Storage } from "@ionic/storage";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
})
export class LoginPage {
  loading: any;

  loginForm: FormGroup;
  validation_messages = {
    user: [
      { type: "required", message: "El usuario es requerido" },
      { type: "minlength", message: "Minimo 6 nùmeros para el usuario" },
    ],
  };
  errorMessage: string = "";
  constructor(
    private formBuilder: FormBuilder,
    private authServices: AuthenticateService,
    private apiServices: ApiPublibikeBienestarService,
    private navCtrl: NavController,
    private loadingCtrl: LoadingController,
    private storage: Storage,
    public alertController: AlertController
  ) {
    this.loginForm = this.formBuilder.group({
      user: new FormControl(
        "",
        Validators.compose([Validators.required, Validators.minLength(6)])
      ),
    });
  }

  loginUser(credentials) {
    this.presentLoading();
    console.log(credentials);
    this.authServices
      .loginUser(credentials)
      .then(async (res) => {
        console.log(res);
        this.errorMessage = "";
        this.storage.set("isUserLoggedIn", true);
        this.storage.set("userId", res);
        this.loading.dismiss();
        if (!res.terminos) {
          const alert = await this.alertController.create({
            cssClass: "my-custom-class",
            header: "Terminos Y Condiciones!",
            // message: "Al continuar aceptaras los terminos y condiciones!",
            message:
              "Al Continuar aceptaras los <a href='https://www.ecoapps.com.co/politica-de-tratamiento-de-datos-uflou/' target='_blank'>Terminos y Condiciones</a>!!!",
            buttons: [
              {
                text: "No Acepto",
                role: "cancel",
                cssClass: "secondary",
              },
              {
                text: "Acepto",
                handler: () => {
                  let datauser = { empresa: res.empresa, terminos: true };
                  this.apiServices.updateUser(datauser).then(async () => {
                    console.log("Datos actualizados");
                  });
                  this.navCtrl.navigateForward("/tabs/profile");
                },
              },
            ],
          });
          await alert.present();
        } else {
          this.navCtrl.navigateForward("/tabs/profile");
        }

        // this.storage.set("userData", res);
      })
      .catch((err) => {
        console.log(err);
        this.loading.dismiss();
        console.error("ERROR", err.name);
        if (err.name == "SyntaxError") {
          console.log(err);
          this.errorMessage = "Usuario Incorrecto";
        } else if (err.name == "TypeError") {
          // this.errorMessage = "Usuario Incorrecto";
          console.log(err);
        }
      });
  }

  async presentLoading() {
    this.loading = await this.loadingCtrl.create({
      cssClass: "my-custom-class",
      message: "Cargando...",
    });
    await this.loading.present();
  }
}
