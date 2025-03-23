function getLetterNumberMap() {
  const map = {};
  for (let i = 0; i < 26; i++) {
    map[String.fromCharCode(65 + i)] = i + 1;
  }
  return map;
}

function getNumberLetterMap() {
  const map = {};
  for (let i = 0; i < 26; i++) {
    map[i + 1] = String.fromCharCode(65 + i);
  }
  return map;
}

function getAlphabetArray() {
  return Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i));
}

function wordToNumbers(word, letterMap) {
  return Array.from(word).map(char => letterMap[char]);
}

function applyPlugboardSwaps(codeWord, startIndex, alphabet) {
  const plugboard = [...alphabet];
  const usedCodeLetters = {};
  let switchCount = 0;

  for (let i = 0; i < codeWord.length; i++) {
    const letter = codeWord[i];
    const plugboardIndex = (startIndex + i) % 26;
    const plugLetter = plugboard[plugboardIndex];

    if (letter in usedCodeLetters) {
      const prevPlugLetter = usedCodeLetters[letter];
      const i1 = plugboard.indexOf(letter);
      const i2 = plugboard.indexOf(prevPlugLetter);
      [plugboard[i1], plugboard[i2]] = [plugboard[i2], plugboard[i1]];
      delete usedCodeLetters[letter];
      switchCount -= 1;
    } else {
      const i1 = plugboard.indexOf(letter);
      const i2 = plugboardIndex;
      [plugboard[i1], plugboard[i2]] = [plugboard[i2], plugboard[i1]];
      usedCodeLetters[letter] = plugLetter;
      switchCount += 1;
    }
  }

  return [plugboard, switchCount];
}

function applyPlugboardToMessage(message, plugboardMap) {
  return message.toUpperCase().split('').map(c => plugboardMap[c] || c).join('');
}

function invertPlugboardMap(plugboardMap) {
  const inverted = {};
  for (const key in plugboardMap) {
    inverted[plugboardMap[key]] = key;
  }
  return inverted;
}

function applyCypherShift(message, switchCount, cypherLoop, letterMap, numberLetterMap, encode = true) {
  let result = "";
  let shiftAmount = switchCount + cypherLoop[0];

  for (let i = 0; i < message.length; i++) {
    const char = message[i];
    if (!(char in letterMap)) {
      result += char;
      continue;
    }

    const baseValue = letterMap[char];
    let shiftedValue;
    if (encode) {
      shiftedValue = ((baseValue + shiftAmount - 1) % 26) + 1;
    } else {
      shiftedValue = ((baseValue - shiftAmount - 1 + 26) % 26) + 1;
    }

    result += numberLetterMap[shiftedValue];
    const nextCypherValue = cypherLoop[(i + 1) % cypherLoop.length];
    shiftAmount += switchCount + nextCypherValue;
  }

  return result;
}

function processMessage(codeWord, codeNumber, message, isEncoding) {
  const letterMap = getLetterNumberMap();
  const numberLetterMap = getNumberLetterMap();
  const alphabet = getAlphabetArray();

  const codeWordUpper = codeWord.toUpperCase();
  const codeWordNumbers = wordToNumbers(codeWordUpper, letterMap);
  const cypherLoop = Array.from(codeNumber).map(d => parseInt(d));
  const cypherSum = cypherLoop.reduce((a, b) => a + b, 0);
  const startIndex = (cypherSum % 26) - 1;
  const [plugboard, switchCount] = applyPlugboardSwaps(codeWordUpper, startIndex, alphabet);

  let plugboardMap = {};
  for (let i = 0; i < alphabet.length; i++) {
    plugboardMap[alphabet[i]] = plugboard[i];
  }

  if (!isEncoding) {
    plugboardMap = invertPlugboardMap(plugboardMap);
  }

  if (isEncoding) {
    const plugboardedMessage = applyPlugboardToMessage(message, plugboardMap);
    return applyCypherShift(plugboardedMessage, switchCount, cypherLoop, letterMap, numberLetterMap, true);
  } else {
    const caesarDecoded = applyCypherShift(message, switchCount, cypherLoop, letterMap, numberLetterMap, false);
    return applyPlugboardToMessage(caesarDecoded, plugboardMap);
  }
}
