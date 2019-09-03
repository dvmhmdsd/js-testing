const { generateText, checkAndGenerate } = require('./util');

test('should return expected value', () => {
  let text = generateText('mohamed', 19);
  expect(text).toBe('mohamed (19 years old)')
})

test('should return dynamic data', () => {
    let und = generateText();
    expect(und).toBe('undefined (undefined years old)')
})

test('should generate a valid text output', () => {
  let text = checkAndGenerate('mohamed', 24);

  expect(text).toBe('mohamed (24 years old)')
})

