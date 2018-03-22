import { Component, OnInit } from '@angular/core';
import { trigger,style,transition,animate,keyframes,query,stagger,state } from '@angular/animations';
import { Usermaster } from '../models/usermaster';
import { LoginService } from '../login.service';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [
    trigger('banner1', [
      transition('* => active',
        [query('.login-banner-mandiri',[ style({ opacity: 0, paddingRight:0 }), animate('3s', style({ opacity: 1, paddingRight:'50px' })) ])]
      )
    ]),
    trigger('banner2', [
      transition('* => active',
        [query('.login-banner-utama-finance',[ style({ opacity: 0, paddingRight:0 }), animate('3s', style({ opacity: 1, paddingRight:'20px' })) ])]
      )
    ]),
    trigger('form1', [
      transition('* => active',
        [query('.login-form',[ style({ opacity: 0 }), animate('3s', style({opacity: 1}) )])]
      ),
    ])
  ]
})
export class LoginComponent implements OnInit {
  public user : Usermaster = new Usermaster()
  public loading : boolean = false;
  public returnUrl: string;
  constructor(public loginService:LoginService,public router:Router,private route: ActivatedRoute) { }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  login() {
    if (this.user.username && this.user.password) {          
      this.loading = true;                
    //     this.loginService.login(this.user)
    //     .subscribe(
    //       result => {
    //         this.router.navigate([this.returnUrl]);
    //       },
    //       error => {
    //           // this.message=error.message;
    //           this.loading = false;
    //           setTimeout(()=>{
    //             // this.message = "";
    //           },5000);
    //           console.log(error.message);
    //       });
    // } else {
    //   // this.message='Username atau Password masih ada yang belum terisi!';
    //           this.loading = false;
    //           setTimeout(()=>{
    //             // this.message = "";
    //           },5000);
      localStorage.setItem('currentUser','jwt') 
      this.router.navigate([this.returnUrl]);      
    }
  }
}
