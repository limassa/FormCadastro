package stepsDefinitions;

import static org.junit.Assert.assertEquals;

import java.awt.peer.LabelPeer;

import io.cucumber.java.en.Given;
import io.cucumber.java.pt.E;
import org.junit.rules.TestRule;
import org.junit.validator.PublicClassValidator;
import org.omg.CORBA.PUBLIC_MEMBER;
import org.openqa.selenium.By;
import org.openqa.selenium.support.ui.WebDriverWait;

import cucumber.api.java.en.And;
import cucumber.api.java.jv.Nalika;
import cucumber.runtime.Utils;
import io.cucumber.java.pt.Entao;
import io.cucumber.java.pt.Quando;
import io.cucumber.java.pt.Dado;
import io.cucumber.java.en.Given;
import pageObjects.Home;
import static utils.Utils.*;

public class HomeSteps {
	
	Home lp = new Home();


	@Dado("que estou na tela de login")
	public void verificarTela(){
		acessarSistema();
	}

	@E("informar um valor {string} no campo Nome")
	public void informarCampoNome(String nome){
		Na(Home.class).informarCampoNome(nome);
	}

	@E("informar um valor {string} no campo E-mail")
	public void informarCampoEmail(String email){
		Na(Home.class).informarCampoEmail(email);
	}

	@E("informar um valor {string} no campo Senha")
	public void informarCampoSenha(String senha){
		Na(Home.class).informarCampoSenha(senha);
	}

	@Quando("clicar em Cadastrar")
	public void acionarBotaoCadastrar(){
		Na(Home.class).acionarBotaoCadastro();
	}

	@E("clicar no botao Cadastrar")
	public void acionarBotaoCadastrarAnd(){
		Na(Home.class).acionarBotaoCadastro();
	}

	@Entao("o sistema deve exibir uma mensagem 'Por favor, insira um nome completo'")
	public void erroNomeCompleto(){
		Na(Home.class).validarErroNomeCompleto();
	}

	@Entao("o sistema deve exibir uma mensagem 'Por favor, insira um e-mail Valido'")
	public void erroEmailCompleto(){
		Na(Home.class).validarErroEmailValido();
	}

	@Entao("o sistema deve exibir uma mensagem 'A senha deve conter ao menos 8 caracteres'")
	public void erroSenhaValida(){
		Na(Home.class).validarErroSenhaValida();
	}

	@Entao("o sistema deve exibir uma mensagem informando que o campo Nome nao foi preenchido")
	public void erroNome(){
		Na(Home.class).validarErroNome();
	}

	@Entao("o sistema deve exibir uma mensagem informando que o campo E-mail nao foi preenchido")
	public void erroEmail(){
		Na(Home.class).validarErroEmail();
	}

	@Entao("o sistema deve exibir uma mensagem informando que o campo Senha nao foi preenchido")
	public void erroSenha(){
		Na(Home.class).validarErroSenha();
	}

	@Entao("o sistema deve exibir uma mensagem informando que os campos nao estao preenchidos")
	public void erroCampos(){
		Na(Home.class).validarErroNome();
		Na(Home.class).validarErroEmail();
		Na(Home.class).validarErroSenha();
	}

	@Quando("clicar em Excluir")
	public void acionarBotaoExcluir(){
		Na(Home.class).acionarBotaoExcluir();
	}

	@Entao("o sistema deve exibir uma tabela com os dados informados anteriormente")
	public void validarTabela(){
		Na(Home.class).validarTabela();
	}
}
