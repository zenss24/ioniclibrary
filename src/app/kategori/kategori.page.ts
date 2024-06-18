import { Component } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { BagikanPage } from '../bagikan/bagikan.page'; // Adjust the path as needed

@Component({
  selector: 'app-kategori',
  templateUrl: './kategori.page.html',
  styleUrls: ['./kategori.page.scss'],
})
export class KategoriPage {
  constructor(private alertController: AlertController, private modalController: ModalController) { }

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
            this.showConfirmationAlert(); // Panggil metode untuk menunjukkan konfirmasi
          }
        }
      ]
    });

    await alert.present();
  }

  async showConfirmationAlert() {
    const alert = await this.alertController.create({
      header: 'Laporan Terkirim',
      message: 'Laporan Anda telah dikirimkan.',
      buttons: ['OK']
    });

    await alert.present();
  }

  async openBagikanModal() {
    const modal = await this.modalController.create({
      component: BagikanPage
    });
    return await modal.present();
  }
}
