import { CommonModule } from '@angular/common';
import { Component, type OnInit } from '@angular/core';

@Component({
    selector: 'app-address-list',
    imports: [CommonModule],
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss',
  })

  export class LoginComponent {
    title = 'Login';
  }