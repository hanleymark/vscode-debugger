exports.countChars = (char, string) => {
  return new Promise((resolve, reject) => {
    // Introduce known runtime error for debugging
    while (true) {}
      resolve(string.split(char).length - 1);
  });
};
