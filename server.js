const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path');
const metaget = require('metaget');
const dns = require('dns');

app.use(cors());

app.use(express.static(__dirname))
app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/', function(_, res) {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  })
})

app.get('/metaTags', function(req,res){
    
    let tUrl = req.query.tUrl;
    if(!tUrl) res.send('invalid query')
    tUrl = (tUrl.startsWith('http'))? tUrl : `https://${tUrl}`;

    metaget.fetch(tUrl , (err, metaResponse)=> {
        if(err){
          console.log(err);
        }
        else{
          console.log('----gotttt---' + metaResponse);
          (metaResponse && (Object.keys(metaResponse).length !== 0))? res.send({serverResp : metaResponse , status : 200}) : res.send({serverResp : ['no data found'], status : 404} );
        }
      })
});

app.get('/dnsRecords' , function(req,res){

  let tUrl = req.query.tUrl;
  if(!tUrl) res.send('invalid query')
  tUrl = (tUrl.startsWith('www.'))? tUrl.slice(4) : tUrl;
  console.log(tUrl)
  
  dns.resolveTxt(tUrl,(err,records)=>{
    if(err) res.status(500).send('Internal Error occured retrieving dnsTxt file data' );
    else {
      console.log(records);
    res.send(records.length? {serverResp : records, status : 200}: {serverResp : ['No dns text record found'] , status : 404})  
    }
  })
})

let port = process.env.PORT || 8080;
app.listen(port);
console.log(`app is runnning...on port${port}`)

