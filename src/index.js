console.log('%c HI', 'color: firebrick')
document.addEventListener('DOMContentLoaded', () => {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    const breedUrl = "https://dog.ceo/api/breeds/list/all";
    let allBreeds = [];

    // Challenge 1: Fetch and display random dog images
    fetch(imgUrl)
        .then(response => response.json())
        .then(data => {
            const imageContainer = document.getElementById('dog-image-container');
            data.message.forEach(imageUrl => {
                const img = document.createElement('img');
                img.src = imageUrl;
                imageContainer.appendChild(img);
            });
        })
        .catch(error => console.error('Error fetching images:', error));

    // Challenge 2: Fetch and display list of dog breeds
    fetch(breedUrl)
        .then(response => response.json())
        .then(data => {
            allBreeds = Object.keys(data.message);
            displayBreeds(allBreeds);
        })
        .catch(error => console.error('Error fetching breeds:', error));

    // Function to display breeds
    function displayBreeds(breeds) {
        const breedList = document.getElementById('dog-breeds');
        breedList.innerHTML = ''; // Clear the list
        breeds.forEach(breed => {
            const li = document.createElement('li');
            li.textContent = breed;
            breedList.appendChild(li);
        });
    }

    // Challenge 3: Change color of breed name when clicked
    document.getElementById('dog-breeds').addEventListener('click', function(event) {
        if (event.target.tagName === 'LI') {
            event.target.style.color = 'blue'; // You can change 'blue' to any color you prefer
        }
    });

    // Challenge 4: Filter breeds based on dropdown selection
    document.getElementById('breed-dropdown').addEventListener('change', function(event) {
        const selectedLetter = event.target.value;
        let filteredBreeds;
        if (selectedLetter === 'all') {
            filteredBreeds = allBreeds;
        } else {
            filteredBreeds = allBreeds.filter(breed => breed.startsWith(selectedLetter));
        }
        displayBreeds(filteredBreeds);
    });
});