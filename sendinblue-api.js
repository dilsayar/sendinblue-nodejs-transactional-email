// You need NodeJS installed to run this project
// First install dependencies by running npm install or yarn install inside the project directory
// Then rename .env.example to .env and set your API key as shown below in that file
// SENDINLBUE_API_KEY = "api-key"

require('dotenv').config();
const SendinblueApiV3Sdk = require('sib-api-v3-sdk');
const SendinblueAPIKey = process.env.SENDINLBUE_API_KEY;
SendinblueApiV3Sdk.ApiClient.instance.authentications['api-key'].apiKey = SendinblueAPIKey

// You can use this line for debugging purposes
// console.log(SendinblueAPIKey)


// Change the values of the variables below to set subject, sender, recipient and content information. 
const subject = "Hello";
const sender = {'email':'sender@example.com', 'name':'John'}
const replyTo = {'email':'recipient@example.com', 'name':'Alice'}
const toEmail = [{'email':'sender@example.com'}]
const htmlContent = "<html><body><h1>This is a transactional email {{params.bodyMessage}}</h1></body></html>"
const params = {'bodyMessage':'Made just for you!'}

new SendinblueApiV3Sdk.TransactionalEmailsApi().sendTransacEmail(
  {
    'subject':subject,
    'sender' : sender,
    'replyTo' : replyTo,
    'to' : toEmail,
    'htmlContent' : htmlContent,
    'params' : params
  }
).then(function(data) {
  console.log(data);
}, function(error) {
  console.error(error);
});


