import { useCallback, useContext, useState } from "react";
import { GlobalContext } from "../context/globalContext";
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
    const setStorage = (city) => {
        let storage = getStorage();

        if (storage?.length === 0) {
            localStorage.setItem(CITIES_KEY, JSON.stringify([city]));
        } else {
            if (!storage.includes(city)) {
                storage.push(city);
                localStorage.setItem(CITIES_KEY, JSON.stringify(storage));
            }
        }

        console.log(localStorage.getItem(CITIES_KEY));
    };
    return {
        getStorage,
        setStorage,
    };
};

export default useCityStorage;