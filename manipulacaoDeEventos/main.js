/*
Objetos e Funções:
Crie uma função criarEvento que receba como parâmetros o nome, a data e a localizacao de um evento.
O parâmetro data deve ser um objeto Date representando a data e hora do evento.

Manipulação de Datas:
Implemente uma função verificarProximosEventos que receba um array de eventos e uma data base.
A função deve iterar pelos eventos e verificar quais eventos ocorrerão após a data base.

Arrays e Iteração:
Crie um array eventos contendo pelo menos três objetos de eventos criados com a função criarEvento.
Utilize a função verificarProximosEventos para encontrar e exibir todos os eventos que ocorrerão após a data atual.

Saída:
Exiba no console as informações dos eventos que ocorrerão após a data base, incluindo nome, data e localização.
*/

class Evento {
    constructor(nome, data, localizacao) {
        this.nome = nome;
        this.data = new Date(data);
        this.localizacao = localizacao;
    }
    verificarProximosEventos(dataBase) {
        let eventosFuturos = [];

        // Iterando sobre os eventos
        meusEventos.forEach(e => {
            // Comparando as datas
            if (e.data > new Date(dataBase)) {
                eventosFuturos.push(e); // Adicionando o evento atual ao array de eventos futuros
            }
        });

        return eventosFuturos;
    }
}

let meusEventos = [
    new Evento('Conferência de Tecnologia', '2024-08-15', 'São Paulo'),
    new Evento('Workshop de Design', '2024-07-20', 'Rio de Janeiro'),
    new Evento('Hackathon de Inovação', '2024-09-05', 'Belo Horizonte')
];


let dataBase = '2024-07-29';
let proximoEvento = meusEventos[0].verificarProximosEventos(dataBase);

proximoEvento.forEach(evento => {
    console.log(`Evento: ${evento.nome}, Data: ${evento.data.toISOString().split('T')[0]}, Localização: ${evento.localizacao}`);
});