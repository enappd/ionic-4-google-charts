import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AreaPage } from './area.page';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';

const routes: Routes = [
  {
    path: '',
    component: AreaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ng2GoogleChartsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AreaPage]
})
export class AreaPageModule {}
