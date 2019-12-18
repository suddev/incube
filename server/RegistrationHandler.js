//Store the user info in database, return true if stored.
const RegistrationHandler =  (req, res) => {
  console.log('REGISTRATION ', req)
    const id = req.query.id;
    console.log('ID ', id)
    res.header('Content-Type', 'application/json');
    res.header('Access-Control-Allow-Origin', '*');

    if(id === 'pk')
      res.send({message: 'user is verified'})
    else
      res.send({message: 'user is not verified'})
  };

  module.exports = RegistrationHandler;