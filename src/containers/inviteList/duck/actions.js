import types from './types';

export default {
  requestInviteList: () => ({ type: types.REQUEST_INVITE_LIST }),
  receiveInviteList: payload => ({ type: types.RECEIVE_INVITE_LIST, payload })
};
