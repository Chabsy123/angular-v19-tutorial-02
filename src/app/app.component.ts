import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { UserComponent } from './user/user.component';
// import { DataBindingComponent } from './data-binding/data-binding.component';
import { DirectivesComponent } from './directives/directives.component';
import { StructuralDirectivesNgifVsIfComponent } from './structural-directives-ngif-vs-if/structural-directives-ngif-vs-if.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    // UserComponent,
    // DataBindingComponent,
    DirectivesComponent,
    StructuralDirectivesNgifVsIfComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-v19-tutorial-02';
}
