import { EditSuratPage } from './edit-surat/edit-surat';
import { AddSuratPage } from './add-surat/add-surat';
import { TbSuratApi } from './../../shared/sdk/services/custom/TbSurat';
import { Component } from '@angular/core';
import { NavController, NavParams, Events } from 'ionic-angular';

/**
 * Generated class for the DaftarSuratPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-daftar-surat',
  templateUrl: 'daftar-surat.html',
})
export class DaftarSuratPage {
  items: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public tbSuratApi: TbSuratApi,
    public events: Events,
  ) {
    this.loadSurat();
    this.events.subscribe('user:suratadd', (val) => {
      this.loadSurat();
    });
    this.events.subscribe('user:suratedit', (val) => {
      this.loadSurat();
    });
  }

  loadSurat() {
    this.tbSuratApi.find().subscribe(val => {
      this.items = val;
    });
  }

  loadAddSurat() {
    this.navCtrl.push(AddSuratPage);
  }

  loadEditSurat(data) {
    this.navCtrl.push(EditSuratPage, { data: data });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DaftarSuratPage');
  }

}
