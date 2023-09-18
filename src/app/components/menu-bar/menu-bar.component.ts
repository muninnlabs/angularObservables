import { Component,OnInit  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-menu-bar',
  standalone: true,
  imports: [CommonModule, MenubarModule],
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss']
})
export class MenuBarComponent implements OnInit {
  items: MenuItem[];

  ngOnInit(): void {
    this.items = [
        {
            label: 'Home',
            icon: 'pi pi-fw pi-power-off',
            routerLink: '/'
        },
      {
          label: 'Movies',
          icon: 'pi pi-fw pi-power-off',
          routerLink: 'movies'
      }
  ];
  }
}
