import { IIdentifier } from './identifier.interface';

export type BaseProps = {
  [index: string]: unknown;
};

export interface IEntity {
  readonly _id: IIdentifier;
  equals(entity: IEntity): boolean;
}
