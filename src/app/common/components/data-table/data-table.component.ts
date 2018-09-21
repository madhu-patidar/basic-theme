import { Component, OnInit } from '@angular/core';
import { CommentService } from '../../services/comment.service';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {
  comments: any;
  data: ({ 'name': string; 'anil.singh581@gmail.com': string; 'age': string; 'city': string; 'email'?: undefined; } | { 'name': string; 'email': string; 'age': string; 'city': string; 'anil.singh581@gmail.com'?: undefined; })[];


  constructor(
    private commentService : CommentService
  ) { }

  ngOnInit() {
    this.getComments();
  }

  getComments(){
    this.commentService.getComment().subscribe(res =>{
      console.log(res);
      this.comments = res;
    })
  }

}
