#language: pt
#enconding: UTF-8

@login
Funcionalidade: login

Cenario: Realizar Login
Quando clicar no botao Login
E informar o email "teste1@123.com"
E clicar no botao Criar Login
#Ent�o o sistema deve ser redirecionado para o Formulario
E selecionar a opcao Title
E informar o First Name "Joao"
E informar o Last Name "Neto"
E informar o Password "Teste123"
#E clicar no combo Dia
E selecionar o Dia 7
#E clicar no combo Mes
E selecionar o Mes "5"
#E clicar no combo Ano
E selecionar o ano 1999
E informar a Company "ISH"
E informar o Address "Rua Teste"
E informar o Address2 "Apt 1"
E informar City "Salvador"
#E clicar no combo State
E selecionar o State "9"
E informar o Postal Code "41150"
E informar Mobile Phone "99999-9999"
E clicar no botao Registrar


#E selecionar a Opcao 4
#E clicar no  botao Adicionar
#E informar o nome "Teste Sicredi"
#E informar o Last Name "Teste"
#E informar o Contato "Joao"
#E informar o telefone "51 9999-9999"
#E informar o AddressLine1 "Av Assis Brasil, 3970"
#E informar o AddressLine2 "Torre D"
#E informar o City "Porto Alegre"
#E informar o State "RS"
#E informar o PostalCode "91000-000"
#E informar o Country "Brasil"
#E informar o from Employeer "Fixter"
#E informar o CreditLimit "200"
#E clicar no botao Save
#Entao o sistema deve exibir a mensagem de cadastrado com Sucesso

#Funcionalidade: FormularioExcluir
#Cenario: ExcluirRegistro
#Quando clicar no combo tema 
#E selecionar a Opcao
#E clicar no  botao Adicionar
#E informar o nome "Teste Sicredi"
#E informar o Last Name "Teste"
#E informar o Contato "Joao"
#E informar o telefone "51 9999-9999"
#E informar o AddressLine1 "Av Assis Brasil, 3970"
#E informar o AddressLine2 "Torre D"
#E informar o City "Porto Alegre"
#E informar o State "RS"
#E informar o PostalCode "91000-000"
#E informar o Country "Brasil"
#E informar o from Employeer "Fixter"
#E informar o CreditLimit "200"
#E clicar no botao Save
#Entao o sistema deve exibir a mensagem de cadastrado com Sucesso
#Quando clicar em voltar
#E aguarde 5 segundos
#E o sistema deve exibir a mensagem
#E aguarde 5 segundos
#E buscar o nome "Teste Sicredi"
#E aguarde 5 segundos
#E clicar o checkbox
#E aguarde 2 segundos
#E clicar no botao delete
#Entao o sistema deve exibir a mensagem de exclusao
#E confirmar a exclusao
#E aguarde 5 segundos
#Entao o sistema deve exibir a confirmacao

#Cenario: EditarRegistro
#Quando clicar no combo tema 
#E selecionar a Opcao
#E buscar o nome "Teste Sicredi"
#E aguarde 5 segundos
#E clicar no  botao Editar
#E informar o nome "Teste Sicredi Mod"
#E informar o Last Name "Teste Mod"
#E informar o Contato "Joao"
#E informar o telefone "51 9999-9999"
#E informar o AddressLine1 "Av Assis Brasil, 3970"
#E informar o AddressLine2 "Torre D"
#E informar o City "Porto Alegre"
#E informar o State "RS"
#E informar o PostalCode "91000-000"
#E informar o Country "Brasil"
#E informar o from Employeer "Fixter"
#E informar o CreditLimit "200"
#Quando clicar em voltar

 



 
