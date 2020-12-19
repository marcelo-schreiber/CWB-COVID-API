# Servidor web Node & Postgres
[README in english](README.pt)
## Fonte dos dados: 

<a href="https://coronavirus.curitiba.pr.gov.br/">https://coronavirus.curitiba.pr.gov.br/</a>

## Como funciona?

It shows data from a PostgreSQL database accordingly to the specified paramaters and querys on GET requests and inserts data into them on a POST request.

O servidor mostra dados da base de dados PostgreSQL dependendo dos parâmetros e consultas (querys) em requisições GET e coloca dados com requisições POST.

## Endpoints

- ##### GET `/api/last`
Último dado coletado.

- ##### GET `/api/filter?offset=n&limit=n`
Dados coletados com deslocamentos e limites (onde `n` são números).

- ##### GET `/api/all`
Todos os dados coletados.

- ##### POST `/covid`
Insere dados na database.

- ##### Exemplos:
POST `/covid`

```json
{
  "flagValue":"laranja",
  "activeCases": 12029,
  "confirmedCases": 101470,
  "recovered": 87393,
  "deaths": 2048,
  "ocupation":  "89%",
  "availableHospitalBeds": 41,
  "lastUpdate": "2020-12-18",
}
```

GET `/api/last`
```json
{
  "flag": "laranja",
  "total_recovered": 87393,
  "total_active": 12029,
  "total_confirmed": 101470,
  "total_deaths": 2048,
  "hospital_ocupation": "89%",
  "avaliable_hospital_beds": 41,
  "dateupdate": "2020-12-18"
}
```

## Formato da database

Verifique o arquivo `database.sql`

## Como funcionar no meu computador?

- Instale <a href="https://nodejs.org/">Nodejs</a> e <a href="https://www.postgresql.org/">Postgres</a>.

- Execute os comandos do arquivo `database.sql` no seu terminal postgres.

- Execute `yarn` na pasta do servidor para instalar todas as dependências.

- Adiciona a variável de ambiente `API_KEY` e tenha certeza de que é a mesma do scraper.

- Execute `yarn start`.

- Servidor em http://localhost:8080/

