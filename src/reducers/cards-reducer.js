import { cards as defaultCards } from '../normalized-state';
import { CARD_CREATE, CARD_DELETE } from '../actions/card-actions';

import { addEntity, removeEntity } from './_utilities';

// const cardReducer = (cards = defaultCards, action) => {
//   switch (action.type) {
//     case 'CARD_CREATE':
//       let { card, cardId } = action.payload;
//       // return {
//       //   entities: { ...cards.entities, [cardId]: card },
//       //   ids: [...cards.ids, cardId],
//       // };

//       // with util helper
//       return addEntity(cards, card, cardId);

//     case CARD_DELETE:
//       let { cardId } = action.payload;
//       return removeEntity(cards, cardId);

//     default:
//       return cards;
//   }
// };

const cardsReducer = (cards = defaultCards, action) => {
  if (action.type === CARD_CREATE) {
    const { card, cardId } = action.payload;
    return addEntity(cards, card, cardId);
  }

  if (action.type === CARD_DELETE) {
    const { cardId } = action.payload;
    return removeEntity(cards, cardId);
  }

  return cards;
};

export default cardsReducer;
