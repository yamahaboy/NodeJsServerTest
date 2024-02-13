import { Request, Response } from 'express';
import { motoProps } from '../models/IProps';
import { loadDataFromFile, saveDataToFile } from '../utils/fileUtils';

export const getObjects = (req: Request, res: Response) => {
  const objects = loadDataFromFile();
  res.status(200).send(objects);
};

export const getObjectsById = (req: Request, res: Response) => {
  const objects = loadDataFromFile();
  const id: number = parseInt(req.params.id, 10);
  const object = objects.find(obj => obj.id === id);
  if (object !== undefined) { 
    res.status(200).send(object);
  } else {
    res.sendStatus(404);
  }
};


export const createObject = (req: Request, res: Response) => {
  const objects = loadDataFromFile();
  const newObj: motoProps = req.body;
  newObj.id = Date.now();
  objects.push(newObj);
  saveDataToFile(objects);
  res.status(201).send(newObj);
};

export const updateObject = (req: Request, res: Response) => {
  let objects = loadDataFromFile();
  const id: number = parseInt(req.params.id, 10);
  const index = objects.findIndex(obj => obj.id === id);
  if (index > -1) {
    const updatedObj: motoProps = { ...objects[index], ...req.body };
    objects[index] = updatedObj;
    saveDataToFile(objects);
    res.status(200).send(updatedObj);
  } else {
    res.status(404).send({ message: 'Object not found' });
  }
};

export const deleteObject = (req: Request, res: Response) => {
  let objects = loadDataFromFile();
  const id: number = parseInt(req.params.id, 10);
  objects = objects.filter(obj => obj.id !== id);
  saveDataToFile(objects);
  res.status(204).send();
};
