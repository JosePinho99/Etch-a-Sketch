let mode = 1;

function mode_definer(value) {
    mode = value;
}

function reset_grid() {
    const size = document.querySelector("#scroll").value;
    removeChilds ();

    //update indicator value before the range input
    const indicator = document.querySelector("#ind");
    indicator.textContent = size; 

    //Select container as parent node
    const container = document.querySelector("#container");

    //Loop to create grid with the right size
    for (let i = 0; i < size; i++) {
        //Create row
        const row = document.createElement('div');

        //Assign main class and give height depending on the current grid size
        row.setAttribute('class', 'rows'); 
        row.style.height = 600/size+"px";     

        //Assign different classes with border intentions
        if (i === 0) {row.setAttribute('class', 'rows top-row')}
        else if (i === size - 1) {row.setAttribute('class', 'rows bottom-row')}

        for (let j = 0; j < size; j++) {
            //Create column
            const column = document.createElement('div');
            column.setAttribute('onmouseover', "hovering(this)");

            //Assign column dimentions
            column.style.width = 100/size+"%";   
            column.style.height = 100+"%";   
            column.style.backgroundColor = "hsl(0 , 0%, 100%)";  
            
            column.setAttribute('class', 'columns'); 
            //Same logic as before but for the left and right border now
            if (j === 0) {column.setAttribute('class', 'columns left-column')}
            else if (j === size - 1) {column.setAttribute('class', 'columns right-column')}
            row.appendChild(column);
        }
        container.appendChild(row);
    }
}

function hovering(event) {
    if (mode === 1) {
        let red = Number(event.style.backgroundColor.slice(4, 7));
        let green = Number(event.style.backgroundColor.slice(9, 12));
        let blue = Number(event.style.backgroundColor.slice(14, 17));
        if (isNaN(red)) {
            red = Number(event.style.backgroundColor.slice(4, 6));
            green = Number(event.style.backgroundColor.slice(8, 10));
            blue = Number(event.style.backgroundColor.slice(12, 14));
        }
        if (red != green || red != blue || blue != green){
            if (!isNaN(red)){
                red = 255;
                blue = 255;
                green = 255;
            }
        }
        if (red - 51 > -1) {
            red = red - 51;
        }

        if (green - 51 > -1) {
            green = green - 51;
        }

        if (blue - 51 > -1) {
            blue = blue - 51;
        }
        event.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    }

    if (mode === 2) {
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        event.style.backgroundColor = `#${randomColor}`;

    }
     
} 

//Create 16x16 grid
const container = document.querySelector("#container");
size = 16;
//Loop to create grid with the right size
for (let i = 0; i < size; i++) {
    //Create row
    const row = document.createElement('div');

    //Assign main class and give height depending on the current grid size
    row.setAttribute('class', 'rows'); 
    row.style.height = 600/size+"px";     

    //Assign different classes with border intentions
    if (i === 0) {row.setAttribute('class', 'rows top-row')}
    else if (i === size - 1) {row.setAttribute('class', 'rows bottom-row')}

    for (let j = 0; j < size; j++) {
        //Create column
        const column = document.createElement('div');
        column.setAttribute('onmouseover', "hovering(this)");
        column.style.backgroundColor = "hsl(0 , 0%, 100%)";   
        //Assign column dimentions
        column.style.width = 100/size+"%";   
        column.style.height = 100+"%";   
        
        column.setAttribute('class', 'columns'); 
        //Same logic as before but for the left and right border now
        if (j === 0) {column.setAttribute('class', 'columns left-column')}
        else if (j === size - 1) {column.setAttribute('class', 'columns right-column')}
        row.appendChild(column);
    }
    container.appendChild(row);
}

//Remove current grid before upadting new one
function removeChilds () {
    const container = document.querySelector("#container");
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }

}


const slider = document.querySelector("#scroll");
//Updade grid if there is changes to the input
slider.addEventListener('input', function(){
    const size = document.querySelector("#scroll").value;
    removeChilds ();

    //update indicator value before the range input
    const indicator = document.querySelector("#ind");
    indicator.textContent = size; 

    //Select container as parent node
    const container = document.querySelector("#container");

    //Loop to create grid with the right size
    for (let i = 0; i < size; i++) {
        //Create row
        const row = document.createElement('div');

        //Assign main class and give height depending on the current grid size
        row.setAttribute('class', 'rows'); 
        row.style.height = 600/size+"px";     

        //Assign different classes with border intentions
        if (i === 0) {row.setAttribute('class', 'rows top-row')}
        else if (i === size - 1) {row.setAttribute('class', 'rows bottom-row')}

        for (let j = 0; j < size; j++) {
            //Create column
            const column = document.createElement('div');
            column.setAttribute('onmouseover', "hovering(this)");

            //Assign column dimentions
            column.style.width = 100/size+"%";   
            column.style.height = 100+"%";   
            column.style.backgroundColor = "hsl(0 , 0%, 100%)";  
            
            column.setAttribute('class', 'columns'); 
            //Same logic as before but for the left and right border now
            if (j === 0) {column.setAttribute('class', 'columns left-column')}
            else if (j === size - 1) {column.setAttribute('class', 'columns right-column')}
            row.appendChild(column);
        }
        container.appendChild(row);
    }
});
