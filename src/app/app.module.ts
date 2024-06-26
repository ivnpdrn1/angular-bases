import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CounterModule } from './counter/counter.module';
import { HeroesModule } from './heroes/heroes.module';
import { DbzModule} from './dbz/dbz.module';

import { AppComponent } from './app.component';

                                                                // donde estamos importando esa Clase con su Decorador


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    CounterModule,
    HeroesModule,
    DbzModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// importaciones de Angular
// libreria de terceros
// y por ultimo nuestro codigo


