export interface IBeer {
    id: number,
    name: string,
    tagline: string,
    first_brewed: string,
    description: string,
    image_url: string,
    abv: number,
    ebc: number,
    ibu: number,
    volume: {
        value: number,
        unit: string
    },
    food_pairing: string[]
}