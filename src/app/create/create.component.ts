import { Component } from '@angular/core';
import { MyBlog } from 'src/models/myBlog';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {

  blog: MyBlog = {}

  constructor(private api:ApiService,private route:Router){}

  // title:string=''
  // author:string=''
  // image:string=''
  // content:string=''

  addBloggg() {
    this.api.addBlog(this.blog).subscribe((data:any)=>{
      this.route.navigateByUrl('')
    })
  }
}
