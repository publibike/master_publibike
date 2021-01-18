import { Injectable } from '@angular/core';
import { ControlContainer } from '@angular/forms';
import { Storage } from '@ionic/storage';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
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
      return fetch(`${environment.publibikeApi}/api/marca/movil/login`, options).then(
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
      body: JSON.stringify(userData),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    }
    return await fetch(`${environment.publibikeApi}/api/marca/movil/registerUser`, options).then(
      response => response
    )
  }
}
