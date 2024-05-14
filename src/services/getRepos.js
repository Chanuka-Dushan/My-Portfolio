export async function getRepos() {
    try {
        const response = await fetch('https://api.github.com/users/Chanuka-Dushan/repos', {
           
        });

        if (response.ok) {
            const data = await response.json();
            return data
        } else {
            console.error('Error fetching repositories:', response.statusText);
        }
    } catch (error) {
        console.error('Error fetching repositories:', error);
    }
}