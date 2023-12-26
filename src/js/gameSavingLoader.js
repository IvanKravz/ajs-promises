import read from "./reader.js"
import json from "./parser.js"
import GameSaving from './gameSaving.js'

export default class GameSavingLoader {
  static load() {
    return new Promise(
      (resolve) => read()
      .then(data => json(data))
      .then(jsonObj => resolve(new GameSaving(jsonObj)))
    )
  }
}
