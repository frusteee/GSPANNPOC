package com.gspann.cucumber.ObjectRepository;

import com.gspann.cucumber.Browser;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

public class ScenarioOutlinePage {
    private WebDriver driver;
    private Browser browser;

    public ScenarioOutlinePage(WebDriver driver) {
        PageFactory.initElements(driver, this);
    }

    //Define all the WebElements here
}
