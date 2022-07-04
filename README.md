# IMGUR GALLERY
`IMGUR GALLERY` This application facilitates Browsing Imgur Gallery Images. User can filter images as per section like hot, top, user and user can sort images like viral, top and time, similarly user can select window like day, week, month, year , all. The image resource api is provided by api.imgur.com


Contents
========

 * [Why?](#why)
 * [Technology used](#Technology-used)
 * [Installation](#installation)
 * [Usage](#usage)
 * [Test and Build](#test-build)
 * [Git Integration](#git-integration)
 * [Configuration](#configuration)
 * [Output Structure](#output-structure)
 * [Future Planning](#future-planning)

### Why?

I wanted a simple web application that allows user to:

+ Browse images.
+ Browse images based on section by selecting the section drop down values like hot, top, user.
+ Browse images based on sort by selecting the sort drop down values like viral, top, time.
+ Browse images based on window by selecting the window drop down values like day, week, month, year, all.
+ Load Images Button provided, so that once combination of drop down selection was made then click on this button to load images accordingly.

### Technology used
+ Angular 14
+ Material UI


### Installation
---

####  Install From GIT Repository

```bash
> git clone https://github.com/sampath3797/imgur-gallery.git
> cd imgur-gallery
> npm install
```
once all npm packages are installed then give ng serve to run app in development mode.

### Usage
---
Access the url `https://sampath3797.github.io/imgur-gallery/`  in browser to open the application.
By default section selected as hot, sort selected as top, window selected as day. Hence as per the default selected values the application loads images. After that user can change the selection of section, sort and window as required and click on `Load Images` button to load images.

### Test and Build
---
The two cli commands ng test && ng build with --base-href flag are combined and made custom script entry in package.json file with script name as test_build. Hence before doing production build, test will run mandatory. if all test use cases passed then only build will happen. Incase user needs to change --base-href

To use the test_build script. use cli command as `npm run test_build`

### Git Integration
---

This web application tool is git-integrated for easy to share among developers and maintain, This repository having a `.gitignore` file. It excludes `node_modules`, `.angular` etc which are not required for tracking and sync with github remote repository.


### Configuration
1. client-id registered with imgur.com is stored in environment.ts file. Incase of any changes update this accordingly. This client-id is required for accessing API ENDPOINT with header key - value pair as `Authorization` - `Client-ID <REGISTERED_CLIENTID>`
2. API_END POINT are stored in environment.ts file.


#### .gitignore
node_modules folders are ignored

#### Output Structure
---

```shell
imgur-gallery/
├── docs
|___node_modules
|___src
│   ├── app
│   │   └── app.component.css
|   |   |__ app.component.html
|   |   |___ app.component.spec.ts
|   |   |___ app.component.ts
|   |   |___ app.module.ts
|   |   |___ image.service.spec.ts
|   |   |___ image.service.ts
|   |   |___ image.ts
│   ├── environments
│   │   └── environment.ts
|   |   |__ environment.prod.ts
│   └── index.html
|   |___karma.conf.js
|   |___main.ts
|   |___polyfills.ts
|   |___styles.css
|   |___test.ts
|   |___tsconfig.app.json
|   |___tsconfig.spec.json
|
├── angular.json
|___package.json
|___package-lock.json
|___README.md
|___tsconfig.json

```

### Future Planning
---
Performance Improvement: The Imgur API supports ETags, which allows the API to signal to developers whether or not data from previous queries have changed. For next time calling same URL Route include the header If-None-Match with value as ETag, If the data changed then api will respond with fresh data otherwise it will return response code 304(Not Modified) and no data will be returned. Hence if there is no change then load from cache or NgRx store(If state management implemented) with previous data.


