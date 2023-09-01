import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})

export class ViewComponent implements OnInit {

  //to hold blog heading
  blogHeading: string = '';

  //to hold particular blog , to display in view
  blog: any = []

  constructor(private activatedRoute: ActivatedRoute, private api: ApiService, private route: Router) { }

  ngOnInit(): void {
    // get particular blog id from url
    this.activatedRoute.params.subscribe((data: any) => {
      // console.log(data);
      this.blogHeading = data.blogHead
      // console.log(this.blogHeading);

      // get blog particular details
      this.api.viewBlog(this.blogHeading).subscribe((data: any) => {
        // console.log(data);
        this.blog = data

      })

    })
  }

  deleteBlogg(blogId: any) {
    this.api.deleteBlog(blogId).subscribe((result) => {
      alert('Blog deleted')
      this.route.navigateByUrl('')


    })
  }
}
