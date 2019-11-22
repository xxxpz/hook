import { actionType } from "./action";

// state {count: 1, name: lijian}

export const handleAdd = (state, action) => {
  const stateClone = Object.assign({}, state);
  switch (action.type) {
    case actionType.ADD_TYPE:
      stateClone.count = state.count + 10;
      console.log(stateClone);
      return stateClone;
    case actionType.JIAN_TYPE:
      stateClone.count = state.count - 10;
      return stateClone;
  }
};
