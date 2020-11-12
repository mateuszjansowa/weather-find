import '../styles/css/global.css'
import '../styles/css/mobile.css'
import '../styles/css/desktop.css'
import API from './modules/API'
import {
    elements
} from './modules/DOMelements'
import printData from './modules/printData'
//Import document listeners

const api = new API();
document.addEventListener('DOMContentLoaded', init);

function init() {
    elements.searchForm.addEventListener('submit', downloadData);
}

const downloadData = e => {
    e.preventDefault();
    const city = validateInput(elements.cityInput);
    elements.cityInput.value = '';
    api.loadData(city)
        .then(data => printData(data))
        .catch(err => alert('Cityname not found in the API. Error code ', err));
}

const validateInput = input => {
    if (input.value.length < 2 || input.value.match(/\d+/)) {
        alert('Please provide correct city name');
        return;
    } else {
        return input.value;
    }
}