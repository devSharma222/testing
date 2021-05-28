import { Component,  OnInit,  } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  
  users:any = [
    {
    name: "Lakshit", 
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci saepe aspernatur neque quasi provident necessitatibus voluptates est corporis corrupti, voluptas cumque tempore dolorum, consectetur ratione. Quis, laudantium porro? Dolores voluptatibus tempore obcaecati quasi quam suscipit nemo assumenda. Quod, temporibus nisi unde esse molestiae voluptatibus eos repudiandae aut fugit consequatur cupiditate!",
    url: "https://content.artofmanliness.com/uploads//2008/12/obama_660x.jpg"
    },
    {
    name: "Abhishek", 
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci saepe aspernatur neque quasi provident necessitatibus voluptates est corporis corrupti, voluptas cumque tempore dolorum, consectetur ratione. Quis, laudantium porro? Dolores voluptatibus tempore obcaecati quasi quam suscipit nemo assumenda. Quod, temporibus nisi unde esse molestiae voluptatibus eos repudiandae aut fugit consequatur cupiditate!",
    url: "https://content.artofmanliness.com/uploads//2008/12/obama_660x.jpg"
    }
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

  createUser(user: {name: string, description: string, url: string}){
    this.users.push(user);
  }

}
