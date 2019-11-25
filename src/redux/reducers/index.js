import { combineReducers } from "redux";

import initialState from "./initialState";
import { prefixes } from "../actions/_constants"

import getAsyncActionReducers from "./asyncActionReducer";

const projectsReducers = getAsyncActionReducers({ 
    actionTypePrefix: prefixes.PROJECTS,
    objectsInitialState: initialState.projects,
    isFetchingInitialState: initialState.isFetchingProjects
});

const socialsReducers = getAsyncActionReducers({ 
    actionTypePrefix: prefixes.SOCIALS,
    objectsInitialState: initialState.socials,
    isFetchingInitialState: initialState.isFetchingSocials
});

export default combineReducers({
    projects: projectsReducers.objectsReducer,
    socials: socialsReducers.objectsReducer,
    
    isFetchingProjects: projectsReducers.isFetchingReducer,
    isFetchingSocials: socialsReducers.isFetchingReducer,
});