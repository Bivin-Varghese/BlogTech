import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { MyBlog } from 'src/models/myBlog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  searchKey:string=''
  
  //to hold blog details
  allBlogs:MyBlog[]=[]

  

  //dependency injection
  constructor(private api: ApiService) { }



  ngOnInit(): void {
    this.api.getAllBlogs().subscribe((result: any) => {
      // console.log(result);
      this.allBlogs=result

    })
  }


  search(eve:any){
    // console.log(eve.target.value);
    this.searchKey=eve.target.value
    
   
  }

}
