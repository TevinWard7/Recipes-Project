require('dotenv').config();
module.exports = {
  development: {
    username: 'lat0ci6r650gv6ri',
    password: 'xbele488fmzw6eh9',
    database: 'hrsu19rkzewu9msv',
    host: 'qf5dic2wzyjf1x5x.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    dialect: 'mysql'
  },
  test: {
    username: 'root',
    password: 'soccerkid',
    database: 'database_test',
    host: '127.0.0.1',
    dialect: 'mysql'
  },
  production: {
    username: 'lat0ci6r650gv6ri',
    password: 'xbele488fmzw6eh9',
    database: 'hrsu19rkzewu9msv',
    host: 'qf5dic2wzyjf1x5x.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    use_env_variable : 'JAWSDB_URL',
    dialect: 'mysql'

  }
};