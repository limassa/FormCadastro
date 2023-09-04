$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/Cenarios.feature");
formatter.feature({
  "name": "home",
  "description": "",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "name": "@Stefanini"
    }
  ]
});
formatter.scenario({
  "name": "Validar campos em branco",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@Stefanini"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que estou na tela de login",
  "keyword": "Dado "
});
formatter.match({
  "location": "HomeSteps.verificarTela()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar um valor \"\" no campo Nome",
  "keyword": "E "
});
formatter.match({
  "location": "HomeSteps.informarCampoNome(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar um valor \"\" no campo E-mail",
  "keyword": "E "
});
formatter.match({
  "location": "HomeSteps.informarCampoEmail(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar um valor \"\" no campo Senha",
  "keyword": "E "
});
formatter.match({
  "location": "HomeSteps.informarCampoSenha(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar em Cadastrar",
  "keyword": "Quando "
});
formatter.match({
  "location": "HomeSteps.acionarBotaoCadastrar()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Validar campo Nome",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@Stefanini"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que estou na tela de login",
  "keyword": "Dado "
});
formatter.match({
  "location": "HomeSteps.verificarTela()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar um valor \"teste@gmail.com\" no campo E-mail",
  "keyword": "E "
});
formatter.match({
  "location": "HomeSteps.informarCampoEmail(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar um valor \"senha123\" no campo Senha",
  "keyword": "E "
});
formatter.match({
  "location": "HomeSteps.informarCampoSenha(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar em Cadastrar",
  "keyword": "Quando "
});
formatter.match({
  "location": "HomeSteps.acionarBotaoCadastrar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o sistema deve exibir uma mensagem informando que o campo Nome nao foi preenchido",
  "keyword": "Entao "
});
formatter.match({
  "location": "HomeSteps.erroNome()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Validar campo E-mail",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@Stefanini"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que estou na tela de login",
  "keyword": "Dado "
});
formatter.match({
  "location": "HomeSteps.verificarTela()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar um valor \"Joao Neto\" no campo Nome",
  "keyword": "E "
});
formatter.match({
  "location": "HomeSteps.informarCampoNome(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar um valor \"senha123\" no campo Senha",
  "keyword": "E "
});
formatter.match({
  "location": "HomeSteps.informarCampoSenha(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar em Cadastrar",
  "keyword": "Quando "
});
formatter.match({
  "location": "HomeSteps.acionarBotaoCadastrar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o sistema deve exibir uma mensagem informando que o campo E-mail nao foi preenchido",
  "keyword": "Entao "
});
formatter.match({
  "location": "HomeSteps.erroEmail()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Validar campo Senha",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@Stefanini"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que estou na tela de login",
  "keyword": "Dado "
});
formatter.match({
  "location": "HomeSteps.verificarTela()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar um valor \"Joao Neto\" no campo Nome",
  "keyword": "E "
});
formatter.match({
  "location": "HomeSteps.informarCampoNome(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar um valor \"teste@gmail.com\" no campo E-mail",
  "keyword": "E "
});
formatter.match({
  "location": "HomeSteps.informarCampoEmail(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar em Cadastrar",
  "keyword": "Quando "
});
formatter.match({
  "location": "HomeSteps.acionarBotaoCadastrar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o sistema deve exibir uma mensagem informando que o campo Senha nao foi preenchido",
  "keyword": "Entao "
});
formatter.match({
  "location": "HomeSteps.erroSenha()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Validar Nome Completo",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@Stefanini"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que estou na tela de login",
  "keyword": "Dado "
});
formatter.match({
  "location": "HomeSteps.verificarTela()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar um valor \"Joao\" no campo Nome",
  "keyword": "E "
});
formatter.match({
  "location": "HomeSteps.informarCampoNome(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar um valor \"teste@gmail.com\" no campo E-mail",
  "keyword": "E "
});
formatter.match({
  "location": "HomeSteps.informarCampoEmail(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar um valor \"senha123\" no campo Senha",
  "keyword": "E "
});
formatter.match({
  "location": "HomeSteps.informarCampoSenha(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar em Cadastrar",
  "keyword": "Quando "
});
formatter.match({
  "location": "HomeSteps.acionarBotaoCadastrar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o sistema deve exibir uma mensagem \u0027Por favor, insira um nome completo\u0027",
  "keyword": "Entao "
});
formatter.match({
  "location": "HomeSteps.erroNomeCompleto()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Validar E-mail",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@Stefanini"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que estou na tela de login",
  "keyword": "Dado "
});
formatter.match({
  "location": "HomeSteps.verificarTela()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar um valor \"Joao Neto\" no campo Nome",
  "keyword": "E "
});
formatter.match({
  "location": "HomeSteps.informarCampoNome(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar um valor \"teste\" no campo E-mail",
  "keyword": "E "
});
formatter.match({
  "location": "HomeSteps.informarCampoEmail(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar um valor \"senha123\" no campo Senha",
  "keyword": "E "
});
formatter.match({
  "location": "HomeSteps.informarCampoSenha(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar em Cadastrar",
  "keyword": "Quando "
});
formatter.match({
  "location": "HomeSteps.acionarBotaoCadastrar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o sistema deve exibir uma mensagem \u0027Por favor, insira um e-mail Valido\u0027",
  "keyword": "Entao "
});
formatter.match({
  "location": "HomeSteps.erroEmailCompleto()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Validar Senha",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@Stefanini"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que estou na tela de login",
  "keyword": "Dado "
});
formatter.match({
  "location": "HomeSteps.verificarTela()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar um valor \"Joao Neto\" no campo Nome",
  "keyword": "E "
});
formatter.match({
  "location": "HomeSteps.informarCampoNome(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar um valor \"teste@gmail.com\" no campo E-mail",
  "keyword": "E "
});
formatter.match({
  "location": "HomeSteps.informarCampoEmail(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar um valor \"senha\" no campo Senha",
  "keyword": "E "
});
formatter.match({
  "location": "HomeSteps.informarCampoSenha(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar em Cadastrar",
  "keyword": "Quando "
});
formatter.match({
  "location": "HomeSteps.acionarBotaoCadastrar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o sistema deve exibir uma mensagem \u0027A senha deve conter ao menos 8 caracteres\u0027",
  "keyword": "Entao "
});
formatter.match({
  "location": "HomeSteps.erroSenhaValida()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Validar Cadastro",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@Stefanini"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que estou na tela de login",
  "keyword": "Dado "
});
formatter.match({
  "location": "HomeSteps.verificarTela()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar um valor \"Joao Neto\" no campo Nome",
  "keyword": "E "
});
formatter.match({
  "location": "HomeSteps.informarCampoNome(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar um valor \"teste@gmail.com\" no campo E-mail",
  "keyword": "E "
});
formatter.match({
  "location": "HomeSteps.informarCampoEmail(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar um valor \"senha123\" no campo Senha",
  "keyword": "E "
});
formatter.match({
  "location": "HomeSteps.informarCampoSenha(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar em Cadastrar",
  "keyword": "Quando "
});
formatter.match({
  "location": "HomeSteps.acionarBotaoCadastrar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o sistema deve exibir uma tabela com os dados informados anteriormente",
  "keyword": "Entao "
});
formatter.match({
  "location": "HomeSteps.validarTabela()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Validar Cadastro",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@Stefanini"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que estou na tela de login",
  "keyword": "Dado "
});
formatter.match({
  "location": "HomeSteps.verificarTela()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar um valor \"Joao Neto\" no campo Nome",
  "keyword": "E "
});
formatter.match({
  "location": "HomeSteps.informarCampoNome(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar um valor \"teste@gmail.com\" no campo E-mail",
  "keyword": "E "
});
formatter.match({
  "location": "HomeSteps.informarCampoEmail(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar um valor \"senha123\" no campo Senha",
  "keyword": "E "
});
formatter.match({
  "location": "HomeSteps.informarCampoSenha(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botao Cadastrar",
  "keyword": "E "
});
formatter.match({
  "location": "HomeSteps.acionarBotaoCadastrarAnd()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar em Excluir",
  "keyword": "Quando "
});
formatter.match({
  "location": "HomeSteps.acionarBotaoExcluir()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});