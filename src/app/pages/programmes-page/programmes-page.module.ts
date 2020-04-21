import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ProgrammesPageComponent } from './programmes-page.component';
import { ProgrammesPageRoutingModule } from './programmes-page.routing';

@NgModule({
  declarations: [ProgrammesPageComponent],
  imports: [CommonModule, ProgrammesPageRoutingModule],
  exports: [ProgrammesPageComponent],
})
export class ProgrammesPageModule {}
