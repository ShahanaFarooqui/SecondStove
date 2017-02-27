import {Injectable, EventEmitter, Component, OnInit} from '@angular/core';
import { Headers, Http, Response } from "@angular/http";
import 'rxjs/Rx';

import { FAQ } from "./faq";
import {SearchComponent} from "../search.component";

@Component({
  selector: 'ss-faq',
  templateUrl: './faq.component.html',
  styles: []
})

export class FaqComponent implements OnInit{
  faqChanged = new EventEmitter<FAQ[]>();
  private faqs: FAQ[] = [];
  private displayAnswer:boolean[] = [];
/*
  private faqs: FAQ[] = [
    new FAQ('Can I offer any promotions or discounts?', 'You can mark down the prices of your dishes via the tools available in your store. SecondStove.com might also run additional promotions as a part of our marketing campaigns.', 'C'),
    new FAQ('How do I create a store?', 'You can create an online store by following a simple online registration process. You’ll be required to upload pictures of your own dishes along with the price and description. You’ll also need to add a note about your cooking style and your store policies.', 'C'),
    new FAQ('How do I get paid?', 'We’ll pay every 2 weeks, on a Thursday, minus any charges, fees and claims of refund. All payments will be made as a credit to your bank accounts.', 'C'),
    new FAQ('How do I manage my kitchen?', 'It’s important for you to manage your store with the same attention that you would create your dishes. Make sure that the hours of operations are mentioned clearly under the store policies and are reflecting the correct hours for the next week. Also ensure that the quantities of dishes available is correctly reflecting your ability to deliver the food. There is nothing more disappointing than turning away an excited foodie.', 'C'),
    new FAQ('How do I manage the food orders?', 'You’ll get an email alert and an alert in your store providing details of the order for every order placed. You’ll be required to acknowledge the order to ensure that you’re able to work on the order. Make sure that you review all the special instructions that are sent along with the  order. In case you expect the order to take more than an hour for completion you must let the foodie know. All orders must be marked completed once the food is delivered.', 'C'),
    new FAQ('How much time does it take for me to start my kitchen?', 'You must apply through our website, create a profile, setup your kitchen and obtain the food safety handling certification. We’ll contact you and schedule a kitchen walkthrough. The whole process can be completed in 3 days or less.', 'C'),
    new FAQ('What are the charges and fees?', 'Signing up to become a chef is free. We’re waiving off one-time setup fee for the online stove and a offering 3 months free subscription. After 3 months you’ll be charged a nominal subscription fees. There will be a marketing and platform fees for all orders.', 'C'),
    new FAQ('What are the requirements for me to become a chef?', 'You’ll require to get a food handling certification complying to your local state and state food handling and preparation laws. The information about your local food handling certification can be found here.', 'C'),
    new FAQ('What is SecondStove’s chef on-boarding process?', 'Once the chef applies to open a kitchen through our website we will contact the chef before publishing the store on SecondStove.com. Our Chef on-boarding manager will meet the chefs and conduct a basic inspection of the facilities. We will also ensure that the chef has met the requirements for food handling and safety as per the local and state guidelines. Once we’re satisfied, we’ll publish the kitchen on SecondStove.com.', 'C'),
    new FAQ('Can I customize the food?', 'Our chefs are passionate about cooking and make all attempts to cater to your preferences. They’ll offer some standard spice level customization options for most dishes. They might also cater to addition or removing some specific ingredients. Ask them!', 'F'),
    new FAQ('Can I order in advance?', 'Yes, you can place orders for up to 2 weeks in advance. You can mention the delivery date and time as a part of your instruction to our chef.', 'F'),
    new FAQ('Do you deliver the food?', 'Yes, some of our chefs offer free food delivery. Others might require pickup. Please see the shop policies for the details about the delivery.', 'F'),
    new FAQ('How do I order?', 'You can choose from the various available dishes from one or multiple kitchens. Please make sure that you read the store policies for hours and delivery information.', 'F'),
    new FAQ('How quickly can I get my food?', 'Most orders can be completed within 1 hour. However, sometimes it’s possible that the kitchen is backed up due to a large number of orders. Our chefs will communicate the expected time of order once you place the order.', 'F'),
    new FAQ('Is my credit card information secured?', 'We take your security very seriously. We don’t store your credit card information. We rely on our trusted payment partners to validate and process all credit card transactions.', 'F'),
    new FAQ('Is the food safe and hygienic?', 'Our chefs serve you what they serve their families and take pride in what they put on the table. All our chefs are certified in local food handling regulations and therefore know how to handle food from preparation to packaging.', 'F'),
    new FAQ('What happens if I don’t like a dish?', 'Our chefs make all dishes exclusively based on your order and will make all efforts to ensure that you have the best experience possible. Please reach out to us and we’ll make all efforts to resolve the issue to your satisfaction.', 'F'),
    new FAQ('What is SecondStove’s chef on-boarding process?', 'Once the chef applies to open a kitchen through our website we will contact the chef before publishing the store on SecondStove.com. Our Chef on-boarding manager will meet the chefs and conduct a basic inspection of the facilities. We will also ensure that the chef has met the requirements for food handling and safety as per the local and state guidelines. Once we’re satisfied, we’ll publish the kitchen on SecondStove.com.', 'F')
  ];
*/
  constructor(private http: Http) {
  }

  ngOnInit(){
    //this.storeFAQ();
    this.fetchFAQ();
  }

  storeFAQ() {
    const body = JSON.stringify(this.faqs);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.put('https://secondstove-7ba2c.firebaseio.com/faq.json', body, {headers: headers}).subscribe(
      response => console.log(response),
      error => console.error(error)
    );
  }

  fetchFAQ() {
    return this.http.get('https://secondstove-7ba2c.firebaseio.com/faq.json')
      .map((response: Response) => response.json())
      .subscribe(
        (data: FAQ[]) => {
          this.faqs = data;
          this.faqChanged.emit(this.faqs);
          for(let j=0;j<this.faqs.length;j++){
            this.displayAnswer[j]=false;
          }
        }
      );
  }

  onClick(i:number){
    if (this.displayAnswer[i]===false) {
      this.displayAnswer[i] = true;
    } else {
      this.displayAnswer[i] = false;
    }
  }
}
