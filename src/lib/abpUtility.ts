import AppConsts from './appconst';

declare var abp: any;

export function L(key: string, sourceName?: string): string {
  let localizationSourceName = AppConsts.localization.defaultLocalizationSourceName;
  return abp.localization.localize(key, sourceName ? sourceName : localizationSourceName);
}

export function isGranted(permissionName: string): boolean {
  return abp.auth.isGranted(permissionName);
}

export function addLocalStorage(key: string, value: string) {
  let storage = window.localStorage;
  let storageValue:string = '';
  if (value) {
    storageValue = encodeURIComponent(value);
  }
  storage.setItem(key, storageValue);
}

export function getLocalStorage(key: string): string {
  let storage = window.localStorage;
  let storageValue = storage.getItem(key);
  if (storageValue) {
    return decodeURIComponent(storageValue);
  }
  return '';
}

export function encodeRawData(value: string) {
  if (value) {
    return encodeURIComponent(value);
  }
  return '';
}
export function decodeRawData(rawData: string) {
  return decodeURIComponent(rawData);
}


