# Node & Postgres WebServer
[README em português](README.pt.md)
## Data source: 

<a href="https://coronavirus.curitiba.pr.gov.br/">https://coronavirus.curitiba.pr.gov.br/</a>

## How does it work?

It shows data from a PostgreSQL database accordingly to the specified paramaters and querys on GET requests and inserts data into them on a POST request.

## Endpoints

- ##### GET `/api/last`
Last data collected.

- ##### GET `/api/filter?offset=n&limit=n`
Colected data with offsets and limits (where `n` are numbers).

- ##### GET `/api/all`
All collected data.

- ##### POST `/covid`
Inserts into the database.

- ##### Examples:
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

## Database shape

Check the database.sql file.

## How to run on my machine?

- Make sure to install <a href="https://nodejs.org/">Nodejs</a> and <a href="https://www.postgresql.org/">Postgres</a>.

- Run the commands of the `database.sql` file in your postgres terminal.

- Run `yarn` at the server folder to install all dependencies.

- Add an enviroment variable named `API_KEY` and make sure it is the same as the one in the scraper and the enviroment variables at the `db.ts` file.
- Run `yarn start`.

- Server at http://localhost:8080/
