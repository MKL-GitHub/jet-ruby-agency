const axios = require('axios');
const { BASE_URL } = require("./config")

const sync = async () => {
  try {
    await axios.post(`${BASE_URL}/sync`);
    console.log('\nSync with GitHub initiated');
  } catch (error) {
    console.error('Error:', error.message);
  }
}

const getRepos = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/repos`);
    console.log('\nRepositories: ', response.data);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

const getRepoByNameOrId = async (input) => {
  try {
    const response = await axios.get(`${BASE_URL}/repos/${input}`);
    console.log('\nRepository: ', response.data);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

module.exports = {
  sync,
  getRepos,
  getRepoByNameOrId,
}