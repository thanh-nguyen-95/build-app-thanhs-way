import dogList from "./mockdata";

export function transformWord(word) {
  if (word) {
    return word.replace(" ", "").toLowerCase();
  }

  return "";
}

export function search(keyword) {
  if (keyword) {
    return dogList.filter(
      dog => transformWord(dog.type).indexOf(transformWord(keyword)) > -1
    );
  }

  // return empty list by default
  return [];
}
