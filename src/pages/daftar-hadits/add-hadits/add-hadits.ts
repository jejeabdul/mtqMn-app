import { TbHaditsApi } from './../../../shared/sdk/services/custom/TbHadits';
import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, LoadingController, Events } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';

/**
 * Generated class for the AddHaditsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-add-hadits',
  templateUrl: 'add-hadits.html',
})
export class AddHaditsPage {
  public myForm: any = null;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public tbHaditsApi: TbHaditsApi,
    public fb: FormBuilder,
    private alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    public events: Events,
  ) {
    this.myForm = fb.group({
      'txtIdHadits': ['', Validators.required],
      'txtNamaHadits': ['', Validators.required],
      'txtRiwayatHadits': ['', Validators.required],
      'selKategoriHadits': ['', Validators.required],
      'txtIsiHadits': ['', Validators.required]
    });
  }

  doSimpanHadits(data) {
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });

    loading.present();

    this.tbHaditsApi.create({
      haditsid: data.txtIdHadits,
      haditsname: data.txtNamaHadits,
      haditsriwayat: data.txtRiwayatHadits,
      haditskategori: data.selKategoriHadits,
      haditsisi: data.txtIsiHadits
    }).subscribe(val => {
      loading.dismiss().then(() => {
        if (val) {
          this.alertCtrl.create({
            message: 'Add Hadits Sukses',
            buttons: [{
              text: 'OK',
              handler: data => {
                this.events.publish('user:haditsadd');
                this.navCtrl.pop();
              }
            }]
          }).present();
        }
      });
    });

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AddHaditsPage');
  }

}
