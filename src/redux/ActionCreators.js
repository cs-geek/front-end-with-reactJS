import * as ActionTypes from './ActionTypes';

export const addComment = (dishId, rating, author, commment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: {
        dishId: dishId,
        rating: rating,
        author: author,
        commment: commment
    }
});