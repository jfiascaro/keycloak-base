import { Component } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [],
})
export class HomeComponent {
  constructor(private keycloakService: KeycloakService) {}

  logout() {
    this.keycloakService.logout('http://localhost:4200');
  }
}
