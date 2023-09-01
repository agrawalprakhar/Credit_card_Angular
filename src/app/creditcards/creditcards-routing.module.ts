import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreditcardsComponent } from './creditcards.component';

const routes: Routes = [{ path: '', component: CreditcardsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreditcardsRoutingModule { }
