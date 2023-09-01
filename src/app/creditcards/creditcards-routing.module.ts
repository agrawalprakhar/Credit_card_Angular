import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreditcardsComponent } from './creditcards.component';
import { ViewComponent } from './view/view.component';
import { DeleteComponent } from './delete/delete.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';

const routes: Routes = [{ path: '', component: CreditcardsComponent },
{ path: 'view/:id',component: ViewComponent},
{ path: 'edit/:id',component: EditComponent},
{ path: 'add',component: AddComponent},
{ path: 'delete/:id',component: DeleteComponent},
{ path:  '**', component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreditcardsRoutingModule { }
