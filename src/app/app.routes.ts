import { Routes } from '@angular/router';
import { Home } from './home/home';
import { ProjectDetails } from './project-details/project-details';
import { Projects } from './projects/projects';
import { About } from './about/about';
import { Contact } from './contact/contact';
import { Skills } from './skills/skills';
import { Education } from './education/education';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'projects/:id', component: ProjectDetails },
  { path: 'projects', component: Projects },
  { path:'about', component: About},
  { path: 'contact', component:Contact},
  { path: 'skills', component:Skills},
  { path: 'education', component:Education}
];
