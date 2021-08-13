import { IEntity, BaseProps } from './interfaces/entity.interface'
import { IIdentifier } from './interfaces/identifier.interface';

export abstract class DomainEntity<T extends BaseProps> implements IEntity {
  public readonly _id: IIdentifier;
  public readonly _createdAt: Date;
  public  _updatedAt: Date;
  protected readonly props: T;

  protected constructor(props: T, id: IIdentifier) {
    this._id = id;
    this._createdAt = new Date();
    this._updatedAt = new Date();
    this.props = props;
  }

  protected update(){
    this._updatedAt = new Date();
  }

  public equals(entity: DomainEntity<T>): boolean {
    if (entity === null || entity === undefined) return false;
    if (this === entity) return true;
    return this._id === entity._id;
  }
}
