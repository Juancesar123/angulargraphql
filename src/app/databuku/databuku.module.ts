import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DatabukuRoutingModule } from './databuku-routing.module';
import { ContentComponent } from './content/content.component';
import { PartialModule } from './../partial/partial.module';

@NgModule({
  imports: [
  CommonModule,
    DatabukuRoutingModule,
    PartialModule
  ],
  declarations: [ContentComponent]
})
export class DatabukuModule { }
