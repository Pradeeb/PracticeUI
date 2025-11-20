fetch("https://fakestoreapi.com/users/2")
  .then(res => res.json())
  .then(data => {
    const table = document.querySelector("table");

    Object.entries(data).forEach(([key, value]) => {
      if (typeof value === "object") value = JSON.stringify(value);

      const tr = document.createElement("tr");
      tr.innerHTML = `<td>${key}</td><td>${value}</td>`;
      table.appendChild(tr);
    });
  });


// second version

async function loadUserData() {
  try {
    const response = await fetch("https://fakestoreapi.com/users/2");
    const data = await response.json();

    const table = document.querySelector("table");

    for (const [key, value] of Object.entries(data)) {
      const row = document.createElement("tr");

      row.innerHTML = `
        <td>${key}</td>
        <td>${formatValue(value)}</td>
      `;

      table.appendChild(row);
    }

  } catch (error) {
    console.error("Error fetching user:", error);
  }
}

function formatValue(value) {
  return typeof value === "object"
    ? JSON.stringify(value, null, 2)
    : value;
}

loadUserData();
