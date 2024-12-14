const {
  formatCurrency,
  transformArrayToObject,
  capitalizeFirstLetter,
  convertToCamelCase,
} = require("./tdd_test_cases");

describe("Formatting Functions", () => {
  test("should format number to currency", () => {
    expect(formatCurrency(5000)).toBe("$5,000.00");
  });
});

describe("Transformation Functions", () => {
  test("should transform an array of key-value pairs to an object", () => {
    const array = [
      ["key1", "value1"],
      ["key2", "value2"],
    ];
    const expectedObj = { key1: "value1", key2: "value2" };
    expect(transformArrayToObject(array)).toEqual(expectedObj);
  });
});

describe("String Manipulation Functions", () => {
  test("should capitalize the first letter of a string", () => {
    expect(capitalizeFirstLetter("hello")).toBe("Hello");
  });

  test("should convert string to camel case", () => {
    expect(convertToCamelCase("hello world")).toBe("helloWorld");
  });
});
