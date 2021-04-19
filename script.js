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

//Set all event listeners and initialize the page
document.addEventListener('DOMContentLoaded', () =>
{
    const container = document.querySelector('#container');
    const setButton = document.querySelector('#set-button');
    const clearButton = document.querySelector('#clear-button');
    const blackRadio = document.querySelector('#black-button');
    const rainbowRadio = document.querySelector('#rainbow-button');
    const customRadio = document.querySelector('#color-picker');

    const setCustomColor = e => 
    {
        container.className = e.target.value;
        blackRadio.checked = false;
        rainbowRadio.checked = false;
    }

    setButton.addEventListener('click', setGrid);
    clearButton.addEventListener('click', clearGrid);
    blackRadio.addEventListener('click', () => container.className = 'black');
    rainbowRadio.addEventListener('click', () => container.className = 'red');
    customRadio.addEventListener('click', setCustomColor);
    customRadio.addEventListener('change', setCustomColor);

    container.className = 'black';
    blackRadio.checked = true;

    makeGrid(32);
    setGridEventListener(e => e.target.style.backgroundColor = container.className);
});

/*
TODO:
    - buttons to change how the grid lights up
    - pretty UI
    - move container to global scope to reduce bloat?
*/