import { EditHaditsPage } from './../daftar-hadits/edit-hadits/edit-hadits';
import { EditSuratPage } from './../daftar-surat/edit-surat/edit-surat';
import { TbHaditsApi } from './../../shared/sdk/services/custom/TbHadits';
import { TbSuratApi } from './../../shared/sdk/services/custom/TbSurat';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TanyaQuPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-tanya-qu',
  templateUrl: 'tanya-qu.html',
})
export class TanyaQuPage {
  txtSearch: any;
  items: any;
  ishidden1: any = true;
  ishidden2: any = true;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public tbSuratApi: TbSuratApi,
    public tbHaditsApi: TbHaditsApi
  ) {

  }

  loadSerachAlQuran() {
    let val = this.txtSearch;
    this.tbSuratApi.find({
      where: {
        or: [
          { suratid: { like: '%' + val + '%' } },
          { suratname: { like: '%' + val + '%' } },
          { suratisi: { like: '%' + val + '%' } },
          { suratjumlah: { like: '%' + val + '%' } }
        ]

      }, order: "suratname ASC"
    }).subscribe(value => {
      console.log(val, 1111, value);

      this.ishidden1 = false;
      this.ishidden2 = true;
      this.items = value;
    });

  }

  loadSearchHadits() {
    console.log(this.txtSearch, '2');
    let val2 = this.txtSearch;
    this.tbHaditsApi.find({
      where: {
        or: [
          { haditsid: { like: '%' + val2 + '%' } },
          { haditsname: { like: '%' + val2 + '%' } },
          { haditsriwayat: { like: '%' + val2 + '%' } },
          { haditsisi: { like: '%' + val2 + '%' } },
          { haditskategori: { like: '%' + val2 + '%' } }
        ]

      }, order: "haditsname ASC"
    }).subscribe(result => {
      this.ishidden1 = true;
      this.ishidden2 = false;
      this.items = result;
    });
  }
  loadEditSurat(data) {
    this.navCtrl.push(EditSuratPage, { data: data, ishide: true });
  }

  loadEditHadits(data) {
    this.navCtrl.push(EditHaditsPage, { data: data, ishide: true });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TanyaQuPage');
  }

}
