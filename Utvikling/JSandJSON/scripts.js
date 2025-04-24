// Fetch the JSON data and populate the table
fetch('example.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        const tableBody = document.querySelector("#musicTable tbody");
        data.forEach(item => {
            // Create a new row
            const row = document.createElement("tr");

            // Create cells for each property
            const navnCell = document.createElement("td");
            navnCell.textContent = item.navn;
            row.appendChild(navnCell);

            const favorittsangCell = document.createElement("td");
            favorittsangCell.textContent = item.favorittsang;
            row.appendChild(favorittsangCell);

            const årCell = document.createElement("td");
            årCell.textContent = item.år;
            row.appendChild(årCell);

            const sjangerCell = document.createElement("td");
            sjangerCell.textContent = item.sjanger;
            row.appendChild(sjangerCell);

            // Append the row to the table body
            tableBody.appendChild(row);
        });
    })
    .catch(error => {
        console.error("Error fetching or processing JSON:", error);
    });
