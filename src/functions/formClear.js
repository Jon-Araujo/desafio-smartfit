function formClear(event) {
    event.preventDefault()
    let listRadios = document.querySelectorAll('input[name="period"]');
    let checkBox = document.querySelectorAll('#close-units');
    const listResults = document.querySelector('.list-results');
    const results = document.getElementById('results');

    for (let i = 0; i < listRadios.length; i++) {
        listRadios[i].checked = false;
    }

    for (let i = 0; i < checkBox.length; i++) {
        checkBox[i].checked = false;
    }

    listResults.innerHTML = '';
    results.innerHTML = 0;
}

export default formClear;