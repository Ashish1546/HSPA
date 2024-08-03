
import { Component, Input } from "@angular/core";
 
@Component({
    selector:'app-property-card',// Name of tag- which will use in different html file
    //template : `<h1>I am a card </h1>`,
    templateUrl: 'property-card.component.html',
   // styles :['h1 {font-weight: normal;}']
   styleUrls:['property-card.component.css']
})


 export class PropertyCardComponent{
    @Input() property: any

 }