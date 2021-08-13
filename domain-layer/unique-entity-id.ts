import { v4 } from 'uuid';

import { BaseIdentifier } from "./identifier.abstract"

export class UniqueEntityID extends BaseIdentifier<string | number> {
  constructor(id?: string | number) {
    super(id ? id : v4());
  }
}
