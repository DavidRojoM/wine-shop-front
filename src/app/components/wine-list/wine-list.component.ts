import { Component, OnInit } from '@angular/core';
import { WineItem } from '../../interfaces/wine-item';
import { FetchWinesService } from '../../services/fetch-wines.service';

@Component({
  selector: 'app-wine-list',
  templateUrl: './wine-list.component.html',
  styleUrls: ['./wine-list.component.scss'],
})
export class WineListComponent implements OnInit {
  items!: WineItem[];
  itemToUpdate!: WineItem;
  constructor(private readonly wineService: FetchWinesService) {}

  ngOnInit(): void {
    this.wineService.getWines().subscribe(
      (res) => (this.items = res),
      (err) => console.error(err)
    );
  }

  deleteItem($event: WineItem) {
    console.log($event);
    // this.wineService.deleteItem($event)
  }

  setItemToBeUpdated($event: WineItem) {
    this.itemToUpdate = $event;
  }

  createOrUpdate($event: WineItem) {
    $event._id ? console.log('actualizar') : console.log('crear');
  }
}