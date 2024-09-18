import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ProjectsComponent } from './projects/projects.component';


export const routes: Routes = [
   { path: "", redirectTo: "/home", pathMatch: 'full'},
   { path: "home", component: HomeComponent},
   { path: "about-me", component: AboutMeComponent},
   { path: "projects", component: ProjectsComponent}
];

