import data from "../../2-Develop/src/mockdata";
import { transformWord, search } from "../../2-Develop/src/util";

describe("util.js", () => {
  describe("transformWord()", () => {
    test("it should remove all spaces and turn words into lowercase", () => {
      expect(transformWord("a B c D")).toBe("abcd");
    })
  })
})
