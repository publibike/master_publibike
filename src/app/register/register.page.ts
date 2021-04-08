import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { AuthenticateService } from '../services/authenticate.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  registerForm: FormGroup;
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
    usuario: [
      { type: "required", message: "El número de identificación es requerido" }
    ],
    celular: [
      { type: "required", message: "El número celular es requerido" }
    ],
    email: [
      { type: "required", message: "El email es requerido" },
      { type: "pattern", message: "Ingresa un email válido." }
    ],
    password: [
      { type: "required", message: "La contraseña es obligatoria." },
      {
        type: "minlength",
        message: "La contraseña debe tener al menos 5 caracteres."
      }
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
    // banco: [
    //   { type: "required", message: "El banco es requerido" }
    // ],
    // cuenta: [
    //   // { type: "required", message: "El número de cuenta es necesario" },
    //   { type: "pattern", message: "Ingresa la cuenta sin guiones solo números" }
    // ]
  };
  errorMessage: string = "";

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthenticateService,
    private navCtrl: NavController
  ) {
    this.registerForm = this.formBuilder.group({      
      nombre: new FormControl(
        "",
        Validators.compose([Validators.minLength(3), Validators.required])
      ),
      apellido: new FormControl(
        "",
        Validators.compose([Validators.minLength(3), Validators.required])
      ),
      usuario: new FormControl(
        "",
        // Validators.compose([ Validators.required])
      ),
      celular: new FormControl(
        "",
        // Validators.compose([ Validators.required])
      ),
      email: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")
        ])
      ),
      password: new FormControl(
        "",
        Validators.compose([Validators.required, Validators.minLength(5)])
      ),
      genero: new FormControl(
        "",
        // Validators.compose([ Validators.required])
      ),
      estatura: new FormControl(
        "",
        // Validators.compose([Validators.required])
      ),
      peso: new FormControl(
        "",
        // Validators.compose([Validators.required])
      ),
      vehiculo: new FormControl(
        "",
        // Validators.compose([Validators.required])
      ),
      banco: new FormControl(
        "",
        // Validators.compose([ Validators.required])
      ),
      cuenta:new FormControl(
        "",
        // Validators.compose([Validators.pattern("^[0-9]*$"), Validators.required])
      ),
    });
  }

  ngOnInit() {
  }

  register(userData){
    console.log(userData)
    this.authService.registerUser(userData).then(()=>{
      this.navCtrl.navigateBack("/login");
    });
  }
  goToLogin(){
    this.navCtrl.navigateBack("/login");
  }

}
