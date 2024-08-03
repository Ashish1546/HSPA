import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TabsetComponent } from 'ngx-bootstrap/tabs';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {
  @ViewChild('Form')
  addPropertyForm!: NgForm;
  
  @ViewChild('formsTab') formsTabs?: TabsetComponent;
 

  proertyTypes : Array<string> = ['Hosue', 'Appartment', 'Duplex'];
  furnishTypes : Array<string> = ['Fully', 'Semi', 'Unfurnished'];

  constructor(private router : Router) { }

  ngOnInit() {
  }

  

  onSubmit(){
    console.log("Inside OnSubmit !");
    console.log(this.addPropertyForm);
    
  }

  selectTab(tabId: number) {
    if (this.formsTabs?.tabs[tabId]) {
      this.formsTabs.tabs[tabId].active = true;
    }
  }

}
