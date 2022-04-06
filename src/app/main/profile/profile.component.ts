import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public protectedData: any
  public loading: boolean = false
  constructor(
    private _api: ApiService,
    private _auth: AuthService,
    private _router:Router

  ) { }
  ngOnInit(): void {

    this._api.getTypeRequest('profile/profile').subscribe((res: any) => {
      this.protectedData = res
    });
  }

  logout(){
    this._auth.clearStorage()
    this._router.navigate(['login']);
  }
}
