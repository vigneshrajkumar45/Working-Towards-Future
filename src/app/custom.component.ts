import {MdInputModule, MdButtonModule, MdSelectModule,MdSidenavModule,MdTabsModule, MdCheckboxModule} from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [MdInputModule, MdButtonModule, MdSelectModule, MdSidenavModule, MdTabsModule, MdCheckboxModule],
  exports: [MdInputModule, MdButtonModule, MdSelectModule, MdSidenavModule, MdTabsModule,  MdCheckboxModule],
})
export class MyOwnCustomMaterialModule { }