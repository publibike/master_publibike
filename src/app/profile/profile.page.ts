import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { ApiPublibikeMarcaService } from '../services/api-publibike-marca.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage {
 

  user: {nombre: String, apellido:String, email:String} = {nombre:"", apellido:"", email:""};
  updaterForm: FormGroup;
  validation_messages = {
    nombre: [
      { type: "required", message: "El nombre es requerido." },
      {
        type: "minlength",
        message: "El nombre debe tener mínimo tres letras."
      }
    ],
    apellido: [
      { type: "required", message: "El apellido es requerido." },
      {
        type: "minlength",
        message: "El apellido debe tener mínimo tres letras."
      }
    ],
    celular: [
      { type: "required", message: "El número celular es requerido" }
    ],
    email: [
      { type: "required", message: "El email es requerido" },
      { type: "pattern", message: "Ingresa un email válido." }
    ],
    genero: [
      { type: "required", message: "El número celular es requerido" }
    ],
    estatura: [
      { type: "required", message: "La estatura es requerida" }
    ],
    peso: [
      { type: "required", message: "El peso es requerido" }
    ],
    vehiculo: [
      { type: "required", message: "El vehiculo a usar es requerido" }
    ],
    banco: [
      { type: "required", message: "El banco es requerido" }
    ],
    cuenta: [
      { type: "required", message: "El número de cuenta es necesario" },
      { type: "pattern", message: "Ingresa la cuenta sin guiones solo números" }
    ]
  };
  errorMessage: string = "";

  constructor(
    private storage: Storage,
    private formBuilder: FormBuilder,
    private apiService: ApiPublibikeMarcaService,
    public alertController: AlertController,
    private navCtrl: NavController,

  ) {
    this.updaterForm = this.formBuilder.group({
      nombre: new FormControl(
        "",
        Validators.compose([Validators.minLength(3), Validators.required])
      ),
      apellido: new FormControl(
        "",
        Validators.compose([Validators.minLength(3), Validators.required])
      ),
      celular: new FormControl(
        "",
        Validators.compose([Validators.required])
      ),
      email: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")
        ])
      ),
      genero: new FormControl(
        "",
        Validators.compose([Validators.required])
      ),
      estatura: new FormControl(
        "",
        Validators.compose([Validators.required])
      ),
      peso: new FormControl(
        "",
        Validators.compose([Validators.required])
      ),
      vehiculo: new FormControl(
        "",
        Validators.compose([Validators.required])
      ),
      banco: new FormControl(
        "",
        Validators.compose([Validators.required])
      ),
      cuenta: new FormControl(
        "",
        Validators.compose([Validators.pattern("^[0-9]*$"), Validators.required])
      ),
    });

  }

  async ionViewDidEnter() {
    this.user = await this.storage.get("userData");
    this.updaterForm.patchValue(this.user)

  }
  update(userData) {
    this.apiService.updateUser(userData).then(async () => {
      console.log("Datos actualizados")
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Atención',
        message: 'Datos actualizados correctamente',
        buttons: [{
          text: 'Ok',
          handler: () => {
            this.navCtrl.navigateForward("menu/home");
          }
        }]
      });
      await alert.present();
    });
  }

}
