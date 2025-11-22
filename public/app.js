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
    snowyCountriesList.forEach(country => {
        country.getInfo(snowyList);
    });
    const rainyList = document.getElementById("rainyCountries");
    rainyCountriesList.forEach(country => {
        country.getInfo(rainyList);
    });
    const islandList = document.getElementById("islandCountries");
    islandCountriesList.forEach(country => {
        country.getInfo(islandList);
    });
});
