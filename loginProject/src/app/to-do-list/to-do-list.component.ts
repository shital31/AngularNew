import { Component, Input, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {
  // messageFromChild: string = '';
  parentData: string = '';
  openFormObj: any;
  studentList: any = [];
  studentFormObj: any = {
    studId: 0,
    fullName: '',
    mobileNo: '',
    email: '',
    address: '',

  }
  studArray: any = []
  formFlag: boolean = false;
  informParent: any;
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    console.log("parentData",this.parentData);
    const localData = localStorage.getItem('studArrayNew')
    if (localData != null) {
      this.studArray = JSON.parse(localData)
    }
  }

  openForm() {
    this.formFlag = true

  }

  onSubmit() {
    this.studentFormObj.studId = this.studArray.length + 1
      this.studArray.push(this.studentFormObj)
      this.studentFormObj = {}
      console.log("studArray", this.studArray);
      localStorage.setItem('studArrayNew', JSON.stringify(this.studArray))
      this.formFlag=false

  }
  edit(data:any) {
    this.studentFormObj = data
    this.openForm()
    localStorage.setItem('studArrayNew', JSON.stringify(this.studArray))
  }

  onUpdate(){
    this.formFlag = false
  }

  delete(data:any) {
    for(let i=0;i<=this.studArray.length;i++){
      if(this.studArray[i].studId == data){
        this.studArray.splice(i,1)
      }
    }

  }

  parentWillTakeAction(data:any){
    console.log("this.informParent",data);
    this.studArray = data
    this.formFlag=false
  }

}
