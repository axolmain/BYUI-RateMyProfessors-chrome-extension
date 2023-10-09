// Log `title` of current active web page
console.log(document.title, "past title");

// get table where id is tableCourses
const coursesTable = document.getElementById('tableCourses');

// Create a local dictionary to store the professor's so we don't have to make multiple API calls
const professorDictionary = {};
const professorLocation = {};

// Check if the table exists before proceeding
if (coursesTable) {
  const rows = coursesTable.getElementsByTagName('tbody')[0].rows;

  // Iterate through each row of the table
  for (let row of rows) {
    // Check if the row has at least five cells before accessing them
    if (row.cells.length >= 5) {
      let cell = row.cells[4];
      let professorName = cell.innerText.trim();

      if (professorLocation[professorName]) {
        professorLocation[professorName].push(row);
      } else {
        professorLocation[professorName] = [row];
      }
    }
  }

  for (let professorName in professorLocation) {

    let [lastName, firstName] = professorName.split(',');
      lastName = lastName.trim().toLowerCase();
      firstName = firstName.trim().split(' ')[0].toLowerCase();

    getProfessorRatings(firstName, lastName).then(result =>
    {
          let newProfessorName = `<p><a href=${result[2]} target="_blank">RateMyProfessor</a><br>Rating: ${result[0]}<br>` +
          `Difficulty: ${result[1]}</p>`;
          professorDictionary[`${firstName}_${lastName}`] = professorName + newProfessorName;
          for (let row of professorLocation[professorName]) {
            let cell = row.cells[4];
            let professorName = cell.innerText.trim();
            let [lastName, firstName] = professorName.split(',');
            lastName = lastName.trim().toLowerCase();
            firstName = firstName.trim().split(' ')[0].toLowerCase();
            cell.innerHTML = professorDictionary[`${firstName}_${lastName}`];
          }
    });

  }
}

async function getProfessorRatings(firstName, lastName) {
  const apiResponse = await fetch(`https://ratemyprofessorapi.azurewebsites.net/api/GetProfessorRating/?name=${firstName}_${lastName}`);
  const apiResponseText = await apiResponse.text();
  if (apiResponseText === "No Professor Found" || apiResponseText == null) {
    return ["N/A", "N/A", "https://www.youtube.com/watch?v=dQw4w9WgXcQ"];
  }
  return apiResponseText.split(' ');
}
