import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { StructuralDirectivesNgifVsIfComponent } from './structural-directives-ngif-vs-if/structural-directives-ngif-vs-if.component';
import { AttributeDirectivesComponent } from './attribute-directives/attribute-directives.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BuiltInPipesComponent } from './built-in-pipes/built-in-pipes.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ProfileComponent } from './profile/profile.component';


export const routes: Routes = [
    // {path : '', component : UserComponent},
    { path: '', redirectTo: 'user', pathMatch: 'full' },
// When the app loads at the root path (''),
// automatically redirect to the 'user' route.
// 'pathMatch: "full"' ensures the whole empty path ('')
// is matched before redirecting, instead of partially matching.

    {path : 'user', component : UserComponent},
    {path : 'profile', component : ProfileComponent},
    {path : 'data-binding', component : DataBindingComponent},
    {path : 'structural-directive', component : StructuralDirectivesNgifVsIfComponent},
    {path : 'attribute-directive', component : AttributeDirectivesComponent},
    {path : 'built-in-pipes', component : BuiltInPipesComponent},
    {path : 'tdf', component : TemplateDrivenFormComponent},
    {path : 'rf', component : ReactiveFormComponent},
    {path : '**', component : PageNotFoundComponent},
];
