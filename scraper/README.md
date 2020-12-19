# Python WebScraper using selenium
[README em português](README.pt.md)
## Data source: 

<a href="https://coronavirus.curitiba.pr.gov.br/">https://coronavirus.curitiba.pr.gov.br/</a>

## How does it work?

It scrapes all data using the selenium library and the geckodriver (firefox driver). Then, it sends a POST request to the hosting web server with all scraped data.

## How to run on my machine?

- Make sure to install <a href="https://www.python.org/">Python</a> and the <a href="https://github.com/mozilla/geckodriver/releases">geckodriver</a>.

- Put the `geckodriver.exe` in the folder `scraper`.

- Run `pip install selenium`.

- Add an enviroment variable named `API_KEY` and make sure it is the same as the one in the server.

- Run `python scrape.py` when the server is working.

