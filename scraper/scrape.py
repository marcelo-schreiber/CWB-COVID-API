from selenium import webdriver
from time import sleep
from selenium.webdriver.firefox.options import Options

from dotenv import load_dotenv
from datetime import date

import requests

import os
import sys

path_to_driver = sys.path[0] + "\geckodriver.exe"

try:
    load_dotenv()

    api_key = os.environ.get("API_KEY")

except:
    raise Exception("Error loading api key")
    sys.exit()


try:
    # Firefox is pre-defined
    options = Options()
    options.headless = True
    driver = webdriver.Firefox(options=options, executable_path=path_to_driver)

except:
    raise Exception("Error initializing webdriver")
    sys.exit()

try:
    url = 'https://coronavirus.curitiba.pr.gov.br/'
    driver.get(url)

    assert "Coronavírus - Prefeitura de Curitiba" in driver.title

    sleep(2)

    flags = driver.find_element_by_class_name(
        'evidencia')  # 3 divs (green, orange, red)

    # ex: cphBodyMaster_divLaranja
    flag_value = flags.get_property("id").split('div')[1].lower()

    active_cases = driver.find_element_by_id(
        'cphBodyMaster_lblSuspeitos').text.replace(".", "")

    confirmed_cases = driver.find_element_by_id(
        'cphBodyMaster_lblConfirmados').text.replace(".", "")

    recovered = driver.find_element_by_id(
        'cphBodyMaster_lblRecuperados').text.replace(".", "")

    deaths = driver.find_element_by_id(
        'cphBodyMaster_lblObitos').text.replace(".", "")

    sus_uti_ocupation = driver.find_element_by_id(
        'cphBodyMaster_lblOcupacao').text

    available_hospital_beds = driver.find_element_by_id(
        'cphBodyMaster_lblLeitosLivres').text

    last_update = str(date.today())

    payload_json = {
        "flagValue": flag_value,
        "activeCases": active_cases,
        "confirmedCases": confirmed_cases,
        "recovered": recovered,
        "deaths": deaths,
        "ocupation": sus_uti_ocupation,
        "availableHospitalBeds": available_hospital_beds,
        "lastUpdate": last_update,
    }

except:
    raise Exception("Error trying to locate elements")
    sys.exit()

try:

    url = 'https://cwb-covid.herokuapp.com/covid?key={}'.format(api_key)

    headers = {'Content-type': 'application/json', 'Accept': 'text/plain'}
    req = requests.post(url, json=payload_json, headers=headers)

    res_debugger = (req.status_code ==
                    201 and 'POST request done successfully') or (req.status_code == 401 and 'Incorrect API key') or 'Something went wrong :('

    print(res_debugger)

    driver.close()
    driver.quit()

except:
    raise Exception("Error trying to create a POST request")
    sys.exit()

sys.exit("Done!")
