export interface IUseCase<IRequest, IResponse> {
  execute(request: IRequest): Promise<IResponse> | IResponse;
}


export interface IUseCaseCommand<IRequest> {
  execute(request: IRequest): Promise<void> | void;
}
