import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

  transform(value: string, all: boolean): string {

    let arra = value.split(' ');
    let newReturn = '';

    for (let i = 0; i < arra.length; i++) {
      const element = arra[i];
      let capital = '';
      if (all) {
        capital = `${element.substring(0, 1).toUpperCase()}${element.substring(1, element.length).toLocaleLowerCase()} `;
      } else {
        if (i>0) {
          capital = `${element} `;
        } else {
          capital = `${element.substring(0, 1).toUpperCase()}${element.substring(1, element.length).toLocaleLowerCase()} `;
        }
      }
      newReturn += capital;
    }



    return newReturn;
  }

}
