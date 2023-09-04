package runners;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import io.cucumber.junit.CucumberOptions.SnippetType;

@RunWith(Cucumber.class)
@CucumberOptions(
		plugin = {"pretty","html:target/Relatorio-html.html"},
		features="src/test/resources/features",
		glue = "stepsDefinitions",
		snippets = SnippetType.CAMELCASE,
		monochrome = false,
		dryRun = false
		)

public class RunnerTest {
	

}
