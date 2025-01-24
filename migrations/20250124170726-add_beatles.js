export const up = async (db, client) => {
  await db.collection('artists').insertOne({ name: 'The Beatles' });
};

export const down = async (db, client) => {
  await db.collection('artists').deleteOne({ name: 'The Beatles' });
};
