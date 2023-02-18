import React from 'react'

export const LoginContext = React.createContext()

const loginReducer = (state, action) => {
  switch(action.type) {
    case 'login': {
      return {...state, username: action.payload.username}
    }
    case 'setUser': {
      return {...state, user: action.payload.user, admin: action.payload.admin}
    }
    case 'logout': {
      return {...state, username: null}
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

function LoginProvider({children}) {
  const [state, dispatch] = React.useReducer(loginReducer, {username: null, user: [], admin: false})
  const value = {state, dispatch}
  return <LoginContext.Provider value={value}>{children}</LoginContext.Provider>
}

export {LoginProvider}