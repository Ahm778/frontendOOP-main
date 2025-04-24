import { Component, EventEmitter, Output, ViewChild, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NavItem } from '../../shared/models/nav-item.model';
import { Router, RouterModule } from '@angular/router';
import { Popover, PopoverModule } from 'primeng/popover';
import { CommonModule } from '@angular/common';
import { NavigationService } from '../../shared/services/navigation.service';


@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [PopoverModule, CommonModule, RouterModule, ], // 👉 Ajout ici
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA] // 👉 Si nécessaire, pour gérer des éléments personnalisés
})
export class SidebarComponent {
  isCollapsed = false;
  @Output() collapsedState = new EventEmitter<boolean>();
  @ViewChild('op') op!: Popover;
  hoveredSubItems: NavItem[] = [];

  constructor(private router: Router, private navigationService: NavigationService) {}

  navItems: NavItem[] = [
    { title: 'Dashboard', image: 'assets/images/dashboard.png', route: '/admin/dashboard' },
    { title: 'Trainers', image: 'assets/images/trainers.png', route: '/admin/trainers' },
    { title: 'Participants', image: 'assets/images/participants.png', route: '/admin/participants' },
    { title: 'Sessions', image: 'assets/images/training-sessions.png', route: '/admin/training-sessions' }
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
