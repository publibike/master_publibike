import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor(private storage: Storage) { }

  async loginUser(credential) {
    const user = await this.storage.get('user');
    const options = {
      method: "POST",
      body: JSON.stringify(credential),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    }
    return fetch(`${environment.publibikeApi}/api/bienestar/movil/login`,options).then(
      response => response.json()
    )
  }
}
