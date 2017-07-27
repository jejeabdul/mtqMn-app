import { EditHaditsPage } from './edit-hadits/edit-hadits';
import { AddHaditsPage } from './add-hadits/add-hadits';
import { TbHaditsApi } from './../../shared/sdk/services/custom/TbHadits';
import { Component } from '@angular/core';
import { NavController, NavParams, Events } from 'ionic-angular';

/**
 * Generated class for the DaftarHaditsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-daftar-hadits',
  templateUrl: 'daftar-hadits.html',
})
export class DaftarHaditsPage {
  items: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public events: Events,
    public tbHaditsApi: TbHaditsApi
  ) {
    this.loadHadits();

    this.events.subscribe('user:haditsadd', (val) => {
      this.loadHadits();
    });
    this.events.subscribe('user:haditsedit', (val) => {
      this.loadHadits();
    });

  }

  loadHadits() {
    this.tbHaditsApi.find().subscribe(val => {
      this.items = val;
    });
  }

  loadAddHadits() {
    this.navCtrl.push(AddHaditsPage);
  }

  loadEditHadits(data) {
    this.navCtrl.push(EditHaditsPage, { data: data });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DaftarHaditsPage');
  }

}
