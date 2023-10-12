import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AppServiceService } from './app-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  li:any;
  list1=[];
  // private url='http://localhost:3000/list';
  constructor(private http:HttpClient,private data:AppServiceService){

  }

  ngOnInit():void{
    this.data.getpost()
    .subscribe((Response: any) => {
      if(Response){ 
        hideloader();
      }
      console.log(Response)
      this.li=Response;
      this.list1=this.li;
    });
    function hideloader(){
      let disp=document.getElementById('loading');
      disp.style.display='none';
    }

  }
}
