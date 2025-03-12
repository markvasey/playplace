async function fetchJsonData(url) {
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error('Error fetching JSON data:', error);
        return null;
    }
}

// Example usage
fetchJsonData('https://api.example.com/data')
    .then(data => console.log(data))
    .catch(error => console.error('Fetch failed:', error));