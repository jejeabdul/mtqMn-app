/* tslint:disable */

declare var Object: any;
export interface TbHaditsInterface {
  "haditsname"?: string;
  "haditsriwayat"?: string;
  "haditskategori"?: string;
  "id"?: number;
  "haditsisi"?: string;
  "haditsid": string;
}

export class TbHadits implements TbHaditsInterface {
  "haditsname": string;
  "haditsriwayat": string;
  "haditskategori": string;
  "id": number;
  "haditsisi": string;
  "haditsid": string;
  constructor(data?: TbHaditsInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `TbHadits`.
   */
  public static getModelName() {
    return "TbHadits";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of TbHadits for dynamic purposes.
  **/
  public static factory(data: TbHaditsInterface): TbHadits{
    return new TbHadits(data);
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
      name: 'TbHadits',
      plural: 'TbHadits',
      properties: {
        "haditsname": {
          name: 'haditsname',
          type: 'string'
        },
        "haditsriwayat": {
          name: 'haditsriwayat',
          type: 'string'
        },
        "haditskategori": {
          name: 'haditskategori',
          type: 'string'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
        "haditsisi": {
          name: 'haditsisi',
          type: 'string'
        },
        "haditsid": {
          name: 'haditsid',
          type: 'string'
        },
      },
      relations: {
      }
    }
  }
}
