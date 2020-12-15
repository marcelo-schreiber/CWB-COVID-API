from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from time import sleep

import json
import requests

import os
from dotenv import load_dotenv
load_dotenv()

api_key = os.environ.get("API_KEY")

# Firefox is pre-defined
driver = webdriver.Firefox()

print('-=-=-=-=-=-=-=')

url = 'https://coronavirus.curitiba.pr.gov.br/'
driver.get(url)

assert "Coronavírus - Prefeitura de Curitiba" in driver.title

sleep(2)

flags = driver.find_element_by_class_name(
    'evidencia')  # 3 divs (green, orange, red)

# ex: cphBodyMaster_divLaranja
flag_value = flags.get_property("id").split('div')[1]

active_cases = driver.find_element_by_id(
    'cphBodyMaster_lblSuspeitos').text.replace(".","")

confirmed_cases = driver.find_element_by_id(
    'cphBodyMaster_lblConfirmados').text.replace(".","")

recovered = driver.find_element_by_id('cphBodyMaster_lblRecuperados').text.replace(".","")

deaths = driver.find_element_by_id('cphBodyMaster_lblObitos').text.replace(".","")

sus_uti_ocupation = driver.find_element_by_id('cphBodyMaster_lblOcupacao').text

available_hospital_beds = driver.find_element_by_id(
    'cphBodyMaster_lblLeitosLivres').text

last_update = driver.find_element_by_id(
    'cphBodyMaster_lblDataAtualizacao').text

last_update_filtered = last_update.split(' ')[2] + ' ' + last_update.split(' ')[4]

url = 'http://localhost:8080/covid'

payload_json = {
    'flagValue': flag_value,
    'activeCases': active_cases,
    'confirmedCases': confirmed_cases,
    'recovered': recovered,
    'deaths': deaths,
    'ocupation': sus_uti_ocupation,
    'availableHospitalBeds': available_hospital_beds,
    'lastUpdate': last_update_filtered,
}

print(api_key)

url = 'https://cwb-covid.herokuapp.com/covid?key={}'.format(api_key)

headers = {'Content-type': 'application/json', 'Accept': 'text/plain'}
r = requests.post(url, json=payload_json, headers=headers)

if r.status_code == 200:
    print("successful :)")
else:
    print("a problem has occured :(")