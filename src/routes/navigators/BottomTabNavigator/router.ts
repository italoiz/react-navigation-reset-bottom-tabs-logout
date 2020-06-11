/**
 * Use custom router to extends behavior of navigation state.
 * @see https://reactnavigation.org/docs/custom-routers#customizing-routers
 */
import {TabRouter} from '@react-navigation/native';

export const BottomTabRouter = (options: any) => {
  const router = TabRouter(options);

  return {
    ...router,
    getStateForAction(state: any, action: any, stateOptions: any) {
      switch (action.type) {
        case 'RESET_BOTTOM_TAB':
          return {
            ...state,
            index: 0,
          };

        default:
          return router.getStateForAction(state, action, stateOptions);
      }
    },

    actionCreators: {
      ...router.actionCreators,
      resetBottomTab() {
        return {type: 'RESET_BOTTOM_TAB'};
      },
    },
  };
};
