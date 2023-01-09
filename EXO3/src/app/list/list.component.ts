import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  planetes : Array<string> = ["Mercure","Vénus","Terre","Mars","Jupiter","Saturne","Uranus"," Neptune"]

  constructor() { }

  ngOnInit(): void {
  }

}
