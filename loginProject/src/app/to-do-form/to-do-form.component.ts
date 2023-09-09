import { Component, OnInit ,  Input, Output, EventEmitter, } from '@angular/core';


@Component({
  selector: 'app-to-do-form',
  templateUrl: './to-do-form.component.html',
  styleUrls: ['./to-do-form.component.css']
})
export class ToDoFormComponent implements OnInit {
  @Input() studObj = ''
  @Output() informParent = new EventEmitter();
  studentFormObj : any ={}
  studArray :any = []
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    debugger
    this.informParent.emit('The child triggered an event');
    // this.studArray.push(this.studentFormObj)
    // this.studentFormObj = {}
    // console.log("studArray",this.studArray);
    // localStorage.setItem('studArrayNew',JSON.stringify(this.studArray))
    
  }

}
