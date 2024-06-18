import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-bagikan',
  templateUrl: './bagikan.page.html',
  styleUrls: ['./bagikan.page.scss'],
})
export class BagikanPage {
  constructor(private modalController: ModalController) { }

  dismiss() {
    this.modalController.dismiss();
  }

  share(platform: string) {
    const url = 'https://your-website.com/share-content';
    const text = 'Check out this amazing content!';

    switch (platform) {
      case 'whatsapp':
        window.open(`https://wa.me/?text=${encodeURIComponent(text)}%20${encodeURIComponent(url)}`, '_blank');
        break;
      case 'instagram':
        window.open(`https://www.instagram.com/?url=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'tiktok':
        window.open(`https://www.tiktok.com/share?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`, '_blank');
        break;
      case 'telegram':
        window.open(`https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`, '_blank');
        break;
      case 'email':
        window.open(`mailto:?subject=${encodeURIComponent('Check this out!')}&body=${encodeURIComponent(text)}%20${encodeURIComponent(url)}`);
        break;
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'sms':
        window.open(`sms:?body=${encodeURIComponent(text)}%20${encodeURIComponent(url)}`);
        break;
      default:
        console.log('Unsupported platform');
        break;
    }
  }
}
