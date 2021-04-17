export const UPDATE_CITY = "UPDATE_CITY";

export const updateCity = city => ({
    type: UPDATE_CITY,
    payload: {
        city
    }
});