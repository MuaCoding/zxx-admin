import { SETUSERDATA, SETMENU } from './actionType'

const defaultState = {
   userdata: {},
   menuActive:['1','11'],
}

export default (state = defaultState, action) => {
   if (action.type === SETUSERDATA) {
      const newState = JSON.parse(JSON.stringify(state))
      newState.userdata = action.value
      return newState
   }
   if (action.type === SETMENU) {
      const newState = JSON.parse(JSON.stringify(state))
      newState.menuActive = action.menuActive
      return newState
   }
   return state;
}
