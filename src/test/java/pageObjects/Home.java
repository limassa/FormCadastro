package pageObjects;

import static org.junit.Assert.assertEquals;
import static utils.Utils.*;

import java.awt.List;

import org.openqa.selenium.By;
import org.openqa.selenium.By.ByXPath;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindAll;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.ui.Select;

import com.google.common.base.Converter;

import io.cucumber.datatable.dependency.com.fasterxml.jackson.annotation.JsonTypeInfo.Id;
import io.cucumber.java.pt.Quando;
import net.bytebuddy.asm.Advice.This;	
	
import org.openqa.selenium.support.ui.Wait;
public class Home {

	@FindBy(name = "name")
	private WebElement campoNome;

	@FindBy(name = "email")
	private WebElement campoEmail;

	@FindBy(name = "password")
	private WebElement campoSenha;

	@FindBy(id = "register")
	private WebElement botaoCadastrar;

	@FindBy(id = "removeUser1")
	private WebElement botaoExcluir;

	public void acionarBotaoCadastro() {
		botaoCadastrar.click();
	}

	public void acionarBotaoExcluir() {
		botaoExcluir.click();
	}

	public void informarCampoNome(String nome) {
		campoNome.sendKeys(nome);
	}

	public void informarCampoEmail(String email) {
		campoEmail.sendKeys(email);
	}

	public void informarCampoSenha(String senha) {
		campoSenha.sendKeys(senha);
	}

	public void validarErroNomeCompleto(){
		String erroNomeCompleto = driver.findElement(By.className("error")).getText();
		assertEquals("Por favor, insira um nome completo.", erroNomeCompleto);
	}

	public void validarErroEmailValido(){
		String erroEmailValido = driver.findElement(By.className("error")).getText();
		assertEquals("Por favor, insira um e-mail válido.", erroEmailValido);
	}

	public void validarErroSenhaValida(){
		String erroSenhaValida= driver.findElement(By.className("error")).getText();
		assertEquals("A senha deve conter ao menos 8 caracteres.", erroSenhaValida);
	}

	public void validarErroNome(){
		String erroNome = driver.findElement(By.className("error")).getText();
		assertEquals("O campo Nome é obrigatório.", erroNome);
	}

	public void validarErroEmail(){
		String erroEmail = driver.findElement(By.className("error")).getText();
		assertEquals("O campo E-mail é obrigatório.", erroEmail);
	}

	public void validarErroSenha(){
		String erroSenha = driver.findElement(By.className("error")).getText();
		assertEquals("O campo Senha é obrigatório.", erroSenha);
	}

	public void validarTabela(){
		String existeTabela = driver.findElement(By.className("table-title")).getText();
		assertEquals("Usuários cadastrados", existeTabela);
	}

	public void validarTabelaNaoExiste(){
		String naoExisteTabela = driver.findElement(By.className("table-title")).getText();
		assertEquals("", naoExisteTabela);
	}

	public void realizarCadastro(String nome, String email, String senha) {
		acionarBotaoCadastro();
		informarCampoNome(nome);
		informarCampoEmail(email);
		informarCampoSenha(senha);
		acionarBotaoExcluir();
	}

}
