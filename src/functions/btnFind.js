const container = document.querySelector('.list-results');
const results = document.getElementById('results');

async function findUnitsCloseOrOpen() {
    let listUnits = await (await fetch('https://test-frontend-developer.s3.amazonaws.com/data/locations.json')).json();
    container.innerHTML = '';
    let findUnits = 0;
    const closeUnits = document.getElementById('close-units');

    for (let i = 0; i < listUnits.locations.length; i++) {
        let situation = listUnits.locations[i].opened === true ? "Aberto" : "Fechado";
        let mask = listUnits.locations[i].mask === "required" ? "../src/assets/images/required-mask.png" : "../src/assets/images/recommended-mask.png";
        let towel = listUnits.locations[i].towel === "required" ? "../src/assets/images/required-towel.png" : "../src/assets/images/recommended-towel.png";
        let fountain = listUnits.locations[i].fountain === "not_allowed" ? "../src/assets/images/forbidden-fountain.png" : "../src/assets/images/partial-fountain.png"
        let lockerroom = listUnits.locations[i].locker_room === "allowed" ? "../src/assets/images/required-lockerroom.png"
            : listUnits.locations[i].locker_room === "partial" ? "../src/assets/images/partial-lockerroom.png" : "../src/assets/images/forbidden-lockerroom.png";

        if (closeUnits.checked === false) {
            if (situation === "Aberto") {
                findUnits += 1;
                if (listUnits.locations[i].schedules.length === 4) {
                    container.innerHTML += `
                        <article class="results-card">
                            <p class="card-situation">${situation}</p>
                            <h3>${listUnits.locations[i].title}</h3>
                            ${listUnits.locations[i].content}
                            <hr>
                            <div class="card-images">
                                <img src="${mask}">
                                
                                <img src="${towel}">
                                
                                <img src="${fountain}">
                                
                                <img src="${lockerroom}">
                            </div>
                            <div class="card-time">
                                <div class="group-time">
                                    <h5>${listUnits.locations[i].schedules[0].weekdays}</h5>
                                    <p>${listUnits.locations[i].schedules[0].hour}</p>
                                    <p>${listUnits.locations[i].schedules[1].hour}</p>
                                </div>
                                <div class="group-time">
                                    <h5>${listUnits.locations[i].schedules[2].weekdays}</h5>
                                    <p>${listUnits.locations[i].schedules[2].hour}</p>
                                </div>
                                <div class="group-time">
                                    <h5>${listUnits.locations[i].schedules[3].weekdays}</h5>
                                    <p>${listUnits.locations[i].schedules[3].hour}</p>
                                </div>
                            </div>
                        </article>`;
                } else {
                    container.innerHTML += `
                        <article class="results-card">
                            <p class="card-situation">${situation}</p>
                            <h3>${listUnits.locations[i].title}</h3>
                            ${listUnits.locations[i].content}
                            <hr>
                            <div class="card-images">
                                <img src="${mask}">
                                
                                <img src="${towel}">
                                
                                <img src="${fountain}">
                                
                                <img src="${lockerroom}">
                            </div>
                            <div class="card-time">
                                <div class="group-time">
                                    <h5>${listUnits.locations[i].schedules[0].weekdays}</h5>
                                    <p>${listUnits.locations[i].schedules[0].hour}</p>
                                </div>
                                <div class="group-time">
                                    <h5>${listUnits.locations[i].schedules[1].weekdays}</h5>
                                    <p>${listUnits.locations[i].schedules[1].hour}</p>
                                </div>
                                <div class="group-time">
                                    <h5>${listUnits.locations[i].schedules[2].weekdays}</h5>
                                    <p>${listUnits.locations[i].schedules[2].hour}</p>
                                </div>
                            </div>
                        </article>`;
                }
            };
        } else {
            if (situation === "Fechado") {
                findUnits += 1;
                container.innerHTML += `
                <article class="results-card">
                    <p class="card-situation">${situation}</p>
                    <h3>${listUnits.locations[i].title}</h3>
                    ${listUnits.locations[i].content}
                </article>`;
            } else {
                findUnits += 1;
                if (listUnits.locations[i].schedules.length === 4) {
                    container.innerHTML += `
                        <article class="results-card">
                            <p class="card-situation">${situation}</p>
                            <h3>${listUnits.locations[i].title}</h3>
                            ${listUnits.locations[i].content}
                            <hr>
                            <div class="card-images">
                                <img src="${mask}">
                                
                                <img src="${towel}">
                                
                                <img src="${fountain}">
                                
                                <img src="${lockerroom}">
                            </div>
                            <div class="card-time">
                                <div class="group-time">
                                    <h5>${listUnits.locations[i].schedules[0].weekdays}</h5>
                                    <p>${listUnits.locations[i].schedules[0].hour}</p>
                                    <p>${listUnits.locations[i].schedules[1].hour}</p>
                                </div>
                                <div class="group-time">
                                    <h5>${listUnits.locations[i].schedules[2].weekdays}</h5>
                                    <p>${listUnits.locations[i].schedules[2].hour}</p>
                                </div>
                                <div class="group-time">
                                    <h5>${listUnits.locations[i].schedules[3].weekdays}</h5>
                                    <p>${listUnits.locations[i].schedules[3].hour}</p>
                                </div>
                            </div>
                        </article>`;
                } else {
                    container.innerHTML += `
                        <article class="results-card">
                            <p class="card-situation">${situation}</p>
                            <h3>${listUnits.locations[i].title}</h3>
                            ${listUnits.locations[i].content}
                            <hr>
                            <div class="card-images">
                                <img src="${mask}">
                                
                                <img src="${towel}">
                                
                                <img src="${fountain}">
                                
                                <img src="${lockerroom}">
                            </div>
                            <div class="card-time">
                                <div class="group-time">
                                    <h5>${listUnits.locations[i].schedules[0].weekdays}</h5>
                                    <p>${listUnits.locations[i].schedules[0].hour}</p>
                                </div>
                                <div class="group-time">
                                    <h5>${listUnits.locations[i].schedules[1].weekdays}</h5>
                                    <p>${listUnits.locations[i].schedules[1].hour}</p>
                                </div>
                                <div class="group-time">
                                    <h5>${listUnits.locations[i].schedules[2].weekdays}</h5>
                                    <p>${listUnits.locations[i].schedules[2].hour}</p>
                                </div>
                            </div>
                        </article>`;
                }
            }
            const cardSituation = document.querySelectorAll('.card-situation');
            if (situation == "Fechado") {
                cardSituation[i].style.color = "var(--red)";
            }
        }
        results.innerHTML = findUnits;
    }
};

