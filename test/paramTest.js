const { Builder, By, Key } = require("selenium-webdriver");
const assert = require("assert");
var should = require("chai").should();

describe("add another todo tests", function(){

    it("successfully adds another todo application", async function() {
        let driver = await new Builder().forBrowser("chrome").build();

        await driver.get("https://lambdatest.github.io/sample-todo-app/")

        await driver.findElement(By.id("sampletodotext")).sendKeys("learn sel", Key.RETURN);

        let todoText = await driver.findElement(By.xpath("//li[last()]")).getText().then(function(value){
            return value
    });

        // assert.strictEqual(todoText, "learn sel");

        todoText.should.equal("learn sel")

        await driver.quit();
    })

    it("adding a new test for reporting", async function() {
        let driver = await new Builder().forBrowser("chrome").build();

        await driver.get("https://lambdatest.github.io/sample-todo-app/")

        await driver.findElement(By.id("sampletodotext")).sendKeys("learn sel", Key.RETURN);

        let todoText = await driver.findElement(By.xpath("//li[last()]")).getText().then(function(value){
            return value
    });

        // assert.strictEqual(todoText, "learn sel");

        todoText.should.equal("learnjj sel")

        await driver.quit();
    })

});