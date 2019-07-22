import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { BarPage } from './bar.page';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    Ng2GoogleChartsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: BarPage
      }
    ])
  ],
  declarations: [BarPage]
})
export class BarPageModule { }
