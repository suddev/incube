const axios = require('axios');

const GithubHandler = async(req, res) => {
    res.header('Content-Type', 'application/json');
    res.header('Access-Control-Allow-Origin', '*');
    res.header("Access-Control-Allow-Headers", "x-requested-with, x-requested-by")
    const code = req.query.code;
    try{
        const generate_access_token = await axios.post('https://github.com/login/oauth/access_token', {
            client_id: process.env.GITHUB_CLIENT_ID,
            redirect_uri: process.env.REDIRECT_URI,
            client_secret: process.env.GITHUB_CLIENT_SECRET,
            code: code
        });

        const access_token = await generate_access_token.data.split('&')[0].split('=')[1];

        if(access_token && access_token !== 'bad_verification_code'){
            const generate_user = await axios.get('https://api.github.com/user', {
                params: {
                    access_token: access_token
                }
            });
            res.send(generate_user.data)
        }
    } catch(error){
        console.log('ERROR ', error)
        res.send({status:400, error: error});
    }
}

module.exports = GithubHandler;