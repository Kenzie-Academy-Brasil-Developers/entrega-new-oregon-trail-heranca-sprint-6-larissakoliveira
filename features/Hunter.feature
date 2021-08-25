# language: pt

Funcionalidade: Caçador
    Como um Caçador
    Eu posso doar minhas refeições e devo caçar minhas refeições
    Para que eu possa seguir a viagem saudável.

    Contexto: 
        Dado um Caçador de nome "JoãoCacador"
        E o Caçador sempre começa a viagem com 2 refeição

    Cenário: Caçou para conseguir mais refeições
        Quando o Caçador sair para caçar 1 vezes
        Então a quantidade de refeições do Caçador deve ser igual a 7

    Cenário: Saiu para caçar, comeu e seguiu saudável
        Quando o Caçador sair para caçar 2 vezes
        E o Caçador parar para comer 2 vezes
        Então a quantidade de refeições do Caçador deve ser igual a 8 
        E o Caçador não ficará doente

    Cenário: Doou sua refeição e seguiu saudável
        Quando o Caçador doar sua refeição 1 vezes
        Então a quantidade de refeições do Caçador deve ser igual a 1
        E o Caçador não ficará doente

    Cenário: Doou sua refeição, tentou comer, ficou doente
        Quando o Caçador doar sua refeição 1 vezes
        Então a quantidade de refeições do Caçador deve ser igual a 1
        E o Caçador parar para comer 1 vezes
        E o Caçador ficará doente