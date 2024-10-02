async function LoadingIntoHTML(Url , table){
    
    const tableHead = table.querySelector('thead');
    const tableBody = table.querySelector('tbody');
    const response = await fetch(Url);
    const { headers , rows } = await response.json(); // Destructuring object above line


    tableHead.innerHTML= "<tr></tr>";
    tableBody.innerHTMl="";
    for (text of headers){
        const headerElement = document.createElement("th");
        headerElement.textContent = text;
        tableHead.querySelector('tr').appendChild(headerElement);
        
    }

   


}



  LoadingIntoHTML("./main.json" , document.querySelector('table'));






