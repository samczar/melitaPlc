import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-offer-list',
  templateUrl: './offer-list.component.html',
  styleUrls: ['./offer-list.component.css']
})
export class OfferListComponent implements OnInit {
  offers;
  selectedOffer;
  constructor(public dataService: DataService) {}

  ngOnInit() {
    this.getOffers();
  }
  getOffers() {
    this.dataService.getOffers().subscribe(data => {
      this.offers = data;
    });
  }
  selectOffer(id) {
    this.dataService.getSubscription(id).subscribe(data => {
      this.selectedOffer = data;
      console.log(this.selectedOffer);
    });
  }
}
