import mysql from 'serverless-mysql';

const db = mysql({
  config: {
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    database: process.env.MYSQL_DATABASE,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD
  },
  onConnect: (e) => { console.info('Successfully connected to database.'); },
  onConnectError: (e) => { console.error('Connect Error: ' + e); },
  onError: (e) => {console.error('Database error: ' + e);}
});

export default async function excuteQuery({ query, values }) {
  try {
    // console.debug(query);{
    // console.debug(values)};
    const results = await db.query(query, values);
    await db.end();
    return results;
  } catch (error) {
    return { error };
  }
}
