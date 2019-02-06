import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nbrFondateur'
})
export class NbrFondateurPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value == 1 ? "Unique" : (value == 2 ? "Couple" : "Groupe")
  }

}
