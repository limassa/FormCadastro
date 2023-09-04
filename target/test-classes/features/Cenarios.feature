#language: pt
#enconding: UTF-8

@Stefanini
Funcionalidade: home

  Cenario: Validar campos em branco
    Dado que estou na tela de login
    E informar um valor "" no campo Nome
    E informar um valor "" no campo E-mail
    E informar um valor "" no campo Senha
    Quando clicar em Cadastrar
    #Entao o sistema deve exibir uma mensagem informando que os campos nao estao preenchidos

  Cenario: Validar campo Nome
    Dado que estou na tela de login
    E informar um valor "teste@gmail.com" no campo E-mail
    E informar um valor "senha123" no campo Senha
    Quando clicar em Cadastrar
    Entao o sistema deve exibir uma mensagem informando que o campo Nome nao foi preenchido

  Cenario: Validar campo E-mail
    Dado que estou na tela de login
    E informar um valor "Joao Neto" no campo Nome
    E informar um valor "senha123" no campo Senha
    Quando clicar em Cadastrar
    Entao o sistema deve exibir uma mensagem informando que o campo E-mail nao foi preenchido

  Cenario: Validar campo Senha
    Dado que estou na tela de login
    E informar um valor "Joao Neto" no campo Nome
    E informar um valor "teste@gmail.com" no campo E-mail
    Quando clicar em Cadastrar
    Entao o sistema deve exibir uma mensagem informando que o campo Senha nao foi preenchido

  Cenario: Validar Nome Completo
    Dado que estou na tela de login
    E informar um valor "Joao" no campo Nome
    E informar um valor "teste@gmail.com" no campo E-mail
    E informar um valor "senha123" no campo Senha
    Quando clicar em Cadastrar
    Entao o sistema deve exibir uma mensagem 'Por favor, insira um nome completo'

  Cenario: Validar E-mail
    Dado que estou na tela de login
    E informar um valor "Joao Neto" no campo Nome
    E informar um valor "teste" no campo E-mail
    E informar um valor "senha123" no campo Senha
    Quando clicar em Cadastrar
    Entao o sistema deve exibir uma mensagem 'Por favor, insira um e-mail Valido'

  Cenario: Validar Senha
    Dado que estou na tela de login
    E informar um valor "Joao Neto" no campo Nome
    E informar um valor "teste@gmail.com" no campo E-mail
    E informar um valor "senha" no campo Senha
    Quando clicar em Cadastrar
    Entao o sistema deve exibir uma mensagem 'A senha deve conter ao menos 8 caracteres'

  Cenario: Validar Cadastro
    Dado que estou na tela de login
    E informar um valor "Joao Neto" no campo Nome
    E informar um valor "teste@gmail.com" no campo E-mail
    E informar um valor "senha123" no campo Senha
    Quando clicar em Cadastrar
    Entao o sistema deve exibir uma tabela com os dados informados anteriormente

  Cenario: Validar Cadastro
    Dado que estou na tela de login
    E informar um valor "Joao Neto" no campo Nome
    E informar um valor "teste@gmail.com" no campo E-mail
    E informar um valor "senha123" no campo Senha
    E clicar no botao Cadastrar
    Quando clicar em Excluir
    #Entao o sistema deve excluir a linha


