import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroLoginTelaComponent } from './pages/account/cadastro-login-tela/cadastro-login-tela.component';
import { ResetarSenhaTelaComponent } from './pages/account/resetar-senha-tela/resetar-senha-tela.component';
import { TelaLoginComponent } from './pages/account/tela-login/tela-login.component';
import { ClientesPageComponent } from './pages/cadastros/clientes-page/clientes-page.component';
import { EmpresasPageComponent } from './pages/cadastros/empresas-page/empresas-page.component';
import { FuncionariosPageComponent } from './pages/cadastros/funcionarios-page/funcionarios-page.component';
import { ProdutosPageComponent } from './pages/cadastros/produtos-page/produtos-page.component';
import { AgendaPageComponent } from './pages/diversas/agenda-page/agenda-page.component';
import { InfoPageComponent } from './pages/diversas/info-page/info-page.component';
import { FramePageComponent } from './pages/master/frame.page';

const routes: Routes = [
  {
    path: '',
    component: FramePageComponent,
    children: [
      {path: 'clientes',component: ClientesPageComponent},
      {path: 'empresas',component: EmpresasPageComponent},
      {path: 'funcionarios',component: FuncionariosPageComponent},
      {path: 'produtos',component: ProdutosPageComponent},
      {path: 'agenda',component: AgendaPageComponent},
      {path: 'info',component: InfoPageComponent},
    ]
  },
  {path: 'login',component: TelaLoginComponent},
  {path: 'resetarsenha',component: ResetarSenhaTelaComponent},
  {path: 'cadastrologin',component: CadastroLoginTelaComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
