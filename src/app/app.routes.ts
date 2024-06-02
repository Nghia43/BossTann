import { Routes } from '@angular/router';
import { DataDisplayComponent } from './data-display/data-display.component';

export const routes: Routes = [
  {
    path: '',
    component: DataDisplayComponent,
    title: 'Data Display'
  }
];

export default routes;

