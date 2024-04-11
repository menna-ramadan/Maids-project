import { environment } from '../../../environments/environment';

export interface User {
  avatar: string;
  email: string;
  first_name: string;
  id: number;
  last_name: string;
}

export interface UserProfile extends User {
  text: string;
  url: string;
}

export const UsersStatus: {
  name: string;
  value: string;
  // count: number
  // showCount: boolean
}[] = [];

export enum UserStatusEnum {
  All = 0,
  Blocked = 1,
}

Object.keys(UserStatusEnum).forEach((value: string) =>
  isNaN(+value)
    ? UsersStatus.push({
        name: value,
        value: UserStatusEnum[value as any],
      })
    : null
);
