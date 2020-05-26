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
import Client from "../../../client";
import Resource from "../../resource";
var Refund = (function (_super) {
    __extends(Refund, _super);
    function Refund(service) {
        return _super.call(this, service, service.client.config.endpoint + "/pal/servlet/Payment/" + Client.API_VERSION + "/refund") || this;
    }
    return Refund;
}(Resource));
export default Refund;
//# sourceMappingURL=refund.js.map