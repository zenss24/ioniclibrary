import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-kategori',
  templateUrl: './kategori.page.html',
  styleUrls: ['./kategori.page.scss'],
})
export class KategoriPage {
  constructor(private alertController: AlertController) { }

  async showReportAlert() {
    const alert = await this.alertController.create({
      header: 'Laporkan',
      message: 'Apakah Anda ingin melaporkan ini?',
      buttons: [
        {
          text: 'Batal',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Laporan dibatalkan');
          }
        }, {
          text: 'Laporkan',
          handler: () => {
            console.log('Melaporkan...');
            // Di sini Anda dapat menambahkan logika untuk menangani pelaporan
          }
        }
      ]
    });

    await alert.present();
  }
}
