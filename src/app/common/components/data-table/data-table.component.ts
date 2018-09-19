import { Component, OnInit } from '@angular/core';
import { CommentService } from '../../services/comment.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {
  comments: any;

  constructor(
    private commentService : CommentService
  ) { }

  ngOnInit() {
    this.getComments();
    $(document).ready(function() {
      $('#example').DataTable();
  } );
  }

  getComments(){
    this.commentService.getComment().subscribe(res =>{
      console.log(res);
      this.comments = res;
    })
  }

}
