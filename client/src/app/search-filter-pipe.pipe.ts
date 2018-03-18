import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilterPipe'
})
export class SearchFilterPipePipe implements PipeTransform {

  transform(items: any[], searchText: string): any[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLowerCase();

    return items.filter( item => {
      let result = false;
      if (item.question.toLowerCase().includes(searchText) || item._user.username.toLowerCase().includes(searchText)) {
        result = true;
      }
      return result;
    });
   }

}
