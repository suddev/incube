//Check if the user is present in database, if yes return his detais.
const SignInHandler =  (req, res) => {
    const id = req.query.id;
    console.log('ID ', id)
    res.header('Content-Type', 'application/json');
    res.header('Access-Control-Allow-Origin', '*');

    if(id === 'pk')
      res.send({message: 'user is verified'})
    else
      res.send({message: 'user is not verified'})
  };

  module.exports = SignInHandler;