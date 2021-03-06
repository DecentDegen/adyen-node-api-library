/*
 *                       ######
 *                       ######
 * ############    ####( ######  #####. ######  ############   ############
 * #############  #####( ######  #####. ######  #############  #############
 *        ######  #####( ######  #####. ######  #####  ######  #####  ######
 * ###### ######  #####( ######  #####. ######  #####  #####   #####  ######
 * ###### ######  #####( ######  #####. ######  #####          #####  ######
 * #############  #############  #############  #############  #####  ######
 *  ############   ############  #############   ############  #####  ######
 *                                      ######
 *                               #############
 *                               ############
 * Adyen NodeJS API Library
 * Copyright (c) 2020 Adyen B.V.
 * This file is open source and available under the MIT license.
 * See the LICENSE file for more info.
 */

/**
 * Terminal API
 * Definition of Terminal API Schema
 *
 * The version of the OpenAPI document: 1.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { DeviceType } from "./deviceType";
import { InfoQualifyType } from "./infoQualifyType";
import { InputCommandType } from "./inputCommandType";

export class InputData {
    "beepKeyFlag"?: boolean;
    "defaultInputString"?: string;
    "device": DeviceType;
    "disableCancelFlag"?: boolean;
    "disableCorrectFlag"?: boolean;
    "disableValidFlag"?: boolean;
    "fromRightToLeftFlag"?: boolean;
    "globalCorrectionFlag"?: boolean;
    "immediateResponseFlag"?: boolean;
    "infoQualify": InfoQualifyType;
    "inputCommand": InputCommandType;
    "maskCharactersFlag"?: boolean;
    "maxDecimalLength"?: number;
    "maxInputTime"?: number;
    "maxLength"?: number;
    "menuBackFlag"?: boolean;
    "minLength"?: number;
    "notifyCardInputFlag"?: boolean;
    "stringMask"?: string;
    "waitUserValidationFlag"?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: {name: string, baseName: string, type: string}[] = [
        {
            "name": "beepKeyFlag",
            "baseName": "BeepKeyFlag",
            "type": "boolean"
        },
        {
            "name": "defaultInputString",
            "baseName": "DefaultInputString",
            "type": "string"
        },
        {
            "name": "device",
            "baseName": "Device",
            "type": "DeviceType"
        },
        {
            "name": "disableCancelFlag",
            "baseName": "DisableCancelFlag",
            "type": "boolean"
        },
        {
            "name": "disableCorrectFlag",
            "baseName": "DisableCorrectFlag",
            "type": "boolean"
        },
        {
            "name": "disableValidFlag",
            "baseName": "DisableValidFlag",
            "type": "boolean"
        },
        {
            "name": "fromRightToLeftFlag",
            "baseName": "FromRightToLeftFlag",
            "type": "boolean"
        },
        {
            "name": "globalCorrectionFlag",
            "baseName": "GlobalCorrectionFlag",
            "type": "boolean"
        },
        {
            "name": "immediateResponseFlag",
            "baseName": "ImmediateResponseFlag",
            "type": "boolean"
        },
        {
            "name": "infoQualify",
            "baseName": "InfoQualify",
            "type": "InfoQualifyType"
        },
        {
            "name": "inputCommand",
            "baseName": "InputCommand",
            "type": "InputCommandType"
        },
        {
            "name": "maskCharactersFlag",
            "baseName": "MaskCharactersFlag",
            "type": "boolean"
        },
        {
            "name": "maxDecimalLength",
            "baseName": "MaxDecimalLength",
            "type": "number"
        },
        {
            "name": "maxInputTime",
            "baseName": "MaxInputTime",
            "type": "number"
        },
        {
            "name": "maxLength",
            "baseName": "MaxLength",
            "type": "number"
        },
        {
            "name": "menuBackFlag",
            "baseName": "MenuBackFlag",
            "type": "boolean"
        },
        {
            "name": "minLength",
            "baseName": "MinLength",
            "type": "number"
        },
        {
            "name": "notifyCardInputFlag",
            "baseName": "NotifyCardInputFlag",
            "type": "boolean"
        },
        {
            "name": "stringMask",
            "baseName": "StringMask",
            "type": "string"
        },
        {
            "name": "waitUserValidationFlag",
            "baseName": "WaitUserValidationFlag",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return InputData.attributeTypeMap;
    }
}