async function findUnitsByPeriod() {
    let listUnits = await (await fetch('https://test-frontend-developer.s3.amazonaws.com/data/locations.json')).json();
    container.innerHTML = '';
    let findUnits = 0;
    let radios = document.querySelectorAll('input[name="period"]');
    let hourFrom = "";
    let hourTo = "";

    if (radios[0].checked) {
        hourFrom = "06";
        hourTo = "12";
    } else if (radios[1].checked) {
        hourFrom = "12";
        hourTo = "18";
    } else if (radios[2].checked) {
        hourFrom = "18";
        hourTo = "23";
    }

    for (let i = 0; i < listUnits.locations.length; i++) {
        let situation = listUnits.locations[i].opened === true ? "Aberto" : "Fechado";
        let mask = listUnits.locations[i].mask === "required" ? "../src/assets/images/required-mask.png" : "../src/assets/images/recommended-mask.png";
        let towel = listUnits.locations[i].towel === "required" ? "../src/assets/images/required-towel.png" : "../src/assets/images/recommended-towel.png";
        let fountain = listUnits.locations[i].fountain === "not_allowed" ? "../src/assets/images/forbidden-fountain.png" : "../src/assets/images/partial-fountain.png"
        let lockerroom = listUnits.locations[i].locker_room === "allowed" ? "../src/assets/images/required-lockerroom.png"
            : listUnits.locations[i].locker_room === "partial" ? "../src/assets/images/partial-lockerroom.png" : "../src/assets/images/forbidden-lockerroom.png";
        let splitHour = listUnits.locations[i].schedules[0].hour.split(" ");
        let hourJson = listUnits.locations[i].schedules[0].hour;


        if (listUnits.locations[i].schedules.length === 4) {
            let splitHour2 = listUnits.locations[i].schedules[1].hour.split(" ");
            let hourJson2 = listUnits.locations[i].schedules[1].hour;

            if (hourFrom >= hourJson.slice(0, 2) && hourTo <= splitHour[2].slice(0, 2)
                || hourFrom >= hourJson2.slice(0, 2) && hourTo <= splitHour2[2].slice(0, 2)) {
                findUnits += 1;
                container.innerHTML += `
                        <article class="results-card">
                            <p class="card-situation">${situation}</p>
                            <h3>${listUnits.locations[i].title}</h3>
                            ${listUnits.locations[i].content}
                            <hr>
                            <div class="card-images">
                                <img src="${mask}">
                            
                                <img src="${towel}">
                                
                                <img src="${fountain}">
                               
                                <img src="${lockerroom}">
                            </div>
                            <div class="card-time">
                                <div class="group-time">
                                    <h5>${listUnits.locations[i].schedules[0].weekdays}</h5>
                                    <p>${listUnits.locations[i].schedules[0].hour}</p>
                                    <p>${listUnits.locations[i].schedules[1].hour}</p>
                                </div>
                                <div class="group-time">
                                    <h5>${listUnits.locations[i].schedules[2].weekdays}</h5>
                                    <p>${listUnits.locations[i].schedules[2].hour}</p>
                                </div>
                                <div class="group-time">
                                    <h5>${listUnits.locations[i].schedules[3].weekdays}</h5>
                                    <p>${listUnits.locations[i].schedules[3].hour}</p>
                                </div>
                            </div>
                        </article>`
            }
        } else {
            if (hourFrom >= hourJson.slice(0, 2) && hourTo <= splitHour[2].slice(0, 2)) {
                findUnits += 1;
                container.innerHTML += `
                        <article class="results-card">
                            <p class="card-situation">${situation}</p>
                            <h3>${listUnits.locations[i].title}</h3>
                            ${listUnits.locations[i].content}
                            <hr>
                            <div class="card-images">
                                <img src="${mask}">
                            
                                <img src="${towel}">
                                
                                <img src="${fountain}">
                            
                                <img src="${lockerroom}">
                            </div>
                            <div class="card-time">
                                <div class="group-time">
                                    <h5>${listUnits.locations[i].schedules[0].weekdays}</h5>
                                    <p>${listUnits.locations[i].schedules[0].hour}</p>
                                </div>
                                <div class="group-time">
                                    <h5>${listUnits.locations[i].schedules[1].weekdays}</h5>
                                    <p>${listUnits.locations[i].schedules[1].hour}</p>
                                </div>
                                <div class="group-time">
                                    <h5>${listUnits.locations[i].schedules[2].weekdays}</h5>
                                    <p>${listUnits.locations[i].schedules[2].hour}</p>
                                </div>
                            </div>
                        </article>`
            }
        }
        results.innerHTML = findUnits;
    }
}

export { findUnitsCloseOrOpen, findUnitsByPeriod };