function setGrid()
{
    let settingSize = true;
    let size;

    do
    {
        size = prompt('Please enter the size of the grid');
        size > 0 && size <= 100 ? settingSize = false : alert('Please choose a number between 1 and 100');
    } while(settingSize);

    removeGrid();
    makeGrid(size);
}

function makeGrid(size)
{
    const container = document.querySelector('#container');
    container.style.grid = `repeat(${size}, 1fr) / repeat(${size}, 1fr)`;

    for(let i = 0; i < size; i++)
    {
        for(let j = 0; j < size; j++)
        {
            const div = document.createElement('div');
            div.classList.add('grid-cell');
            container.appendChild(div);
        }
    } 
}

function removeGrid()
{
    const container = document.querySelector('#container');

    while(container.lastChild)
    {
        container.removeChild(container.lastChild);
    }
}

const setButton = document.querySelector('#set-button');
setButton.addEventListener('click', setGrid);

//Populate the grid initially with 16x16 divs 
makeGrid(16);