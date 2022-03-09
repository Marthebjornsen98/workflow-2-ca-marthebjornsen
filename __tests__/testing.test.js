import {
  makeUppercase,
  replaceSpaces,
  limitLength,
} from "../scripts/helpers/stringHelpers.ts";

test("Make the text uppercase", () => {
  expect(makeUppercase("hello")).toBe("HELLO");
});

test("Replaces spaces with _", () => {
  expect(replaceSpaces("Hello to you")).toBe("Hello_to_you");
});

test("Cuts out the chosen length of the word", () => {
  expect(limitLength(4, "Marthe")).toBe("Mart");
});
