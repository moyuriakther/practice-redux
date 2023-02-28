import { COLOR_CHANGED, STATUS_CHANGED } from "./actionTypes";
import initialState from "./initialState";
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case COLOR_CHANGED:
      const { changedType, color } = action.payload;
      switch (changedType) {
        case "added":
          return {
            ...state,
            colors: [...state.colors, color],
          };
        case "removed":
          return {
            ...state,
            colors: state.colors.filter(
              (existingColor) => existingColor !== color
            ),
          };
        default:
          return state;
      }

    case STATUS_CHANGED:
      return {
        ...state,
        status: action.payload,
      };
    default:
      return state;
  }
};
export default reducer;
