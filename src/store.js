import React, { createContext, useReducer} from 'react';
import startingBoard from './starting-board.json';

const initialState = {board: startingBoard, active: 1, team: 'one'};

const store = createContext(initialState);
const { Provider } = store;


//dispatch
//set piece active
//move piece to place
    //this calls custom hook for place that takes in position and returns new position
    //switch team

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