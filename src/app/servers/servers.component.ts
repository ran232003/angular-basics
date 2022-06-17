import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  changeStatus = true;
  test:string = "";
  buttonStatus:boolean = false;
  servers:{ id: number, name: string }[] = []
  constructor() { }
  change(){
    this.changeStatus = !this.changeStatus;
    this.buttonStatus = !this.buttonStatus
  }
  ngOnInit(): void {
  }
  onChange(event){
    console.log(event.target.value)
    this.test = event.target.value
  }
  changeColor(){
    if(this.buttonStatus === true){
      return 'green'
    }
    return 'red';
  }
  addServer(){
    let obj = {id:Math.random()*10,name:"ran"};
    this.servers.push(obj);
  }
}
