import dogList from "./mockdata";

export function transformWord(word) {
  if (word && typeof word === "string") {
    return word.replace(/\s/g, "").toLowerCase();
  }

  return "";
}

export function search(keyword) {
  if (keyword && typeof keyword === "string") {
    return dogList.filter(
      dog => transformWord(dog.type).indexOf(transformWord(keyword)) > -1
    );
  }

  // return empty list by default
  return [];
}
