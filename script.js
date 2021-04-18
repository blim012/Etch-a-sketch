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
    setGridEventListener(e => e.target.style.backgroundColor = 'red');
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

function clearGrid()
{
    const container = document.querySelector('#container');
    container.childNodes.forEach(gridCell => gridCell.style.backgroundColor = 'grey');
}

function setGridEventListener(callback)
{
    const container = document.querySelector('#container');
    container.childNodes.forEach(gridCell => gridCell.addEventListener('mouseenter', callback));
}

const setButton = document.querySelector('#set-button');
setButton.addEventListener('click', setGrid);

const clearButton = document.querySelector('#clear-button');
clearButton.addEventListener('click', clearGrid);

//Populate the grid initially with 16x16 divs 
makeGrid(32);
setGridEventListener(e => e.target.style.backgroundColor = 'red');

/*
TODO:
    - event listeners for each grid cell
    - clear grid button
    - buttons to change how the grid lights up
    - pretty UI
    - move container to global scope to reduce bloat?
    - Maybe we can set a class for the container that defines what color is set?
        - This way, we avoid a global
        - For custom colors, we can set the class to the hex of the color
          Then just grab the class name to set the eventlistener
*/