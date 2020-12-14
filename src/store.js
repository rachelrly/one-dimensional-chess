import React, { createContext, useReducer, useState } from 'react';
import startingBoard from './starting-board.json';

const initialState = {board: startingBoard};

const store = createContext(initialState);
const { Provider } = store;

//state needs board and selected
const StateProvider = ({ children }) => {
    const [state, dispatch] = useReducer((state, action) => {
        switch (action.type) {
            case 'action':
                const newState = newState;
                return newState;

            default:
                throw new Error();
        };
    }, initialState);

    return <Provider value={{ state, dispatch}}>{children}</Provider>
};

export { store, StateProvider }