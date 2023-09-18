import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { KeycloakProfile } from 'keycloak-js';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styles: [],
})
export class ProfileComponent implements OnInit {
  public profile: KeycloakProfile | undefined;

  constructor(private keycloakService: KeycloakService) {}
  async ngOnInit() {
    //this.profile = await this.keycloakService.loadUserProfile();
  }

  logout() {
    this.keycloakService.logout('http://localhost:4200');
  }
}
