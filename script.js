function setGrid()
{
    let settingSize = true;
    let size;

    do
    {
        size = prompt('Please enter the size of the grid');
        if(size === null) return;
        size > 0 && size <= 100 ? settingSize = false : alert('Please choose a number between 1 and 100');
    } while(settingSize);

    removeGrid();
    makeGrid(size);
    setGridEventListener();
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

//Should always be called after makeGrid
function setGridEventListener()
{
    const container = document.querySelector('#container');
    const callback = function(e)
    { 
        container.className === 'rainbow' ? e.target.style.backgroundColor = randomColor() : 
                                            e.target.style.backgroundColor = container.className;
    }
    container.childNodes.forEach(gridCell => gridCell.addEventListener('mouseenter', callback));
}

function randomColor()
{
    const hex = '0123456789ABCDEF';
    let color = '#';
    for(let i = 0; i < 6; i++)
    {
        color += hex[Math.floor(Math.random() * 16)];
    }

    return color;
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
    rainbowRadio.addEventListener('click', () => container.className = 'rainbow');
    customRadio.addEventListener('click', setCustomColor);
    customRadio.addEventListener('change', setCustomColor);

    container.className = 'black';
    blackRadio.checked = true;

    makeGrid(32);
    setGridEventListener();
});

/*
TODO:
    - pretty UI
    - move container to global scope to reduce bloat?
*/