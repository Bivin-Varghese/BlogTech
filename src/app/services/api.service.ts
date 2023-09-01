import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MyBlog } from 'src/models/myBlog';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl = 'http://localhost:3000/blog'

  //dependency injection
  constructor(private http: HttpClient) { }

  //function to get blogs
  getAllBlogs(): Observable<MyBlog> {
    return this.http.get(this.baseUrl)
  }

  //api call for  fetch particular blog details in view/update
  viewBlog(blogHeading: string) {
    //'http://localhost:3000/blog/Whatsapp%20tricks'
    return this.http.get(`${this.baseUrl}/${blogHeading}`)
  }

  //api call for adding new blog
  addBlog(blogBody: any) {

    return this.http.post(this.baseUrl, blogBody)

  }

  //api call for delete
  deleteBlog(blogId: any) {
    return this.http.delete(`${this.baseUrl}/${blogId}`)
  }

  updateBlog(blogID: any, blogBody: any) {
    return this.http.put(`${this.baseUrl}/${blogID}`, blogBody)

  }

}
