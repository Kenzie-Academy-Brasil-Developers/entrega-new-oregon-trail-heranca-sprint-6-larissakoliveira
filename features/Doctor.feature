# language: pt

Funcionalidade: Médico
    Como um Médico
    Eu devo curar os outros viajantes
    Para que eles possam seguir a viagem saudável.

    Contexto:
        Dado um Médico de nome "JoãoMedico" 
        E ele sempre começa a viagem com 1 refeição
        E ele sempre começa a viagem saudável.

    Cenário: Curou um paciente
        Quando o Médico curar um viajante
        Então o viajante não ficará doente