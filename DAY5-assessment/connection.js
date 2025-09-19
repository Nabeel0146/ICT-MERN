const mongoose=require('mongoose');

mongoose.connect('mongodb+srv://nabeelsbilling:Nabeel0146@cluster0.nybttx9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => console.log('Connected!'))
  .catch((err)=>console.log(err))