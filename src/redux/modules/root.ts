import { combineEpics } from 'redux-observable'
import { combineReducers } from 'redux'

import { RouterState } from 'connected-react-router'

import dataReducer, { dataEpics, ReduxState as DataSlice } from './data'
import searchReducer, { searchEpics, ReduxState as searchSlice } from './search'
import bootstrapReducer, { bootstrapEpics, ReduxState as BoostrapSlice } from './bootstrap'
import conferencePageReducer, { conferenceEpics, ReduxState as ConferencePageSlice } from './conferencePage'
import { routingEpics } from './routing'

export type ApplicationStateInner = {
  data: DataSlice,
  search: searchSlice,
  bootstrap: BoostrapSlice,
  conferencePage: ConferencePageSlice
}

export type ApplicationState = ApplicationStateInner & {
  router: RouterState
}

export const rootEpic = combineEpics(
  dataEpics, bootstrapEpics, searchEpics, conferenceEpics, routingEpics
)

export const rootReducer = combineReducers({
  data: dataReducer,
  search: searchReducer,
  bootstrap: bootstrapReducer,
  conferencePage: conferencePageReducer
})
