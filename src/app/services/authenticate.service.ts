import { Injectable } from '@angular/core';
import { ControlContainer } from '@angular/forms';
import { Storage } from '@ionic/storage';
import { environment } from 'src/environments/environment';

<<<<<<< HEAD
//@Injectable({
//  providedIn: 'root'
//})
=======
// @Injectable({
//   providedIn: 'root'
// })
>>>>>>> bbebfeb6b81e361fbddb641de4265c9fa555cfef
export class AuthenticateService {


  constructor(private storage: Storage) { }

  async loginUser(credential) {

    try {
      const user = await this.storage.get("user");
      const options = {
        method: 'POST',
        body: JSON.stringify(credential),
        headers: new Headers({
          'Content-Type': 'application/json'
        })
      }
      return fetch(`${environment.publibikeApi}/api/movil/login`, options).then(
        response => response.json()
      )
    } catch (error) {
      return error;
    }
  }

  async registerUser(userData) {
    console.log(userData);
    const options = {
      method: 'POST',
      mode: 'no-cors'as RequestMode,
      body: JSON.stringify(userData),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    }
    return await fetch(`${environment.publibikeApi}/api/movil/registerUser`, options).then(
      response => response
    )
  }
}
