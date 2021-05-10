<p align="center">
  <img width="200" src="https://open-wc.org/hero.png"></img>
</p>

#[My live link](https://clever-einstein-4de949.netlify.app/)

## Travel App

[![Built with open-wc recommendations](https://img.shields.io/badge/built%20with-open--wc-blue.svg)](https://github.com/open-wc)

## Quickstart

Welcome to TravelApp starter kit ! You will implement features for the app while learning about frontend development. 

## Scripts

- `start` runs your app for development, reloading on file changes
- `start:build` runs your app after it has been built using the build command
- `build` builds your app and outputs it in your `dist` directory
- `test` runs your test suite with Web Test Runner
- `lint` runs the linter for your project


## API assignment

## Get all places

### Request

  ```
  curl -X GET 'https://devschool-2020.firebaseio.com/Caius/places.json'
  ```

### Response
```
{
  "-M_MwHztH2cSS9Fmcp3I": [
    {
      "description": "A wild place deep in Carpathian Mountains ready to be explored",
      "imageUrl": "https://images.unsplash.com/photo-1502528230654-e2161eb9f08a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2l1Y2FzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      "name": "Muntii Ciucas",
      "type": "nature"
    },
    {
      "description": "Caraibean country with crystal clear water and stunning views",
      "imageUrl": "https://images.unsplash.com/photo-1591490029263-e0a3b9a83cf9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80",
      "name": "Saint Kitts and Nevis",
      "type": "beach"
    },
    {
      "description": "Beach, mountains, cliffs, ocean, endless views and friendly weather",
      "imageUrl": "https://images.unsplash.com/photo-1569492489542-aa3d6836e688?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80",
      "name": "Madeira",
      "type": "nature"
    },
    {
      "description": "A variety of undiscovered island from you can choose to make a trip you won't forget",
      "imageUrl": "https://images.unsplash.com/photo-1606435477318-ec027fff45a4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80",
      "name": "Trinidad and Tobago",
      "type": "tropical"
    }
  ]
}
```

## Add new places

### Request

  ``` 
    curl -X POST -d '[
	
{		
		"name": "Muntii Ciucas",
	  "type": "nature",
    "imageUrl": "https://images.unsplash.com/photo-1502528230654-e2161eb9f08a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2l1Y2FzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
	  "description": "A wild place deep in Carpathian Mountains ready to be explored"
  },
   {
		 "name": "Saint Kitts and Nevis",
		 "type": "beach",
		 "imageUrl": "https://images.unsplash.com/photo-1591490029263-e0a3b9a83cf9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80",
   	 "description": "Caraibean country with crystal clear water and stunning views"
   
  },
   { 
		 "name": "Madeira",
		 "type": "nature",
    "imageUrl": "https://images.unsplash.com/photo-1569492489542-aa3d6836e688?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80",
		  "description": "Beach, mountains, cliffs, ocean, endless views and friendly weather"
  },
  {
		"name": "Trinidad and Tobago",
    "type": "tropical",
    "imageUrl": "https://images.unsplash.com/photo-1606435477318-ec027fff45a4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80",
		"description": "A variety of undiscovered island from you can choose to make a trip you won't forget"
  }

]' 'https://devschool-2020.firebaseio.com/Caius/places.json'
  ```

### Response

```
 {
  "name": "-M_MwHztH2cSS9Fmcp3I"
}
```
## Update place(PUT, ex Muntii Ciucas-> Saint Kitts and Nevis(id:-M_0FRA88kxxoFoCsJlZ))

### Request

  ``` 
    curl -X PUT -d '{
    "description": "lorem ipsum",
    "imageUrl": "https://images.unsplash.com/photo-1591490029263-e0a3b9a83cf9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80",
    "name": "Saint Kitts and Nevis",
    "type": "paradise"
  }' 'https://devschool-2020.firebaseio.com/Caius/places/-M_0FRA88kxxoFoCsJlZ.json'
  ```

### Response

  ```
  {
  "description": "lorem ipsum",
  "imageUrl": "https://images.unsplash.com/photo-1591490029263-e0a3b9a83cf9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80",
  "name": "Saint Kitts and Nevis",
  "type": "paradise"
 }
  ```

## Update place(PATCH, ex added imageURL to Muntii Ciucas(id:-M_-jo5OtFpAI6VmbuL7))

### Request

  ``` 
      curl -X PATCH -d '{
     "description": "lorem ipsum",
    "imageUrl": "https://images.unsplash.com/photo-1502528230654-e2161eb9f08a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2l1Y2FzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "name": "Muntii Ciucas",
    "type": "nature"
    }' 'https://devschool-2020.firebaseio.com/Caius/places/-M_-jo5OtFpAI6VmbuL7.json'
  ```

### Response

  ```
  {
 "description": "lorem ipsum",
  "imageUrl": "https://images.unsplash.com/photo-1502528230654-e2161eb9f08a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2l1Y2FzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  "name": "Muntii Ciucas",
  "type": "nature"
}
  ```

## Delete a specific place(ex Bucharest(id:-M_0FU0O2hR90y8WfSRX))

### Request

  ``` 
    curl -X DELETE \
  'https://devschool-2020.firebaseio.com/Caius/places/-M_0FU0O2hR90y8WfSRX.json'
  ```

### Response

  ```
  null
  ```

