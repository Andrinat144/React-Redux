import { createSlice } from "@reduxjs/toolkit";

type TItem = {
    id: string
    equip: string
    moneyCost: number
    strenght?: number
    hp?: number
    weapon?: number
    defense?: number
}

type TWither = {
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

type TInitial = {
    wither: TWither
}

const initialState: TInitial = {
    wither: {
        backpack: [],
        money: 0,
        character: {
            whitherHP: 0,
            whitherMaxHp: 0,
            strenght: 0,
            weapon: 0,
            defense: 0,
        },
        equipment: {
            sword: null,
            armor: null,
            poison: null,
            jewelry: null
        }
    }
}


export const gameSlice = createSlice({
    name: "game",
    initialState,
    reducers: {
        // setAddNumber(state, action) {
        //     if(state.number.length < 4) {
        //         state.number.push(action.payload)
        //     }
        // },


    }
})

export const {  } = gameSlice.actions;