import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-koran',
  templateUrl: './koran.page.html',
  styleUrls: ['./koran.page.scss'],
})
export class KoranPage implements OnInit {

  searchQuery: string = '';
  items = [
    { label: 'Agama', count: 6 },
    { label: 'Horor & Paranormal', count: 15 },
    { label: 'Sport & Outdoor', count: 3 },
    { label: 'Islam', count: 8 },
    { label: 'Humor & Komedi', count: 8 },
    { label: 'Food dan Drink', count: 8 },
    { label: 'Business', count: 8 },
    { label: 'Parenting', count: 8 },
  ];
  filteredItems = [...this.items];

  constructor() { }

  ngOnInit() { }

  filterItems(event: any) {
    const query = event.target.value.toLowerCase();
    this.filteredItems = this.items.filter(item => item.label.toLowerCase().includes(query));
  }
}
