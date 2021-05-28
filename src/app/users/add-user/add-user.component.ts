import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
 @Output() userAdded = new EventEmitter<{}>();
  name:string;
  description: string;
  url: string;
  error: string;
  user: {};
  constructor() { }

  ngOnInit(): void {
  }

   addUser(){
     if(this.name == null ){
       this.error = "Name is required!";
              return false;
     }
     if(this.description == null || this.description.length < 100){
       this.error = "Description should be 100 charcater long.";
       return false;
     }
     else {
       this.error = null;
     }
    const user = {
      'name' : this.name,
      'description': this.description,
      'url': this.url
    }
    this.user = user;
    this.userAdded.emit(this.user);
    this.name = this.description = this.url =  null;
  }

}
