import { bootstrapApplication } from '@angular/platform-browser';
import { DataDisplayComponent } from './app/data-display/data-display.component';
import { importProvidersFrom } from '@angular/core';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

bootstrapApplication(DataDisplayComponent, {
  providers: [provideHttpClient(), importProvidersFrom(HttpClientModule, FormsModule, BrowserAnimationsModule,
    MatCardModule, MatInputModule, MatFormFieldModule, MatSelectModule, MatButtonModule),
  provideAnimationsAsync()]
})
  .catch((err) => console.error(err));
