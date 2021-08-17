export interface IRepository<TEntity> {
    
  find(): Promise<TEntity[]> | TEntity[] 

  findOne(id: string) : Promise<TEntity> | TEntity

  save(entity: TEntity): Promise<TEntity> | TEntity

  delete( id: string ) : Promise<void> | void
}