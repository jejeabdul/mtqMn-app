import { TbSuratApi } from './../../../shared/sdk/services/custom/TbSurat';
import { FormBuilder, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, LoadingController, Events } from 'ionic-angular';

/**
 * Generated class for the EditSuratPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-edit-surat',
  templateUrl: 'edit-surat.html',
})
export class EditSuratPage {
  sid: any;
  public myForm: any = null;
  items: any;
  ishide: any = false;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public fb: FormBuilder,
    public tbSuratApi: TbSuratApi,
    private alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    public events: Events,
  ) {
    this.sid = this.navParams.get('data');
    this.ishide = this.navParams.get('ishide');
    this.loadDataSurat(this.sid);
    this.myForm = fb.group({
      'txtIdSurat': ['', Validators.required],
      'txtNamaSurat': ['', Validators.required],
      'txtIsiSurat': ['', Validators.required],
      'txtJumalahAyat': ['', Validators.required],
    });
  }

  loadDataSurat(id) {
    this.tbSuratApi.find({
      where: {
        id: id
      }
    }).subscribe(val => {
      this.items = val;
    });
  }

  doEditSurat(data) {
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });

    loading.present();

    this.tbSuratApi.updateAll({
      id: this.sid
    }, {
        suratid: data.txtIdSurat,
        suratname: data.txtNamaSurat,
        suratisi: data.txtIsiSurat,
        suratjumlah: data.txtJumalahAyat
      }).subscribe(val => {
        loading.dismiss().then(() => {
          if (val) {
            this.alertCtrl.create({
              message: 'Edit Surat Sukses',
              buttons: [{
                text: 'OK',
                handler: data => {
                  this.events.publish('user:suratedit');
                  this.navCtrl.pop();
                }
              }]
            }).present();
          }
        });
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditSuratPage');
  }

}
