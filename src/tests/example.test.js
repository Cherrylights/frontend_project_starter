const add = (a, b) => a + b;

test("add two numbers", () => {
  const result = add(3, 4);
  expect(result).toBe(7);
});

const generateGreeting = name => `Hello, ${name}!`;

test("add name into a string", () => {
  const result = generateGreeting("Mike");
  expect(result).toBe("Hello, Mike!");
});
