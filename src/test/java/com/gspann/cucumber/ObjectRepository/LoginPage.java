package com.gspann.cucumber.ObjectRepository;

import com.gspann.cucumber.Browser;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

public class LoginPage {
    private WebDriver driver;
    private Browser browser;

    public LoginPage(WebDriver driver) {
        PageFactory.initElements(driver, this);
    }

    //Define all the WebElements here


}
