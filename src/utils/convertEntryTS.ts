import { IEntry } from "../interfaces/IEntry"

export const convertEntryTS = (results: Realm.Results<Realm.Object>) => {
  let arrayResults = [] as IEntry[];

  for(let result of results) {
    arrayResults.push(JSON.parse(JSON.stringify(result)));
  }

  return arrayResults;
}