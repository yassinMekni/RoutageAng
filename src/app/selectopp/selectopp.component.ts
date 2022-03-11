import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-selectopp',
  templateUrl: './selectopp.component.html',
  styleUrls: ['./selectopp.component.css']
})
export class SelectoppComponent implements OnInit {

  constructor(
    private router : Router
  ) { }

  ngOnInit(): void {
  }
  goto(route : any){
    const Link = [route];
    this.router.navigate(Link);
  }

}
