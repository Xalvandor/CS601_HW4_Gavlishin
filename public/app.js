/**
 * MET CS601 - Assignment 4
 * Country Management System
 */
// @ts-ignore
import { RainyCountry, SnowyCountry, IslandCountry, isSnowyCountry, isIslandCountry, isRainyCountry } from "./countries.js";
const countries = [
    new RainyCountry("United States", 28),
    new SnowyCountry("Norway", 20),
    new RainyCountry("Brazil", 40),
    new IslandCountry("Japan", 145937),
    new SnowyCountry("Sweden", 30),
    new IslandCountry("Australia", 2968464)
];
const snowyCountriesList = [];
const rainyCountriesList = [];
const islandCountriesList = [];
countries.forEach(country => {
    if (isSnowyCountry(country)) {
        snowyCountriesList.push(country);
    }
    if (isIslandCountry(country)) {
        islandCountriesList.push(country);
    }
    if (isRainyCountry(country)) {
        rainyCountriesList.push(country);
    }
});
console.log(countries);
console.log(snowyCountriesList);
console.log(rainyCountriesList);
console.log(islandCountriesList);
document.addEventListener("DOMContentLoaded", () => {
    const countryList = document.getElementById("allCountries");
    countries.forEach(country => {
        country.getInfo(countryList);
    });
    const snowyList = document.getElementById("snowyCountries");
    let snowTotal = 0;
    snowyCountriesList.forEach(country => {
        country.getInfo(snowyList);
        if (isSnowyCountry(country)) {
            snowTotal += country.snowLevel;
        }
    });
    snowyList.innerHTML += `<li>Total snow level: ${snowTotal} inches.</li>`;
    const rainyList = document.getElementById("rainyCountries");
    let rainTotal = 0;
    rainyCountriesList.forEach(country => {
        country.getInfo(rainyList);
        if (isRainyCountry(country)) {
            rainTotal = country.rainLevel;
        }
    });
    rainyList.innerHTML += `<li>Total rain level: ${rainTotal} inches.</li>`;
    const islandList = document.getElementById("islandCountries");
    let totalLandSize = 0;
    islandCountriesList.forEach(country => {
        country.getInfo(islandList);
        if (isIslandCountry(country)) {
            totalLandSize += country.landSize;
        }
    });
    islandList.innerHTML += `<li>Total land size: ${totalLandSize}.</li>`;
});
