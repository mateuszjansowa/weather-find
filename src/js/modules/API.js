class API {
    constructor() {
        this.key = `21e8e9f495af448cab8a8ba9da998436`;
        this.lang = `en`;
        this.unit = 'M'
    }

    loadData(cityName) {
        return fetch(`https://api.weatherbit.io/v2.0/current?key=${this.key}&city=${cityName}&lang=${this.lang}&units=${this.unit}`)
            .then(resp => {
                if (resp.ok) {
                    return resp.json();
                }
                return Promise.reject(resp);
            })
    }
}

export default API;