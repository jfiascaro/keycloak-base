import { Component } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { KeycloakProfile } from 'keycloak-js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public isLogueado = false;
  public perfilUsuario: KeycloakProfile | null = null;
  public rolesUsuario: string[] | undefined;

  constructor(private readonly keycloak: KeycloakService) {}

  public async ngOnInit() {
    this.isLogueado = await this.keycloak.isLoggedIn();
    type roleUsuarios = Array<{ id: number; text: string }>;

    if (this.isLogueado) {
      this.perfilUsuario = await this.keycloak.loadUserProfile();
      this.rolesUsuario = await this.keycloak.getUserRoles();
      console.log(this.rolesUsuario);
    }
  }

  public iniciarSesion() {
    this.keycloak.login();
  }

  public cerrarSesion() {
    this.keycloak.logout();
  }

  title = 'keycloak-base';
}
