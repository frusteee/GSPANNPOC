# Gherkin-UI-Tests
Gherkin UI Tests designed in Java using PageObjectMoel following the Page Factory concept
with Maven Integration. The framework is using the Selenium Webdriver API,CucumberAPI,Java9 API and JUnit 4 API

# Getting Started

* Install IntelliJ Community Version from 
  https://www.jetbrains.com/idea/

* Import the project in IntelliJ

# Running the tests 

* Under /src/test/java , fetch for the RunCukesTest.java class 
* Right click on the class and Run the test

# Prerequisite 
* JDK should be setup for the project
* Make sure the Java complier byte code version is set as 1.8

# External Dependencies used

You can check them out under the pom.xml

* JUnit 4.12
* Cucumber-junit
* Cucumber-Java
* Selenium-Java
* Extent Reports by aventstack
* Log4j2

# Reporting Test Execution

Currently the framework is supporting JSON, XML and HTML and Extent HTML reports

* JSON reports are stored @ json_output
* XML reports are stored @ junit_xml
* HTMl reports are stored @ test-outout/index.html
* Extent reports under target/Cucumber-Extent-Reports


# Extra features

 * The Framework now supports execution on Chrome and Firefox with headless Options Available and also Safari,by 
   simply changing the the browser property @ src/test/Resources/com.gspann.cucumber/config.properties
   to either chrome or firefox or firefoxheadless or chromeheadless or chrome or safari
 * Logs are stored at logs folder

    
 # Coding styles
 
 * Page Objects are maintained @ /src/test/java/com.gspann.cucumber/ObjectRepository
 * Step Definations are maintained @ /src/test/java/com.gspann.cucumber/StepDefinations

# Built With
* PageFactory for identifying page objects
* Scripting in Java

# Built By

Rahul-Sharma

