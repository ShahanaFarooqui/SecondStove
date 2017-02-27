import {Component, OnInit, Injectable} from '@angular/core';
import { Headers, Http, Response } from "@angular/http";
import { Router } from "@angular/router";
import 'rxjs/Rx';

import {ContactResponceComponent} from './contact-responce';
import {SearchComponent} from '../search.component';

@Component({
  selector: 'ss-contact-us',
  templateUrl: './contact-us.component.html',
  styles: []
})

@Injectable()
export class ContactUsComponent implements OnInit {
  private signupemail: string;
  private name:string;
  private contactemail:string;
  private reason:string;
  private subject:string;
  private message:string;
  constructor(private http:Http,private router:Router) { }

  ngOnInit() {
  }

  onSubmitSignup(){
    const body = '[{"email":"'+ this.signupemail +'"}]';
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.post('https://secondstove-7ba2c.firebaseio.com/recipe_signup.json', body, {headers: headers}).subscribe(
      response => this.router.navigate(['/contactresponce/signup']),
      error => console.error(error)
    );
  }

  onSubmitContact(){
    console.log("on submit contact");
    const body = '[' +
      '{"name":"'+ this.name +'"},' +
      '{"contactemail":"'+ this.contactemail +'"},' +
      '{"reason":"'+ this.reason +'"},' +
      '{"subject":"'+ this.subject +'"},' +
      '{"message":"'+ this.message +'"}' +
      ']';
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.post('https://secondstove-7ba2c.firebaseio.com/contact_user.json', body, {headers: headers}).subscribe(
      response => this.router.navigate(['/contactresponce/contact']),
      error => console.error(error)
      //console.log(response)
  );
  }
}
