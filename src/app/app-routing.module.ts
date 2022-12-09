import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DenkiComponent } from './kougaku/denki/denki.component';
import { ChinoComponent } from './kougaku/chino/chino.component';
import { KikaiComponent } from './kougaku/kikai/kikai.component';
import { OukaComponent } from './kougaku/ouka/ouka.component';
import { SeimeiComponent } from './kougaku/seimei/seimei.component';

const routes: Routes = [
  {path: 'denki',component: DenkiComponent},
  {path: 'chino',component: ChinoComponent},
  {path: 'kikai',component: KikaiComponent},
  {path: 'ouka',component: OukaComponent},
  {path: 'seimei',component: SeimeiComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
