import GameSavingLoader from './gameSavingLoader.js'

GameSavingLoader.load().then((saving) => saving, (error) => error);
