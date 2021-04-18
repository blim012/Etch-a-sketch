//Populate the grid initially with 16x16 divs 
const container = document.querySelector('#container');

for(let i = 0; i < 16; i++)
{
    for(let j = 0; j < 16; j++)
    {
        const div = document.createElement('div');
        div.classList.add('grid-cell');
        container.appendChild(div);
    }
} 
