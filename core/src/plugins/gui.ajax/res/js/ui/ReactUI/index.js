/*
 * Copyright 2007-2017 Charles du Jeu - Abstrium SAS <team (at) pyd.io>
 * This file is part of Pydio.
 *
 * Pydio is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Pydio is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with Pydio.  If not, see <http://www.gnu.org/licenses/>.
 *
 * The latest code can be found at <https://pydio.com>.
 */

// Import Builder class
import Builder from './Builder'
import TemplateBuilder from './TemplateBuilder'
import AsyncComponent from './AsyncComponent'
import BackgroundImage from './BackgroundImage'

import AsyncModal from './modal/AsyncModal'
import ActionDialogMixin from './modal/ActionDialogMixin'
import CancelButtonProviderMixin from './modal/CancelButtonProviderMixin'
import SubmitButtonProviderMixin from './modal/SubmitButtonProviderMixin'
import Modal from './modal/Modal'
import ConfirmDialog from './modal/ConfirmDialog'
import PromptDialog from './modal/PromptDialog'
import ActivityWarningDialog from './modal/ActivityWarningDialog'

import MessageBar from './modal/MessageBar'
import AbstractDialogModifier from './modal/AbstractDialogModifier'
import Loader from './Loader'
import Router from './router/Router'
import NetworkLoader from './modal/NetworkLoader'
import HiddenDownloadForm from './HiddenDownloadForm'

import PydioContextProvider from './PydioContextProvider'
import PydioContextConsumer from './PydioContextConsumer'

import CompatMigrationDialog from './compat/CompatMigrationDialog'
import CompatModal from './compat/CompatModal'

export {
    Builder,
    TemplateBuilder,
    AsyncComponent,

    AsyncModal,
    ActionDialogMixin,
    CancelButtonProviderMixin,
    SubmitButtonProviderMixin,
    AbstractDialogModifier,
    Modal,
    ConfirmDialog,
    PromptDialog,
    ActivityWarningDialog,

    Loader,
    Router,
    MessageBar,
    NetworkLoader,
    HiddenDownloadForm,
    BackgroundImage,

    PydioContextProvider,
    PydioContextConsumer,

    CompatMigrationDialog,
    CompatModal
}