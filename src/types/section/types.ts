export const FETCH_SECTIONS_REQUESTED = 'FETCH_SECTIONS_REQUESTED'
export const CREATE_SECTION_REQUESTED = 'CREATE_SECTION_REQUESTED'
export const DELETE_SECTION_REQUESTED = 'DELETE_SECTION_REQUESTED'
export const SET_SECTION = 'SET_SECTION'

export interface SectionState {
  id: number
  created_at: string,
  updated_at: string,
  title: string,
  user_id: string,
}

interface FetchSectionsRequested {
  type: typeof FETCH_SECTIONS_REQUESTED
  payload: SectionState
}

interface SetSection {
  type: typeof SET_SECTION
  payload: SectionState
}

export type SectionActionTypes = FetchSectionsRequested | SetSection
