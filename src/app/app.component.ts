import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    constructor(private translate: TranslateService) {
        translate.addLangs(['en', 'fr', 'ur', 'es', 'fa']);
        translate.setDefaultLang('en');
        const browserLang = translate.getBrowserLang();
        translate.use(browserLang.match(/en|fr|ur|es|fa/) ? browserLang : 'en');
    }
}
