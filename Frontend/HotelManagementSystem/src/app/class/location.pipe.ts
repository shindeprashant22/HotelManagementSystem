import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'location'
})
export class LocationPipe implements PipeTransform {

  transform(locations:any, searchText:any): any {
    if(searchText == null) return locations;

    return locations.filter(function(location: { hotelAddress: string; }){
      return location.hotelAddress.toLowerCase().indexOf(searchText.toLowerCase()) > -1;
    })
  }
}