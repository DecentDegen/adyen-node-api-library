"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = __importDefault(require("../../../client"));
var resource_1 = __importDefault(require("../../resource"));
var PlatformsNotificationConfiguration = (function (_super) {
    __extends(PlatformsNotificationConfiguration, _super);
    function PlatformsNotificationConfiguration(service, endpoint) {
        return _super.call(this, service, service.client.config.marketPayEndpoint + "/Notification/" + client_1.default.MARKETPAY_NOTIFICATION_API_VERSION + "/" + endpoint) || this;
    }
    return PlatformsNotificationConfiguration;
}(resource_1.default));
exports.default = PlatformsNotificationConfiguration;
//# sourceMappingURL=notificationConfiguration.js.map