
import { Component, OnInit } from '@angular/core';
import { HousingService } from 'src/app/services/housing.service';
import { IProperty } from '../IProperty.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit{

  propertyList : any;
  SellRent = 1;

  constructor(private route: ActivatedRoute ,private housingService:HousingService)
  { 

  }

  ngOnInit(): void {
    if(this.route.snapshot.url.toString()){
      this.SellRent = 2 // Means we are on rent-property URL else we are no base URL
    }
    this.housingService.getAllProperties(this.SellRent).subscribe(
      data =>{
        this.propertyList = data;
        console.log(this.route.snapshot.url.toString());
        
      },err =>{
        console.log(err);
      }  
    )
  }

}
