package com.calculator;
import cucumber.api.PendingException;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.appium.java_client.MobileElement;
import io.appium.java_client.android.AndroidDriver;
import org.junit.Assert;
import org.openqa.selenium.ScreenOrientation;
import org.openqa.selenium.remote.DesiredCapabilities;

import javax.print.attribute.IntegerSyntax;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.Arrays;

public class MyStepdefs {

    private AndroidDriver driver;

//launching app and sending capabilities to appium
    @Before
    public void setUp() throws MalformedURLException {
        DesiredCapabilities desiredCapabilities = new DesiredCapabilities();
        desiredCapabilities.setCapability("platformName", "Android");
        desiredCapabilities.setCapability("deviceName", "Nexus 6 API 27");
        desiredCapabilities.setCapability("app", "C:\\Users\\Anusha\\Downloads\\Calculator.apk");

        URL remoteUrl = new URL("http://127.0.0.1:4723/wd/hub");

        driver = new AndroidDriver(remoteUrl, desiredCapabilities);
       // driver.getOrientation();
       // driver.rotate(ScreenOrientation.LANDSCAPE);
    }

    //Closing the app
    @After
    public void close(){
        driver.quit();
    }

    @Given("^user selects \"([^\"]*)\" number$")
    public void userSelectsNumber(String Number) {
        String num = Number;
         //int numval = Integer.parseInt(Number);
       //String string = Integer.toString(num);
        int[] digits = new int[num.length()];

        for(int i = 0; i<num.length(); ++i){
            digits[i] = Integer.parseInt(num.substring(i, i+1));
            MobileElement ele_num1 = (MobileElement) driver.findElementById("com.google.android.calculator:id/digit_"+digits[i]);
            ele_num1.click();
        }
      //  System.out.println("digits:" + Arrays.toString(digits));
    }

    @And("^user clicks on \"([^\"]*)\" operation$")
    public void userClicksOnOperation(String operation) {
        MobileElement ele_op = (MobileElement) driver.findElementByAccessibilityId(operation);
        ele_op.click();
    }

    @When("^user clicks on equals symbol$")
    public void userClicksOnEqualsSymbol() {
        MobileElement ele_equals = (MobileElement) driver.findElementById("com.google.android.calculator:id/result_preview");
        ele_equals.click();
    }

    @Then("^user should get \"([^\"]*)\" result$")
    public void userShouldGetResult(String result) throws Throwable {
        MobileElement ele_equals = (MobileElement) driver.findElementById("com.google.android.calculator:id/result_preview");
        Assert.assertEquals(result,ele_equals.getText());
    }
}
