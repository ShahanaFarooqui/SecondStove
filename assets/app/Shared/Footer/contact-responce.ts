import {Component, OnInit, Injectable} from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";

@Component({
  selector: 'ss-contact-responce',
  template: `
    <div class="main-page col-sm-9">
      <div class="row">
        <div class="col-xs-12">
          <h2>{{message}}</h2>
          <button class="btn btn-default" type="submit" (click)="onSubmit()">Home</button>
        </div>
      </div>
    </div>
  `,
  styles: []
})

@Injectable()
export class ContactResponceComponent implements OnInit {
  private message:string;

  constructor(private router:Router, private activeRoute:ActivatedRoute) { }

  ngOnInit() {
    let source = this.activeRoute.snapshot.params['id'];
    if(source=='signup'){
      this.message = 'Thank you for subscribing with us!';
    }
    else if(source=='contact'){
      this.message = 'Thank you for contacting us! We will reply as soon as possible!';
    }
  }

  onSubmit(){
    //console.log("Submitted");
    this.router.navigate(['/']);
  }
}
