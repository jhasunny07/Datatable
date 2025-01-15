// sidebar.component.ts
import { CommonModule } from '@angular/common';
import { Component, ElementRef, Renderer2, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationStart, RouterModule } from '@angular/router';  // Import Router and NavigationStart

@Component({
  selector: 'app-sidebar',
  standalone: true,
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  imports: [CommonModule]
})
export class SidebarComponent {
  activeSection: string = 'dashboard'; // Default active section
  dropdownOpen: boolean = false; // Dropdown state for Sections

  // Method to handle section change
  setActiveSection(section: string) {
    this.activeSection = section;
  }

  // Method to toggle dropdown visibility
  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }










  darkMode = false;
  selectedSection: string | null = null;
  isSubmenuActive = false;
  selectedSubmenu: string | null = null;
  isAppGridVisible = false;
  sidebar: HTMLElement;
  isHomeSidebarOpen = false;
  private clickListener: (() => void) | null = null;
  sidebarColor: string = '#f4f4f4';
  private routerSubscription: any; // To track route changes
  searchQuery: string = '';  // Property to track the search query

  constructor(
    private renderer: Renderer2,
    private elementRef: ElementRef,
    private router: Router  // Inject the Router service
  ) {
    this.sidebar = this.elementRef.nativeElement;
  }

  ngOnInit() {
    // Add the event listener to the document
    this.clickListener = this.renderer.listen('document', 'click', (event: Event) => {
      const clickedInside = this.sidebar.contains(event.target as HTMLElement);
      if (!clickedInside) {
        this.closeSidebars();  // Close the sidebar if clicked outside
      }
    });

    // Subscribe to route changes to hide the sidebar
    this.routerSubscription = this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.closeSidebars();  // Hide the sidebar on route change
      }
    });
  }

  ngOnDestroy() {
    // Clean up the event listener and router subscription when the component is destroyed
    if (this.clickListener) {
      this.clickListener();
    }
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }

  closeSidebars() {
    this.isHomeSidebarOpen = false;  // Close the sidebar
    this.isSubmenuActive = false;  // Close any active submenu
    this.selectedSection = null;  // Reset the selected section
    this.selectedSubmenu = null;  // Reset the selected submenu
  }

  toggleDarkMode() {
    this.darkMode = !this.darkMode;
  }

  toggleAppGrid() {
    this.isAppGridVisible = !this.isAppGridVisible;
    if (this.isAppGridVisible) {
      this.selectedSection = null;
      this.isSubmenuActive = false;
      this.selectedSubmenu = null;
      this.isHomeSidebarOpen = false;
    }
  }

  handleMainItemClick(section: string, event: MouseEvent) {
    event.stopPropagation();  // Prevent click from propagating to document listener

    if (this.selectedSection === section) {
      // Close the parent sidebar when clicking the same section
      this.selectedSection = null;
      this.isHomeSidebarOpen = false;
      this.isAppGridVisible = false;
    } else {
      // Open the selected section
      this.selectedSection = section;
      this.isHomeSidebarOpen = true;
      this.isAppGridVisible = false;
    }

    // Close submenu when switching sections
    this.selectedSubmenu = null;
    this.isSubmenuActive = false;
  }

  handleSubmenuClick(submenu: string, event: MouseEvent) {
    event.stopPropagation();  // Prevent click from propagating to document listener
    this.selectedSubmenu = submenu;
    this.isSubmenuActive = true;
  }

  goBackToSecondSidebar(event: MouseEvent) {
    event.stopPropagation();  // Prevent click from propagating to other listeners
    this.isSubmenuActive = false;  // Close only the submenu
    this.selectedSubmenu = null;  // Reset the selected submenu
  }

  // New method to open the sidebar from search
  openSidebarFromSearch(query: string) {
    // Logic to open the sidebar or submenu based on the search query
    if (query) {
      this.selectedSection = 'System';  // Example: Open 'System' section based on search query
      this.selectedSubmenu = 'Network'; // Example: Open a submenu for 'Network'
      this.isSubmenuActive = true;
      this.isHomeSidebarOpen = true;
    } else {
      this.closeSidebars();  // Close the sidebar if no search query
    }
  }

}
