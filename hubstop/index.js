const hubspot = require('@hubspot/api-client')
// const hubspotClient = new hubspot.Client({ accessToken: '20698532-03ea-4a67-aa06-f8f26b1ca475',developerApiKey:'057f1dc8-2330-4379-86d4-3bb6ba2de73f'})
const hubspotClient = new hubspot.Client({ accessToken: 'fe4d5d68-a78a-4335-910a-b9f6180da15a'})

hubspotClient.crm.contacts.basicApi
    .getPage(10)
    .then((results) => {
        console.log(results)
    })
    .catch((err) => {
        console.error(err)
    })

    // const payload = {
    //     grant_type: "authorization_code",
    //     client_id: process.env.CLIENT_ID,
    //     client_secret: process.env.CLIENT_SECRET,
    //     redirect_uri: process.env.REDIRECT_URI,
    //     code: req.query.code,
    //   };
    
    //   const params = new url.URLSearchParams(payload);
    
    //   // we are using the rest api method here to exchange the tokens
    //   const apiResponse = await axios.post(
    //     "https://api.hubapi.com/oauth/v1/token",
    //     params.toString()
    //   );