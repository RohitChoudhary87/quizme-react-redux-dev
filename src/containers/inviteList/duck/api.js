import { apiUtil } from '../../../modules/utils';
import { inviteListMapper } from './mappers';

const endpoints = {
  INVITE_LIST: 'https://10.150.18.191:8989/api/inviteList'
};

export const fecthInviteList = () => {
  const options = { mapper: inviteListMapper };
  const payload = { purposeType: 'EXTERNAL' };
  return apiUtil.post(endpoints.INVITE_LIST, payload, options);
};
