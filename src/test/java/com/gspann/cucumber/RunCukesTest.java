package com.gspann.cucumber;

import com.cucumber.listener.Reporter;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import net.masterthought.cucumber.Configuration;
import net.masterthought.cucumber.ReportBuilder;
import net.masterthought.cucumber.Reportable;
import org.junit.AfterClass;
import org.junit.runner.RunWith;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Properties;


/**
 * Created  on 30/05/2019.
 */

@RunWith(Cucumber.class)
@CucumberOptions(
        features = {"src/test/resources/com.gspann.cucumber/Features"},
        plugin= {"pretty","html:test-output","json:cucumber.json", "junit:junit_xml/cucumber.xml","com.cucumber.listener.ExtentCucumberFormatter:target/cucumber-Extent-reports/report.html"},
        tags= {"@test"},
        dryRun =false
)
public class RunCukesTest {

    @AfterClass
    public static void writeExtentReport() {
        Properties prop;
        FileInputStream f = null;
        try {
            f = new FileInputStream(new File("src/test/resources/com.gspann.cucumber/config.properties"));
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        }

        prop = new Properties();
        try {
            prop.load(f);
        } catch (IOException e) {
            e.printStackTrace();
      }


        try {

            Reporter.loadXMLConfig(new File(prop.getProperty("reportConfigPath")));
        }
        catch (Exception e){}

    }


}