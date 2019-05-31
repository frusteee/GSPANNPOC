package com.gspann.cucumber.StepDefinations;

import com.gspann.cucumber.Browser;
import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.openqa.selenium.WebDriver;

import java.util.List;

public class LoginPageStepDef {
    private static final Logger log= LogManager.getLogger(LoginPageStepDef.class);

    private Browser browser;
    private WebDriver driver;

    public LoginPageStepDef(Browser browser){
        this.browser=browser;
    }


    @Given("^User is at Login Page$")
    public void user_is_at_login_page() throws Throwable {
        //System.out.println("User is at Login Page");
        log.debug(" User is at Login Page");
        driver=browser.getDriver();
        driver.get("https://www.google.com/");
    }

    @When("^User Enters valid Email and Password$")
    public void user_enters_valid_email_and_password() throws Throwable {
        //System.out.println("User enters Email and Password");
        log.debug("User Enters valid Email and Password");
    }

    @When("^User Enters valid Email and Password from DataTable$")
    public void user_enters_valid_email_and_password_from_datatable(DataTable dataTable) throws Throwable {
        List<List<String>> data = dataTable.raw();
        //System.out.println("1st Email ID :"+data.get(1).get(0));
        //System.out.println("1st Password :"+data.get(1).get(1));
        //System.out.println("2nd Email ID"+data.get(2).get(0));
        //System.out.println("2nd Password"+data.get(2).get(1));
        log.debug(data.get(1).get(0));
        log.debug(data.get(1).get(1));
        log.debug(data.get(2).get(0));
        log.debug(data.get(2).get(1));


    }

    @When("^User Clicks on Login$")
    public void user_clicks_on_login() throws Throwable {
        //System.out.println("User clicks on Login");
        log.debug("User clicks on Login");
    }

    @Then("^User is successfully Logged In$")
    public void user_is_successfully_logged_in() throws Throwable {
        //System.out.println("User is successfully logged in");
        log.debug("User is successfully logged in");
    }
}
