/**
 * Issuing: Balance Platform API
 * Adyen Issuing lets you create and issue cards using the Balance Platform API. Use the API to onboard users as account holders in your balance platform, create balance accounts, and issue cards.  For more information, refer to [Adyen Issuing](https://docs.adyen.com/issuing).   ## Authentication To connect to the Balance Platform API, you must use your basic authentication credentials. To create your web service user and generate credentials, refer to [API credentials](https://docs.adyen.com/development-resources/api-credentials#basic-authentication). Then use the credentials to authenticate your request, for example:  ``` curl -U \"ws@BalancePlatform.YOUR_BALANCE_PLATFORM\":\"YOUR_WS_PASSWORD\" \\ -H \"Content-Type: application/json\" \\ ... ``` Note that when going live, you need to generate new basic authentication credentials to access the [live endpoints](https://docs.adyen.com/development-resources/live-endpoints).  ## Versioning Balance Platform API supports versioning of its endpoints through a version suffix in the endpoint URL. This suffix has the following format: \"vXX\", where XX is the version number.  For example: ``` https://balanceplatform-api-test.adyen.com/bcl/v1 ```
 *
 * The version of the OpenAPI document: 1
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

export class Name {
    /**
    * The first name.
    */
    'firstName': string;
    /**
    * The name\'s infix, if applicable. >A maximum length of twenty (20) characters is imposed.
    */
    'infix'?: string;
    /**
    * The last name.
    */
    'lastName': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "firstName",
            "baseName": "firstName",
            "type": "string"
        },
        {
            "name": "infix",
            "baseName": "infix",
            "type": "string"
        },
        {
            "name": "lastName",
            "baseName": "lastName",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return Name.attributeTypeMap;
    }
}

