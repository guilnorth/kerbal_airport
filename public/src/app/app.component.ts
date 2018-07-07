/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from './@core/utils/analytics.service';
import {ToasterConfig} from "angular2-toaster";
import 'style-loader!angular2-toaster/toaster.css';

@Component({
  selector: 'ngx-app',
  template: `<toaster-container [toasterconfig]="config"></toaster-container>
    <router-outlet></router-outlet>`,
})
export class AppComponent implements OnInit {

  config:ToasterConfig;
  constructor(private analytics: AnalyticsService) {
  }

  ngOnInit() {
    //this.analytics.trackPageViews();
    this.config = new ToasterConfig({
      positionClass: 'toast-top-center',
      //positionClass: 'toast-top-full-width',
      timeout: 5000,
      newestOnTop: true,
      tapToDismiss: true,
      preventDuplicates: false,
      animation: 'slideDown',
      limit: 3,
    });
  }
}
