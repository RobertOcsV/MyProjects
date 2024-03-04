import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    standalone: true,
    imports: [MatToolbarModule, RouterOutlet]
})
export class AppComponent {
  title = 'crud-angular';

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.navigate(['/']);
  }
}
