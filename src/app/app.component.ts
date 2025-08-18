import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { UserComponent } from './user/user.component';
// import { DataBindingComponent } from './data-binding/data-binding.component';
import { DirectivesComponent } from './directives/directives.component';
import { StructuralDirectivesNgifVsIfComponent } from './structural-directives-ngif-vs-if/structural-directives-ngif-vs-if.component';
import { StructuralDirectiveNgforVsForComponent } from './structural-directive-ngfor-vs-for/structural-directive-ngfor-vs-for.component';
import { StructuralDirectiveNgswitchVsSwitchComponent } from './structural-directive-ngswitch-vs-switch/structural-directive-ngswitch-vs-switch.component';
import { AttributeDirectivesComponent } from './attribute-directives/attribute-directives.component';
import { SignalsComponent } from './signals/signals.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    // UserComponent,
    // DataBindingComponent,
    // DirectivesComponent,
    // StructuralDirectivesNgifVsIfComponent,
    // StructuralDirectiveNgforVsForComponent,
    // StructuralDirectiveNgswitchVsSwitchComponent,
    AttributeDirectivesComponent,
    SignalsComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-v19-tutorial-02';
}
