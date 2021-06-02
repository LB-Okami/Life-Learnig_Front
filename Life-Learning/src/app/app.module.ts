
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
<<<<<<< HEAD
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
=======
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';

>>>>>>> consumo-cadastrar-matheus-lucas

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { RodapeComponent } from './rodape/rodape.component';
import { HomeComponent } from './home/home.component';
import { SobreComponent } from './sobre/sobre.component';
import { EntrarComponent } from './entrar/entrar.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { InicioComponent } from './inicio/inicio.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    RodapeComponent,
    HomeComponent,
    SobreComponent,
    EntrarComponent,
    CadastrarComponent,
    InicioComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
<<<<<<< HEAD
=======
  
>>>>>>> consumo-cadastrar-matheus-lucas
  ],

  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
