async function sequentialFetch(urls) {
    for (let url of urls) {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Ошибка в загрузке данных');
            }
            const data = await response.json();
            console.log(data);
        } catch (error) {
            return 'Ошибка в загрузке данных';
        }
        await new Promise(resolve => setTimeout(resolve, 500));
    }
}

async function* paginatedFetch(url, maxPages) {
    let page = 1;
    while (page <= maxPages) {
        const response = await fetch(`${url}?page=${page}`);
        if (!response.ok) {
            throw new Error('Ошибка в загрузке данных');
        }
        const data = await response.json();
        if (data.length === 0) {
            break;
        }
        yield data;
        page++;
    }
}


const testUrls = [
    'https://jsonplaceholder.typicode.com/posts/1',
    'https://jsonplaceholder.typicode.com/posts/2',
    'https://jsonplaceholder.typicode.com/posts/3'
];


sequentialFetch(testUrls).then(console.log);


async function testPaginatedFetch() {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    const maxPages = 5;

    try {
        for await (const data of paginatedFetch(url, maxPages)) {
            console.log(data); // Обработка данных
        }
    } catch (error) {
        console.error(error.message);
    }
}

testPaginatedFetch();
