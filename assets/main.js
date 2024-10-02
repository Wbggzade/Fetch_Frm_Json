async function LoadingIntoHTML(Url , table){
    
    const tableHead = table.querySelector('thead');
    const tableBody = table.querySelector('tbody');
    try {
        const response = await fetch(Url); // Update the path as needed
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const { headers , rows } = await response.json(); // Destructuring object above line
        tableHead.innerHTML= "<tr></tr>";
        tableBody.innerHTMl="";


        for (text of headers){
        const headerElement = document.createElement("th");
        headerElement.textContent = text;
        tableHead.querySelector('tr').appendChild(headerElement);
    

        } 
        for(row of rows){
            const rowElement = document.createElement("th");


            for(cell of row){
                const CellText = document.createElement("td");
                CellText.textContent = cell;
                rowElement.appendChild(CellText);

            }
            tableBody.appendChild(rowElement);
            



        }
        
        

   


    
}


     catch (error) {
        console.error('Fetch error:', error);
    }

}




  LoadingIntoHTML("./assets/main.json" , document.querySelector('table'));






