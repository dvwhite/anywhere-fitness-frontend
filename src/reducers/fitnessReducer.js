// import actions here

const initialState = {
  categories: [],
  classes: [],
  user: {
    id: 0,
    firstName: null,
    lastName: null,
    email: null,
    username: '',
    created_at: '',
    updated_at: '',
    roleId: 1,
    classes: []
  }
}

// The main reducer for the fitness app

export const fitnessReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
}
