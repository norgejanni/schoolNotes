fetch('countries.json')
  .then(response => {
    if (!response.ok) {
      throw new Error("Failed to load JSON file: " + response.statusText);
    }
    return response.json();
  })
  .then(data => {
    const tableBody = document.querySelector("#countryTable tbody");
    
    // Populate the table initially
    populateTable(data.countries);

    // Store the countries data globally for sorting purposes
    window.countriesData = data.countries;
  })
  .catch(error => {
    console.error("Error loading JSON file:", error);
  });

/**
 * Populates the table with data.
 * @param {Array} countries - Array of country objects.
 */
function populateTable(countries) {
  const tableBody = document.querySelector("#countryTable tbody");
  tableBody.innerHTML = ""; // Clear existing rows

  countries.forEach(item => {
    const row = document.createElement("tr");

    const nameCell = document.createElement("td");
    nameCell.textContent = item.name;
    row.appendChild(nameCell);

    const capitalCell = document.createElement("td");
    capitalCell.textContent = item.capital;
    row.appendChild(capitalCell);

    const populationCell = document.createElement("td");
    populationCell.textContent = item.population.toLocaleString(); // Format population
    row.appendChild(populationCell);

    const nationalDishCell = document.createElement("td");
    nationalDishCell.textContent = item.national_dish;
    row.appendChild(nationalDishCell);

    tableBody.appendChild(row);
  });
}

/**
 * Sorts the table by a given column index.
 * @param {number} columnIndex - The index of the column to sort by.
 */
function sortTable(columnIndex) {
  const sortedData = [...window.countriesData];

  sortedData.sort((a, b) => {
    const keys = ["name", "capital", "population", "national_dish"];
    const key = keys[columnIndex];

    // Compare values (case-insensitive for strings)
    if (typeof a[key] === "string") {
      return a[key].localeCompare(b[key]);
    }

    // Compare numbers
    return a[key] - b[key];
  });

  // Update the table with the sorted data
  populateTable(sortedData);
}
