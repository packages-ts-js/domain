import { IRepository } from "../interfaces/repository.interface";

interface Entity {
    id: string
}

export class ListRepositoryMock<T extends Entity> implements IRepository<T> {
    _list: { [id: string] : T; } = {};

    constructor() {}

    find(): T[] | Promise<T[]> {
        const result : T[] = []
        for(var key in this._list)
            result.push(this._list[key])
        return result
    }
    findOne(id: string): T | Promise<T> {
        return this._list[id]
    }
    save(entity: T): T | Promise<T> {
        this._list[entity.id] = entity
        return entity   
    }
    delete(id: string): void | Promise<void> {
        delete this._list[id]
    }

}