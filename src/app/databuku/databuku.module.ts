import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DatabukuRoutingModule } from './databuku-routing.module';
import { ContentComponent } from './content/content.component';
import { PartialModule } from './../partial/partial.module';
import { FormsModule } from '@angular/forms';
@NgModule({
  imports: [
  CommonModule,
    DatabukuRoutingModule,
    PartialModule,
    FormsModule
  ],
  declarations: [ContentComponent]
})
export class DatabukuModule { }
