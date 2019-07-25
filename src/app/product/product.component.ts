import { Component, OnInit,ElementRef,ViewChild } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
product : string;
@ViewChild('ele') pro : ElementRef;
products =[];
  constructor() { }

  ngOnInit() {

  }
  onDel(n : number){
    this.products.splice(n,1);
  this.product='';
  }
  onAdd(){
    this.products.push(this.product);
  }

}