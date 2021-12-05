import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { AddContactPage } from '../add-contact/add-contact.page';
import { ContactInfoPage } from '../contact-info/contact-info.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  segementStateModel = "amis"
  contact = [{
    'nom': 'Mustapha',
    'prenom': 'Gheribi',
    'tel1': "21231415",
    'tel2': "21231416",
    "date_creation": '01/12/2021',
    "maj": '05/12/2021',
    "type": "amis"
  },
  {
    'nom': 'Safa ',
    'prenom': 'Ayadi',
    'tel1': "28664665",
    'tel2': "28664666",
    "date_creation": '01/12/2021',
    "maj": '05/12/2021',
    "type": "famille"
  },
  {
    'nom': 'john',
    'prenom': 'doe',
    'tel1': "11111111",
    'tel2': "11111112",
    "date_creation": '25/10/2021',
    "maj": '26/11/2021',
    "type": "professionnel"
  },
  {
    'nom': 'tom',
    'prenom': 'cruise',
    'tel1': "00000012",
    'tel2': "00000013",
    "date_creation": '25/11/2021',
    "maj": '25/11/2021',
    "type": "autre"
  },
  {
    'nom': 'stephen',
    'prenom': 'hanks',
    'tel1': "00000022",
    'tel2': "00000023",
    "date_creation": '25/11/2021',
    "maj": '25/11/2021',
    "type": "autre"
  },
  ]
  constructor(private route: Router, public modalController: ModalController) { }
  segmentChanged(event) {
    this.segementStateModel = event.detail.value;
  }

  async addContact() {
    const modal = await this.modalController.create({
      component: AddContactPage,
      cssClass: 'my-custom-class',
      mode: "ios",
      componentProps: {
        contacts: this.contact
      }
    });
    modal.onDidDismiss().then((res:any)=>{
      if(res.data.is){
         this.contact = res.data.Array
      }
    });
    return await modal.present();

  }

  async contactInfo(item) {
    const modal = await this.modalController.create({
      component: ContactInfoPage,
      cssClass: 'my-custom-class',
      mode: "ios",
      componentProps: {
        items: item
      }
    });
    return await modal.present();
  }

}
