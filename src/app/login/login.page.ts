import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AuthenticateService } from '../services/authenticate.service';
import { LoadingController, NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  loading: any;

  loginForm: FormGroup;
  validation_messages = {
    user: [
      { type: "required", message: "El usuario es requerido" },
      { type: "minlength", message: "Minimo 6 nùmeros para el usuario" }
    ]
  };
  errorMessage: string = "";
  constructor(
    private formBuilder: FormBuilder,
    private authServices: AuthenticateService,
    private navCtrl: NavController,
    private loadingCtrl: LoadingController,
    private storage: Storage
  ) {
    this.loginForm = this.formBuilder.group({
      user: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.minLength(6)
        ])
      )
    })
  }

  loginUser(credentials) {
    this.presentLoading();
    this.authServices
      .loginUser(credentials)
      .then(res => {
        this.errorMessage = "";
        this.storage.set("isUserLoggedIn", true);
        this.storage.set("userId", res);
        this.loading.dismiss();
        this.navCtrl.navigateForward("/tabs/profile");
        // this.storage.set("userData", res);
      })
      .catch(err => {
        this.loading.dismiss();
        console.error("ERROR", err.name)
        if (err.name == 'SyntaxError') {
          this.errorMessage = "Usuario Incorrecto";
        }
      })
  }

  async presentLoading() {
    this.loading = await this.loadingCtrl.create({
      cssClass: 'my-custom-class',
      message: 'Cargando...'
    });
    await this.loading.present();
  }
}
