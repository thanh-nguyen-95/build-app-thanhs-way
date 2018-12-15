import { transformWord, search } from "../../2-Develop/src/util";
import data from "../../2-Develop/src/mockdata";

const pitbullDogs = data.filter(d => d.type === "Pitbull");

describe("util.js", () => {
  // transformWord()
  describe("transformWord()", () => {
    test("it should return empty string input is not a string", () => {
      expect(transformWord(1)).toBe("");
      expect(transformWord(true)).toBe("");
      expect(transformWord([1, 2, 3, 4])).toBe("");
      expect(transformWord({ key: "value" })).toBe("");
      expect(transformWord(null)).toBe("");
      expect(transformWord(undefined)).toBe("");
    });
    test("it should trim the input", () => {
      expect(transformWord("  ")).toBe("");
    });
    test("it should remove all spaces and turn words into lowercase", () => {
      expect(transformWord("pit bull dog")).toBe("pitbulldog");
      expect(transformWord("gOl den retr IevEr")).toBe("goldenretriever");
    });
  });
  // search()
  describe("search()", () => {
    test("it should return dogs whose type matched with the keyword", () => {
      expect(search("pitbull")).toEqual(pitbullDogs);
      expect(search("pI t bUl  l")).toEqual(pitbullDogs);
    });
    test("it should return empty array if no keyword is passed in", () => {
      expect(search()).toHaveLength(0);
      expect(search("")).toHaveLength(0);
    });
    test("it should return empty array if keyword is not a string", () => {
      expect(search(1)).toHaveLength(0);
      expect(search(true)).toHaveLength(0);
      expect(search([1, 2, 3, 4])).toHaveLength(0);
      expect(search({ key: "value" })).toHaveLength(0);
      expect(search(null)).toHaveLength(0);
      expect(search(undefined)).toHaveLength(0);
    });
  });
});
