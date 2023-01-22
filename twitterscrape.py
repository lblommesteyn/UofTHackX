import snscrape.modules.twitter as sntwitter
import pandas as pd

attributes_container = []
user = input
for i,tweet in enumerate(sntwitter.TwitterSearchScraper('from:'+user).get_items()):
    if i>100:
        break
    attributes_container.append([tweet.date, tweet.likeCount, tweet.sourceLabel, tweet.rawContent])
    
  
# Creating a dataframe from the tweets list above 
tweets_df = pd.DataFrame(attributes_container, columns=["Date Created", "Number of Likes", "Source of Tweet", "Tweets"])
print(tweets_df.head(30))
