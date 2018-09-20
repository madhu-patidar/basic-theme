import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CommentService } from '../../services/comment.service';
import Swal from 'sweetalert2';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  myForm: FormGroup;
  postId: any = 1;
  comments:any
  dropdownList: string;

  constructor(
    private commentService : CommentService,
    private toastr: ToastrService,
  ) { }

  ngOnInit() {
    this.initForm();
    this.getComments();
    this.getPost();
  }

  initForm() {
    this.myForm = new FormGroup({
      body: new FormControl('', Validators.required),
      postId : new FormControl('', Validators.required),
    });
  }

  getComments(){
    this.commentService.getComment().subscribe(res =>{
      console.log(res);
      this.comments = res;
    })
  }


  getPost(){
    this.dropdownList = ''
    this.commentService.getPosts().subscribe(res =>{
      this.dropdownList = res;
    })
  }  

  formReset(){
    this.myForm.reset();
  }

  onSubmit(comment){
    // comment['postId'] = this.postId;
    this.commentService.createComment(comment).subscribe(res =>{
      console.log(res);
      this.formReset();
      // this.postId ++;
      this.toastr.success('Your comment has been created', 'Success!');
      this.getComments();
    })
  }

  deleteRecord(id){
    Swal({
      title: 'Are you sure?',
      text: 'You will not be able to recover this record!',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
        this.commentService.deleteComment(id).subscribe(res =>{
          Swal(
            'Deleted!',
            'Your record has been deleted.',
            'success'
          )
        this.toastr.success('Your comment has been deleted.', 'Delete');
          this.getComments();
        })
       
      // For more information about handling dismissals please visit
      // https://sweetalert2.github.io/#handling-dismissals
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal(
          'Cancelled',
          'Your record is safe :)',
          'error'
        )
      }
    })
    // this.commentService.deleteComment(id).subscribe(res =>{
    //   console.log(res);
    //   this.getComments();
    // })
  }


}
