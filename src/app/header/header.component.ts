import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  profileShow = false;

  showProfileDetails() {
    if (this.profileShow === true) {
      this.profileShow = false;
    } else {
      this.profileShow = true;
    }
  }
  wishlistShow = false;

  showWishlistDetails(){
    if(this.wishlistShow === true){
      this.wishlistShow = false;
    }else{
      this.wishlistShow = true;
    }
  }

  counterValue = 0;
}
