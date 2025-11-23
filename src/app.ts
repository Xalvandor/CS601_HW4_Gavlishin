/**
 * MET CS601 - Assignment 4
 * Country Management System
 */

// @ts-ignore
import {ICountry} from "./interface.js";

// @ts-ignore
import {RainyCountry, SnowyCountry, IslandCountry, isSnowyCountry, isIslandCountry, isRainyCountry} from "./countries.js";

// list of all coutnries
const countries: ICountry[] = [
    new RainyCountry("United States", 28),
    new SnowyCountry("Norway", 20),
    new RainyCountry("Brazil", 40),
    new IslandCountry("Japan", 145937),
    new SnowyCountry("Sweden", 30),
    new IslandCountry("Australia", 2968464)
];

// empty lists of different country types
const snowyCountriesList: ICountry[] = [];
const rainyCountriesList: ICountry[] = [];
const islandCountriesList: ICountry[] = [];

// filters list of all countries and adds them to the appropriate list
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

// event listener for when DOM content is loaded
document.addEventListener("DOMContentLoaded", () => {
    const countryList:HTMLElement = document.getElementById("allCountries") as HTMLElement;
    // adds all coutnries to the DOM
    countries.forEach(country=> {
        country.getInfo(countryList);
    });
    // gets snowy list content from the DOM
    const snowyList:HTMLElement = document.getElementById("snowyCountries") as HTMLElement;
    // tracks sum of snow levels
    let snowTotal:number = 0;
    // adds snowy countries to the dom and updates snow level
    snowyCountriesList.forEach(country=> {
        country.getInfo(snowyList);
        if (isSnowyCountry(country)) {
            snowTotal += country.snowLevel;
        }
    });
    // adds total snow level to the DOM
    snowyList.innerHTML += `<li>Total snow level: ${snowTotal} inches.</li>`
    // gets rainy list content from the DOM
    const rainyList:HTMLElement = document.getElementById("rainyCountries") as HTMLElement;
    // tracks sum of rain level
    let rainTotal:number = 0;
    // adds rainy counrties to the DOM and updates rain level
    rainyCountriesList.forEach(country=> {
        country.getInfo(rainyList);
        if (isRainyCountry(country)) {
            rainTotal = country.rainLevel;
        }
    });
    // adds rain level to the DOM
    rainyList.innerHTML += `<li>Total rain level: ${rainTotal} inches.</li>`
    // same logic as above but for island countries
    const islandList:HTMLElement = document.getElementById("islandCountries") as HTMLElement;

    let totalLandSize:number = 0;

    islandCountriesList.forEach(country=> {
        country.getInfo(islandList);
        if (isIslandCountry(country)) {
            totalLandSize += country.landSize;
        }
    });

    islandList.innerHTML += `<li>Total land size: ${totalLandSize}.</li>`
})



