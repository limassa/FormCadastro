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
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"*[name\u003d\u0027email\u0027]\"}\n  (Session info: chrome\u003d114.0.5735.199)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027DESKTOP-C1VSK8U\u0027, ip: \u0027192.168.11.64\u0027, os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_321\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 114.0.5735.199, chrome: {chromedriverVersion: 114.0.5735.90 (386bc09e8f4f..., userDataDir: C:\\Users\\morei\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:50848}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 1f794434bcf17a788b1e6037ae2f72ba\n*** Element info: {Using\u003dname, value\u003demail}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:322)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByName(RemoteWebDriver.java:400)\r\n\tat org.openqa.selenium.By$ByName.findElement(By.java:284)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:314)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy18.sendKeys(Unknown Source)\r\n\tat pageObjects.Home.informarCampoEmail(Home.java:61)\r\n\tat stepsDefinitions.HomeSteps.informarCampoEmail(HomeSteps.java:43)\r\n\tat ✽.informar um valor \"teste@gmail.com\" no campo E-mail(file:src/test/resources/features/Cenarios.feature:9)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "informar um valor \"senha123\" no campo Senha",
  "keyword": "E "
});
formatter.match({
  "location": "HomeSteps.informarCampoSenha(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "clicar em Cadastrar",
  "keyword": "Quando "
});
formatter.match({
  "location": "HomeSteps.acionarBotaoCadastrar()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "o sistema deve exibir uma mensagem informando que o campo Nome nao foi preenchido",
  "keyword": "Entao "
});
formatter.match({
  "location": "HomeSteps.erroNome()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
});