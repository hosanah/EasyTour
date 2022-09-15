import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TelaLoginComponent } from './pages/account/tela-login/tela-login.component';
import { ResetarSenhaTelaComponent } from './pages/account/resetar-senha-tela/resetar-senha-tela.component';
import { CadastroLoginTelaComponent } from './pages/account/cadastro-login-tela/cadastro-login-tela.component';
import { ProdutosPageComponent } from './pages/cadastros/produtos-page/produtos-page.component';
import { ClientesPageComponent } from './pages/cadastros/clientes-page/clientes-page.component';
import { EmpresasPageComponent } from './pages/cadastros/empresas-page/empresas-page.component';
import { FuncionariosPageComponent } from './pages/cadastros/funcionarios-page/funcionarios-page.component';
import { FramePageComponent } from './pages/master/frame.page';
import { AgendaPageComponent } from './pages/diversas/agenda-page/agenda-page.component';
import { InfoPageComponent } from './pages/diversas/info-page/info-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TelaLoginComponent,
    ResetarSenhaTelaComponent,
    CadastroLoginTelaComponent,
    ProdutosPageComponent,
    ClientesPageComponent,
    EmpresasPageComponent,
    FuncionariosPageComponent,
    FramePageComponent,
    AgendaPageComponent,
    InfoPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
