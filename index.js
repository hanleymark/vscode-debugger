const { loadFile } = require('./loadFile');
const { countChars } = require('./countChars');

const args = process.argv.splice(2);
const [char, file] = args;

if (!char || !file) {
  console.error('ERROR: you must provide a character and a filename as arguments');
  process.exit(1);
}

const main = async () => {
  const fileText = await loadFile(file);
  const count = await countChars(char, fileText);
  console.log(`We found ${count} '${char}' characters in the file.`);
};

main();
