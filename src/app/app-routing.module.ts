import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: './pages/home/home.module#HomePageModule' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'cadastro', loadChildren: './pages/cadastro/cadastro.module#CadastroPageModule' },
  { path: 'chat', loadChildren: './pages/chat/chat.module#ChatPageModule' },
  { path: 'diario', loadChildren: './pages/diario/diario.module#DiarioPageModule' },
  { path: 'post', loadChildren: './pages/post/post.module#PostPageModule' },
  { path: 'cadastrar-diario', loadChildren: './pages/cadastrar-diario/cadastrar-diario.module#CadastrarDiarioPageModule' },
  { path: 'cadastrar-post', loadChildren: './pages/cadastrar-post/cadastrar-post.module#CadastrarPostPageModule' },
  { path: 'post-moderador', loadChildren: './pages/post-moderador/post-moderador.module#PostModeradorPageModule' },
  { path: 'post-verificacao', loadChildren: './pages/post-verificacao/post-verificacao.module#PostVerificacaoPageModule' },
  { path: 'home-moderador', loadChildren: './pages/home-moderador/home-moderador.module#HomeModeradorPageModule' },
  { path: 'confirmar-aprovacao', loadChildren: './pages/confirmar-aprovacao/confirmar-aprovacao.module#ConfirmarAprovacaoPageModule' },
  { path: 'confirmar-reprovacao', loadChildren: './pages/confirmar-reprovacao/confirmar-reprovacao.module#ConfirmarReprovacaoPageModule' },
  { path: 'perfil-usuario', loadChildren: './pages/perfil-usuario/perfil-usuario.module#PerfilUsuarioPageModule' },
  // tslint:disable-next-line: max-line-length
  { path: 'direcionamento-cadastro', loadChildren: './pages/direcionamento-cadastro/direcionamento-cadastro.module#DirecionamentoCadastroPageModule' },
  { path: 'cadastro-usu-msg', loadChildren: './pages/cadastro-usu-msg/cadastro-usu-msg.module#CadastroUsuMsgPageModule' },
  { path: 'cadastro-post-usu', loadChildren: './pages/cadastro-post-usu/cadastro-post-usu.module#CadastroPostUsuPageModule' },
  { path: 'cadastro-post-pro', loadChildren: './pages/cadastro-post-pro/cadastro-post-pro.module#CadastroPostProPageModule' },
  { path: 'cadastro-post-mod', loadChildren: './pages/cadastro-post-mod/cadastro-post-mod.module#CadastroPostModPageModule' },
  { path: 'perfil-moderador', loadChildren: './pages/perfil-moderador/perfil-moderador.module#PerfilModeradorPageModule' },
  { path: 'denuncia', loadChildren: './pages/denuncia/denuncia.module#DenunciaPageModule' },
  { path: 'chat-usuario', loadChildren: './pages/chat-usuario/chat-usuario.module#ChatUsuarioPageModule' },
  { path: 'conversa', loadChildren: './pages/conversa/conversa.module#ConversaPageModule' },
  { path: 'profissionais-online', loadChildren: './pages/profissionais-online/profissionais-online.module#ProfissionaisOnlinePageModule' },
  { path: 'analise-humor', loadChildren: './pages/analise-humor/analise-humor.module#AnaliseHumorPageModule' },
  { path: 'home-profissional', loadChildren: './pages/home-profissional/home-profissional.module#HomeProfissionalPageModule' },
  { path: 'post-profissional', loadChildren: './pages/post-profissional/post-profissional.module#PostProfissionalPageModule' },
  { path: 'chat-profissional', loadChildren: './pages/chat-profissional/chat-profissional.module#ChatProfissionalPageModule' },
  { path: 'perfil-profissional', loadChildren: './pages/perfi-profissional/perfi-profissional.module#PerfiProfissionalPageModule' },
  { path: 'cadastro-voluntario', loadChildren: './pages/cadastro-voluntario/cadastro-voluntario.module#CadastroVoluntarioPageModule' },
  // tslint:disable-next-line: max-line-length
  { path: 'cadastro-profissional', loadChildren: './pages/cadastro-profissional/cadastro-profissional.module#CadastroProfissionalPageModule' },
  // tslint:disable-next-line: max-line-length
  { path: 'mensagem-profissional', loadChildren: './pages/mensagem-profissional/mensagem-profissional.module#MensagemProfissionalPageModule' },
  { path: 'mensagem-espera', loadChildren: './pages/mensagem-espera/mensagem-espera.module#MensagemEsperaPageModule' },
  { path: 'denunciar-post', loadChildren: './pages/denunciar-post/denunciar-post.module#DenunciarPostPageModule' },
  { path: 'rota', loadChildren: './pages/rota/rota.module#RotaPageModule' },
  { path: 'adm-aprov-usu', loadChildren: './pages/adm-aprov-usu/adm-aprov-usu.module#AdmAprovUsuPageModule' },
  { path: 'analise-denuncia', loadChildren: './pages/analise-denuncia/analise-denuncia.module#AnaliseDenunciaPageModule' },
  { path: 'perfil-administrador', loadChildren: './pages/perfil-administrador/perfil-administrador.module#PerfilAdministradorPageModule' },
  { path: 'sala-de-espera', loadChildren: './pages/sala-de-espera/sala-de-espera.module#SalaDeEsperaPageModule' },
  { path: 'termo-de-uso', loadChildren: './pages/termo-de-uso/termo-de-uso.module#TermoDeUsoPageModule' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
