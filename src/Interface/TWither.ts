import { TItem } from "./TItem"

export type TWither = {
    backpack: TItem[]
    money: number
    character: {
        whitherHP: number
        whitherMaxHp: number
        strenght: number
        weapon: number
        defense: number
    }
    equipment: {
        sword: TItem | null
        armor: TItem | null
        poison: TItem | null
        jewelry: TItem | null
    }
}