import { UPDATE_CITY } from './actions';

const initialState = {
    city: "toronto"
};

export const weather = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case UPDATE_CITY: {
            const { city } = payload;
            return { ...state, city: city }
        }
        default: {
            return state;
        }
    }
}