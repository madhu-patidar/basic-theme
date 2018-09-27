
import { Component, OnInit } from '@angular/core'; 
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee.model';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { Location } from '@angular/common';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employeeList: any =[];
  subscription: Subscription;
  constructor(private employeeService: EmployeeService, 
    private tostr: ToastrService,
  private location : Location
  ) { }
 
  ngOnInit() {
    console.log('path',this.location.path())
  //   //snapshotChanges
  //   var x = this.employeeService.getData();
  //   this.subscription = x.valueChanges().subscribe(item=>{
  //     console.log('data streaming');
  //     item.forEach(element => {
  //       if(element){
  //         // var y = element.payload.toJSON();
  //         //   y["$key"] = element.key;
  //           this.employeeList.push(element);
  //       }
            
  //         })
      
  // })
  var x = this.employeeService.getData();
  x.snapshotChanges().subscribe(item => {
    this.employeeList = [];
    item.forEach(element => {
      var y = element.payload.toJSON();
      y["$key"] = element.key;
      this.employeeList.push(y as Employee);
    });
  });
}

 
  onEdit(emp: Employee) {
    this.employeeService.selectedEmployee = Object.assign({}, emp);
  }
 
  onDelete(key: string) {
    if (confirm('Are you sure to delete this record ?')) {
      this.employeeService.deleteEmployee(key);
      this.tostr.warning("Deleted Successfully", "Employee register");
    }
  }
 
}
