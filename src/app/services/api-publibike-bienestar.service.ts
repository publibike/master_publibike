import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiPublibikeBienestarService {

  constructor(private storage: Storage) { }

  getUserData(id) {
    try {
      const options = {
        method: 'GET',
        // body: JSON.stringify(id),
        headers: new Headers({
          'Content-Type': 'application/json'
        })
      }
      return fetch(`${environment.publibikeApi}/api/movil/usuario/${id}`, options).then(
        response => response.json()
      )
    } catch (error) {

    }
  }
  async updateUser(userData) {
    const user = await this.storage.get("userData").then(res => res);
    console.log(userData)
    const id = user._id
    console.log(id);
    const options = {
      method: 'PUT',
      body: JSON.stringify(userData),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    }
    return await fetch(`${environment.publibikeApi}/api/movil/usuario/${id}`, options).then(
      response => {
        console.log(response.text())
      }
    ).catch(error => console.log(error))
  }

  getRecognitions(id){
    return fetch(`${environment.publibikeApi}/api/movil/reconocimiento/${id}`).then(
      response => response.json()
    )
  }
  getUserRecognition(id){
    return fetch(`${environment.publibikeApi}/api/movil/usuario/${id}/reconocimientos`).then(
      response => response.json()
    )
  }
  getCompanyRecognitios(id){
    return fetch(`${environment.publibikeApi}/api/movil/empresa/${id}/reconocimientos`).then(
      response => response.json()
    )
  };
  async sendRute(ruteData) {
    const user = await this.storage.get("userData").then(res => res);
    console.log(ruteData)
    const id = user._id
    console.log(id);
    const options = {
      method: 'PUT',
      body: JSON.stringify(ruteData),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    }

    return await fetch(`${environment.publibikeApi}/api/movil/usuario/${id}/recorrido`, options).then(
      response => {
        console.log("rutaResponde",response.text())
      }
    ).catch(error => console.log(error))
  }

  async sendCovidRisk(riesgo_covid){
    const user = await this.storage.get("userData").then(res => res);
    const id = user._id
    console.log(id);
    const options = {
      method: 'PUT',
      body: JSON.stringify(riesgo_covid),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    }

    return await fetch(`${environment.publibikeApi}/api/movil/usuario/${id}/riesgocovid`, options).then(
      response => {
        console.log(response.text())
      }
    ).catch(error => console.log(error))
  }
}
