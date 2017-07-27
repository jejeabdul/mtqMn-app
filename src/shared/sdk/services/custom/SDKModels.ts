/* tslint:disable */
import { Injectable } from '@angular/core';
import { User } from '../../models/User';
import { TbSurat } from '../../models/TbSurat';
import { TbHadits } from '../../models/TbHadits';

export interface Models { [name: string]: any }

@Injectable()
export class SDKModels {

  private models: Models = {
    User: User,
    TbSurat: TbSurat,
    TbHadits: TbHadits,
    
  };

  public get(modelName: string): any {
    return this.models[modelName];
  }

  public getAll(): Models {
    return this.models;
  }

  public getModelNames(): string[] {
    return Object.keys(this.models);
  }
}
