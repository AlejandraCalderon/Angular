import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLinkActive, RouterLink],
  templateUrl: './navbar.html',
  styles: `
    nav {
      display: flex;
      gap: 1rem;
      background-color: #333;
      padding: 1rem;
      justify-content: center;
      align-items: center;
    }
    .active {
      font-weight: bold;
      text-decoration: underline;
      color: #6f56e1;
    }
    a {
      color: white;
      text-decoration: none;
    }
    a:hover {
      text-decoration: underline;
    }
  `,
})
export class Navbar { }
