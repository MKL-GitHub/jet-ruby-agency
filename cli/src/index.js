const getUserInput = require('./utils');
const { sync, getRepos, getRepoByNameOrId } = require('./commands');

async function main() {

  while (true) {
    console.log('\x1b[33m%s\x1b[0m', '\nCLI Client for Your Node.JS Service\n');

    const input = await getUserInput(
      'Select an Option:\n 1. Start sync with GitHub\n 2. Get all repositories\n 3. Get repository by name or ID\n 4. Exit\n>'
    );

    switch (input) {
      case '1':
        await sync();
        break;

      case '2':
        await getRepos();
        break;

      case '3':
        const input = await getUserInput('Enter repository name or ID: ');
        await getRepoByNameOrId(input);
        break;
      case '4':
        process.exit(0);

      default:
        console.log('Invalid option');
    }
  }

}

main();