

    
<h1 align="center">
DevRadar API
</h1>

<p align="center">DevRadar is a Restfull API of <a href="https://github.com/Luksdantas/ReactJS-DevRadar">DevRadar Web</a> and <a href="https://github.com/Luksdantas/ReactNative-DevRadar">DevRadar Mobile</a> </p>


<p align="center">
 <img  src="https://img.shields.io/github/package-json/dependency-version/LuksDantas/NodeJS-DevRadar/express" alt="Express Version">
 <img  src="https://img.shields.io/github/package-json/dependency-version/LuksDantas/NodeJS-DevRadar/cors" alt="Cors Version">
 <img  src="https://img.shields.io/github/package-json/dependency-version/LuksDantas/NodeJS-DevRadar/axios" alt="Axios Version">
 <img  src="https://img.shields.io/github/package-json/dependency-version/Luksdantas/NodeJS-DevRadar/mongoose" alt="Mongoose Version">
 <img  src="https://img.shields.io/github/package-json/dependency-version/Luksdantas/NodeJS-DevRadar/socket.io" alt="SocketIo Version">
 <img  src="https://img.shields.io/github/package-json/dependency-version/LuksDantas/NodeJS-DevRadar/dev/typescript" alt="Typescript Version">
</p>

<h1>:memo:About</h1>
<p>DevRadar API is a project developed during the <a href="https://rocketseat.com.br/">Semana Omnistack 10</a> presented by <a href="https://www.linkedin.com/school/rocketseat/">Rockeseat</a>.</p>
<p>WEB: <a href="https://github.com/Luksdantas/ReactJS-DevRadar">DevRadar Web</a></p>
<p>API: <a href="https://github.com/Luksdantas/ReactNative-DevRadar">DevRadar Mobile</a></p>

<h1>:rocket: Getting started</h1>

```bash

# Clone this repository
$ git clone https://github.com/Luksdantas/NodeJS-DevRadar.git

# Access the project folder cmd/terminal
$ cd NodeJS-DevRadar

# install the dependencies
$ npm install

# Run the application in development mode
$ npm run dev

# The application will open on the port: 3333 - go to http://localhost:3333

```

<h1>🛠 DevRadar API</h1>
<a href="https://github.com/Luksdantas/NodeJS-DevRadar/blob/main/Insomnia_2021-03-11.json">Insomnia document</a>

<h2>POST Create Dev</h2>
<h3>Request</h3>

`POST /devs`

```
{
  "github_username": "Luksdantas",
  "techs": "ReactJs, Node, ReactNative",
  "latitude": 0.1,
  "longitude": 0.1
}
```

<h3>Response</h3>

```
{
  "techs": [
    "ReactJs",
    "ReactNative",
    "Node"
  ],
  "_id": "604a3418616cc11ee0ef6a88",
  "github_username": "Luksdantas",
  "name": "Luksdantas",
  "avatar_url": "https://avatars.githubusercontent.com/u/55062200?v=4",
  "bio": "\r\n    do {\r\n      beBetterEveryDay()\r\n} while (true);\r\n \r\n\r\n\r\n\r\n",
  "location": {
    "coordinates": [
      0.1,
      0.1
    ],
    "_id": "604a3418616cc11ee0ef6a89",
    "type": "Point"
  },
  "__v": 0
}
```

<h2>GET Devs</h2>
<h3>Request</h3>

`GET /devs`
<h3>Response</h3>

```
[
  {
    "techs": [
      "ReactJs",
      "ReactNative",
      "Node"
    ],
    "_id": "604a3418616cc11ee0ef6a88",
    "github_username": "Luksdantas",
    "name": "Luksdantas",
    "avatar_url": "https://avatars.githubusercontent.com/u/55062200?v=4",
    "bio": "\r\n    do {\r\n      beBetterEveryDay()\r\n} while (true);\r\n \r\n\r\n\r\n\r\n",
    "location": {
      "coordinates": [
        0.1,
        0.1
      ],
      "_id": "604a3418616cc11ee0ef6a89",
      "type": "Point"
    },
    "__v": 0
  }
]
```

<h2>PUT Dev</h2>
<h3>Request</h3>

`PUT /devs/:github_username`

```
{
	"techs": "ReactJs, React Native, Node, Typescript",
	"latitude": 0.2,
	"longitude": 0.2
}
```

<h3>Response</h3>

```
{
  "n": 1,
  "nModified": 1,
  "opTime": {
    "ts": "6938417867373150209",
    "t": 4
  },
  "electionId": "7fffffff0000000000000004",
  "ok": 1,
  "$clusterTime": {
    "clusterTime": "6938417867373150209",
    "signature": {
      "hash": "OKCWfoQPTczr//Fo2gA2u+GmOqo=",
      "keyId": "6936447585485848579"
    }
  },
  "operationTime": "6938417867373150209"
}
```

<h2>DELETE Dev</h2>
<h3>Request</h3>

`DELETE /devs/:github_username`

<h3>Response</h3>

```
{
  "n": 1,
  "opTime": {
    "ts": "6938419130093535234",
    "t": 4
  },
  "electionId": "7fffffff0000000000000004",
  "ok": 1,
  "$clusterTime": {
    "clusterTime": "6938419130093535234",
    "signature": {
      "hash": "NzCG42AJYnHs+DgkSqBSuRBrCv8=",
      "keyId": "6936447585485848579"
    }
  },
  "operationTime": "6938419130093535234",
  "deletedCount": 1
}
```

<h2>GET Search Near Devs</h2>
<h3>Request</h3>

`GET /search?latitude=lat&longitude=lon&techs=techsstring`

<h3>Response</h3>

```
{
  "devs": [
    {
      "techs": [
        "ReactJs",
        "ReactNative",
        "Node"
      ],
      "_id": "604a37f3089b7319e81be47a",
      "github_username": "Luksdantas",
      "name": "Luksdantas",
      "avatar_url": "https://avatars.githubusercontent.com/u/55062200?v=4",
      "bio": "\r\n    do {\r\n      beBetterEveryDay()\r\n} while (true);\r\n \r\n\r\n\r\n\r\n",
      "location": {
        "coordinates": [
          0.1,
          0.1
        ],
        "_id": "604a37f3089b7319e81be47b",
        "type": "Point"
      },
      "__v": 0
    }
  ]
}
```

<h1>:bookmark_tabs: License</h1>
 <img  src="https://img.shields.io/github/license/Luksdantas/NodeJS-DevRadar" alt="License">
 
 <p>Made with :heart: by Lucas Dantas 👋🏽 <a href="https://www.linkedin.com/in/luksdantas/">Get in Touch!</a></p>
