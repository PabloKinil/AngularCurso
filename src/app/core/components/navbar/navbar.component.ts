import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  logoUrl: string;

  constructor() {
    this.logoUrl = this.getCompanyLogo();
  }

  getCompanyLogo(): string {
    //Datos de la empresa
    return 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/768px-Angular_full_color_logo.svg.png';
  }
}
