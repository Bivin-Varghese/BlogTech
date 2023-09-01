import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})

// 18-05-23   T-0124  
export class FilterPipe implements PipeTransform {


  transform(allBlogs: any[], searchKey: string, propName: string): any[] {
    
    const result: any[] = []

    if (!allBlogs || searchKey == '' || propName == '') {
      return allBlogs
    }

    allBlogs.forEach((blog: any) => {
      if (blog[propName].trim().toLowerCase().includes(searchKey.toLowerCase().trim())) {
        result.push(blog)
      }
    })

    return result

  }

}
