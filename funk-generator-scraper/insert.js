const { MongoClient } = require('mongodb');
const { readFileSync } = require('fs');
const config = {
  url: 'mongodb+srv://god:dog@cluster0-dfsvs.mongodb.net/funk-generator?retryWrites=true&w=majority',
};

const createMongoClient = () => new Promise((resolve, reject) => {
  MongoClient
    .connect(config.url, { useNewUrlParser: true }, (err, mongoConnection) =>
      err
      ? reject(err)
      : resolve({
          client: mongoConnection.db(config.dbName),
          closeConnectionFn: () => setTimeout(() => {
            mongoConnection.close();
          }, 1000),
          mongoConnection,
        })
    );
});

const run = async () => {
  const funks = JSON.parse(
    readFileSync('./funks-parsed.json', 'utf8'),
  );
  const { client: MongoClient, closeConnectionFn } = await createMongoClient();
  const Funks = MongoClient.collection('funks');
  await Funks.insertMany(
    funks.map(funk => ({ ...funk, createdAt: new Date() }))
  );
  console.log('* All funks were inserted');
  closeConnectionFn();
}

run()