// fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then((response) => response.json())
//     .then((json) => console.log('date', json))
//     .catch((error) => {
//         console.log(error);
//     });

// try/catch
const fetchData = async () => {
    try {
        const response = await fetch(
            'https://jsonplaceholder.typicode.com/todos/1',
        );
        const data = await response.json();

        console.log('data', data);
    } catch (error) {
        console.log('error', error);
    }
};

fetchData();
