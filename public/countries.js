// classes for different types of coutnries
export class SnowyCountry {
    constructor(name, snowLevel) {
        this.name = name;
        this.snowLevel = snowLevel;
    }
    getInfo(item) {
        if (item instanceof HTMLElement) {
            item.innerHTML += `<li>${this.name} has a rain level of ${this.snowLevel}.</li>`;
        }
        return item;
    }
}
export class RainyCountry {
    constructor(name, rainLevel) {
        this.name = name;
        this.rainLevel = rainLevel;
    }
    getInfo(item) {
        if (item instanceof HTMLElement) {
            item.innerHTML += `<li>${this.name} has a rain level of ${this.rainLevel}.</li>`;
        }
        return item;
    }
}
export class IslandCountry {
    constructor(name, landSize) {
        this.name = name;
        this.landSize = landSize;
    }
    getInfo(item) {
        if (item instanceof HTMLElement) {
            item.innerHTML += `<li>${this.name} has a land size of ${this.landSize}.</li>`;
        }
        return item;
    }
}
// type assertions for classes
export function isSnowyCountry(country) {
    return (country instanceof SnowyCountry && 'snowLevel' in country);
}
export function isRainyCountry(country) {
    return (country instanceof RainyCountry && 'rainLevel' in country);
}
export function isIslandCountry(country) {
    return (country instanceof IslandCountry && 'landSize' in country);
}
