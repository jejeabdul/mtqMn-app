/* tslint:disable */

declare var Object: any;
export interface TbSuratInterface {
  "suratname"?: string;
  "suratisi"?: string;
  "suratjumlah"?: number;
  "id"?: number;
  "suratid": string;
}

export class TbSurat implements TbSuratInterface {
  "suratname": string;
  "suratisi": string;
  "suratjumlah": number;
  "id": number;
  "suratid": string;
  constructor(data?: TbSuratInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `TbSurat`.
   */
  public static getModelName() {
    return "TbSurat";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of TbSurat for dynamic purposes.
  **/
  public static factory(data: TbSuratInterface): TbSurat{
    return new TbSurat(data);
  }
  /**
  * @method getModelDefinition
  * @author Julien Ledun
  * @license MIT
  * This method returns an object that represents some of the model
  * definitions.
  **/
  public static getModelDefinition() {
    return {
      name: 'TbSurat',
      plural: 'TbSurats',
      properties: {
        "suratname": {
          name: 'suratname',
          type: 'string'
        },
        "suratisi": {
          name: 'suratisi',
          type: 'string'
        },
        "suratjumlah": {
          name: 'suratjumlah',
          type: 'number'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
        "suratid": {
          name: 'suratid',
          type: 'string'
        },
      },
      relations: {
      }
    }
  }
}
