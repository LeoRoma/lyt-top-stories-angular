# Description

First project in Angular CLI version 8.3.19. I am creating a website similar to "The New York Times" utilising its API.

## Instructions

- Open your terminal.
- Clone the repository in your terminal with `git clone https://github.com/LeoRoma/lyt-top-stories-angular.git`
- Run `npm install` to install all the dependencies.
- Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Approach

- I have started first to create `api.service.ts` where I have imported `HttpClient` and created a method `getArts` to get the HTTP request.
- I have created `arts.component.ts` where I have imported the `api.service.ts` to fetch the API.
- Once I fetched the API, I rendered the request on `arts.component.html` getting the interested value.
- I have created `header.component.ts` for the header of the website.
- I have created different components and after the possibility to navigate between them by defining the routes in `app.routing.ts`

## Instructions

- Open your terminal.
- Clone the repository from github.
- Type in your terminal `git clone

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
# nyt-top-stories-angular
