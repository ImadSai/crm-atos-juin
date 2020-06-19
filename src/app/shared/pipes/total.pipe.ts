import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'total'
})
export class TotalPipe implements PipeTransform {

  transform(value: any, ...args: any[]): number {
    if (value) {
      // if (args.length > 0) {
      //   return (value.tjmHt * value.nbJours) * (1 + value.tva / 100);

      // }
      return value.tjmHt * value.nbJours * (1 + (value.tva / 100) * (args[0] ? 1 : 0));
      // return value.tjmHt * value.nbJours;
    }
    return null;
  }

}
