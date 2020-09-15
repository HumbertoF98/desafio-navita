# Desafio Vizir

<h1 align="center">
    <img alt="Nave.rs" src="src/assets/falemais.png" height="100px" />
    <br/>
   <a href="https://pt-br.reactjs.org/docs/getting-started.html" target="_blank" rel="noopener">ReactJS</a> 
</h1>

## Sobre o projeto

O projeto FaleMais, é um desafio formulado pela equipe da Vizir com o intuito
de encontrar possíveis colaboradores da empresa.

A empresa de telefonia Telzir, especializada em chamadas de longa distância nacional, vai colocar um novo produto no mercado chamado FaleMais.

Normalmente um cliente Telzir pode fazer uma chamada de uma cidade para outra pagando uma tarifa fixa por minuto, com o preço sendo pré-definido em uma lista com os códigos DDDs de origem e destino:

| Origem | Destino | R\$(min) |
| ------ | ------- | -------- |
| 011    | 016     | 1.90     |
| 016    | 011     | 2.90     |
| 011    | 017     | 1.70     |
| 017    | 011     | 2.70     |
| 011    | 018     | 0.90     |
| 018    | 011     | 1.90     |

Com o novo produto FaleMais da Telzir o cliente adquire um plano e pode falar de graça até um determinado tempo (em minutos) e só paga os minutos excedentes. Os minutos excedentes tem um acréscimo de 10% sobre a tarifa normal do minuto. Os planos são FaleMais 30 (30 minutos), FaleMais 60 (60 minutos) e FaleMais 120 (120 minutos).

A Telzir, preocupada com a transparência junto aos seus clientes, quer disponibilizar uma página na web onde o cliente pode calcular o valor da ligação. Ali, o cliente pode escolher os códigos das cidades de origem e destino, o tempo da ligação em minutos e escolher qual o plano FaleMais. O sistema deve mostrar dois valores: (1) o valor da ligação com o plano e (2)
sem o plano. O custo inicial de aquisição do plano deve ser desconsiderado para este problema.

Ex:

| Origem | Destino | Tempo | Plano FaleMais | Com FaleMais | Sem FaleMais |
| ------ | ------- | ----- | -------------- | ------------ | ------------ |
| 011    | 016     | 20    | FaleMais30     | R\$ 0,00     | R\$ 38,00    |
| 011    | 017     | 80    | FaleMais60     | R\$ 37,40    | R\$ 136,00   |
| 018    | 011     | 200   | FaleMais120    | R\$ 167,20   | R\$ 380,00   |
| 018    | 017     | 100   | FaleMais30     | -            | -            |

## Tecnologias Utilizadas

- <a href="https://reactjs.org/" target="_blank" rel="noopener">ReactJs</a>

### Visualização/Utilização

Para utilizar e/ou visualizar o projeto, basta seguir as instruções abaixo:

- Que você tenha instalado o **<a href="https://nodejs.org/en/" target="_blank" rel="noopener">Node.js</a>**
- Que você tenha instalado o **<a href="https://www.npmjs.com/" target="_blank" rel="noopener">NPM</a>**

### Passos para utilizar

Primeiro clone o repositório em seu computador, por meio do terminal utilizando o comando:

1. Clonando o repositório

```sh
  # Clone o repositório
  $ git clone https://github.com/HumbertoF98/falemais.git
  # Entre na pasta raiz da aplicação
  $ cd desafio-vizir
```

2. Instalando dependências

```sh
  # Instale as dependências da aplicação
  $ npm install # ou yarn (caso tenha instalado)
```

3. Iniciando a aplicação

```sh
  # Inicie a aplicação web
  $ npm start # ou yarn start (caso tenha instalado)
```

4. Rodando os testes

```sh
# Os testes foram executados com o Jest.
# Para rodar os testes
  $ npm test # ou yarn test (caso tenha instalado)
```
