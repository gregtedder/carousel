const initialState = {
  delay: 5000,
  autoScroll: true,
}

export default function settingsReducer(state = initialState, action) {
  switch(action.type) {
    case 'SETTINGS_UPDATE':
      const update = {
        ...state,
        ...action.payload
      } 
      return update;
    default:
      return state;
  }
}