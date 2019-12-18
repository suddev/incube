const axios = require('axios');
const querystring = require('querystring');

const LinkedInHandler = async(req, res) => {
    res.header('Content-Type', 'application/json');
    res.header('Access-Control-Allow-Origin', '*');
    res.header("Access-Control-Allow-Headers", "x-requested-with, x-requested-by")
    const code = req.query.code;
    try{
    const get_access_token =await axios.post('https://www.linkedin.com/oauth/v2/accessToken', querystring.stringify({
        client_id: process.env.LINKEDIN_CLIENT_ID,
        client_secret: process.env.LINKEDIN_CLIENT_SECRET,
        grant_type: 'authorization_code',
        redirect_uri: process.env.REDIRECT_URI+'/linkedin',
        code: code        
    }));

    const access_token = get_access_token.data.access_token

    if(access_token && access_token!=='Invalid access token'){
        const user = await axios.get('https://api.linkedin.com/v2/me', {
            params: {
                projection: '(id,localizedLastName,localizedFirstName,profilePicture(displayImage~:playableStreams))',
                oauth2_access_token: access_token
            }
        });
        res.send(user.data)
    }
    } catch(error){
        res.send({status:400, error: error.data.error_description});
    }
}

module.exports = LinkedInHandler;