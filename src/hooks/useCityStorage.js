import { useCallback } from "react";
import { CITIES_KEY } from "../constants";

const useCityStorage = () => {
    const getStorage = () => {
        const storage = localStorage.getItem(CITIES_KEY);
        if (storage === null || storage === "") {
            return [];
        } else {
            return JSON.parse(storage);
        }
    };

    const setStorage = useCallback((city) => {
        if (city === null) {
            localStorage.removeItem(CITIES_KEY); // Clear localStorage
        } else {
            let storage = getStorage();

            if (storage.length === 0) {
                localStorage.setItem(CITIES_KEY, JSON.stringify([city]));
            } else {
                if (!storage.includes(city)) {
                    storage.push(city);
                    localStorage.setItem(CITIES_KEY, JSON.stringify(storage));
                }
            }
        }
    }, []);

    return {
        getStorage,
        setStorage,
    };
};

export default useCityStorage;
