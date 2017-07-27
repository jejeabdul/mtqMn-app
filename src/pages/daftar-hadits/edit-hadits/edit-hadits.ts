import { TbHaditsApi } from './../../../shared/sdk/services/custom/TbHadits';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NavController, NavParams, AlertController, LoadingController, Events } from 'ionic-angular';
/**
 * Generated class for the EditHaditsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-edit-hadits',
  templateUrl: 'edit-hadits.html',
})
export class EditHaditsPage {
  public myForm: any = null;
  hid: any;
  items: any;
  ishide: any = false;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public fb: FormBuilder,
    public tbHaditsApi: TbHaditsApi,
    private alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    public events: Events,
  ) {
    this.hid = this.navParams.get('data');
    this.ishide = this.navParams.get('ishide');
    this.loadDataHadits(this.hid);
    this.myForm = fb.group({
      'txtIdHadits': ['', Validators.required],
      'txtNamaHadits': ['', Validators.required],
      'txtRiwayatHadits': ['', Validators.required],
      'selKategoriHadits': ['', Validators.required],
      'txtIsiHadits': ['', Validators.required]
    });
  }

  loadDataHadits(id) {
    this.tbHaditsApi.find({
      where: {
        id: id
      }
    }).subscribe(val => {
      this.items = val;
    });
  }

  doEditHadits(data) {
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });

    loading.present();

    this.tbHaditsApi.updateAll({
      id: this.hid
    }, {
        haditsid: data.txtIdHadits,
        haditsname: data.txtNamaHadits,
        haditsriwayat: data.txtRiwayatHadits,
        haditskategori: data.selKategoriHadits,
        haditsisi: data.txtIsiHaditsF
      }).subscribe(val => {
        loading.dismiss().then(() => {
          if (val) {
            this.alertCtrl.create({
              message: 'Edit Surat Sukses',
              buttons: [{
                text: 'OK',
                handler: data => {
                  this.events.publish('user:haditsedit');
                  this.navCtrl.pop();
                }
              }]
            }).present();
          }
        });
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditHaditsPage');
  }

}
