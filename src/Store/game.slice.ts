import { createSlice } from "@reduxjs/toolkit";
import { TWither } from "../Interface/TWither";
import { Items } from "../Helpers/AllItems";

type TInitial = {
    wither: TWither
}

const initialState: TInitial = {
    wither: {
        backpack: Items,
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