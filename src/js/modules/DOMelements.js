export const elements = {
    searchForm: document.querySelector('.search'),
    cityInput: document.querySelector('.search__input'),

    //Hero
    totalHero: document.querySelector('.main__hero'),
    weatherImage: document.querySelector('img.header__weather-type'),
    weatherDescription: document.querySelector('.hero__description'),
    weatherCity: document.querySelector('.hero__city-name'),
    weatherCountry: document.querySelector('.hero__country-name'),
    weatherTemperature: document.querySelector('.hero__temperature--description'),

    //Mobile
    mobileItems: document.querySelectorAll('.subhero__item'),
    windDirectionMobile: document.querySelector('.subhero__result--wind-direction'),
    windValueMobile: document.querySelector('.subhero__result--wind-value'),
    humidityMobile: document.querySelector('.subhero__result--humidity'),
    pressureMobile: document.querySelector('.subhero__result--pressure'),
    sunriseMobile: document.querySelector('.subhero__result--sunrise'),
    sunsetMobile: document.querySelector('.subhero__result--sunset'),

    //Desktop
    desktopItems: document.querySelectorAll('.desktop__item'),
    temperatureDesktop: document.querySelector('.item__value--temperature'),
    pressureDesktop: document.querySelector('.item__value--pressure'),
    windDirectionDesktop: document.querySelector('.item__value--wind-direction'),
    windValueDesktop: document.querySelector('.item__value--wind-value'),
    humidityDesktop: document.querySelector('.item__value--humidity'),
    visibilityDesktop: document.querySelector('.item__value--visibility'),
    precipitationDesktop: document.querySelector('.item__value--precipitation'),
}