import requests
from bs4 import BeautifulSoup
URL = "https://realpython.com/beautiful-soup-web-scraper-python/"
page = requests.get(URL)
soup = BeautifulSoup(page.content, "html.parser")
soup.body.get_text('\n', strip=True)
soup.body.get_text('', strip=True)
siteText = [i.text for i in soup.findAll({"div":{"class":"texts"}})]
for s in range(len(siteText)):
    siteText[s] = siteText[s].replace("\n","")
with open('readme.txt', 'w') as f:
    for s in siteText:
        f.write(s)
