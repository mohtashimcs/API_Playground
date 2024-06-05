## Using the API

For this tutorial, we will be using the [API League JavaScript SDK](https://github.com/ddsky/api-league-clients/tree/master/javascript). Refer to our [SDK Page](https://apileague.com/sdks/) if you are interested to try the API in another language.

With that out of the way, let's set up the react project.
## Create an Account

To start, visit the API League website and create an account. Once an account is created, confirming the email address is the next step. This is an important step, as you won't be able to access the API until you've confirmed your email. You will receive an email on the email you registered with. It will look something like this:

![Email Confirmation](https://i.ibb.co/x5YLRp8/1.png)

Simply click on **confirm your account**. After which, your account will be verified.

## Getting the API Key

Now that your email is verified. Log in to your World News API account and obtain your API key. API key is a unique identifier that allows you to access the API and request news articles.

After you have successfully logged in, perform the following steps to obtain your API.

+ From your dashboard, click on "Profile". 

![Profile](https://i.ibb.co/ncY2ycq/2.png)

+ In the "Profile" section, click on "Show/Hide API Key" to show your API key.
![Show/Hide API Key](https://i.ibb.co/0c2qKkv/3.png)
+ Copy the API Key. 

Save it somewhere safe for easier access. Don’t share it with anyone else!
## Cloning Demo React Project
First you need to clone demo project repository in your local storage.
``` bash
git clone "GITHUB PROJECT URL"
```
After that navigate to the project directory and run the following command in the terminal:

``` bash
npm install
```

Then open `input.jsx` file under `Root_Dir/src/pages` and change the API Key variable to your own API Key that you copied earlier.

![CHANGE_API_KEY](https://i.ibb.co/X2z3CJ9/Screenshot-2024-05-19-211859.png)

To run the project run the following command in the terminal:
``` bash
npm start
```

Once the project is initialized, it will look something like this.

![HOMEPAGE](https://i.ibb.co/cT5nDPF/Screenshot-2024-05-19-212344.png)

## Search Meme

The search meme api from API League takes the following parameters.

| Name          | Type    | Description                                            | Notes          |
|---------------|---------|--------------------------------------------------------|----------------|
| keywords      | String  | A comma-separated list of words that must occur in the meme. | [optional]     |
| keywordsInImage | Boolean | Whether the keywords must occur in the image.          | [optional]     |
| mediaType     | String  | The media type (either 'image', 'video' or even specific format such as 'jpg', 'png', or 'gif'). | [optional]     |
| minRating     | Number  | The minimum rating in range [0.0,1.0] of the meme.     | [optional]     |
| maxAgeDays    | Number  | The maximum age of the meme in days.                   | [optional]     |
| offset        | Number  | The number of memes to skip, between 0 and 1000.       | [optional]     |
| number        | Number  | The number of memes, between 1 and 10.                 | [optional]     |

We can search for memes by initializing the [HumorApi](https://github.com/ddsky/api-league-clients/blob/master/javascript/docs/HumorApi.md#searchMemes) and calling its `searchMemes` function.
```javascript
import ApiLeague from 'api_league';
let defaultClient = ApiLeague.ApiClient.instance;
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
let headerApiKey = defaultClient.authentications['headerApiKey'];
headerApiKey.apiKey = 'YOUR API KEY';
]

let apiInstance = new ApiLeague.HumorApi();
let opts = {
  'keywords': "rocket", 
  'keywordsInImage': true, 
  'mediaType': "image", 
  'minRating': 0, 
  'maxAgeDays': 30, 
  'offset': 0, 
  'number': 3 
};
apiInstance.searchMemes(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```
In the code mentioned above we have:

+ Initialized the API League object.
+ Passed our API credentials to that object.
+ Created object of Humor Api.
+ Initialized optional parameters for the api.
+ Called searchMemes function and parsed the output.

The demo application shows result in 2 formats, media format and Json response.


**Viewable Media Format:**

![SearchMemeOutput](https://i.ibb.co/NLBkw00/Screenshot-2024-05-19-212930.png)

**Json Response:**

![JSONresponse](https://i.ibb.co/VM9Zddq/Screenshot-2024-05-19-212954.png)

You can also experiment Random Meme Fetch, Search Gif's and Search Jokes api which is also a part of the demo project.

You can check the output of these below.

## Random Meme
![Random_Meme_Output](https://i.ibb.co/HTyNdbn/Screenshot-2024-05-19-215606.png)

## Search Gif's
![Search_Gif_Output](https://i.ibb.co/NmjwnJR/Screenshot-2024-05-19-215725.png)

## Search Jokes
![Search_Jokes_Output](https://i.ibb.co/7zX4fzv/Screenshot-2024-05-19-215942.png)

Also Check out more functions from [API League](https://github.com/ddsky/api-league-clients/tree/master).
