import { AsyncPipeComponent } from '../../components/_pipes/async-pipe/async-pipe.component';
import { CurrencyPipeComponent } from '../../components/_pipes/currency-pipe/currency-pipe.component';
import { DatePipeComponent } from '../../components/_pipes/date-pipe/date-pipe.component';
import { DecimalPipeComponent } from '../../components/_pipes/decimal-pipe/decimal-pipe.component';
import { JsonPipeComponent } from '../../components/_pipes/json-pipe/json-pipe.component';
import { KeyValuePipeComponent } from '../../components/_pipes/key-value-pipe/key-value-pipe.component';
import { LowerCasePipeComponent } from '../../components/_pipes/lower-case-pipe/lower-case-pipe.component';
import { SlicePipeComponent } from '../../components/_pipes/slice-pipe/slice-pipe.component';
import { PercentPipeComponent } from '../../components/_pipes/percent-pipe/percent-pipe.component';
import { TitleCasePipeComponent } from '../../components/_pipes/title-case-pipe/title-case-pipe.component';
import { UpperCasePipeComponent } from '../../components/_pipes/upper-case-pipe/upper-case-pipe.component';

import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  standalone: true,
  imports: [
    AsyncPipeComponent,
    CurrencyPipeComponent,
    DatePipeComponent,
    DecimalPipeComponent,
    JsonPipeComponent,
    KeyValuePipeComponent,
    LowerCasePipeComponent,
    PercentPipeComponent,
    SlicePipeComponent,
    TitleCasePipeComponent,
    UpperCasePipeComponent,
  ],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css',
})
export class PipesComponent {}
