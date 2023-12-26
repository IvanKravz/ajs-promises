import GameSavingLoader from '../gameSavingLoader.js'

test('Проверка работы GameSavingLoader без ошибок', (done) => {
    const hitman = {
        id: 9,
        created: 1546300800,
        userInfo:{
            id: 1,
            name: "Hitman",
            level: 10,
            points: 2000}}

    GameSavingLoader.load().then(object => {
        expect(object).toEqual(hitman);
        done()
    })
});
