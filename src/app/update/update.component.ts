import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  blogHeading: string = ''
  blog: any = []

  constructor(private actiavatdRoute: ActivatedRoute, private api: ApiService, private router: Router) { }

  ngOnInit(): void {

    // get particulr blog id 
    this.actiavatdRoute.params.subscribe((data: any) => {
      // console.log(data);  
      this.blogHeading = data.blogHead


      // get particular blog details 
      this.api.viewBlog(this.blogHeading).subscribe((data: any) => {
        this.blog = data
      })


    })

  }

  update() {
    return this.api.updateBlog(this.blogHeading, this.blog).subscribe((data: any) => {
      // console.log(this.blog);

      this.router.navigateByUrl('')
    })
  }


}
