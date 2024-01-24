import { decodeRawData } from "./abpUtility";
export function decode (rawData: string) {  
  const cookieValue = decodeRawData(rawData ?? '');
  if (cookieValue) {
    const cookieData = JSON.parse(cookieValue);
    return cookieData;
  }
}