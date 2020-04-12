import { Component } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

constructor(
  private _loginService: LoginService
){

  
}

logout(){
    this._loginService.logout();
    location.reload()
}
}