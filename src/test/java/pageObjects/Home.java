package pageObjects;

import static org.junit.Assert.assertEquals;
import static utils.Utils.*;

import java.awt.List;
import java.io.File;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.By;
import org.openqa.selenium.By.ByXPath;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindAll;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.ui.Select;

import com.google.common.base.Converter;

import io.cucumber.datatable.dependency.com.fasterxml.jackson.annotation.JsonTypeInfo.Id;
import io.cucumber.java.pt.Quando;
import net.bytebuddy.asm.Advice.This;	
	
import org.openqa.selenium.support.ui.Wait;
import sun.reflect.misc.FieldUtil;
import java.io.File;
import java.io.IOException;


public class Home {

	@FindBy(xpath = "//*[@id=\'__next\']/div/main/section[1]/div[2]/header/div/div[3]/nav/ul/li[1]/div[1]/a")
	private WebElement campoDepartamento;

	@FindBy(xpath = "//*[@id=\'__next\']/div/main/section[1]/div[2]/header/div/div[3]/nav/ul/li[1]/div[2]/div/div/div[1]/ul/li[2]/a")
	private WebElement segundoDepartamento;

	@FindBy(xpath = "//*[@id=\'__next\']/div/main/section[4]/div[4]/div/ul/li[3]/a/div[2]/img")
	private WebElement terceiroProduto;

	@FindBy(xpath = "//*[@id=\'__next\']/div/main/section[4]/div[8]/div[2]/button")
	private WebElement botaoAdicionarCarrinho;

	public void acionarCampoDepartamento() {
		campoDepartamento.click();
	}

	public void acionarSegundoDepartamento(){
		segundoDepartamento.click();
	}

	public void acionarTerceiroProduto(){
		terceiroProduto.click();
	}

	public void acionarBotaoCarrinho(){
		botaoAdicionarCarrinho.click();
	}

	public void validarTelaSacola(){
		String textoTelaSacola = driver.findElement(By.xpath("//*[@id=\"root\"]/div/div[2]/div/div[1]")).getText();
		assertEquals("Sacola", textoTelaSacola);
	}


}
