import { TbSuratApi } from './../../../shared/sdk/services/custom/TbSurat';
import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, LoadingController, Events } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';

/**
 * Generated class for the AddSuratPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-add-surat',
  templateUrl: 'add-surat.html',
})
export class AddSuratPage {
  public myForm: any = null;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public fb: FormBuilder,
    public tbSuratApi: TbSuratApi,
    private alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    public events: Events,
  ) {
    this.myForm = fb.group({
      'txtIdSurat': ['', Validators.required],
      'txtNamaSurat': ['', Validators.required],
      'txtIsiSurat': ['', Validators.required],
      'txtJumalahAyat': ['', Validators.required],
    });
  }

  doSimpanSurat(data) {
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });

    loading.present();

    this.tbSuratApi.create({
      suratid: data.txtIdSurat,
      suratname: data.txtNamaSurat,
      suratisi: data.txtIsiSurat,
      suratjumlah: data.txtJumalahAyat
    }).subscribe(val => {
      loading.dismiss().then(() => {
        if (val) {
          this.alertCtrl.create({
            message: 'Add Surat Sukses',
            buttons: [{
              text: 'OK',
              handler: data => {
                this.events.publish('user:suratadd');
                this.navCtrl.pop();
              }
            }]
          }).present();
        }
      });
    });

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AddSuratPage');
  }

}
