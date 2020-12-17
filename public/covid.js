const baseURL = "https://api.covidtracking.com";
let url;


const col = document.getElementsByClassName("col-3");
console.log(col);


fetch(`${baseURL}/v1/us/current.json`)
    .then(response => response.json())
    .then(json => displayResultsDaily(json))

    function displayResultsDaily(json) { 
        console.log(json)
        let covidData = json;
        if (covidData.length === 0) { 
            console.log('No results'); // no results will be shown if no data is available
        } else { 
            let date = document.createElement("p");
            let dailyPositives = document.createElement("p");
            let dailyDeaths = document.createElement("p");
            let dailyTests = document.createElement("p");

            date.innerText = covidData[0].date
            console.log(date);

            col[0].appendChild(date);
            console.log("Display Results", json);

            dailyPositives.innerText = covidData[0].positive
            console.log(dailyPositives);

            col[1].appendChild(dailyPositives);
            console.log("Display Results", json);

            dailyDeaths.innerText = covidData[0].death
            console.log(dailyDeaths);

            col[2].appendChild(dailyDeaths);
            console.log("Display Results", json);

            dailyTests.innerText = covidData[0].totalTestResults 
            console.log(dailyTests);

            col[3].appendChild(dailyTests);
            console.log("Display Results", json);
        }

    }

const state = document.querySelector(".state");
const searchForm = document.querySelector('form');
const container = document.querySelector('.container-fluidTwo')
// const dateDiv = document.querySelector("dateDiv")
// const caseDiv = document.querySelector("caseDiv")
// const deathDiv = document.querySelector("deathDiv")
// const testDiv = document.querySelector("testDiv")

searchForm.addEventListener('submit', displayResultsByState);


    function displayResultsByState(e) { 
        e.preventDefault();
        url = `${baseURL}/v1/states/${state.value}/current.json`;
       

        // while (container.firstChild) {
        //     container.removeChild(container.firstChild);
        // }

        fetch(url)
        .then(function (result) { 
        console.log(result)
        return result.json()
        // .then(result => result.json())
        // .then(json => displayResultsByState(json)) //
    })
    .then(function (json) { 
            console.log(json); 
            displayResultsByState(json);
        })
    
        function displayResultsByState(json){
            // json.preventDefault();
        let covidStateData = json;
        if (covidStateData.length === 0) { 
            console.log('No results'); 
        } else { 
            let stateAb = document.createElement("p")
            let stateDate = document.createElement("p");
            let statePositives = document.createElement("p");
            let stateDeaths = document.createElement("p");
            let stateTests = document.createElement("p");
            const stateDiv = document.querySelector("#stateAb")
            const dateDiv = document.querySelector("#test")
            const caseDiv = document.querySelector("#positive")
            const deathDiv = document.querySelector("#death")
            const testDiv = document.querySelector("#dailyTests")

            stateAb.innerText = covidStateData.state
            console.log(stateAb);
            stateDiv.appendChild(stateAb);

            stateDate.innerText = covidStateData.date
            console.log(stateDate);
            dateDiv.appendChild(stateDate);

            statePositives.innerText = covidStateData.positive
            console.log(statePositives)
            caseDiv.appendChild(statePositives);

            stateDeaths.innerText = covidStateData.death
            console.log(stateDeaths)
            deathDiv.appendChild(stateDeaths);

            stateTests.innerText = covidStateData.totalTestResults 
            console.log(stateTests)
            testDiv.appendChild(stateTests);

        }

    }
    }
    

