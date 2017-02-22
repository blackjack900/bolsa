import { Component } from '@angular/core';
import { MyApp } from '../../app/app.component';
import { NavController, NavParams,Nav} from 'ionic-angular';
import { HTTP } from 'ionic-native'
import {HomePage} from '../home/home';
import {RegistroPage} from '../registro/registro';
import {TabsPage} from '../tabs/tabs';
import {FormControlDirective,ReactiveFormsModule} from '@angular/forms';
import {FormBuilder, FormGroup, Validators, AbstractControl} from '@angular/forms';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  identificacion : AbstractControl;
  errorMenssage: string = null;
  LoginForm: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams,private fb: FormBuilder) {
    
    this.LoginForm = fb.group({
      'identificacion':['',Validators.compose([Validators.required])]
    });
    
    this.identificacion = this.LoginForm.controls['identificacion'];
  }

  login() {
    //alert(this.http.get('http://localhost/aplicacion/index.php/Data/verificar/1107507086').map(res => res.json()));
    HTTP.get('localhost/aplicacion/index.php/Data/verificar/1107507086', {}, {})
  .then(data => {

    console.log(data.status);
    console.log(data.data); // data received by server
    console.log(data.headers);

  })
  .catch(error => {

    console.log(error.status);
    console.log(error.error); // error message as string
    console.log(error.headers);

  });
    //
   // this.navCtrl.setRoot(HomePage);
   //.subscribe(data => {this.posts = data.data.children;})
  
  }

register(){
  this.navCtrl.push(RegistroPage);
}


  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
