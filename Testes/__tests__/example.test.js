function soma(a, b) {
  return a + b;
}

test('if soma is called with 4 and 5, it must returne the value 9', () => {
  const result = soma(4, 5);

  expect(result).toBe(9);
});
