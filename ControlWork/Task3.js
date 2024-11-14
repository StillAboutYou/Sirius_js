function fetchWithTimeout(url, timeout) {
    const timeoutPromise = new Promise((_, reject) => {
        setTimeout(() => {
            reject(new Error('Время ожидания истекло'));
        }, timeout);
    });

    const fetchPromise = fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Ошибка HTTP: ${response.status}`);
            }

            return response.json();
        });
    return Promise.race([fetchPromise, timeoutPromise]);
}

// рандом ссылка с сайта с json
const url1 = 'http://time.jsontest.com'; 

// раскомментировать нужный вариант теста программы
fetchWithTimeout(url1, 10).then(data => { console.log('Данные:', data); }).catch(error => { console.error('Ошибка:', error.message); }); // Ошибка при выполнении
fetchWithTimeout(url1, 2000).then(data => { console.log('Данные:', data); }); // Успешное выполнение
