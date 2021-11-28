import {
  SectionState,
  SectionActionTypes,
  SET_SECTION,
  FETCH_SECTIONS_REQUESTED
} from '../../types/section/types'

export const initialState: SectionState = {
  id: 0,
  created_at: "",
  updated_at: "",
  title: "",
  user_id: "",
}

export const SectionReducer = (
  state = initialState,
  action: SectionActionTypes
): SectionState => {
  switch (action.type) {
    case SET_SECTION:
      return Object.assign({}, state, action.payload)
    case FETCH_SECTIONS_REQUESTED:
    //
    default:
      return state
  }
}
