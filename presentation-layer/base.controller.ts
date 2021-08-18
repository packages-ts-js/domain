import {
  HttpException,
  NotImplementedException,
  UnauthorizedException,
} from '@nestjs/common';
import { NotFoundException } from '@nestjs/common';
import { ConflictException } from '@nestjs/common';
import { InternalServerErrorException } from '@nestjs/common';
import { ForbiddenException } from '@nestjs/common';
import { BadRequestException } from '@nestjs/common';
import { Logger } from '@nestjs/common';

export abstract class BaseController<IRequest, IResponse> {
  protected readonly _logger: Logger;
  constructor(context = 'BaseController') {
    this._logger = new Logger(context);
  }

  protected abstract executeUseCase(req: IRequest): Promise<IResponse>;

  public async execute(req: IRequest): Promise<IResponse> {
    this._logger.log('Executing...');
    return await this.executeUseCase(req);
  }

  public conflict(message?: string): HttpException {
    if (!(process.env.NODE_ENV === "test")) this._logger.error(`conflict, ${message}`);
    return new ConflictException(message ? message : 'Conflict');
  }

  public clientError(message?: string): HttpException {
    if (!(process.env.NODE_ENV === "test")) this._logger.error(`client_error, ${message}`);
    return new BadRequestException(message ? message : 'Bad Request');
  }

  public unauthorized(message?: string): HttpException {
    if (!(process.env.NODE_ENV === "test")) this._logger.error(`unauthorized, ${message}`);
    return new UnauthorizedException(message ? message : 'Unauthorized');
  }

  public forbidden(message?: string): HttpException {
    if (!(process.env.NODE_ENV === "test")) this._logger.error(`forbidden, ${message}`);
    return new ForbiddenException(message ? message : 'Forbidden');
  }

  public notFound(message?: string): HttpException {
    if (!(process.env.NODE_ENV === "test")) this._logger.error(`not_found, ${message}`);
    return new NotFoundException(message ? message : 'NotFound');
  }

  public notImplemented(message?: string): HttpException {
    if (!(process.env.NODE_ENV === "test")) this._logger.error(`not_implemented, ${message}`);
    return new NotImplementedException(message ? message : 'Not Implemented');
  }

  public fail(error: Error | string): HttpException {
    if (!(process.env.NODE_ENV === "test")) this._logger.error(`Internal error, ${error.toString()}`);
    return new InternalServerErrorException(error);
  }
}
