import {
    elements
} from './DOMelements'
import cloudy from "../../img/mobile/cloudy.png"
import cloudyNight from "../../img/mobile/cloudy-night.png"
import night from "../../img/mobile/night.png"
import rainy from "../../img/mobile/rainy.png"
import snowy from "../../img/mobile/snow.png"
import stormy from "../../img/mobile/storm.png"
import sunny from "../../img/mobile/sunny.png"
import misty from "../../img/mobile/mist.png"

import {
    animateFadeUp,
    animateFadeDown
} from './animate'

const printData = data => {
    const weatherData = data.data[0];
    console.log(weatherData);

    //Icon mobile
    elements.weatherImage.src = setWeatherIcon(weatherData.weather.description, weatherData.pod);

    //Hero
    elements.weatherDescription.textContent = weatherData.weather.description;
    elements.weatherCity.textContent = weatherData.city_name;
    elements.weatherCountry.textContent = weatherData.country_code;
    elements.weatherTemperature.textContent = weatherData.temp.toFixed();

    //Subhero mobile
    elements.windDirectionMobile.textContent = weatherData.wind_cdir;
    elements.windValueMobile.textContent = (weatherData.wind_spd * 3.6).toFixed();
    elements.humidityMobile.textContent = weatherData.rh.toFixed();
    elements.pressureMobile.textContent = weatherData.pres.toFixed();
    elements.sunriseMobile.textContent = weatherData.sunrise;
    elements.sunsetMobile.textContent = weatherData.sunset;

    //Subhero desktop
    elements.temperatureDesktop.textContent = weatherData.app_temp.toFixed();
    elements.pressureDesktop.textContent = weatherData.pres.toFixed();
    elements.windDirectionDesktop.textContent = weatherData.wind_cdir;
    elements.windValueDesktop.textContent = (weatherData.wind_spd * 3.6).toFixed();
    elements.humidityDesktop.textContent = weatherData.rh.toFixed();
    elements.visibilityDesktop.textContent = weatherData.vis;
    elements.precipitationDesktop.textContent = showPrecipitation(weatherData.precip);

    startAnimations();

}

const showPrecipitation = (data) => {
    if (data > 0) {
        return `${data} mm/hr`
    } else {
        return `None`
    }
}

const setWeatherIcon = (description, partOfDay) => {
    const descriptionFormatted = description.toLowerCase();

    if (checkCloudsConditions(descriptionFormatted, partOfDay)) {
        if (partOfDay === 'd') {
            return cloudy;
        } else if (partOfDay === 'n') {
            return cloudyNight;
        }
        //Night mode
    } else if (checkSunnyConditions(descriptionFormatted, partOfDay)) {
        if (partOfDay === 'd') {
            return sunny;
        } else if (partOfDay === 'n') {
            return night;
        }

        //Night mode
    } else if (checkFoggyConditions(descriptionFormatted)) {
        return misty;
    } else if (checkSnowyConditions(descriptionFormatted)) {
        return snowy;
    } else if (checkRainyConditions(descriptionFormatted)) {
        return rainy;
    } else if (checkStormyConditions(descriptionFormatted)) {
        return stormy;
    } else {
        return sunny
    }

}

const checkCloudsConditions = descriptionFormatted => {
    const cloudsConditions = ['few clouds', 'scattered clouds', 'broken clouds',
        'overcast clouds', 'unknown precipitation'
    ];
    return cloudsConditions.some(el => descriptionFormatted.includes(el))
}

const checkSunnyConditions = descriptionFormatted => {
    const sunnyConditions = ['clear sky'];
    return sunnyConditions.some(el => descriptionFormatted.includes(el))
}

const checkFoggyConditions = descriptionFormatted => {
    const foggyConditions = ['freezing fog', 'fog', 'sand/dust', 'haze', 'smoke', 'mist']
    return foggyConditions.some(el => descriptionFormatted.includes(el));
}

const checkSnowyConditions = descriptionFormatted => {
    const snowyConditions = ['flurries', 'heavy snow shower', 'snow shower', 'heavy sleet', 'sleet', 'mix snow/rain', 'heavy snow', 'snow', 'light snow']
    return snowyConditions.some(el => descriptionFormatted.includes(el));
}

const checkRainyConditions = descriptionFormatted => {
    const rainyConditions = ['shower rain', 'rain', 'drizzle']
    return rainyConditions.some(el => descriptionFormatted.includes(el));
}

const checkStormyConditions = descriptionFormatted => {
    const stormyConditions = ['thunderstorm']
    return stormyConditions.some(el => descriptionFormatted.includes(el));
}

const startAnimations = () => {
    animateFadeDown(elements.weatherImage);
    animateFadeDown(elements.totalHero);
    animateFadeUp(elements.desktopItems);
    animateFadeUp(elements.mobileItems);
}


export default printData;