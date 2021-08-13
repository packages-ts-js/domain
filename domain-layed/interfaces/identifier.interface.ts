export interface IIdentifier {
    equals<T extends IIdentifier>(id?: T): boolean;
    toString(): string;
  }