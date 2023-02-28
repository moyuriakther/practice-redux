import {
  ADDED,
  DELETED,
  TOGGLED,
  COLOR_SELECTED,
  ALL_COMPLETED,
  CLEAR_COMPLETED,
} from "./actonTypes";

export const added = (todoText) => {
  return {
    type: ADDED,
    payload: todoText,
  };
};
export const deleted = (todoId) => {
  return {
    type: DELETED,
    payload: todoId,
  };
};
export const toggled = (todoId) => {
  return {
    type: TOGGLED,
    payload: todoId,
  };
};
export const colorSelected = (todoId, color) => {
  return {
    type: COLOR_SELECTED,
    payload: { todoId, color },
  };
};
export const allCompleted = () => {
  return {
    type: ALL_COMPLETED,
  };
};
export const clearCompleted = () => {
  return {
    type: CLEAR_COMPLETED,
  };
};
