function groupBy(array, property) {
    return array.reduce((acc, obj) => {
        const key = obj[property];

        if (!acc[key]) {
            acc[key] = []; 
        }

        acc[key].push(obj);
        return acc;
    },
    {});
}


const users = [
    { name: 'Alice', group: 'admin' },
    { name: 'Bob', group: 'user' },
    { name: 'Charlie', group: 'admin' }
];

let answer = groupBy(users, 'group');
console.log(answer);