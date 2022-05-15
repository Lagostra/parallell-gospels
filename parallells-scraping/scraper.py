import requests
from bs4 import BeautifulSoup
import json

page_urls = [
  'https://www.bible-researcher.com/parallels.html',
  'https://www.bible-researcher.com/parallels2.html',
  'https://www.bible-researcher.com/parallels3.html'
]

result = []

for page, url in enumerate(page_urls):
  page = requests.get(url)
  soup = BeautifulSoup(page.content, 'html.parser')
  headers = soup.find_all('h4')
  titles = [header.find('a').text for header in headers]
  titles = [''.join(title.replace('\u00a7', '').split('.')[1:]).strip() for title in titles]

  tables = soup.find_all('table')

  for t, table in enumerate(tables[1:-1]):
    section = {
      'title': titles[t],
      'episodes': []
    }

    for r, row in enumerate(table.find_all('tr')[1:]):
      cols = row.find_all('td')
      episode = {
        'title': cols[1].text,
        'matthew': cols[2].text.strip(),
        'matthew_ordered': bool(cols[2].find('b')),
        'mark': cols[3].text.strip(),
        'mark_ordered': bool(cols[3].find('b')),
        'luke': cols[4].text.strip(),
        'luke_ordered': bool(cols[4].find('b')),
        'john': cols[5].text.strip(),
        'john_ordered': bool(cols[5].find('b')),
      }
      section['episodes'].append(episode)
    result.append(section)


with open('../data/parallels.json', 'w') as f:
  f.write(json.dumps(result, indent=4))
