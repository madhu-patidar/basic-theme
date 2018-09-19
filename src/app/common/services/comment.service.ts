import { Injectable } from '@angular/core';
import { Router, Event, NavigationStart } from '@angular/router';
import { HttpClient, HttpResponse, } from '@angular/common/http';
import { HttpHeaders, } from '@angular/common/http';
import { COMMENT_URL, POST_URL } from '../constants/api.constant';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  headers: HttpHeaders;

  constructor(private http : HttpClient,) {
    this.headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
   }

  createComment(comment) { 
    let response : any;
     return this.http.post(COMMENT_URL, comment, {headers: 
       this.headers})
     .map(res => {
        response = res
        return response
       }       
     );
  }

  getComment(){
    let response : any;
     return this.http.get(COMMENT_URL, {headers: 
       this.headers})
     .map(res => {
        response = res
        return response
       }       
     );
  }

  getPosts(){
    let response : any;
     return this.http.get(POST_URL, {headers: 
       this.headers})
     .map(res => {
        response = res
        return response
       }       
     );
  }


  deleteComment(id){
    let response : any;
     return this.http.delete(COMMENT_URL + '/'+id, {headers: 
       this.headers})
     .map(res => {
        response = res
        return response
       }       
     );
  }


}
