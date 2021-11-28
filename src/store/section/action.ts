import {
  FETCH_SECTIONS_REQUESTED,
  CREATE_SECTION_REQUESTED,
  DELETE_SECTION_REQUESTED,
  SET_SECTION,
} from "../../types/section/types"

export const fetchSectionsRequested = (userId: string) => {
  return {
    type: FETCH_SECTIONS_REQUESTED,
    payload: {
      userId,
    }
  }
}

export const setSection = (userId: string) => {
  return {
    type: SET_SECTION,
    payload: {
      userId,
    }
  }
}
