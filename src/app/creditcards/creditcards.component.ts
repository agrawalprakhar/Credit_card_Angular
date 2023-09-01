import { Component, ViewChild } from '@angular/core';
import { CreditCard } from '../models/credit-card';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import {MatPaginator} from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

const TABLE_DATA : CreditCard [] =[
  {
    id:1,
    name:"Bank Of America",
    bankName:"Bank of America",
    description: "Bank of America offers customers with variety of options",
    maxCredit:8000,
    active:true,
    annualFee:0,
    interestRate:13.5,
    recommendedScore:"600-800",
    createdDate:"28-08-2023",
    updatedDate:"01-09-2023",
    termsAndConditions:"The following conditions are applicable for this card "

    
  },
  {
    id:2,
    name:"Bank Of America",
    bankName:"Bank of America",
    description: "Bank of America offers customers with variety of options",
    maxCredit:8000,
    active:true,
    annualFee:0,
    interestRate:13.5,
    recommendedScore:"600-800",
    createdDate:"28-08-2023",
    updatedDate:"01-09-2023",
    termsAndConditions:"The following conditions are applicable for this card "

    
  },
  {
    id:3,
    name:"Bank Of America",
    bankName:"Bank of America",
    description: "Bank of America offers customers with variety of options",
    maxCredit:8000,
    active:true,
    annualFee:0,
    interestRate:13.5,
    recommendedScore:"600-800",
    createdDate:"28-08-2023",
    updatedDate:"01-09-2023",
    termsAndConditions:"The following conditions are applicable for this card "

    
  },


];
@Component({
  selector: 'app-creditcards',
  templateUrl: './creditcards.component.html',
  styleUrls: ['./creditcards.component.scss']
})
export class CreditcardsComponent {

   displayColumns =["select", "id" , "name" ,"description", "bankName" ,"maxCredit", "interestRate","active","recommendedScore","annualFee"," createdDate","updatedDate","termsAndConditions"]  ;

   dataSource = new MatTableDataSource(TABLE_DATA);
   
  selection =new SelectionModel(true,[]);

  
   @ViewChild(MatPaginator) paginator : MatPaginator | undefined;
   @ViewChild(MatSort)  sort:MatSort | undefined;

   ngAfterViewInit()
   {
      this.dataSource.paginator!= this.paginator;
      this.dataSource.sort!=this.sort;
   }

   selectHandler(row:CreditCard)
   {
      this.selection.toggle(row as never);
   }


}
