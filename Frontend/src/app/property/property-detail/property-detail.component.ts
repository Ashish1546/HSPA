import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css']
})
export class PropertyDetailComponent implements OnInit {

  public propertyId: number = 0;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {

    this.propertyId = +this.route.snapshot.params['id'];

    this.route.params.subscribe(
      (params)=> {
        this.propertyId = +params['id']
      }
    )
  }

  onSelectNext()
  {
    this.propertyId += 1;
    this.router.navigate(['property-details/', this.propertyId]) // This is absoulte path
  }

}
