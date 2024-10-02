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
        
        

   


    
}


     catch (error) {
        console.error('Fetch error:', error);
    }

}




  LoadingIntoHTML("./assets/main.json" , document.querySelector('table'));






