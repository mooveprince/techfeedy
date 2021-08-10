import { Component, OnInit } from '@angular/core';
import { Posts } from '../model/Posts';
import { ProductTrends } from '../model/productTrends';
import { ProducthuntService } from '../service/producthunt.service';


@Component({
  selector: 'app-producthunt',
  templateUrl: './producthunt.component.html',
  styleUrls: ['./producthunt.component.css']
})
export class ProducthuntComponent implements OnInit {

  trends: ProductTrends;

  constructor(private service:ProducthuntService) { }

  ngOnInit() {
    this.service.getAll()
    .subscribe((trends:ProductTrends) => this.trends = trends  );
  }

}
