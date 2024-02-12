import * as fs from 'fs';
import * as path from 'path';
import { motoProps } from '../models/IProps';

export const saveDataToFile = (data: motoProps[]) => {
  fs.writeFileSync(path.join(__dirname, 'data.json'), JSON.stringify(data, null, 2));
};

export const loadDataFromFile = (): motoProps[] => {
  try {
    const data = fs.readFileSync(path.join(__dirname, 'data.json'), 'utf8');
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
};
