const express= require('express');
const Datastore = require('nedb');
const app= express();
app.listen(3000,()=>console.log("listening at 3000..."));
app.use(express.static('public'));
app.use(express.json({ limit: '1mb' }));
var data;
const database = new Datastore('database.db');
database.loadDatabase();

app.post('/api', (request, response) => {
   data = request.body;
  console.log(data);

  const timestamp = Date.now();
  data.timestamp = timestamp;

  database.insert(data);
  console.log(database);
  response.json(data);
});
app.post('/loc',(request,response)=>{
     const IDl=request.body;
     console.log(IDl);
     response.json(data);

});
app.post('/path',(request,response)=>{
     const idp=request.body;
     var x=parseFloat(idp.id);
      console.log(x);
     var db =null;
     database.find({ id: x }).sort({ timestamp: 1 }).exec(function (err, docs) {
db=docs ;
do_something_when_you_get_your_result();
});






     function do_something_when_you_get_your_result() {
       console.log(db);
       response.json(db);
     }
});
