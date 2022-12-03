import { ILearning } from "libs/utils/src";
import { createAction, props } from "@ngrx/store";

export const loadAllMyLearnings = createAction(
  "[Learnings Resolver] Load All Learnings",
)

export const allMyLearningsLoaded = createAction(
  "[Load Learnings Effect] All Learnings Loaded",
  props<{myLearnings:ILearning[]}>()
)

