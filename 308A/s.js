// Function to fetch data from the API
async function fetchData() {
    try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/espeon');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}
