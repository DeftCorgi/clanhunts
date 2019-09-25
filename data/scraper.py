import requests
import re
import json
from bs4 import BeautifulSoup

# scrape data from the wiki
url = 'https://ffxiv.consolegameswiki.com/wiki/Clan_Hunt'
page = requests.get(url)

# parse request data with html5
soup = BeautifulSoup(page.content, 'html5lib')

# extract the tables and select the relevant ones with our hunts data
tables = soup.select('table')[2:-2]

# extract map data from h3 tags
maps = []
for span in soup.select('h3 span.mw-headline'):
    maps.append(span.get_text().strip())

# object to store our data
hunts = []


def parse_coordinates(s):
    # create a list of list(x,y) coordinates given a string
    coordinates = []
    for i, c in enumerate(s.split('&')):
        c = re.sub("x|y|\(|\)| ", "", c)
        coordinates.append([])
        for coord in c.split(',')[:2]:
            coordinates[i].append(float(coord))
    return coordinates


def parse_amount(s):
    # return an integer amount or null in the json file
    return None if s == "" else int(s)


counter = -1
for i, table in enumerate(tables):
    for tr in table.find_all('tr')[1:]:
        counter += 1
        # parse data from tr element
        data = tr.find_all('td')
        hunt_name = data[0].get_text().strip()
        coordinates = parse_coordinates(data[1].get_text())
        amount = parse_amount(data[4].get_text().strip())
        map = maps[i]

        # create a hunt obejct and add it to hunts dict
        hunts.append({
            "id": counter,
            "name": hunt_name,
            "map": map,
            "coordinates": coordinates,
            "amount": amount
        })

file = open('./hunts.json', 'w')
json.dump(hunts, file)
