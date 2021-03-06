# More homes you may like

Suggestion module for the vacation rental app that displays 12 more homes. Each component is clickable and redirects user to the main page of the clicked house. User can scroll to the left and right to see all suggestions. The app is responsive to resizing.

![Screenshot](img/screenshot.png)

## Installation

Step 1: Clone the repo
```
$ git clone https://github.com/InnCognito/service-relatedhomes.git
```

Step 2: Start your local PostgreSQL service.

Step 3: Generate and seed data 
```
$ node db/dataGeneration/createData.js
```

```
$ bash db/postgreSQL/start.sh
```

Step 4: Compile files with webpack
```
$ npm run build
```

Step 5: Start the app
```
$ npm start
```

Extra: To run tests
```
$ npm run test
```

Extra: To update screenshots for tests
```
$ npm run updateTestSnapshot
```

## Related Projects

* https://github.com/InnCognito/proxy-relatedhomes
* https://github.com/InnCognito/service-info
* https://github.com/InnCognito/service-reviews
