# Countries Holidays

![image](https://github.com/user-attachments/assets/71bf4d0d-ab2b-4887-b7ff-89c8e2a534eb)

Test task. Application use open-source Nager.Date API that provides data about holidays in different countries.
Application was developed with Nuxt.js and Tailwind CSS. Also application allows view holidays for specific country and year. 
For search field on home page implemented Back/Forward functionality.

Application use typical Nuxt architecture.

Main directories:
* In pages directory placed two pages: Home page and page with country info.
* Directory components includes components sorted by purpose.
* Custom directory "api" contains scripts for operating with Nager.Date API.
* Directory utils contains utility data and functionality as constants, types etc.



## Setup and start development

Make sure to install the dependencies:

```bash

npm install

```

Create .env file and fill with folowing information:
```bash

API_URL="https://date.nager.at/api/v3"

```
Start development server:

```bash

npm run dev

```

Follow: http://localhost:3000

## Build for production

Build the application for production:

```bash

npm run build

```

