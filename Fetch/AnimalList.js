const apiURL = 'https://672b4545976a834dd0265640.mockapi.io/Gabriel/Animal'; 

function addAnimalToList(animal) {
    const animalList = document.getElementById('animalList');
    const li = document.createElement('li');
    li.textContent = `${animal.id} - ${animal.Nome} (${animal.Idade} anos) – ${animal.Raca}`;
    animalList.appendChild(li);
}

async function registerAnimal(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const breed = document.getElementById('breed').value;

    const newAnimal = {
        Nome: name,
        Idade: parseInt(age, 10),
        Raca: breed
    };

    try {
        const response = await fetch(apiURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newAnimal)
        });
        
        if (!response.ok) {
            throw new Error(`Erro ao cadastrar o animal: ${response.status}`);
        }
        
        const addedAnimal = await response.json();
        addAnimalToList(addedAnimal);

        document.getElementById('animalForm').reset();
    } catch (error) {
        console.error('Erro ao cadastrar animal:', error);
    }
}

document.getElementById('animalForm').addEventListener('submit', registerAnimal);