import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Popover, PopoverModule } from 'primeng/popover';
import { CommonModule } from '@angular/common';
import { NavigationService } from '../../shared/services/navigation.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [PopoverModule, CommonModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  isCollapsed = false;
  @Output() collapsedState = new EventEmitter<boolean>();
  @ViewChild('op') op!: Popover;
  hoveredSubItems: any[] = [];

  constructor(private router: Router, private navigationService: NavigationService) {}

  navItems = [
    { 
      title: 'Dashboard', 
      route: '/admin/dashboard',
      iconPath: 'M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z'
    },
    { 
      title: 'Trainers', 
      route: '/admin/trainers',
      iconPath: 'M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z'
    },
    { 
      title: 'Participants', 
      route: '/admin/participants',
      iconPath: 'M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z'
    },
    { 
      title: 'Sessions', 
      route: '/admin/training-sessions',
      iconPath: 'M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM9 10H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm-8 4H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2z'
    }
  ];

  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
    this.collapsedState.emit(this.isCollapsed);
  }

  isActive(route: string): boolean {
    return this.router.url.includes(route);
  }

  onItemClick(item: any): void {
    this.navigationService.setSelectedNavItem(item);
  }

  hideHoverMenu() {
    this.op.hide();
  }
}