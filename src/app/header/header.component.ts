import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
imgPath : string;
  constructor() { }

  ngOnInit() {
    this.imgPath = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwHsRMlsSL7Z86O2Gh3DdesUDUlYdrPXjaJ-lSe5p_lPNnLptC';
  }

}