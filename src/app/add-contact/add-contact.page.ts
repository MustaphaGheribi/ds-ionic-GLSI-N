import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController, ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.page.html',
  styleUrls: ['./add-contact.page.scss'],
})
export class AddContactPage implements OnInit {
  addForm: FormGroup
  params: any
  constructor(private modalController: ModalController, private formBuilder: FormBuilder,
    public alertController: AlertController,
    private navParams: NavParams) { }

  ngOnInit() {
    this.params = this.navParams.get('contacts');
    this.initForm();
  }
  initForm() {
    this.addForm = this.formBuilder.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      tel1: ['', Validators.required],
      tel2: ['', Validators.required],
      type: ['', Validators.required],

    })
  }
  dismiss(data) {
    this.modalController.dismiss({
      'Array': data,
      'is':true
    });
  }
  dismiss2() {
    this.modalController.dismiss();
  }
  addContact() {
    var exsit = false;
    if (this.addForm.valid) {
      console.log(this.addForm.value);
      for (let item of this.params) {
        console.log("item", item.tel1);
        if (item.tel1 == this.addForm.get("tel1").value) {

          exsit = true;
          this.presentAlert("Contact already exists");
          break;
        }

      }
      if (!exsit) {
        this.presentAlert("add was succesful");
        this.params.push(this.addForm.value);

        this.dismiss(this.params);
      }
    } else {
      this.presentAlert("Please fill in all fields")
    }
  }
  async presentAlert(msg) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Information',
      message: msg,
      buttons: ['OK']
    });

    await alert.present();
  }

}
