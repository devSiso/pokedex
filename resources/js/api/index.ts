import axios from 'axios';

class APIService {
    private apiUrl: string;

    constructor() {
        this.apiUrl = "https://pokeapi.co/api/v2";
    }

    baseURL() {
        return this.apiUrl;
    }

    async get(resource: string) {
        try {
            const url = `${this.baseURL()}${resource}`;
            const response = await axios.get(url);

            return response.data;
        } catch (error) {
            console.error(error);
        }
    }

    async post(resource: string, body: unknown) {
        try {
            const url = `${this.baseURL()}${resource}`;
            const response = await axios.post(url, body);

            return response.data;
        } catch (error) {
            console.error(error);
        }
    }

    async patch(resource: string, body: unknown) {
        try {
            const url = `${this.baseURL()}${resource}`;
            const response = await axios.patch(url, body);

            return response.data;
        } catch (error) {
            console.error(error);
        }
    }

    async put(resource: string, body: unknown) {
        try {
            const url = `${this.baseURL()}${resource}`;
            const response = await axios.put(url, body);

            return response.data
        } catch (error) {
            console.error(error);
        }
    }

    async delete(resource: string) {
        try {
            const url = `${this.baseURL()}${resource}`;
            const response = await axios.delete(url);

            return response.data;
        } catch (error) {
            console.error(error);
        }
    }
};

export default APIService;
