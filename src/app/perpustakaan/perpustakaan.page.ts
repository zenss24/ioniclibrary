import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-perpustakaan',
  templateUrl: 'perpustakaan.page.html',
  styleUrls: ['perpustakaan.page.scss'],
})
export class PerpustakaanPage {
  selectedSegment: string = 'custom';

  // Contoh data untuk slides
  slides = [
    {
      imgUrl: 'https://ebooks.gramedia.com/ebook-covers/69282/image_highres/BLK_KHNSL2021224860.jpg',
      title: 'Buku 1'
    },
    {
      imgUrl: 'https://ebooks.gramedia.com/ebook-covers/69282/image_highres/BLK_KHNSL2021224861.jpg',
      title: 'Buku 2'
    },
    {
      imgUrl: 'https://ebooks.gramedia.com/ebook-covers/69282/image_highres/BLK_KHNSL2021224862.jpg',
      title: 'Buku 3'
    }
  ];

  // Options for ion-slides
  slideOpts = {
    initialSlide: 0,
    speed: 400,
    loop: true,
    autoplay: {
      delay: 3000,
    }
  };

  constructor(private navCtrl: NavController) { }

  onItemClick(item: string) {
    this.navCtrl.navigateForward('/detail', {
      queryParams: {
        item: item
      }
    });
  }

  downloadImage(imageUrl: string) {
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = this.extractFileName(imageUrl);
    link.click();
  }

  extractFileName(url: string): string {
    return url.split('/').pop() || 'download';
  }
}
