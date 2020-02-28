# Trivia Study Guide

![Home Page](public/TriviaStudyGuide.png)

## Description

The Trivia Study Guide came about due to playing weekly trivia. When you play every week, you soon learn that the people that come up with the trivia generally pull a lot of questions from current events and things that happen on that day in history.  Before this app, we had to split up the topics and research wikipedia and a few other sites to get all the information, and then we would read out any that sounded promising. I decided that there had to be a better way.

Trivia Study Guide pulls information from Wikipedia, the newsAPI, and Apify (a webcrawler to pull in data from "on this day in history" sites) to coral all the data in one place each day. A user can read through all the different sources, save any trivia that seems interesting, and have it all easily accessible.

## Technologies Used

This project is a full-stack project focused primarily on React and Redux. It also has a backend in Express and Node that is primarily designed to hide the API keys and catch errors in routing. The project is hosted through an AWS EC2 instance at <trivia.josephmcwhorter.com> and is served with nginx.

## Challenges

One of the harder parts of creating this app was trying to minimize API calls. I used React Router to provide some routing between the different pages on the site. The problem was that each time the page changed, the component would re-render, which would trigger another API call. Since newsAPI only provides 500 API calls a day, it makes sense to try and minimize those calls as much as possible.

To prevent this, I decided to store all the data in the redux store, and it would only call the API if the person visited that specific page. To address this issue, I had to find and use the react-thunk library so that I could check the current store state to see if I needed to call the API or not. It provided a clear solution and allowed me to put all my API calls in one place, the redux actions, which made debugging significantly easier.

The other main issue was how to hide the API keys. Since any frontend files would have visible source code, it became necessary to build a backend. The keys were stored in a .env file, and using the backend as a very simple API, the frontend routes the requests without having to use the API keys in the urls.

## Next Steps

As more trivia is played, more sources of data will be added to make the page a bit more complete. As questions and bits of trivia are found and stored, the API will become better. When it becomes worth sharing, the API will be made public as good trivia APIs are hard to come by. Also, the saved trivia needs some simple styling to show specific types of trivia in their respective containers on that page.