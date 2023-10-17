import { Component } from '@angular/core';

@Component({
  selector: 'app-newcomponentgit',
  templateUrl: './newcomponentgit.component.html',
  styleUrls: ['./newcomponentgit.component.scss']
})
export class NewcomponentgitComponent {


    users: any[] =[] ;
    currentReceiver: any;
    main:boolean=true;
    selectedUserName: string = '';
    selectedUserId: string | null = null; 
  
    
    showMessage(id: any) {
     // Update the 'main' flag via the service
   this.main=false;
    
    }
    
  
  
  }
  
