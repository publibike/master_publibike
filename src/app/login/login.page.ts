import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { LoadingController, NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { AuthenticateService } from '../services/authenticate.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loading: any;
  loginForm: FormGroup;
  validation_messages = {
    email: [
      { type: "required", message: " El correo es requerido" },
      { type: "pattern", message: "Ingrese un correo válido" }
    ],
    password: [
      { type: "required", message: " El password es requerido" },
      { type: "minlength", message: "Minimo 5 letras para el password" }
    ]
  };
  errorMessage: string = "";
  constructor(
    private formBuilder: FormBuilder,
    private authServices: AuthenticateService,
    private navCtrl: NavController,
    private loadingCtrl: LoadingController,
    private storage: Storage) {
    this.loginForm = this.formBuilder.group({
      email: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")
        ])
      ),
      password: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.minLength(5)
        ])
      )
    })
  }

  ngOnInit() {
  }
  async presentLoading() {
    this.loading = await this.loadingCtrl.create({
      cssClass: 'my-custom-class',
      message: 'Cargando...'
    });
    await this.loading.present();
  }
  loginUser(credentials) {
    this.presentLoading();
    this.authServices
      .loginUser(credentials)
      .then(async res => {
        this.errorMessage = "";
        this.storage.set("isUserLoggedIn", true);
        this.storage.set("userId", res);
        this.loading.dismiss();
        this.navCtrl.navigateForward("/menu/home");
      })
      .catch(err => {
        this.loading.dismiss();
        console.log("ERROR", err.name)
        console.log("Error", typeof (err.name))
        if (err.name == 'SyntaxError') {
          this.errorMessage = "Correo y/o clave incorrecta";
        } else if (err.name === 'TypeError') {
          console.log("HELLO")
          this.errorMessage = "Problemas conectando al servidor";
        } else {
          console.log("hola")
          this.errorMessage = err;
        }
      })
  }
  goToRegister() {
    this.navCtrl.navigateForward("/register")
  }

}
