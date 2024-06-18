import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.page.html',
  styleUrls: ['./profil.page.scss'],
})
export class ProfilPage {

  constructor(private navCtrl: NavController) { }

  editProfile() {
    this.navCtrl.navigateForward('/edit-profil'); // Sesuaikan rute ke halaman edit profil
  }

  navigateToKeamananAkun() {
    this.navCtrl.navigateForward('/keamanan-akun');
  }
}