const express = require('express');
const app = express();
const port = 3000;

const handlebars = require('express-handlebars');
app.engine('hbs', handlebars());
app.set('view engine', {
   partialsDir: './views',
   extname: '.hbs'
});

// on req by client get: 
app.get('/', function(req,res){
   res.send("Hello W!");
});
// :bla on the url is params: whatever in this func will show
app.get('/catalog/:producer/:serial_number', (req, res)=>{
   let products = ['123', '456', '789'];
   let sn = req.params.serial_number;
   let producer = req.params.producer;
   if(products.find(x=>x==sn)){
      res.send(`<h1>Catalog Page</h1><p>Product S/N: ${sn} with producer ${producer}</p>`);
   }else{
      res.status(404);
      res.send('<p>Error 404: Product not found</p>');
   }
   console.log(req.params); // {serail_number: '123'}
});
app.listen(port, function(){
   console.log(`Server listening on port ${port}`);
});