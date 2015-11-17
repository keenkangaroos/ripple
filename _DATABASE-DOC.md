**Top 40**
----

* **CDN:**

  - ```<script src="https://cdn.firebase.com/js/client/2.3.1/firebase.js"></script>```

* **URL:**

  - https://blazing-fire-8914.firebaseio.com/

* **Method:**

  - 'GET'
  
*  **URL Endpoints**

   **Required:** 

  - **/decade** - an integer between zero and six to specify the desired decade 
   
    - (/0 = 50s, /1 = 60s, /2 = 70s... /5 = 00s, /6 = 10s)
   
  - **/decade/year** - an integer between zero and nine to specify the year within the decade
   
    - (/0/3 = 1953, /4/9 = 1999, /3/7 = 1987, etc.)
   
  - **/decade/year/song** - an integer between zero and 39 to specify the song from the top 40 of that year, zero being the top song 
   
    - (/2/4/0 = top hit from 1974) 

   **Response:**
 
   - 'artist : [string]'
   - 'songTitle : [string]'
   - 'youTubeUrl : [string]' 
     - link to a search query for the song on YouTube

**Sample Call:** 

```
var ref = new Firebase("https://blazing-fire-8914.firebaseio.com/0/0/");

// Attach an asynchronous callback to read the data at our posts reference
ref.on("value", function(snapshot) {
  console.log(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});
```
