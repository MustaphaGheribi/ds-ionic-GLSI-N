import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.page.html',
  styleUrls: ['./contact-info.page.scss'],
})
export class ContactInfoPage implements OnInit {
  @Input() item: any;
  params:any
  constructor(private navParams: NavParams,private modalController:ModalController) { }

  ngOnInit() {
    this.params = this.navParams.get('items');
    console.log("je",this.params)
  }
  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });
  }
}
