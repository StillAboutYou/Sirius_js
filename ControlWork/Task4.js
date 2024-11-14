async function sequentialFetch(urls) {
    for (let i = 0; i < urls.length; i++) {
        try {
            const response = await fetch(urls[i]);
            if (!response.ok) {
                throw new Error(`Ошибка при загрузке данных: ${response.status}`);
            }
            const data = await response.json(); 
            console.log(data);
        } catch (error) {
            return "Ошибка в загрузке данных";
        }
        await new Promise(resolve => setTimeout(resolve, 500));
    }
    return "Все данные загружены успешно";
}

// р0андом ссылки jsontest 
const urls1 = [
    'http://time.jsontest.com',
    'http://headers.jsontest.com' 
];
const urls2 = [
    'https://yandex.ru',
    'https://google.com' 
];


// раскомментировать нужный вариант теста программы
// sequentialFetch(urls1).then(console.log); // Успешная загрузка

// sequentialFetch(urls2).then(console.log); // Ошибка в загрузке данных