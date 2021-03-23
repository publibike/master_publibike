import { Injectable } from '@angular/core';
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
export class ApiPublibikeMarcaService {

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
      return fetch(`${environment.publibikeApi}/api/movil/usuario/${id}`,options).then(
        response => response.json()
      )
    } catch (error) {
      
    }
  }
  getUserRoutes(id) {
    return fetch(`${environment.publibikeApi}/api/movil/usuario/${id}/recorridos`).then(
      response => response.json()
    )
  }
  getUserCampaings(id) {
    return fetch(`${environment.publibikeApi}/api/movil/usuario/${id}/campanas`).then(
      response => response.json()
    )
  }
  getCampaings() {
    return fetch(`${environment.publibikeApi}/api/movil/campanas`).then(
      response => response.json()
    )
  }
  getCampaing(id) {
    return fetch(`${environment.publibikeApi}/api/movil/campana/${id}`).then(
      response => response.json()
    )
  }
  getCompanies() {
    return fetch(`${environment.publibikeApi}/api/movil/empresas`).then(
      response => response.json()
    )
  }

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
        console.log(response.text())
      }
    ).catch(error => console.log(error))
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

    return await fetch(`${environment.publibikeApi}/api/marca/movil/usuario/${id}`, options).then(
      response => {
        console.log(response.text())
      }
    ).catch(error => console.log(error))
  }
  async registerCampaing(campData){
    const user = await this.storage.get("userData").then(res => res);
    console.log(campData)
    const id = user._id
    console.log(id);
    const options = {
      method: 'PUT',
      body: JSON.stringify(campData),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    }

    return await fetch(`${environment.publibikeApi}/api/movil/usuario/${id}/campana`, options).then(
      response => response.text()
    ).catch(error => console.log(error))
  }
  async updateActualCampaing(campData){
    const user = await this.storage.get("userData").then(res => res);
    console.log(campData)
    const id = user._id
    console.log(id);
    const options = {
      method: 'PUT',
      body: JSON.stringify(campData),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    }

    return await fetch(`${environment.publibikeApi}/api/movil/usuario/${id}/actualcampana`, options).then(
      response => response.text()
    ).catch(error => console.log(error))
  }
}
