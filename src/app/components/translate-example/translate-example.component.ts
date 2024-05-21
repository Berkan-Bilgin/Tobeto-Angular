import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-translate-example',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './translate-example.component.html',
  styleUrls: ['./translate-example.component.css'],
})
export class TranslateExampleComponent {
  currentLang: string;

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('en');
    this.translate.use('en');
    this.currentLang = this.translate.currentLang;
  }

  switchLanguage(language: string) {
    this.translate.use(language).subscribe(() => {
      this.currentLang = this.translate.currentLang;

      console.log(this.translate.currentLang);
    });
  }
}
