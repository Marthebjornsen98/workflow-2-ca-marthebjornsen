import { createProduct } from "../scripts/helpers/objectHelpers";

test("Testing the function createProduct", () => {
  expect(
    createProduct({ id: 10, code: "marthe bjørnsen", title: "Testing is hard" })
  ).toStrictEqual({ id: 10, code: "MARTHE BJØRNSEN", title: "Testing_is_h" });
});
