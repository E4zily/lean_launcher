/**
 * @name ScreensharePatcher
 * @author Lean Launcher
 * @description Unlock 1080p 60 FPS screensharing mode.
 * @version 1.0
 * @updateUrl https://discord.gg/launcher
 */

var backup = 2;
module.exports = class ScreensharePatcher {
    start() {
        backup = BdApi.findModuleByProps("getCurrentUser").getCurrentUser().premiumType;
        BdApi.findModuleByProps("getCurrentUser").getCurrentUser().premiumType = 2; 
    }
    stop() {
      BdApi.findModuleByProps("getCurrentUser").getCurrentUser().premiumType = backup;
    } 
}
