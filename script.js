async function fetchUsers() {
    const userList = document.getElementById('user-list');
    userList.innerHTML = 'Loading...';

    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const users = await response.json();
        userList.innerHTML = '';

        users.forEach(user => {
            const userDiv = document.createElement('div');
            userDiv.classList.add('user');
            userDiv.innerHTML = `
                <h2>${user.name}</h2>
                <p>Email: ${user.email}</p>
                <p>Address: ${user.address.street}, ${user.address.city}</p>
            `;
            userList.appendChild(userDiv);
        });
    } catch (error) {
        userList.innerHTML = 'Failed to load user data';
        console.error('Fetch error:', error);
    }
}

document.getElementById('reload-btn').addEventListener('click', fetchUsers);
window.onload = fetchUsers;
