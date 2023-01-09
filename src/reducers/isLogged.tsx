const isLogged = (state = 0, action: any) => {
  switch(action.type){
    case "SIGN_IN": return !state;
    default: return state;
  }
}

export default isLogged;