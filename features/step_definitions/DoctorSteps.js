const { Given, When, Then } = require("@cucumber/cucumber");
const assert = require("assert");

const { medico } = require("./../../app");
const { viajante } = require("./../../app");

/*GIVEN*/

Given('um Médico de nome {string}', function (string) {
    medico.nome = string
  });

/*WHEN*/

When('o Médico curar um viajante', function () {
    medico.heal(viajante)
    });

/*THEN*/

Then('o viajante não ficará doente', function () {
    viajante.isHealthy = true
    });


    