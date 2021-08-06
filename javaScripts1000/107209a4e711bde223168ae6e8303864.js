"use strict";var actionTypes={CHANGE_STATE:"CHANGE_STATE",CHANGE_PERSONA_FORM:"CHANGE_PERSONA_FORM",CHANGE_PERSONA_BUILDER:"CHANGE_PERSONA_BUILDER",CHANGE_SELECTED_PERSONA_BUILDER:"CHANGE_SELECTED_PERSONA_BUILDER",CHANGE_CFS_SIZE:"CHANGE_CFS_SIZE",CHANGE_CFS_COLOR:"CHANGE_CFS_COLOR",CHANGE_CFS_FLAVOR:"CHANGE_CFS_FLAVOR"},initialState={pdp:{persona:{builder:{},selected:{},form:{}},cfs:{color:{},flavor:{},size:{}}}},Reducer=function(){};Reducer.prototype.stateReducer=function(e,t){try{var r=e&&e.payload?e.payload:initialState;switch(e.type){case actionTypes.CHANGE_STATE:return Object.assign(t,r),t;case actionTypes.CHANGE_PERSONA_BUILDER:return Object.assign(t.pdp.persona.builder,r),t;case actionTypes.CHANGE_CFS_SIZE:return Object.assign(t.pdp.cfs.size,r),t;case actionTypes.CHANGE_CFS_COLOR:return Object.assign(t.pdp.cfs.color,r),t;case actionTypes.CHANGE_CFS_FLAVOR:return Object.assign(t.pdp.cfs.flavor,r),t;case actionTypes.CHANGE_SELECTED_PERSONA_BUILDER:return Object.assign(t.pdp.persona.selected,r),t;case actionTypes.CHANGE_PERSONA_FORM:return Object.assign(t.pdp.persona.form,r),t;default:return t}}catch(e){return console.error("nsState.stateReducer",e),t}},Reducer.prototype.getActionTypes=function(){return actionTypes},Reducer.prototype.getInitialState=function(){return initialState},window.freedom.Reducer=new Reducer;