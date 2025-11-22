/**
 * MET CS601 - Assignment 4
 * Country Management System
 */


// @ts-ignore
import {ICountry} from "./interface.js";

// @ts-ignore
import {RainyCountry, SnowyCountry, IslandCountry, isSnowyCountry, isIslandCountry, isRainyCountry} from "./countries.js";

const countries: ICountry[] = [
    new RainyCountry("United States", 28),
    new SnowyCountry("Norway", 20),
    new RainyCountry("Brazil", 40),
    new IslandCountry("Japan", 145937),
    new SnowyCountry("Sweden", 30),
    new IslandCountry("Australia", 2968464)
];

const snowyCountriesList: ICountry[] = [];
const rainyCountriesList: ICountry[] = [];
const islandCountriesList: ICountry[] = [];

countries.forEach(country => {
    if (isSnowyCountry(country)) {
        snowyCountriesList.push(country);
    }
    if (isIslandCountry(country)) {
        islandCountriesList.push(country);
    } if (isRainyCountry(country)) {
        rainyCountriesList.push(country);
    }
} );

console.log(countries);

console.log(snowyCountriesList);

console.log(rainyCountriesList);

console.log(islandCountriesList);

document.addEventListener("DOMContentLoaded", () => {
    const countryList:HTMLElement = document.getElementById("allCountries") as HTMLElement;

    countries.forEach(country=> {
        country.getInfo(countryList);
    });

    const snowyList:HTMLElement = document.getElementById("snowyCountries") as HTMLElement;

    snowyCountriesList.forEach(country=> {
        country.getInfo(snowyList);
    });

    const rainyList:HTMLElement = document.getElementById("rainyCountries") as HTMLElement;

    rainyCountriesList.forEach(country=> {
        country.getInfo(rainyList);
    });

    const islandList:HTMLElement = document.getElementById("islandCountries") as HTMLElement;

    islandCountriesList.forEach(country=> {
        country.getInfo(islandList);
    });
})



