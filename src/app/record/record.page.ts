import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ApiPublibikeBienestarService } from '../services/api-publibike-bienestar.service';

@Component({
  selector: 'app-record',
  templateUrl: './record.page.html',
  styleUrls: ['./record.page.scss'],
})
export class RecordPage implements OnInit {

  userId: { _id: String } = { _id: "" };
  user: {
    nombre: String,
    apellido: String,
    usuario: String,
    empresa: {
      nombre: String
    },
    reconocimientos: any[]
    km_total: number,
    cal_total: number,
    co2_total: number,
    tiempo_total: number
  } = {
      nombre: "",
      apellido: "",
      usuario: "",
      empresa: {
        nombre: ""
      },
      reconocimientos: [],
      km_total: 0,
      cal_total: 0,
      co2_total: 0,
      tiempo_total: 0
    };

  constructor(
    private storage: Storage,
    private apiService: ApiPublibikeBienestarService
  ) { }

  async ionViewDidEnter(){
    this.userId = await this.storage.get("userId");

    // console.log(this.userId)
    this.apiService.getUserData(this.userId._id).then(async (res) => {
      this.storage.set("userData", res);
      this.user = await this.storage.get("userData");
      console.log(this.user);
      this.user.km_total = (this.user.km_total*100)/1000;
      this.user.cal_total = (this.user.cal_total*100)/1000;
      this.user.co2_total = (this.user.co2_total*100)/1000;
      this.user.tiempo_total = (this.user.tiempo_total*100)/1000;
    })
  }

  ngOnInit() {
  }

}
