import * as axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:3004/'
});

export const rentAPI = {
    async getRents() {
        return await instance.get(`rents`)
            .then(response => response.data)
    },
    postRent(rent) {
        return instance.post(`rents`, rent)
    },
    async deleteRent(rentId) {
        return await instance.delete(`rents/${rentId}`)
    },
    async updateRent(rent) {
        return await instance.put(`rents/${rent.id}`, rent)
    },
    async sortRent(formData) {
        return await instance.get(`rents?_sort=${formData.sort}&_order=${formData.typeSorting}`)
    },
    async filterRent(text) {
        return await instance.get(`rents?q=${text}`)
    }
}