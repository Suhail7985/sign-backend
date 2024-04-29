const mongoose = require('mongoose');
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/data');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const userSchema= new mongoose.Schema({
  name: String,
  email: String,
});

const detail=new mongoose.model("Data",userSchema);


module.exports=detail;
// let data=[
//   {name: "s1", email:" satrendra@gmail.com"},
//   {name: "s2", email:" satndra@gmail.com"},
// ];

// detail.insertMany(data);