package stepsDefinitions;

import static org.junit.Assert.assertEquals;

import java.awt.peer.LabelPeer;
import java.io.IOException;

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


	@Dado("que estou na tela principal")
	public void verificarTela(){
		acessarSistema();
	}

	@Quando("clicar em Departamento")
	public void acionarBotaoDepartamento(){
		Na(Home.class).acionarCampoDepartamento();
	}

	@E("selecionar o segundo Departamento")
	public void acionarSegundoDepartamento(){
		Na(Home.class).acionarSegundoDepartamento();
	}

	@E("selecionar o terceiro Produto")
	public void acionarTerceiroProduto(){
		Na(Home.class).acionarTerceiroProduto();
	}

	@E("clicar no botao 'Adicionar a Sacola'")
	public void acionarBotaoAdicionar(){
		Na(Home.class).acionarBotaoCarrinho();
	}

	@Entao("devera ser exbido os itens da Sacola")
	public void validarItens(){
		Na(Home.class).validarTelaSacola();
	}
}
