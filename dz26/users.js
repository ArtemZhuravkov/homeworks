function getRandomUser(){
    const users = [
        [
            {
                name: 'Vasya',
                age: 22
            },
            {
                name: 'Petya',
                age: 19
            },
            {
                name: 'Illya',
                age: 3
            }
        ],
        [
            {
                name: 'Valera',
                age: 30
            },
            {
                name: 'Vika',
                age: 81
            },
            {
                name: 'Galina',
                age: 23
            },
        ],
        [
            {
                name: 'Sigizmund',
                age: 100
            }
        ]
    ];
    const randomUser = Math.floor( (Math.random() * users.length) + 0);
    const getUse = users[randomUser];
    return getUse
};


module.exports = {
    getRandomUser
}

