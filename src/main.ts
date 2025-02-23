import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';
import { ApplicationConfig, mergeApplicationConfig } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';
import { definePreset } from '@primeng/themes';

// Définition du preset avec les couleurs souhaitées
const MyPreset = definePreset(Aura, {
    semantic: {
        primary: {
            50: '{zinc.50}',
            100: '{zinc.100}',
            200: '{zinc.200}',
            300: '{zinc.300}',
            400: '{zinc.400}',
            500: '#000000',
            600: '{zinc.600}',
            700: '{zinc.700}',
            800: '{zinc.800}',
            900: '{zinc.900}',
            950: '{zinc.950}'
        }
    }
});

export const appConfigNg: ApplicationConfig = {
    providers: [
        provideAnimationsAsync(),
        providePrimeNG({
            theme: {
                preset: MyPreset,
                options: {
                    darkModeSelector: false
                }
            }
        })
    ]
};

// Exemple de fusion avec une autre configuration (si nécessaire)
const mergedConfig = mergeApplicationConfig(appConfig, appConfigNg);

bootstrapApplication(AppComponent, mergedConfig)
  .catch((err) => console.error(err));
