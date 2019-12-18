//Make a call to database to store  users current device info
const StoreDeviceInfo =  (req, res) => {
    const ip = req.ip;
    console.log('IP ', ip)
    res.header('Content-Type', 'application/json');
    res.header('Access-Control-Allow-Origin', '*');

    if(ip)
      res.send({status: 'success'})
    else
      res.send({status: 'failure'})
  };

  module.exports = StoreDeviceInfo;