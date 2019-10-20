import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DadosUsuarioService {

  codUsuario = '';
  emailUsuario = '';
  statusUsuario = '';
  tipoUsuario = '';
  nomeUsuario = '';
  fotoUsuario = '';
  sobrenomeUsuario = '';
  iniciousurio = '';
  codProf = '';
  nascimento: '';


  constructor() { }

  setCodigoProf(valor) {
    this.codProf = valor;
  }


  getNascimento() {
    return this.nascimento;
  }

  setNascimento(valor) {
    this.nascimento = valor;
  }

  getCodigoProf() {
    return this.codProf;
  }

  setCodUsuario(valor) {
    this.codUsuario = valor;
  }

  getCodUsuario() {
    return this.codUsuario;
  }

  setInicioUsuario(valor) {
    this.iniciousurio = valor;
  }

  getInicioUsuario(valor) {
    return this.iniciousurio = valor;
  }

  setEmailUsuario(valor) {
    this.emailUsuario = valor;
  }

  getEmailUsuario() {
    return this.emailUsuario;
  }

  setStatusUsuario(valor) {
    this.statusUsuario = valor;
  }

  getStatusUsuario() {
    return this.statusUsuario;
  }

  setTipoUsuario(valor) {
    this.tipoUsuario = valor;
  }

  getTipoUsuario() {
    return this.tipoUsuario;
  }

  setNomeUsuario(valor) {
    this.nomeUsuario = valor;
  }

  getNomeUsuario() {
    return this.nomeUsuario;
  }

  setSobrenomeUsuario(valor) {
    this.sobrenomeUsuario = valor;
  }

  getSobrenomeUsuario() {
    return this.sobrenomeUsuario;
  }

  setFotoUsuario(valor) {
    this.fotoUsuario = valor;
  }

  getFotoUsuario() {
    return this.fotoUsuario;
  }


}
