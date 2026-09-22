export function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD': {
      const existingIndex = state.findIndex((item) => item.id === action.payload.id);

      if (existingIndex > -1) {
        return state.map((item, index) =>
          index === existingIndex
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...state, { ...action.payload, quantity: 1 }];
    }

    case 'REMOVE': {
      const idToRemove = typeof action.payload === 'object' ? action.payload.id : action.payload;
      return state.filter((item) => item.id !== idToRemove);
    }

    case 'CLEAR': {
      return [];
    }

    default:
      return state;
  }
}