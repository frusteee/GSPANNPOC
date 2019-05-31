package com.gspann.cucumber.StepDefinations;

import com.gspann.cucumber.Browser;
import com.gspann.cucumber.ObjectRepository.ScenarioOutlinePage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.openqa.selenium.WebDriver;

public class ScenarioOutlineStepDef {

    private static final Logger log= LogManager.getLogger(ScenarioOutlineStepDef.class);

    private Browser browser;
    private WebDriver driver;

    public ScenarioOutlineStepDef(Browser browser){
        this.browser=browser;
    }

    @Given("^My name is \"([^\"]*)\"$")
    public void my_name_is_something(String name) throws Throwable {
       //System.out.println(name);
       log.debug("Name : "+name);
    }

    @And("^My place is \"([^\"]*)\"$")
    public void my_place_is_something(String place) throws Throwable {
        //System.out.println("Place : "+place);
        log.debug("Place : "+place);
    }

    @And("^I have a \"([^\"]*)\"$")
    public void i_have_a_something(String animal) throws Throwable {
        //System.out.println("Animal :"+animal);
        log.debug("Animal : "+animal);
    }


}
