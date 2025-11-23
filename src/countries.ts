// @ts-ignore
import {ICountry} from "./interface.js";
// classes for different types of coutnries
export class SnowyCountry implements ICountry {
    constructor(
        public name: string,
        public snowLevel: number,
    ){}

    getInfo(item:HTMLElement): HTMLElement {
        if (item instanceof HTMLElement) {
            item.innerHTML += `<li>${this.name} has a rain level of ${this.snowLevel}.</li>`;
        }
        return item;
    }
}

export class RainyCountry implements ICountry {
    constructor(
        public name: string,
        public rainLevel: number,
    ){}

    getInfo(item:HTMLElement): HTMLElement {
        if (item instanceof HTMLElement) {
            item.innerHTML += `<li>${this.name} has a rain level of ${this.rainLevel}.</li>`;
        }
        return item;
    }
}

export class IslandCountry implements ICountry {
    constructor(
        public name: string,
        public landSize: number,
    ){}

    getInfo(item:HTMLElement): HTMLElement {
        if (item instanceof HTMLElement) {
            item.innerHTML += `<li>${this.name} has a land size of ${this.landSize}.</li>`;
        }
        return item;
    }
}

// type assertions for classes
export function isSnowyCountry(country: ICountry): country is SnowyCountry {
    return (country instanceof SnowyCountry && 'snowLevel' in country );
}

export function isRainyCountry(country: ICountry): country is RainyCountry {
    return (country instanceof RainyCountry && 'rainLevel' in country );
}

export function isIslandCountry(country: ICountry): country is IslandCountry {
    return (country instanceof IslandCountry && 'landSize' in country );
}
