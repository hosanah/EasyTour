import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TelaLoginComponent } from './pages/account/tela-login/tela-login.component';
import { ResetarSenhaTelaComponent } from './pages/account/resetar-senha-tela/resetar-senha-tela.component';
import { CadastroLoginTelaComponent } from './pages/account/cadastro-login-tela/cadastro-login-tela.component';
import { ProdutosPageComponent } from './pages/diversas/produtos-page/produtos-page.component';
import { ClientesPageComponent } from './pages/diversas/clientes-page/clientes-page.component';
import { EmpresasPageComponent } from './pages/diversas/empresas-page/empresas-page.component';
import { FuncionariosPageComponent } from './pages/diversas/funcionarios-page/funcionarios-page.component';

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
    FuncionariosPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
