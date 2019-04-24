import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'removeSpecialChar'
})

export class removeSpecialChar implements PipeTransform {

  transform(value: string): string {
    let newVal = value.replace(/[^\w\s]/gi, '').toLocaleLowerCase();
    return this.titleCase(newVal);
  }
  titleCase(str) {
    let splitStr = str.toLowerCase().split(' ');
    for (let i = 0; i < splitStr.length; i++) {
      splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    return splitStr.join(' ');
  }

}
