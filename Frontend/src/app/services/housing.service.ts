import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { IProperty } from '../property/IProperty.interface';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor(private http : HttpClient) { }

  getAllProperties(sellrent : number) : Observable<IProperty[]>{
    return this.http.get('data/properties.json').pipe(
      map((data:any) => {
        const propertiesArray : Array<IProperty> = [];
        for(const i in data){
          if(data.hasOwnProperty(i) && data[i].SellRent === sellrent){
                 
            propertiesArray.push(data[i]);
          }
        }
        return propertiesArray;
      })
    )   
  }



}
