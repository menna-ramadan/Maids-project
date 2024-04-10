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

export function getFullImageUrl(image: string): string {
  console.log(image);
  const isFullUrl = /^(?:http|https):\/\//.test(image);
  return isFullUrl ? image : environment.baseUrl + image;
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

export enum Gender {
  Male = 0,
  Female = 1,
}

Object.keys(UserStatusEnum).forEach((value: string) =>
  isNaN(+value)
    ? UsersStatus.push({
        name: value,
        value: UserStatusEnum[value as any],
      })
    : null
);
