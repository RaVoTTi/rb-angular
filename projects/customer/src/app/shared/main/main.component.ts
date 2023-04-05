import { Component, OnInit } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'robinbook-main',
  templateUrl: './main.component.html',
})
export class MainComponent {
  home!: boolean;
  loading = false;

//   constructor(private router: Router) {
//     this.router.events
//       .pipe(
//         filter(
//           (event): event is NavigationEnd => event instanceof NavigationEnd
//         )
//       )
//       .subscribe(
//         (event: NavigationEnd) => {
//           event.url.includes('home') ||
//           event.url.includes('settings') ||
//           event.url.includes('myorders') ||
//           event.url.includes('checkout') ||
//           event.url.includes('terms')
//             ? (this.home = true)
//             : (this.home = false);
//         }

//         // url.
//       );
//     this.router.events.subscribe((ev) => {
//       if (ev instanceof NavigationStart) {
//         this.loading = true;
//       }
//       if (
//         ev instanceof NavigationEnd ||
//         ev instanceof NavigationError ||
//         ev instanceof NavigationCancel
//       ) {
//         this.loading = false;
//       }
//     });
//   }
}
