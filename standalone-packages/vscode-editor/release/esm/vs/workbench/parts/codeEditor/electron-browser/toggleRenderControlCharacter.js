/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import * as nls from '../../../../nls.js';
import { Action } from '../../../../base/common/actions.js';
import { MenuRegistry, SyncActionDescriptor } from '../../../../platform/actions/common/actions.js';
import { IConfigurationService } from '../../../../platform/configuration/common/configuration.js';
import { ContextKeyExpr } from '../../../../platform/contextkey/common/contextkey.js';
import { Registry } from '../../../../platform/registry/common/platform.js';
import { Extensions as ActionExtensions } from '../../../common/actions.js';
var ToggleRenderControlCharacterAction = /** @class */ (function (_super) {
    __extends(ToggleRenderControlCharacterAction, _super);
    function ToggleRenderControlCharacterAction(id, label, _configurationService) {
        var _this = _super.call(this, id, label) || this;
        _this._configurationService = _configurationService;
        return _this;
    }
    ToggleRenderControlCharacterAction.prototype.run = function () {
        var newRenderControlCharacters = !this._configurationService.getValue('editor.renderControlCharacters');
        return this._configurationService.updateValue('editor.renderControlCharacters', newRenderControlCharacters, 1 /* USER */);
    };
    ToggleRenderControlCharacterAction.ID = 'editor.action.toggleRenderControlCharacter';
    ToggleRenderControlCharacterAction.LABEL = nls.localize('toggleRenderControlCharacters', "View: Toggle Control Characters");
    ToggleRenderControlCharacterAction = __decorate([
        __param(2, IConfigurationService)
    ], ToggleRenderControlCharacterAction);
    return ToggleRenderControlCharacterAction;
}(Action));
export { ToggleRenderControlCharacterAction };
var registry = Registry.as(ActionExtensions.WorkbenchActions);
registry.registerWorkbenchAction(new SyncActionDescriptor(ToggleRenderControlCharacterAction, ToggleRenderControlCharacterAction.ID, ToggleRenderControlCharacterAction.LABEL), 'View: Toggle Control Characters');
MenuRegistry.appendMenuItem(25 /* MenubarViewMenu */, {
    group: '5_editor',
    command: {
        id: ToggleRenderControlCharacterAction.ID,
        title: nls.localize({ key: 'miToggleRenderControlCharacters', comment: ['&& denotes a mnemonic'] }, "Toggle &&Control Characters"),
        toggled: ContextKeyExpr.equals('config.editor.renderControlCharacters', true)
    },
    order: 4
});