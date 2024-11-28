import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QvidCommentPageRoutingModule } from './qvid-comment-routing.module';

import { QvidCommentPage } from './qvid-comment.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    QvidCommentPageRoutingModule
  ],
  declarations: [QvidCommentPage]
})
export class QvidCommentPageModule {}
