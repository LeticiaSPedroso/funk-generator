const createMongoClient = require('../shared/mongoClient');
const { handlerCode400, handlerCode500 } = require('../shared/errorHandler');

module.exports = async function (context, req) {
  const {
    name,
    author,
    letter,
  } = req.body || {};

  const checkRequestBody = () => (
    (!name || !name.length) &&
    (!author || !author.length) &&
    (!letter || !letter.length)
  );

  if (checkRequestBody()) {
    context.res = handlerCode400('Provide name, author and letter id on body');
    return;
  }

  const { client: MongoClient, closeConnectionFn } = await createMongoClient();
  const Funks = MongoClient.collection('funks');

  try {
    const funk = await Funks.insert({ name, author, letter, createdAt: new Date() });
    closeConnectionFn();
    context.res = { status: 201, body: funk.ops[0] };
  } catch (error) {
    return handlerCode500('Error on insert funk'); 
  }
};