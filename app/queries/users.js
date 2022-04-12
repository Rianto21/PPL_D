const { MongoClient } = require('mongodb');

const uri = 'mongodb://127.0.0.1:27017';
const dbName = 'rollascafe';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect((err, client) => {
  if (err) {
    return console.log(`Koneksi gagal\n${err}`);
  }
  const db = client.db(dbName);

  db.collection('users').insertOne({
    username: "Mike",
    password: "0021",
    nama_lengkap: "Mikli Oktarianto",
    description: "Faster Than Light",
    contact: 089566667777,
    user_role: "Super Saiyan",
    daftar_pemesanan: [],
    daftar_pemesanan_meja: [],
    created_at: Date.now(),
    last_updated: Date.now()
  }, (err, result) => {
    if (err) {
      throw err;
    }
    console.log(result);
    client.close()
  })
});