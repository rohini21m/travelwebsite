const button = document.getElementById(".search");

function getPrices() {
  const departure_date = document.getElementById("outboundPartialDate");
  const Class = document.getElementById("flight_class");

  const destination = document.getElementById("arrival_airport_code");

  const departure = document.getElementById("departure_airport_code");
  fetch(
    "https://google-flights-search.p.rapidapi.com/search?4 ${departure_airport_code}=JFK & ${arrival_airport_code}=LAX & ${flight_class}=Economy",
    {
      method: "GET",
      headers: {
        "x-rapidapi-key": "d71ed53a57msha688660ef4fb344p19dd1fjsnb009dd85d758",
        "x-rapidapi-host": "google-flights-search.p.rapidapi.com",
      },
    }
  )
    .then((response) => response.json())
    .then((data) => {
      let html = "";
      if (data.prices) {
        data.prices.map((price) => {
          html += ` <div class="area">
            <input  type = "text" > ${departure} to  ${destination} ,${Class} ,${departure_date} </input>
          </div>`;
        });
      }
    });
}
try {
  (err) => {
    console.error(err);
  };
} finally {
}
