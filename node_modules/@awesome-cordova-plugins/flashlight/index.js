var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
var FlashlightOriginal = /** @class */ (function (_super) {
    __extends(FlashlightOriginal, _super);
    function FlashlightOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FlashlightOriginal.prototype.available = function () { return cordova(this, "available", {}, arguments); };
    FlashlightOriginal.prototype.switchOn = function () { return cordova(this, "switchOn", {}, arguments); };
    FlashlightOriginal.prototype.switchOff = function () { return cordova(this, "switchOff", {}, arguments); };
    FlashlightOriginal.prototype.toggle = function () { return cordova(this, "toggle", {}, arguments); };
    FlashlightOriginal.prototype.isSwitchedOn = function () { return cordova(this, "isSwitchedOn", { "sync": true }, arguments); };
    FlashlightOriginal.pluginName = "Flashlight";
    FlashlightOriginal.plugin = "cordova-plugin-flashlight";
    FlashlightOriginal.pluginRef = "window.plugins.flashlight";
    FlashlightOriginal.repo = "https://github.com/EddyVerbruggen/Flashlight-PhoneGap-Plugin";
    FlashlightOriginal.platforms = ["Android", "iOS", "Windows Phone 8"];
    return FlashlightOriginal;
}(AwesomeCordovaNativePlugin));
var Flashlight = new FlashlightOriginal();
export { Flashlight };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvZmxhc2hsaWdodC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyx1Q0FBK0MsTUFBTSwrQkFBK0IsQ0FBQzs7SUEyQjVELDhCQUEwQjs7OztJQU94RCw4QkFBUztJQVVULDZCQUFRO0lBVVIsOEJBQVM7SUFVVCwyQkFBTTtJQVlOLGlDQUFZOzs7Ozs7cUJBN0VkO0VBNEJnQywwQkFBMEI7U0FBN0MsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY29yZSc7XG5cbi8qKlxuICogQG5hbWUgRmxhc2hsaWdodFxuICogQGRlc2NyaXB0aW9uIFRoaXMgcGx1Z2luIGFsbG93cyB5b3UgdG8gc3dpdGNoIHRoZSBmbGFzaGxpZ2h0IC8gdG9yY2ggb2YgdGhlIGRldmljZSBvbiBhbmQgb2ZmLlxuICpcbiAqIFJlcXVpcmVzIENvcmRvdmEgcGx1Z2luOiBgY29yZG92YS1wbHVnaW4tZmxhc2hsaWdodGAuIEZvciBtb3JlIGluZm8sIHBsZWFzZSBzZWUgdGhlIFtGbGFzaGxpZ2h0IHBsdWdpbiBkb2NzXShodHRwczovL2dpdGh1Yi5jb20vRWRkeVZlcmJydWdnZW4vRmxhc2hsaWdodC1QaG9uZUdhcC1QbHVnaW4pLlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBGbGFzaGxpZ2h0IH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2ZsYXNobGlnaHQvbmd4JztcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGZsYXNobGlnaHQ6IEZsYXNobGlnaHQpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqIHRoaXMuZmxhc2hsaWdodC5zd2l0Y2hPbigpO1xuICpcbiAqIGBgYFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0ZsYXNobGlnaHQnLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1mbGFzaGxpZ2h0JyxcbiAgcGx1Z2luUmVmOiAnd2luZG93LnBsdWdpbnMuZmxhc2hsaWdodCcsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vRWRkeVZlcmJydWdnZW4vRmxhc2hsaWdodC1QaG9uZUdhcC1QbHVnaW4nLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnLCAnV2luZG93cyBQaG9uZSA4J10sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEZsYXNobGlnaHQgZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBDaGVja3MgaWYgdGhlIGZsYXNobGlnaHQgaXMgYXZhaWxhYmxlXG4gICAqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGJvb2xlYW4+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggYSBib29sZWFuIHN0YXRpbmcgaWYgdGhlIGZsYXNobGlnaHQgaXMgYXZhaWxhYmxlLlxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBhdmFpbGFibGUoKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFN3aXRjaGVzIHRoZSBmbGFzaGxpZ2h0IG9uXG4gICAqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGJvb2xlYW4+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBzd2l0Y2hPbigpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU3dpdGNoZXMgdGhlIGZsYXNobGlnaHQgb2ZmXG4gICAqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGJvb2xlYW4+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBzd2l0Y2hPZmYoKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFRvZ2dsZXMgdGhlIGZsYXNobGlnaHRcbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgdG9nZ2xlKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcyBpZiB0aGUgZmxhc2hsaWdodCBpcyB0dXJuZWQgb24uXG4gICAqXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN5bmM6IHRydWUsXG4gIH0pXG4gIGlzU3dpdGNoZWRPbigpOiBib29sZWFuIHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==