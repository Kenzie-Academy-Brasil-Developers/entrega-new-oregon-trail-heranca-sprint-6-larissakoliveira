const { Given, When, Then } = require("@cucumber/cucumber");
const assert = require("assert");

const { cacador } = require("./../../app");
const { viajante } = require("./../../app");

/*GIVEN*/

Given('um Caçador de nome {string}', function (string) {
    cacador.nome = string
    });

Given('o Caçador sempre começa a viagem com {int} refeição', function (int) {
    cacador.foodQt = int
    });

/*WHEN*/

When('o Caçador sair para caçar {int} vezes', function (int) {
    for (let i = 0; i < int; i++){
        cacador.hunt()
    }
    });

When('o Caçador parar para comer {int} vezes', function (int) {
    for(let i = 0; i < int; i++){
        cacador.eat()
    }
    });

When('o Caçador doar sua refeição {int} vezes', function (int) {
    cacador.giveFood(viajante, int)
    });
/*THEN*/

Then('a quantidade de refeições do Caçador deve ser igual a {int}', function (int) {
    console.log(cacador.foodQt, int)
    assert.strictEqual(cacador.foodQt, int) 
    });

Then('o Caçador não ficará doente', function () {
    assert.strictEqual(cacador.isHealthy, true)
    });

Then('o Caçador ficará doente', function () {   
    assert.strictEqual(cacador.isHealthy, false)
    });

