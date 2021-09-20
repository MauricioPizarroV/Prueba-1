import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SegundaPageRoutingModule } from './segunda-routing.module';

import { SegundaPage } from './segunda.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    SegundaPageRoutingModule
  ],
  declarations: [SegundaPage]
})
export class SegundaPageModule {}
