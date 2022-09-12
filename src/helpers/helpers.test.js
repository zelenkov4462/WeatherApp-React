import { removeElementFromArray } from "./index";

test("check logic of removeElementFromArray", () => {
  const oldArray = ["Atlanta", "Kyiv", "London", "Minsk"];
  expect(oldArray).toHaveLength(4);
  const newArray = removeElementFromArray("Kyiv", oldArray);
  expect(newArray).toHaveLength(3);
  expect(newArray[0]).toEqual("Atlanta");
  expect(newArray[1]).toEqual("London");
  expect(newArray[2]).toEqual("Minsk");
});
