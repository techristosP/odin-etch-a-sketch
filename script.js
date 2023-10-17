function create(size){

    const container = document.createElement('div');
    container.setAttribute('class', 'container');
    // container.setAttribute('style', 'display: flex; flex-direction: column; justify-content: space-around; align-items: center; width: 100%; height: 100%;');
    document.body.appendChild(container);

    for (let i=0; i<size; i++) {
        //const row = [];
        let row = document.createElement('div');
        row.setAttribute('class', 'row');
        // row.setAttribute('style', 'display: flex; flex-direction: row; justify-content: space-around; align-items: center;');
        document.querySelector('.container').appendChild(row);
        for (let j=0; j<size; j++) {
            const cell = document.createElement('div');
            cell.setAttribute('class', 'cell');
            // cell.setAttribute('style', 'wdith: 30px; height: 30px; border-width: 3px; border-style: solid;');
            // cell.innerText = "Hello World";

            cell.addEventListener('mouseover', function() {
                cell.setAttribute('style', 'background-color: grey');
            });
            // cell.addEventListener('mouseout', function() {
            //     cell.setAttribute('style', 'background-color: white');
            // });
            

            document.querySelector('.container').lastChild.appendChild(cell);
        }
    }

    // alert('Hello World');
}

function setSize() {
    // Remove the current grid
    let container = document.getElementsByClassName('container');
    if (container.length != 0) document.body.removeChild(container[0]);

    // Set the new grid
    let size = prompt('Enter the size of the grid: ');
    create(size);
}

// create();
