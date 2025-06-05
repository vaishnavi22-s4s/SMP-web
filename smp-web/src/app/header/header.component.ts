import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
    @ViewChild('navbarNav') navbarNav!: ElementRef;

  closeNavbar() {
    const collapseElement = this.navbarNav.nativeElement;
    if (collapseElement.classList.contains('show')) {
      const bsCollapse = new bootstrap.Collapse(collapseElement, { toggle: false });
      bsCollapse.hide();
    }
  }


}
declare const bootstrap: any;

