# Python WebScraper usando selenium
[README in english](README.pt)
## Fonte dos dados: 

<a href="https://coronavirus.curitiba.pr.gov.br/">https://coronavirus.curitiba.pr.gov.br/</a>

## Como funciona?

Ele abre um browser usando o geckodriver (driver do firefox) e, usando o selenium, captura todos os dados necessários. Então, manda uma requisição HTTP POST para o web server com todos esses dados.

## How to run on my machine?

- Instale o <a href="https://www.python.org/">Python</a> e o <a href="https://github.com/mozilla/geckodriver/releases">geckodriver</a>.

- Coloque o `geckodriver.exe` na pasta `scraper`.

- Execute `pip install selenium`.

- Adicione a variável de ambiente chamada `API_KEY` e tenha certeza de ser a mesma que a da pasta server.

- Execute `python scrape.py` quando o servidor estiver aberto.
