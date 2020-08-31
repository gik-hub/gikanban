import CreateCard from '../components/CreateCard';
import { connect } from 'react-redux';
import { createCard } from '../actions/card-actions';

// const defaultCardData = {
//   title: '',
//   description: '',
//   assignedTo: '',
// };

// const mapDispatchToProp = (dispatch) => {
//   return {
//     createCard(listId, cardData) {
//       let cardId = Date.now().toString();
//       let card = {
//         id: cardId,
//         ...defaultCardData,
//         ...cardData,
//       };

//       dispatch({
//         type: 'CARD_CREATE',
//         payload: { card, listId, cardId },
//       });
//     },
//   };
// };

const mapDispatchToProp = { createCard };

export default connect(null, mapDispatchToProp)(CreateCard);
