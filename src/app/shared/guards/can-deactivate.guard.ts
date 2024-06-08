import { CanDeactivateFn } from '@angular/router';

export const canDeactivateGuard: CanDeactivateFn<unknown> = (
  component: any,
  currentRoute,
  currentState,
  nextState,
) => {
  if (component.canDeactivate) {
    return component.canDeactivate();
  }
  return true;
};
