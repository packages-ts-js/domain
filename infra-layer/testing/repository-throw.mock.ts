import { IRepository } from "../interfaces/repository.interface";

export class ThrowRepositoryMock<T> implements IRepository<T> {
    
    
    find(): T[] | Promise<T[]> {
        throw new Error("Method not implemented.");
    }
    findOne(id: string): T | Promise<T> {
        throw new Error("Method not implemented.");
    }
    save(entity: T): T | Promise<T> {
        throw new Error("Method not implemented.");
    }
    delete(id: string): void | Promise<void> {
        throw new Error("Method not implemented.");
    }


}