# Miami University Campus Dining

A prototype web application designed to help the students of Miami University Ohio to find what food is offered where and to help track their meals throughout the week.

## About

This project was created as an honors course extension for CSE 271. My vision was to create a web app that would display information retrieved from Miami's [NetNutrition webpage](https://miaminutrition.miamioh.edu/NetNutrition/MU) in a more visually appealing and easily usable way.

The app is currently hosted using [Amazon Web Services](https://aws.amazon.com/) and can be found here: [Miami University Campus Dining](https://master.d32pndr8fjbhfe.amplifyapp.com/#/)

## Development

This project was developed in two sections; the back end data gathering section and the front end display section.

### Back End

The back end repository can be found at https://github.com/JaredShapiro321/CampusDiningBackEnd

I started developing the back end for my app first, as I would need data to display in the front end. I started out by searching for an API to pull data directly from the NetNutrition webpage, but did not find any that were publicly available. I then researched techniques of scraping data from webpages. As the page holds a dynamic, single page application, I eventually decided on using [Nightmare](https://github.com/segmentio/nightmare) -- a nodejs library that provides high-level browser automation tools to developers -- in order
to request HTML data from the different pages in the app. I also needed a way to parse this html data into classes in order to store it for use in my front end web application. I ended up using [Cheerio](https://github.com/cheeriojs/cheerio) (another nodejs framework used to quickly parse the HTML data structure) for this task.

### Front End

You are currently viewing the front end repository.

