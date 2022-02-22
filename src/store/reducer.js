export default function reducer(state = [], action) {
  switch (action.type) {
    case "addUser":
      return [
        ...state,
        {
          name: action.payload.name,
          surname: action.payload.surname,
          rate: []
        }
      ];
    case "rateUser":
      if (action.payload.rate !== undefined) {
        state[action.payload.id].rate.push(action.payload.rate);
      }
      return [...state];

    default:
      return [...state];
  }
}
