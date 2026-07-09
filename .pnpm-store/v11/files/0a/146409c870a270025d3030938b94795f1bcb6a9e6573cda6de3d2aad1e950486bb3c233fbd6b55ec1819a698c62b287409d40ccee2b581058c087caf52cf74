/*!
 * surveyjs - Survey JavaScript library v2.5.33
 * Copyright (c) 2015-2026 Devsoft Baltic OÜ  - http://surveyjs.io/
 * License: MIT (http://www.opensource.org/licenses/mit-license.php)
 */

import { SurveyModel, Helpers, createSvg, LocalizableString, createPopupViewModel, CssClassBuilder, ActionDropdownViewModel, RendererFactory, doKey2ClickUp, SvgRegistry, PopupModalManager, settings, ScrollViewModel, addIconsToThemeSet, doKey2ClickBlur, doKey2ClickDown, Question, SurveyProgressModel, ProgressButtonsResponsivityManager, PopupSurveyModel, ButtonGroupItemModel, checkLibraryVersion } from 'survey-core';
export { SurveyModel as Model, SurveyModel, SurveyWindowModel, settings, surveyLocalization, surveyStrings } from 'survey-core';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createPortal } from 'react-dom';

class ReactElementFactory {
    constructor() {
        this.creatorHash = {};
    }
    registerElement(elementType, elementCreator) {
        this.creatorHash[elementType] = elementCreator;
    }
    getAllTypes() {
        var result = new Array();
        for (var key in this.creatorHash) {
            result.push(key);
        }
        return result.sort();
    }
    isElementRegistered(elementType) {
        return !!this.creatorHash[elementType];
    }
    createElement(elementType, params) {
        var creator = this.creatorHash[elementType];
        if (creator == null)
            return null;
        return creator(params);
    }
}
ReactElementFactory.Instance = new ReactElementFactory();

class ReactSurveyElementsWrapper {
    static wrapRow(survey, element, row) {
        const componentName = survey.getRowWrapperComponentName(row);
        const componentData = survey.getRowWrapperComponentData(row);
        return ReactElementFactory.Instance.createElement(componentName, {
            element,
            row,
            componentData,
        });
    }
    static wrapElement(survey, element, question) {
        const componentName = survey.getElementWrapperComponentName(question);
        const componentData = survey.getElementWrapperComponentData(question);
        return ReactElementFactory.Instance.createElement(componentName, {
            element,
            question,
            componentData,
        });
    }
    static wrapQuestionContent(survey, element, question) {
        const componentName = survey.getQuestionContentWrapperComponentName(question);
        const componentData = survey.getElementWrapperComponentData(question);
        return ReactElementFactory.Instance.createElement(componentName, {
            element,
            question,
            componentData,
        });
    }
    static wrapItemValue(survey, element, question, item) {
        const componentName = survey.getItemValueWrapperComponentName(item, question);
        const componentData = survey.getItemValueWrapperComponentData(item, question);
        return ReactElementFactory.Instance.createElement(componentName, {
            key: element === null || element === void 0 ? void 0 : element.key,
            element,
            question,
            item,
            componentData,
        });
    }
    static wrapMatrixCell(survey, element, cell, reason = "cell") {
        const componentName = survey.getElementWrapperComponentName(cell, reason);
        const componentData = survey.getElementWrapperComponentData(cell, reason);
        return ReactElementFactory.Instance.createElement(componentName, {
            element,
            cell,
            componentData,
        });
    }
}
SurveyModel.platform = "react";

class SurveyElementBase extends React.Component {
    static renderLocString(locStr, style = null, key) {
        return ReactElementFactory.Instance.createElement(locStr.renderAs, {
            model: locStr.renderAsData,
            style: style,
            key: key
        });
    }
    static renderQuestionDescription(question) {
        var descriptionText = SurveyElementBase.renderLocString(question.locDescription);
        return React.createElement("div", { style: question.hasDescription ? undefined : { display: "none" }, id: question.ariaDescriptionId, className: question.cssDescription }, descriptionText);
    }
    constructor(props) {
        super(props);
        this._allowComponentUpdate = true;
        this.prevStateElements = [];
        this.propertyValueChangedHandler = (stateElement, options) => {
            const key = options.name;
            if (!this.canUsePropInState(key) || this.isRendering)
                return;
            this.changedStatePropNameValue = key;
            this.setState((state) => {
                var newState = {};
                newState[key] = options.newValue;
                return newState;
            });
        };
        this.onArrayChangedCallback = (stateElement, options) => {
            if (this.isRendering)
                return;
            this.changedStatePropNameValue = options.name;
            this.setState((state) => {
                var newState = {};
                newState[options.name] = options.newValue;
                return newState;
            });
        };
    }
    componentDidMount() {
        this.makeBaseElementsReact();
    }
    componentWillUnmount() {
        this.unMakeBaseElementsReact();
        this.disableStateElementsRerenderEvent(this.getStateElements());
    }
    componentDidUpdate(prevProps, prevState) {
        var _a;
        this.makeBaseElementsReact();
        const stateElements = this.getStateElements();
        this.disableStateElementsRerenderEvent(((_a = this.prevStateElements) !== null && _a !== void 0 ? _a : []).filter(el => !stateElements.find(stateElement => stateElement == el)));
        this.prevStateElements = [];
        this.getStateElements().forEach((el) => {
            el.afterRerender();
        });
    }
    allowComponentUpdate() {
        this._allowComponentUpdate = true;
        this.forceUpdate();
    }
    denyComponentUpdate() {
        this._allowComponentUpdate = false;
    }
    shouldComponentUpdate(nextProps, nextState) {
        if (this._allowComponentUpdate) {
            this.unMakeBaseElementsReact();
            this.prevStateElements = this.getStateElements();
        }
        return this._allowComponentUpdate;
    }
    render() {
        if (!this.canRender()) {
            return null;
        }
        this.startEndRendering(1);
        var res = this.renderElement();
        this.startEndRendering(-1);
        if (!!res) {
            res = this.wrapElement(res);
        }
        this.changedStatePropNameValue = undefined;
        return res;
    }
    wrapElement(element) {
        return element;
    }
    get isRendering() {
        var stateEls = this.getRenderedElements();
        for (let stateEl of stateEls) {
            if (stateEl.reactRendering > 0)
                return true;
        }
        return false;
    }
    getRenderedElements() {
        return this.getStateElements();
    }
    startEndRendering(val) {
        var stateEls = this.getRenderedElements();
        for (let stateEl of stateEls) {
            if (!stateEl.reactRendering)
                stateEl.reactRendering = 0;
            stateEl.reactRendering += val;
        }
    }
    canRender() {
        return true;
    }
    renderElement() {
        return null;
    }
    get changedStatePropName() {
        return this.changedStatePropNameValue;
    }
    makeBaseElementsReact() {
        var els = this.getStateElements();
        for (var i = 0; i < els.length; i++) {
            els[i].enableOnElementRerenderedEvent();
            this.makeBaseElementReact(els[i]);
        }
    }
    unMakeBaseElementsReact() {
        var els = this.getStateElements();
        this.unMakeBaseElementsReactive(els);
    }
    unMakeBaseElementsReactive(els) {
        for (var i = 0; i < els.length; i++) {
            this.unMakeBaseElementReact(els[i]);
        }
    }
    disableStateElementsRerenderEvent(els) {
        els.forEach(el => {
            el.disableOnElementRerenderedEvent();
        });
    }
    getStateElements() {
        var el = this.getStateElement();
        return !!el ? [el] : [];
    }
    getStateElement() {
        return null;
    }
    get isDisplayMode() {
        const props = this.props;
        return props.isDisplayMode || false;
    }
    renderLocString(locStr, style = null, key) {
        return SurveyElementBase.renderLocString(locStr, style, key);
    }
    canMakeReact(stateElement) {
        return !!stateElement && !!stateElement.iteratePropertiesHash;
    }
    makeBaseElementReact(stateElement) {
        if (!this.canMakeReact(stateElement))
            return;
        stateElement.addOnArrayChangedCallback(this.onArrayChangedCallback);
        stateElement.addOnPropertyValueChangedCallback(this.propertyValueChangedHandler);
    }
    canUsePropInState(key) {
        return true;
    }
    unMakeBaseElementReact(stateElement) {
        if (!this.canMakeReact(stateElement))
            return;
        stateElement.removeOnPropertyValueChangedCallback(this.propertyValueChangedHandler);
        stateElement.removeOnArrayChangedCallback(this.onArrayChangedCallback);
    }
}
class ReactSurveyElement extends SurveyElementBase {
    constructor(props) {
        super(props);
    }
    get cssClasses() {
        return this.props.cssClasses;
    }
}
class SurveyQuestionElementBase extends SurveyElementBase {
    constructor(props) {
        super(props);
    }
    componentDidUpdate(prevProps, prevState) {
        super.componentDidUpdate(prevProps, prevState);
        this.updateDomElement();
    }
    componentDidMount() {
        super.componentDidMount();
        this.updateDomElement();
    }
    componentWillUnmount() {
        super.componentWillUnmount();
        if (!!this.questionBase) {
            const contentElement = this.content || this.control;
            this.questionBase.beforeDestroyQuestionElement(contentElement);
            if (!!contentElement) {
                contentElement.removeAttribute("data-rendered");
            }
        }
    }
    updateDomElement() {
        const contentElement = this.content || this.control;
        if (!!contentElement) {
            if (contentElement.getAttribute("data-rendered") !== "r") {
                contentElement.setAttribute("data-rendered", "r");
                this.questionBase.afterRenderQuestionElement(contentElement);
            }
        }
    }
    get questionBase() {
        return this.props.question;
    }
    getRenderedElements() {
        return [this.questionBase];
    }
    get creator() {
        return this.props.creator;
    }
    canRender() {
        return !!this.questionBase && !!this.creator;
    }
    shouldComponentUpdate(nextProps, nextState) {
        if (!super.shouldComponentUpdate(nextProps, nextState))
            return false;
        return (!this.questionBase.customWidget ||
            !!this.questionBase.customWidgetData.isNeedRender ||
            !!this.questionBase.customWidget.widgetJson.isDefaultRender ||
            !!this.questionBase.customWidget.widgetJson.render);
    }
    get isDisplayMode() {
        const props = this.props;
        return (props.isDisplayMode ||
            (!!this.questionBase && this.questionBase.isInputReadOnly) || false);
    }
    wrapCell(cell, element, reason) {
        if (!reason) {
            return element;
        }
        const survey = this.questionBase
            .survey;
        let wrapper = null;
        if (survey) {
            wrapper = ReactSurveyElementsWrapper.wrapMatrixCell(survey, element, cell, reason);
        }
        return wrapper !== null && wrapper !== void 0 ? wrapper : element;
    }
    setControl(element) {
        if (!!element) {
            this.control = element;
        }
    }
    setContent(element) {
        if (!!element) {
            this.content = element;
        }
    }
}
class SurveyQuestionUncontrolledElement extends SurveyQuestionElementBase {
    constructor(props) {
        super(props);
        this.updateValueOnEvent = (event) => {
            if (!Helpers.isTwoValueEquals(this.questionBase.value, event.target.value, false, true, false)) {
                this.setValueCore(event.target.value);
            }
        };
        this.updateValueOnEvent = this.updateValueOnEvent.bind(this);
    }
    get question() {
        return this.questionBase;
    }
    setValueCore(newValue) {
        this.questionBase.value = newValue;
    }
    getValueCore() {
        return this.questionBase.value;
    }
    updateDomElement() {
        if (!!this.control) {
            const control = this.control;
            const newValue = this.getValueCore();
            if (!Helpers.isTwoValueEquals(newValue, control.value, false, true, false)) {
                control.value = this.getValue(newValue);
            }
        }
        super.updateDomElement();
    }
    getValue(val) {
        if (Helpers.isValueEmpty(val))
            return "";
        return val;
    }
}

class SvgIcon extends React.Component {
    constructor(props) {
        super(props);
        this.svgIconRef = React.createRef();
    }
    updateSvg() {
        if (this.props.iconName)
            createSvg(this.props.size, this.props.width, this.props.height, this.props.iconName, this.svgIconRef.current, this.props.title);
    }
    componentDidUpdate() {
        this.updateSvg();
    }
    render() {
        let className = "sv-svg-icon";
        if (this.props.className) {
            className += " " + this.props.className;
        }
        if (this.props.css) {
            className = this.props.css;
        }
        return (this.props.iconName ?
            React.createElement("svg", { className: className, style: this.props.style, onClick: this.props.onClick, ref: this.svgIconRef, role: "presentation" },
                React.createElement("use", null))
            : null);
    }
    componentDidMount() {
        this.updateSvg();
    }
}
ReactElementFactory.Instance.registerElement("sv-svg-icon", (props) => {
    return React.createElement(SvgIcon, props);
});

class SurveyActionBarSeparator extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        var className = `sv-action-bar-separator ${this.props.cssClasses}`;
        return React.createElement("div", { className: className });
    }
}
ReactElementFactory.Instance.registerElement("sv-action-bar-separator", (props) => {
    return React.createElement(SurveyActionBarSeparator, props);
});

class SurveyLocStringViewer extends React.Component {
    constructor(props) {
        super(props);
        this.onChangedHandler = (sender, options) => {
            if (this.isRendering)
                return;
            this.setState({ changed: !!this.state && this.state.changed ? this.state.changed + 1 : 1 });
        };
        this.rootRef = React.createRef();
    }
    get locStr() {
        return this.props.model;
    }
    get style() {
        return this.props.style;
    }
    get textClass() {
        return this.props.textClass;
    }
    componentDidMount() {
        this.reactOnStrChanged();
    }
    componentWillUnmount() {
        if (!this.locStr)
            return;
        this.locStr.onStringChanged.remove(this.onChangedHandler);
    }
    componentDidUpdate(prevProps, prevState) {
        if (!!prevProps.model) {
            prevProps.model.onStringChanged.remove(this.onChangedHandler);
        }
        this.reactOnStrChanged();
    }
    reactOnStrChanged() {
        if (!this.locStr)
            return;
        this.locStr.onStringChanged.add(this.onChangedHandler);
    }
    render() {
        if (!this.locStr)
            return null;
        this.isRendering = true;
        const strEl = this.renderString();
        this.isRendering = false;
        return strEl;
    }
    renderString() {
        const className = this.locStr.getStringViewerClassName(this.textClass);
        if (this.locStr.hasHtml) {
            let htmlValue = { __html: this.locStr.renderedHtml };
            return React.createElement("span", { ref: this.rootRef, className: className, style: this.style, dangerouslySetInnerHTML: htmlValue });
        }
        return React.createElement("span", { ref: this.rootRef, className: className, style: this.style }, this.locStr.renderedHtml);
    }
}
ReactElementFactory.Instance.registerElement(LocalizableString.defaultRenderer, (props) => {
    return React.createElement(SurveyLocStringViewer, props);
});

class SurveyAction extends SurveyElementBase {
    constructor(props) {
        super(props);
        this.ref = React.createRef();
    }
    get item() {
        return this.props.item;
    }
    getStateElement() {
        return this.item;
    }
    renderElement() {
        //refactor
        const itemClass = this.item.getActionRootCss();
        const separator = this.item.needSeparator ? (React.createElement(SurveyActionBarSeparator, null)) : null;
        const itemComponent = ReactElementFactory.Instance.createElement(this.item.component || "sv-action-bar-item", {
            item: this.item,
        });
        return (React.createElement("div", { className: itemClass, id: "" + this.item.uniqueId, ref: this.ref },
            React.createElement("div", { className: "sv-action__content" },
                separator,
                itemComponent)));
    }
    componentWillUnmount() {
        super.componentWillUnmount();
        this.item.updateModeCallback = undefined;
    }
    componentDidMount() {
        super.componentDidMount();
        this.item.updateModeCallback = (mode, callback) => {
            queueMicrotask(() => {
                if (ReactDOM["flushSync"]) {
                    ReactDOM["flushSync"](() => {
                        this.item.mode = mode;
                    });
                }
                else {
                    this.item.mode = mode;
                }
                queueMicrotask(() => {
                    callback(mode, this.ref.current);
                });
            });
        };
        this.item.afterRender();
    }
}
class SurveyActionBarItem extends SurveyElementBase {
    get item() {
        return this.props.item;
    }
    getStateElement() {
        return this.item;
    }
    renderElement() {
        return React.createElement(React.Fragment, null, this.renderInnerButton());
    }
    renderText() {
        if (!this.item.hasTitle)
            return null;
        return React.createElement(SurveyLocStringViewer, { model: this.item.locTitle, textClass: this.item.getActionBarItemTitleCss() });
    }
    renderButtonContent() {
        const text = this.renderText();
        const svgIcon = !!this.item.iconName ? (React.createElement(SvgIcon, { className: this.item.cssClasses.itemIcon, size: this.item.iconSize, iconName: this.item.iconName, title: this.item.tooltip || this.item.title })) : null;
        return (React.createElement(React.Fragment, null,
            svgIcon,
            text));
    }
    renderInnerButton() {
        const className = this.item.getActionBarItemCss();
        const title = this.item.tooltip || this.item.title;
        const buttonContent = this.renderButtonContent();
        const tabIndex = this.item.disableTabStop ? -1 : undefined;
        const button = attachKey2click(React.createElement("button", { className: className, type: "button", disabled: this.item.disabled, onMouseDown: (args) => this.item.doMouseDown(args), onFocus: (args) => this.item.doFocus(args), onClick: (args) => this.item.doAction(args), title: title, tabIndex: tabIndex, "aria-checked": this.item.ariaChecked, "aria-expanded": this.item.ariaExpanded, "aria-labelledby": this.item.ariaLabelledBy, role: this.item.ariaRole }, buttonContent), this.item, { processEsc: false });
        return button;
    }
}
ReactElementFactory.Instance.registerElement("sv-action-bar-item", (props) => {
    return React.createElement(SurveyActionBarItem, props);
});

class Popup extends SurveyElementBase {
    constructor(props) {
        super(props);
        this.containerRef = React.createRef();
        this.createModel();
    }
    get model() {
        return this.props.model;
    }
    getStateElement() {
        return this.model;
    }
    createModel() {
        this.popup = createPopupViewModel(this.props.model);
    }
    setTargetElement() {
        const container = this.containerRef.current;
        this.popup.setComponentElement(container);
    }
    componentDidMount() {
        super.componentDidMount();
        this.setTargetElement();
    }
    componentDidUpdate(prevProps, prevState) {
        super.componentDidUpdate(prevProps, prevState);
        this.setTargetElement();
    }
    componentWillUnmount() {
        super.componentWillUnmount();
        this.popup.resetComponentElement();
    }
    shouldComponentUpdate(nextProps, nextState) {
        var _a;
        if (!super.shouldComponentUpdate(nextProps, nextState))
            return false;
        const isNeedUpdate = nextProps.model !== this.popup.model;
        if (isNeedUpdate) {
            (_a = this.popup) === null || _a === void 0 ? void 0 : _a.dispose();
            this.createModel();
        }
        return isNeedUpdate;
    }
    render() {
        this.popup.model = this.model;
        let popupContainer;
        if (this.model.isModal) {
            popupContainer = React.createElement(PopupContainer, { model: this.popup });
        }
        else {
            popupContainer = React.createElement(PopupDropdownContainer, { model: this.popup });
        }
        return React.createElement("div", { ref: this.containerRef }, popupContainer);
    }
}
ReactElementFactory.Instance.registerElement("sv-popup", (props) => {
    return React.createElement(Popup, props);
});
class PopupContainer extends SurveyElementBase {
    constructor(props) {
        super(props);
        this.handleKeydown = (event) => {
            this.model.onKeyDown(event);
        };
        this.clickInside = (ev) => {
            ev.stopPropagation();
        };
    }
    get model() {
        return this.props.model;
    }
    getStateElement() {
        return this.model;
    }
    componentDidUpdate(prevProps, prevState) {
        super.componentDidUpdate(prevProps, prevState);
        if (!this.model.isPositionSet && this.model.isVisible) {
            this.model.updateOnShowing();
        }
    }
    renderContainer(popupBaseViewModel) {
        const headerPopup = popupBaseViewModel.showHeader ? this.renderHeaderPopup(popupBaseViewModel) : null;
        const headerContent = !!popupBaseViewModel.title ? this.renderHeaderContent() : null;
        const content = this.renderContent();
        const footerContent = popupBaseViewModel.showFooter ? this.renderFooter(this.model) : null;
        return (React.createElement("div", { className: "sv-popup__container", style: {
                left: popupBaseViewModel.left,
                top: popupBaseViewModel.top,
                height: popupBaseViewModel.height,
                width: popupBaseViewModel.width,
                minWidth: popupBaseViewModel.minWidth,
            }, onClick: (ev) => {
                this.clickInside(ev);
            } },
            headerPopup,
            React.createElement("div", { className: "sv-popup__body-content" },
                headerContent,
                React.createElement("div", { className: "sv-popup__scrolling-content" }, content),
                footerContent)));
    }
    renderHeaderContent() {
        return React.createElement("div", { className: "sv-popup__body-header" }, this.model.title);
    }
    renderContent() {
        const contentComponent = ReactElementFactory.Instance.createElement(this.model.contentComponentName, this.model.contentComponentData);
        return React.createElement("div", { className: "sv-popup__content" }, contentComponent);
    }
    renderHeaderPopup(popupModel) {
        return popupModel.showCloseButton ? React.createElement("button", { tabIndex: -1, className: "sv-popup__close-button sd-action sd-action--icon", onClick: () => this.model.clickClose() },
            React.createElement(SvgIcon, { className: "sv-popup__close-button-icon", iconName: "icon-close-24x24", size: "auto" })) : null;
    }
    renderFooter(popuModel) {
        return (React.createElement("div", { className: "sv-popup__body-footer" },
            React.createElement(SurveyActionBar, { model: popuModel.footerToolbar })));
    }
    render() {
        const container = this.renderContainer(this.model);
        const className = new CssClassBuilder()
            .append("sv-popup")
            .append(this.model.styleClass)
            .toString();
        const style = { display: this.model.isVisible ? "" : "none", };
        return (React.createElement("div", { tabIndex: -1, className: className, style: style, onClick: (e) => {
                this.model.clickOutside(e);
            }, onBlur: (e) => {
                this.model.blur(e);
            }, onKeyDown: this.handleKeydown }, container));
    }
    componentDidMount() {
        super.componentDidMount();
        if (this.model.isVisible) {
            this.model.updateOnShowing();
        }
    }
}
class PopupDropdownContainer extends PopupContainer {
    renderHeaderPopup(popupModel) {
        const popupDropdownModel = popupModel;
        if (!popupDropdownModel)
            return null;
        return (React.createElement("span", { style: {
                left: popupDropdownModel.pointerTarget.left,
                top: popupDropdownModel.pointerTarget.top,
            }, className: "sv-popup__pointer" }));
    }
}

class SurveyActionBarItemDropdown extends SurveyActionBarItem {
    constructor(props) {
        super(props);
    }
    renderInnerButton() {
        const button = super.renderInnerButton();
        return (React.createElement(React.Fragment, null,
            button,
            React.createElement(Popup, { model: this.item.popupModel })));
    }
    componentDidMount() {
        this.viewModel = new ActionDropdownViewModel(this.item);
    }
    componentWillUnmount() {
        super.componentWillUnmount();
        this.viewModel.dispose();
    }
}
ReactElementFactory.Instance.registerElement("sv-action-bar-item-dropdown", (props) => {
    return React.createElement(SurveyActionBarItemDropdown, props);
});

class SurveyActionBar extends SurveyElementBase {
    constructor(props) {
        super(props);
        this.rootRef = React.createRef();
    }
    get handleClick() {
        return this.props.handleClick !== undefined ? this.props.handleClick : true;
    }
    get model() {
        return this.props.model;
    }
    componentDidMount() {
        super.componentDidMount();
        if (!this.model.hasVisibleActions)
            return;
        const container = this.rootRef.current;
        if (!!container) {
            this.model.initResponsivityManager(container, (callback) => { setTimeout(callback, 100); });
        }
    }
    componentWillUnmount() {
        super.componentWillUnmount();
        this.model.resetResponsivityManager();
    }
    componentDidUpdate(prevProps, prevState) {
        super.componentDidUpdate(prevProps, prevState);
        if (prevProps.model != this.props.model) {
            prevProps.model.resetResponsivityManager();
        }
        if (!!this.model.hasVisibleActions) {
            const container = this.rootRef.current;
            if (!!container) {
                this.model.initResponsivityManager(container, (callback) => { setTimeout(callback, 100); });
            }
        }
    }
    getStateElement() {
        return this.model;
    }
    renderElement() {
        if (!this.model.hasActions)
            return null;
        const items = this.renderItems();
        return (React.createElement("div", { ref: this.rootRef, style: this.model.getRootStyle(), className: this.model.getRootCss(), onClick: this.handleClick ? function (event) {
                event.stopPropagation();
            } : undefined }, items));
    }
    renderItems() {
        return this.model.renderedActions.concat([]).map((item, itemIndex) => {
            return (React.createElement(SurveyAction, { item: item, key: item.renderedId }));
        });
    }
}
ReactElementFactory.Instance.registerElement("sv-action-bar", (props) => {
    return React.createElement(SurveyActionBar, props);
});

class TitleContent extends React.Component {
    constructor(props) {
        super(props);
    }
    get cssClasses() {
        return this.props.cssClasses;
    }
    get element() {
        return this.props.element;
    }
    render() {
        if (this.element.isTitleRenderedAsString)
            return SurveyElementBase.renderLocString(this.element.locRenderedTitle);
        var spans = this.renderTitleSpans(this.element.getTitleOwner(), this.cssClasses);
        return React.createElement(React.Fragment, null, spans);
    }
    renderTitleSpans(element, cssClasses) {
        var getSpaceSpan = (key) => {
            return (React.createElement("span", { "data-key": key, key: key }, "\u00A0"));
        };
        var spans = [];
        if (element.isRequireTextOnStart) {
            spans.push(this.renderRequireText(element));
            spans.push(getSpaceSpan("req-sp"));
        }
        var questionNumber = element.no;
        if (questionNumber) {
            spans.push(React.createElement("span", { "data-key": "q_num", key: "q_num", className: element.cssTitleNumber, style: { position: "static" }, "aria-hidden": true }, questionNumber));
            spans.push(getSpaceSpan("num-sp"));
        }
        if (element.isRequireTextBeforeTitle) {
            spans.push(this.renderRequireText(element));
            spans.push(getSpaceSpan("req-sp"));
        }
        spans.push(SurveyElementBase.renderLocString(element.locRenderedTitle, null, "q_title"));
        if (element.isRequireTextAfterTitle) {
            spans.push(getSpaceSpan("req-sp"));
            spans.push(this.renderRequireText(element));
        }
        return spans;
    }
    renderRequireText(element) {
        return (React.createElement("span", { "data-key": "req-text", key: "req-text", className: element.cssRequiredMark, "aria-hidden": true }, element.requiredMark));
    }
}

class TitleActions extends React.Component {
    get cssClasses() {
        return this.props.cssClasses;
    }
    get element() {
        return this.props.element;
    }
    get renderActions() {
        return this.props.renderActions === undefined ? true : this.props.renderActions;
    }
    render() {
        const titleContent = React.createElement(TitleContent, { element: this.element, cssClasses: this.cssClasses });
        if (!this.element.hasTitleActions)
            return titleContent;
        return (React.createElement("div", { className: "sv-title-actions" },
            React.createElement("span", { className: "sv-title-actions__title" }, titleContent),
            (this.renderActions ? React.createElement(SurveyActionBar, { model: this.element.getTitleToolbar() }) : null)));
    }
}
RendererFactory.Instance.registerRenderer("element", "title-actions", "sv-title-actions");
ReactElementFactory.Instance.registerElement("sv-title-actions", (props) => {
    return React.createElement(TitleActions, props);
});

class TitleElement extends React.Component {
    constructor(props) {
        super(props);
    }
    get element() {
        return this.props.element;
    }
    renderTitleExpandableSvg() {
        if (!this.element.getCssTitleExpandableSvg())
            return null;
        let iconName = this.element.isExpanded ? "icon-collapse-16x16" : "icon-expand-16x16";
        return React.createElement(SvgIcon, { className: this.element.getCssTitleExpandableSvg(), iconName: iconName, size: "auto" });
    }
    render() {
        const element = this.element;
        if (!element || !element.hasTitle)
            return null;
        const ariaLabel = element.titleAriaLabel || undefined;
        const titleExpandableSvg = this.renderTitleExpandableSvg();
        const titleContent = (React.createElement(TitleActions, { element: element, cssClasses: element.cssClasses, renderActions: this.props.renderActions }));
        let onClick = undefined;
        let onKeyUp = undefined;
        if (element.hasTitleEvents) {
            onKeyUp = (evt) => {
                doKey2ClickUp(evt.nativeEvent);
            };
        }
        const CustomTag = element.titleTagName;
        return (React.createElement(CustomTag, { className: element.cssTitle, id: element.ariaTitleId, "aria-label": ariaLabel, tabIndex: element.titleTabIndex, "aria-expanded": element.titleAriaExpanded, role: element.titleAriaRole, onClick: onClick, onKeyUp: onKeyUp },
            titleExpandableSvg,
            titleContent));
    }
}

class SurveyHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = { changed: 0 };
        this.rootRef = React.createRef();
    }
    get survey() {
        return this.props.survey;
    }
    get css() {
        return this.survey.css;
    }
    componentDidMount() {
        const self = this;
        this.survey.afterRenderHeader(this.rootRef.current);
        this.survey.locLogo.onChanged = function () {
            self.setState({ changed: self.state.changed + 1 });
        };
    }
    componentWillUnmount() {
        this.survey.locLogo.onChanged = function () { };
    }
    renderTitle() {
        if (!this.survey.renderedHasTitle)
            return null;
        const description = SurveyElementBase.renderLocString(this.survey.locDescription);
        return (React.createElement("div", { className: this.css.headerText, style: { maxWidth: this.survey.titleMaxWidth } },
            React.createElement(TitleElement, { element: this.survey }),
            this.survey.renderedHasDescription ? React.createElement("div", { className: this.css.description }, description) : null));
    }
    renderLogoImage(isRender) {
        if (!isRender)
            return null;
        const componentName = this.survey.getElementWrapperComponentName(this.survey, "logo-image");
        const componentData = this.survey.getElementWrapperComponentData(this.survey, "logo-image");
        return ReactElementFactory.Instance.createElement(componentName, {
            data: componentData,
        });
    }
    render() {
        if (!this.survey.renderedHasHeader)
            return null;
        return (React.createElement("div", { className: this.css.header, ref: this.rootRef },
            this.renderLogoImage(this.survey.isLogoBefore),
            this.renderTitle(),
            this.renderLogoImage(this.survey.isLogoAfter),
            React.createElement("div", { className: this.css.headerClose })));
    }
}
ReactElementFactory.Instance.registerElement("survey-header", (props) => {
    return React.createElement(SurveyHeader, props);
});

class ReactQuestionFactory {
    constructor() {
        this.creatorHash = {};
    }
    registerQuestion(questionType, questionCreator) {
        this.creatorHash[questionType] = questionCreator;
    }
    getAllTypes() {
        var result = new Array();
        for (var key in this.creatorHash) {
            result.push(key);
        }
        return result.sort();
    }
    createQuestion(questionType, params) {
        var creator = this.creatorHash[questionType];
        if (creator == null)
            return null;
        return creator(params);
    }
}
ReactQuestionFactory.Instance = new ReactQuestionFactory();

class BrandInfo extends React.Component {
    render() {
        return (React.createElement("div", { className: "sv-brand-info" },
            React.createElement("a", { className: "sv-brand-info__logo", href: "https://surveyjs.io/?utm_source=built-in_links&utm_medium=online_survey_tool&utm_campaign=landing_page" },
                React.createElement("img", { src: "https://surveyjs.io/Content/Images/poweredby.svg" })),
            React.createElement("div", { className: "sv-brand-info__text" },
                "Try and see how easy it is to ",
                React.createElement("a", { href: "https://surveyjs.io/create-survey?utm_source=built-in_links&utm_medium=online_survey_tool&utm_campaign=create_survey" }, "create a survey")),
            React.createElement("div", { className: "sv-brand-info__terms" },
                React.createElement("a", { href: "https://surveyjs.io/TermsOfUse" }, "Terms of Use & Privacy Statement"))));
    }
}

class NotifierComponent extends SurveyElementBase {
    get notifier() {
        return this.props.notifier;
    }
    getStateElement() {
        return this.notifier;
    }
    renderElement() {
        if (!this.notifier.isDisplayed)
            return null;
        const style = { visibility: this.notifier.active ? "visible" : "hidden" };
        return (React.createElement("div", { className: this.notifier.css, style: style, role: "alert", "aria-live": "polite" },
            React.createElement("span", null, this.notifier.message),
            React.createElement(SurveyActionBar, { model: this.notifier.actionBar })));
    }
}
ReactElementFactory.Instance.registerElement("sv-notifier", (props) => {
    return React.createElement(NotifierComponent, props);
});

class ComponentsContainer extends React.Component {
    render() {
        const components = this.props.survey.getContainerContent(this.props.container);
        const needRenderWrapper = this.props.needRenderWrapper === false ? false : true;
        if (components.length == 0) {
            return null;
        }
        if (!needRenderWrapper) {
            return React.createElement(React.Fragment, null, components.map(component => {
                return ReactElementFactory.Instance.createElement(component.component, { survey: this.props.survey, model: component.data, container: this.props.container, key: component.id });
            }));
        }
        return React.createElement("div", { className: "sv-components-column" + " sv-components-container-" + this.props.container }, components.map(component => {
            return ReactElementFactory.Instance.createElement(component.component, { survey: this.props.survey, model: component.data, container: this.props.container, key: component.id });
        }));
    }
}
ReactElementFactory.Instance.registerElement("sv-components-container", (props) => {
    return React.createElement(ComponentsContainer, props);
});

class SvgBundleComponent extends React.Component {
    constructor(props) {
        super(props);
        this.onIconsChanged = () => {
            if (!!this.containerRef.current) {
                this.containerRef.current.innerHTML = SvgRegistry.iconsRenderedHtml();
            }
        };
        this.containerRef = React.createRef();
    }
    componentDidMount() {
        this.onIconsChanged();
        SvgRegistry.onIconsChanged.add(this.onIconsChanged);
    }
    componentWillUnmount() {
        SvgRegistry.onIconsChanged.remove(this.onIconsChanged);
    }
    render() {
        const svgStyle = {
            display: "none"
        };
        return React.createElement("svg", { style: svgStyle, id: "sv-icon-holder-global-container", ref: this.containerRef });
    }
}

class PopupModal extends SurveyElementBase {
    createPopupModalManager() {
        const modalManager = new PopupModalManager();
        modalManager.onModalsChangedCallback = () => {
            this.setState({ changed: this.state.changed + 1 });
        };
        return modalManager;
    }
    constructor(props) {
        super(props);
        this.modalManager = this.createPopupModalManager();
        this.isInitialized = false;
        this.init = () => {
            if (!this.isInitialized) {
                settings.showDialog = (dialogOptions, rootElement) => this.modalManager.addDialog(dialogOptions, rootElement);
                this.isInitialized = true;
            }
        };
        this.clean = () => {
            if (this.isInitialized) {
                settings.showDialog = undefined;
                this.isInitialized = false;
            }
        };
        this.state = { changed: 0 };
        this.descriptor = {
            init: this.init,
            clean: this.clean
        };
    }
    static addModalDescriptor(descriptor) {
        if (!settings.showDialog) {
            descriptor.init();
        }
        this.modalDescriptors.push(descriptor);
    }
    static removeModalDescriptor(descriptor) {
        descriptor.clean();
        this.modalDescriptors.splice(this.modalDescriptors.indexOf(descriptor), 1);
        if (!settings.showDialog && this.modalDescriptors[0]) {
            this.modalDescriptors[0].init();
        }
    }
    renderElement() {
        return React.createElement(React.Fragment, null, this.modalManager.getModals().map(model => createPortal(React.createElement(PopupContainer, { model: model }), model.container, model.uniqueId.toString())));
    }
    componentDidMount() {
        PopupModal.addModalDescriptor(this.descriptor);
    }
    componentWillUnmount() {
        this.modalManager.clear();
        PopupModal.removeModalDescriptor(this.descriptor);
    }
}
PopupModal.modalDescriptors = [];

var modernbooleancheckchecked$1 = "<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 24 24\"><polygon points=\"19,10 14,10 14,5 10,5 10,10 5,10 5,14 10,14 10,19 14,19 14,14 19,14 \"/></svg>";

var modernbooleancheckind$1 = "<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 24 24\"><path d=\"M22,0H2C0.9,0,0,0.9,0,2v20c0,1.1,0.9,2,2,2h20c1.1,0,2-0.9,2-2V2C24,0.9,23.1,0,22,0z M21,18L6,3h15V18z M3,6l15,15H3V6z\"/></svg>";

var modernbooleancheckunchecked$1 = "<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 24 24\"><rect x=\"5\" y=\"10\" width=\"14\" height=\"4\"/></svg>";

var moderncheck$1 = "<svg viewBox=\"0 0 24 24\"><path d=\"M5,13l2-2l3,3l7-7l2,2l-9,9L5,13z\"/></svg>";

var modernradio$1 = "<svg viewBox=\"-12 -12 24 24\"><circle r=\"6\" cx=\"0\" cy=\"0\"/></svg>";

var progressbutton$1 = "<svg viewBox=\"0 0 10 10\"><polygon points=\"2,2 0,4 5,9 10,4 8,2 5,5 \"/></svg>";

var removefile$1 = "<svg viewBox=\"0 0 16 16\"><path d=\"M8,2C4.7,2,2,4.7,2,8s2.7,6,6,6s6-2.7,6-6S11.3,2,8,2z M11,10l-1,1L8,9l-2,2l-1-1l2-2L5,6l1-1l2,2l2-2l1,1L9,8 L11,10z\"/></svg>";

var timercircle$1 = "<svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" viewBox=\"0 0 160 160\"><circle cx=\"80\" cy=\"80\" r=\"70\" style=\"stroke:var(--sd-timer-stroke-background-color);stroke-width:var(--sd-timer-stroke-background-width)\" stroke-dasharray=\"none\" stroke-dashoffset=\"none\"/><circle cx=\"80\" cy=\"80\" r=\"70\"/></svg>";

var add_24x24$1 = "<svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M13 11H17V13H13V17H11V13H7V11H11V7H13V11ZM23 12C23 18.1 18.1 23 12 23C5.9 23 1 18.1 1 12C1 5.9 5.9 1 12 1C18.1 1 23 5.9 23 12ZM21 12C21 7 17 3 12 3C7 3 3 7 3 12C3 17 7 21 12 21C17 21 21 17 21 12Z\"/></svg>";

var arrowleft_16x16$1 = "<svg viewBox=\"0 0 16 16\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M15 8.99999H4.4L8.7 13.3L7.3 14.7L0.599998 7.99999L7.3 1.29999L8.7 2.69999L4.4 6.99999H15V8.99999Z\"/></svg>";

var arrowright_16x16$1 = "<svg viewBox=\"0 0 16 16\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M1 6.99999H11.6L7.3 2.69999L8.7 1.29999L15.4 7.99999L8.7 14.7L7.3 13.3L11.6 8.99999H1V6.99999Z\"/></svg>";

var camera_24x24$1 = "<svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M20.01 4H18.4C18.2 4 18.01 3.9 17.9 3.73L16.97 2.34C16.41 1.5 15.48 1 14.47 1H9.54C8.53 1 7.6 1.5 7.04 2.34L6.11 3.73C6 3.9 5.81 4 5.61 4H4C2.35 4 1 5.35 1 7V19C1 20.65 2.35 22 4 22H20C21.65 22 23 20.65 23 19V7C23 5.35 21.65 4 20 4H20.01ZM21.01 19C21.01 19.55 20.56 20 20.01 20H4.01C3.46 20 3.01 19.55 3.01 19V7C3.01 6.45 3.46 6 4.01 6H5.62C6.49 6 7.3 5.56 7.79 4.84L8.72 3.45C8.91 3.17 9.22 3 9.55 3H14.48C14.81 3 15.13 3.17 15.31 3.45L16.24 4.84C16.72 5.56 17.54 6 18.41 6H20.02C20.57 6 21.02 6.45 21.02 7V19H21.01ZM12.01 6C8.7 6 6.01 8.69 6.01 12C6.01 15.31 8.7 18 12.01 18C15.32 18 18.01 15.31 18.01 12C18.01 8.69 15.32 6 12.01 6ZM12.01 16C9.8 16 8.01 14.21 8.01 12C8.01 9.79 9.8 8 12.01 8C14.22 8 16.01 9.79 16.01 12C16.01 14.21 14.22 16 12.01 16ZM13.01 10C13.01 10.55 12.56 11 12.01 11C11.46 11 11.01 11.45 11.01 12C11.01 12.55 10.56 13 10.01 13C9.46 13 9.01 12.55 9.01 12C9.01 10.35 10.36 9 12.01 9C12.56 9 13.01 9.45 13.01 10Z\"/></svg>";

var camera_32x32$1 = "<svg viewBox=\"0 0 32 32\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M27 6H23.8C23.34 6 22.92 5.77 22.66 5.39L22.25 4.78C21.51 3.66 20.26 3 18.92 3H13.06C11.72 3 10.48 3.67 9.73 4.78L9.32 5.39C9.07 5.77 8.64 6 8.18 6H4.98C2.79 6 1 7.79 1 10V24C1 26.21 2.79 28 5 28H27C29.21 28 31 26.21 31 24V10C31 7.79 29.21 6 27 6ZM29 24C29 25.1 28.1 26 27 26H5C3.9 26 3 25.1 3 24V10C3 8.9 3.9 8 5 8H8.2C9.33 8 10.38 7.44 11 6.5L11.41 5.89C11.78 5.33 12.41 5 13.07 5H18.93C19.6 5 20.22 5.33 20.59 5.89L21 6.5C21.62 7.44 22.68 8 23.8 8H27C28.1 8 29 8.9 29 10V24ZM16 9C12.13 9 9 12.13 9 16C9 19.87 12.13 23 16 23C19.87 23 23 19.87 23 16C23 12.13 19.87 9 16 9ZM16 21C13.24 21 11 18.76 11 16C11 13.24 13.24 11 16 11C18.76 11 21 13.24 21 16C21 18.76 18.76 21 16 21ZM17 13C17 13.55 16.55 14 16 14C14.9 14 14 14.9 14 16C14 16.55 13.55 17 13 17C12.45 17 12 16.55 12 16C12 13.79 13.79 12 16 12C16.55 12 17 12.45 17 13Z\"/></svg>";

var cancel_24x24$1 = "<svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M22.6 8.6L16.4 2.4C16 2 15.5 1.8 15 1.8C14.5 1.8 14 2 13.6 2.4L1.40005 14.6C0.600049 15.4 0.600049 16.6 1.40005 17.4L6.00005 22H12L22.6 11.4C23.3 10.6 23.3 9.3 22.6 8.6ZM11.1 20H6.80005L2.80005 16L6.20005 12.6L12.4 18.8L11.1 20ZM13.8 17.4L7.60005 11.2L15 3.8L21.2 10L13.8 17.4ZM16 20H23V22H14L16 20Z\"/></svg>";

var check_16x16$1 = "<svg viewBox=\"0 0 16 16\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M5.003 14.413L0.292999 9.70303L1.703 8.29303L5.003 11.583L14.293 2.29303L15.703 3.70303L5.003 14.413Z\"/></svg>";

var check_24x24$1 = "<svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M9 20.1L1 12L3.1 9.9L9 15.9L20.9 4L23 6.1L9 20.1Z\"/></svg>";

var chevrondown_24x24$1 = "<svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M12 15L17 10H7L12 15Z\"/></svg>";

var chevronright_16x16$1 = "<svg viewBox=\"0 0 16 16\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M5.64648 12.6465L6.34648 13.3465L11.7465 8.04648L6.34648 2.64648L5.64648 3.34648L10.2465 8.04648L5.64648 12.6465Z\"/></svg>";

var clear_16x16$1 = "<svg viewBox=\"0 0 16 16\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M13.35 3.34999L12.65 2.64999L8.05002 7.24999L3.35002 2.64999L2.65002 3.34999L7.25002 8.04999L2.65002 12.65L3.35002 13.35L8.05002 8.74999L12.65 13.35L13.35 12.65L8.75002 8.04999L13.35 3.34999Z\"/></svg>";

var clear_24x24$1 = "<svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M22.6 8.6L16.4 2.4C16 2 15.5 1.8 15 1.8C14.5 1.8 14 2 13.6 2.4L1.40005 14.6C0.600049 15.4 0.600049 16.6 1.40005 17.4L6.00005 22H12L22.6 11.4C23.3 10.6 23.3 9.3 22.6 8.6ZM11.1 20H6.80005L2.80005 16L6.20005 12.6L12.4 18.8L11.1 20ZM13.8 17.4L7.60005 11.2L15 3.8L21.2 10L13.8 17.4ZM16 20H23V22H14L16 20Z\"/></svg>";

var close_16x16$1 = "<svg viewBox=\"0 0 16 16\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M9.43 8.0025L13.7 3.7225C14.09 3.3325 14.09 2.6925 13.7 2.2925C13.31 1.9025 12.67 1.9025 12.27 2.2925L7.99 6.5725L3.72 2.3025C3.33 1.9025 2.69 1.9025 2.3 2.3025C1.9 2.6925 1.9 3.3325 2.3 3.7225L6.58 8.0025L2.3 12.2825C1.91 12.6725 1.91 13.3125 2.3 13.7125C2.69 14.1025 3.33 14.1025 3.73 13.7125L8.01 9.4325L12.29 13.7125C12.68 14.1025 13.32 14.1025 13.72 13.7125C14.11 13.3225 14.11 12.6825 13.72 12.2825L9.44 8.0025H9.43Z\"/></svg>";

var close_24x24$1 = "<svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M13.4101 12L20.7001 4.71C21.0901 4.32 21.0901 3.69 20.7001 3.3C20.3101 2.91 19.6801 2.91 19.2901 3.3L12.0001 10.59L4.71006 3.29C4.32006 2.9 3.68006 2.9 3.29006 3.29C2.90006 3.68 2.90006 4.32 3.29006 4.71L10.5801 12L3.29006 19.29C2.90006 19.68 2.90006 20.31 3.29006 20.7C3.49006 20.9 3.74006 20.99 4.00006 20.99C4.26006 20.99 4.51006 20.89 4.71006 20.7L12.0001 13.41L19.2901 20.7C19.4901 20.9 19.7401 20.99 20.0001 20.99C20.2601 20.99 20.5101 20.89 20.7101 20.7C21.1001 20.31 21.1001 19.68 20.7101 19.29L13.4201 12H13.4101Z\"/></svg>";

var collapse_16x16$1 = "<svg viewBox=\"0 0 16 16\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M2 6L3 5L8 10L13 5L14 6L8 12L2 6Z\"/></svg>";

var collapsedetails_16x16$1 = "<svg viewBox=\"0 0 16 16\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M13 7H3V9H13V7Z\"/></svg>";

var delete_16x16$1 = "<svg viewBox=\"0 0 16 16\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M15 2H14H11V1C11 0.4 10.6 0 10 0H7C6.4 0 6 0.4 6 1V2H3H2V4H3V14C3 15.1 3.9 16 5 16H12C13.1 16 14 15.1 14 14V4H15V2ZM7 1H10V2H7V1ZM12 14H5V4H12V14ZM7 13H6V5H7V13ZM9 13H8V5H9V13ZM11 13H10V5H11V13Z\"/></svg>";

var delete_24x24$1 = "<svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M22 4H20H16V2C16 0.9 15.1 0 14 0H10C8.9 0 8 0.9 8 2V4H4H2V6H4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V6H22V4ZM10 2H14V4H10V2ZM18 20H6V6H8H16H18V20ZM14 8H16V18H14V8ZM11 8H13V18H11V8ZM8 8H10V18H8V8Z\"/></svg>";

var drag_24x24$1 = "<svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M13 6C13 4.9 13.9 4 15 4C16.1 4 17 4.9 17 6C17 7.1 16.1 8 15 8C13.9 8 13 7.1 13 6ZM9 4C7.9 4 7 4.9 7 6C7 7.1 7.9 8 9 8C10.1 8 11 7.1 11 6C11 4.9 10.1 4 9 4ZM15 10C13.9 10 13 10.9 13 12C13 13.1 13.9 14 15 14C16.1 14 17 13.1 17 12C17 10.9 16.1 10 15 10ZM9 10C7.9 10 7 10.9 7 12C7 13.1 7.9 14 9 14C10.1 14 11 13.1 11 12C11 10.9 10.1 10 9 10ZM15 16C13.9 16 13 16.9 13 18C13 19.1 13.9 20 15 20C16.1 20 17 19.1 17 18C17 16.9 16.1 16 15 16ZM9 16C7.9 16 7 16.9 7 18C7 19.1 7.9 20 9 20C10.1 20 11 19.1 11 18C11 16.9 10.1 16 9 16Z\"/></svg>";

var draghorizontal_24x16$1 = "<svg viewBox=\"0 0 24 16\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M18 9C19.1 9 20 9.9 20 11C20 12.1 19.1 13 18 13C16.9 13 16 12.1 16 11C16 9.9 16.9 9 18 9ZM20 5C20 3.9 19.1 3 18 3C16.9 3 16 3.9 16 5C16 6.1 16.9 7 18 7C19.1 7 20 6.1 20 5ZM14 11C14 9.9 13.1 9 12 9C10.9 9 10 9.9 10 11C10 12.1 10.9 13 12 13C13.1 13 14 12.1 14 11ZM14 5C14 3.9 13.1 3 12 3C10.9 3 10 3.9 10 5C10 6.1 10.9 7 12 7C13.1 7 14 6.1 14 5ZM8 11C8 9.9 7.1 9 6 9C4.9 9 4 9.9 4 11C4 12.1 4.9 13 6 13C7.1 13 8 12.1 8 11ZM8 5C8 3.9 7.1 3 6 3C4.9 3 4 3.9 4 5C4 6.1 4.9 7 6 7C7.1 7 8 6.1 8 5Z\"/></svg>";

var editsmall_16x16$1 = "<svg viewBox=\"0 0 16 16\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M13.59 4.5884L11.42 2.4184C11.03 2.0284 10.52 1.8284 10.01 1.8284C9.5 1.8284 8.99 2.0284 8.6 2.4184L3.76 7.2384C2.63 8.3684 2 9.8884 2 11.4784V12.9884C2 13.5384 2.45 13.9884 3 13.9884H4.51C6.1 13.9884 7.63 13.3584 8.75 12.2284L13.58 7.3984C14.36 6.6184 14.36 5.3484 13.58 4.5684L13.59 4.5884ZM7.35 10.8284C6.59 11.5884 5.59 11.9984 4.52 11.9984H4.01V11.4884C4.01 10.4184 4.43 9.4184 5.18 8.6584L7.72 6.1184L9.89 8.2884L7.35 10.8284ZM11.3 6.8784L9.13 4.7084L10.01 3.8284L12.18 5.9984L11.3 6.8784Z\"/></svg>";

var expand_16x16$1 = "<svg viewBox=\"0 0 16 16\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M6 14L5 13L10 8L5 3L6 2L12 8L6 14Z\"/></svg>";

var expanddetails_16x16$1 = "<svg viewBox=\"0 0 16 16\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M13 7H9V3H7V7H3V9H7V13H9V9H13V7Z\"/></svg>";

var file_72x72$1 = "<svg viewBox=\"0 0 72 72\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M62.83 12.83L53.17 3.17C52.7982 2.79866 52.357 2.50421 51.8714 2.30346C51.3858 2.1027 50.8654 1.99959 50.34 2H14C12.4087 2 10.8826 2.63214 9.75735 3.75736C8.63214 4.88258 8 6.4087 8 8V64C8 65.5913 8.63214 67.1174 9.75735 68.2426C10.8826 69.3679 12.4087 70 14 70H58C59.5913 70 61.1174 69.3679 62.2426 68.2426C63.3679 67.1174 64 65.5913 64 64V15.66C64.0004 15.1346 63.8973 14.6142 63.6965 14.1286C63.4958 13.643 63.2013 13.2018 62.83 12.83ZM52 4.83L61.17 14H56C54.9391 14 53.9217 13.5786 53.1716 12.8284C52.4214 12.0783 52 11.0609 52 10V4.83ZM62 64C62 65.0609 61.5786 66.0783 60.8284 66.8284C60.0783 67.5786 59.0609 68 58 68H14C12.9391 68 11.9217 67.5786 11.1716 66.8284C10.4214 66.0783 10 65.0609 10 64V8C10 6.93914 10.4214 5.92172 11.1716 5.17157C11.9217 4.42143 12.9391 4 14 4H50V10C50 11.5913 50.6321 13.1174 51.7574 14.2426C52.8826 15.3679 54.4087 16 56 16H62V64ZM22 26H50V28H22V26ZM22 32H50V34H22V32ZM22 38H50V40H22V38ZM22 44H50V46H22V44Z\"/></svg>";

var flip_24x24$1 = "<svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M23 12.0037C23 14.2445 21.7794 16.3052 19.5684 17.8257C19.3984 17.9458 19.1983 18.0058 19.0082 18.0058C18.688 18.0058 18.3779 17.8557 18.1778 17.5756C17.8677 17.1155 17.9777 16.4953 18.4379 16.1852C20.0887 15.0448 21.0091 13.5643 21.0091 12.0138C21.0091 8.70262 16.9673 6.01171 12.005 6.01171C11.4948 6.01171 10.9945 6.04172 10.5043 6.09173L11.7149 7.30215C12.105 7.69228 12.105 8.32249 11.7149 8.71263C11.5148 8.9127 11.2647 9.00273 11.0045 9.00273C10.7444 9.00273 10.4943 8.90269 10.2942 8.71263L6.58254 5.00136L10.2842 1.2901C10.6744 0.899964 11.3047 0.899964 11.6949 1.2901C12.085 1.68023 12.085 2.31045 11.6949 2.70058L10.3042 4.09105C10.8545 4.03103 11.4147 4.00102 11.985 4.00102C18.0578 4.00102 22.99 7.59225 22.99 12.0037H23ZM12.2851 15.2949C11.895 15.685 11.895 16.3152 12.2851 16.7054L13.4957 17.9158C13.0055 17.9758 12.4952 17.9958 11.995 17.9958C7.03274 17.9958 2.99091 15.3049 2.99091 11.9937C2.99091 10.4332 3.90132 8.95271 5.56207 7.82232C6.02228 7.51222 6.13233 6.89201 5.82219 6.43185C5.51205 5.97169 4.89177 5.86166 4.43156 6.17176C2.22055 7.69228 1 9.76299 1 11.9937C1 16.4052 5.93224 19.9965 12.005 19.9965C12.5753 19.9965 13.1355 19.9665 13.6858 19.9064L12.2951 21.2969C11.905 21.6871 11.905 22.3173 12.2951 22.7074C12.4952 22.9075 12.7453 22.9975 13.0055 22.9975C13.2656 22.9975 13.5157 22.8975 13.7158 22.7074L17.4275 18.9961L13.7158 15.2849C13.3256 14.8947 12.6953 14.8947 12.3051 15.2849L12.2851 15.2949Z\"/></svg>";

var folder_24x24$1 = "<svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M21.93 9H21V7C21 6.46957 20.7893 5.96086 20.4142 5.58579C20.0391 5.21071 19.5304 5 19 5H10L8 3H4C3.46957 3 2.96086 3.21071 2.58579 3.58579C2.21071 3.96086 2 4.46957 2 5L2 21H21L23.89 11.63C23.9916 11.3244 24.0179 10.9988 23.9667 10.6809C23.9155 10.363 23.7882 10.0621 23.5958 9.80392C23.4034 9.54571 23.1514 9.33779 22.8614 9.19782C22.5714 9.05786 22.2519 8.99 21.93 9ZM4 5H7.17L8.59 6.41L9.17 7H19V9H6L4 15V5ZM22 11L19.54 19H4.77L7.44 11H22Z\"/></svg>";

var fullsize_16x16$1 = "<svg viewBox=\"0 0 16 16\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M12 13H4C2.9 13 2 12.1 2 11V5C2 3.9 2.9 3 4 3H12C13.1 3 14 3.9 14 5V11C14 12.1 13.1 13 12 13ZM4 5V11H12V5H4Z\"/></svg>";

var image_48x48$1 = "<svg viewBox=\"0 0 48 48\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M36 8H12C9.79 8 8 9.79 8 12V36C8 38.21 9.79 40 12 40H36C38.21 40 40 38.21 40 36V12C40 9.79 38.21 8 36 8ZM38 36C38 37.1 37.1 38 36 38H12C10.9 38 10 37.1 10 36V12C10 10.9 10.9 10 12 10H36C37.1 10 38 10.9 38 12V36ZM14 17C14 15.34 15.34 14 17 14C18.66 14 20 15.34 20 17C20 18.66 18.66 20 17 20C15.34 20 14 18.66 14 17ZM27 24L36 36H12L19 27L23 29L27 24Z\"/></svg>";

var loading_48x48$1 = "<svg viewBox=\"0 0 48 48\" xmlns=\"http://www.w3.org/2000/svg\"><g clip-path=\"url(#clip0_19679_369428)\"><path opacity=\"0.1\" d=\"M24 40C15.18 40 8 32.82 8 24C8 15.18 15.18 8 24 8C32.82 8 40 15.18 40 24C40 32.82 32.82 40 24 40ZM24 12C17.38 12 12 17.38 12 24C12 30.62 17.38 36 24 36C30.62 36 36 30.62 36 24C36 17.38 30.62 12 24 12Z\" fill=\"black\" fill-opacity=\"0.91\"/><path d=\"M10 26C8.9 26 8 25.1 8 24C8 15.18 15.18 8 24 8C25.1 8 26 8.9 26 10C26 11.1 25.1 12 24 12C17.38 12 12 17.38 12 24C12 25.1 11.1 26 10 26Z\"/></g><defs><clipPath id=\"clip0_19679_369428\"><rect width=\"32\" height=\"32\" fill=\"white\" transform=\"translate(8 8)\"/></clipPath></defs></svg>";

var maximize_16x16$1 = "<svg viewBox=\"0 0 16 16\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M6.71 10.71L4.42 13H6.01C6.56 13 7.01 13.45 7.01 14C7.01 14.55 6.56 15 6.01 15H2C1.45 15 1 14.55 1 14V10C1 9.45 1.45 9 2 9C2.55 9 3 9.45 3 10V11.59L5.29 9.3C5.68 8.91 6.31 8.91 6.7 9.3C7.09 9.69 7.09 10.32 6.7 10.71H6.71ZM14 1H10C9.45 1 9 1.45 9 2C9 2.55 9.45 3 10 3H11.59L9.3 5.29C8.91 5.68 8.91 6.31 9.3 6.7C9.5 6.9 9.75 6.99 10.01 6.99C10.27 6.99 10.52 6.89 10.72 6.7L13.01 4.41V6C13.01 6.55 13.46 7 14.01 7C14.56 7 15.01 6.55 15.01 6V2C15.01 1.45 14.56 1 14.01 1H14Z\"/></svg>";

var minimize_16x16$1 = "<svg viewBox=\"0 0 16 16\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M13 9H3C2.45 9 2 8.55 2 8C2 7.45 2.45 7 3 7H13C13.55 7 14 7.45 14 8C14 8.55 13.55 9 13 9Z\"/></svg>";

var more_24x24$1 = "<svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M6 12C6 13.1 5.1 14 4 14C2.9 14 2 13.1 2 12C2 10.9 2.9 10 4 10C5.1 10 6 10.9 6 12ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10ZM20 10C18.9 10 18 10.9 18 12C18 13.1 18.9 14 20 14C21.1 14 22 13.1 22 12C22 10.9 21.1 10 20 10Z\"/></svg>";

var navmenu_24x24$1 = "<svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M16 7H2V5H16V7ZM2 11V13H22V11H2ZM2 19H10V17H2V19Z\"/></svg>";

var noimage_48x48$1 = "<svg viewBox=\"0 0 48 48\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M14 17.01C14 16.4167 14.1759 15.8366 14.5056 15.3433C14.8352 14.8499 15.3038 14.4654 15.8519 14.2384C16.4001 14.0113 17.0033 13.9519 17.5853 14.0676C18.1672 14.1834 18.7018 14.4691 19.1213 14.8887C19.5409 15.3082 19.8266 15.8428 19.9424 16.4247C20.0581 17.0067 19.9987 17.6099 19.7716 18.1581C19.5446 18.7062 19.1601 19.1748 18.6667 19.5044C18.1734 19.8341 17.5933 20.01 17 20.01C16.2044 20.01 15.4413 19.6939 14.8787 19.1313C14.3161 18.5687 14 17.8056 14 17.01ZM27.09 24.14L20 36.01H36L27.09 24.14ZM36.72 8.14L35.57 10.01H36C36.5304 10.01 37.0391 10.2207 37.4142 10.5958C37.7893 10.9709 38 11.4796 38 12.01V36.01C38 36.5404 37.7893 37.0491 37.4142 37.4242C37.0391 37.7993 36.5304 38.01 36 38.01H18.77L17.57 40.01H36C37.0609 40.01 38.0783 39.5886 38.8284 38.8384C39.5786 38.0883 40 37.0709 40 36.01V12.01C39.9966 11.0765 39.6668 10.1737 39.0678 9.45778C38.4688 8.74188 37.6382 8.25802 36.72 8.09V8.14ZM36.86 4.5L12.86 44.5L11.14 43.5L13.23 40.01H12C10.9391 40.01 9.92172 39.5886 9.17157 38.8384C8.42143 38.0883 8 37.0709 8 36.01V12.01C8 10.9491 8.42143 9.93172 9.17157 9.18157C9.92172 8.43143 10.9391 8.01 12 8.01H32.43L35.14 3.5L36.86 4.5ZM14.43 38.01L15.63 36.01H12L19 27.01L20.56 27.8L31.23 10.01H12C11.4696 10.01 10.9609 10.2207 10.5858 10.5958C10.2107 10.9709 10 11.4796 10 12.01V36.01C10 36.5404 10.2107 37.0491 10.5858 37.4242C10.9609 37.7993 11.4696 38.01 12 38.01H14.43Z\"/></svg>";

var ranking_arrows$1 = "<svg viewBox=\"0 0 10 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M10 5L5 0L0 5H4V9H6V5H10Z\"/><path d=\"M6 19V15H4V19H0L5 24L10 19H6Z\"/></svg>";

var rankingundefined_16x16$1 = "<svg viewBox=\"0 0 16 16\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M13 7H3V9H13V7Z\"/></svg>";

var rating_star_2$1 = "<svg viewBox=\"0 0 48 48\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M24 39.5057L11.7226 45.9839C10.4095 46.6739 8.87606 45.5622 9.12525 44.096L11.4734 30.373L1.54411 20.6556C0.480254 19.6207 1.06489 17.8095 2.53128 17.5986L16.2559 15.5957L22.3994 3.10891C23.0512 1.77685 24.9488 1.77685 25.6102 3.10891L31.7441 15.5957L45.4687 17.5986C46.9351 17.8095 47.5197 19.6207 46.4559 20.6556L36.5266 30.373L38.8748 44.096C39.1239 45.5622 37.5905 46.6835 36.2774 45.9839L24 39.5057Z\" fill=\"none\" stroke-width=\"2\"/><path d=\"M24.3981 33.1305L24 32.9206L23.6019 33.1305L15.8715 37.2059L17.3542 28.5663L17.43 28.1246L17.1095 27.8113L10.83 21.6746L19.4965 20.4049L19.9405 20.3399L20.1387 19.9373L24 12.0936L27.8613 19.9373L28.0595 20.3399L28.5035 20.4049L37.17 21.6746L30.8905 27.8113L30.57 28.1246L30.6458 28.5663L32.1285 37.2059L24.3981 33.1305Z\" stroke-width=\"1.70746\"/></svg>";

var rating_star_small_2$1 = "<svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M12 19.3373L6.13001 22.4373C5.50001 22.7673 4.77001 22.2373 4.89001 21.5373L6.01001 14.9773L1.26001 10.3273C0.750007 9.83728 1.03001 8.96728 1.73001 8.86728L8.29001 7.90728L11.23 1.93728C11.54 1.29728 12.45 1.29728 12.77 1.93728L15.7 7.90728L22.26 8.86728C22.96 8.96728 23.24 9.83728 22.73 10.3273L17.98 14.9773L19.1 21.5373C19.22 22.2373 18.49 22.7773 17.86 22.4373L11.99 19.3373H12Z\" fill=\"none\" stroke-width=\"2\"/><path d=\"M12 15.9472L8.58001 17.7572L9.23001 13.9272L6.45001 11.2072L10.29 10.6472L12 7.17725L13.71 10.6472L17.55 11.2072L14.77 13.9272L15.42 17.7572L12 15.9472Z\"/></svg>";

var rating_star_small$1 = "<svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><g><path d=\"M12 19.3373L6.13001 22.4373C5.50001 22.7673 4.77001 22.2373 4.89001 21.5373L6.01001 14.9773L1.26001 10.3273C0.750007 9.83728 1.03001 8.96728 1.73001 8.86728L8.29001 7.90728L11.23 1.93728C11.54 1.29728 12.45 1.29728 12.77 1.93728L15.7 7.90728L22.26 8.86728C22.96 8.96728 23.24 9.83728 22.73 10.3273L17.98 14.9773L19.1 21.5373C19.22 22.2373 18.49 22.7773 17.86 22.4373L11.99 19.3373H12Z\"/></g></svg>";

var rating_star$1 = "<svg viewBox=\"0 0 48 48\" xmlns=\"http://www.w3.org/2000/svg\"><g><path d=\"M24 39.5057L11.7226 45.9839C10.4095 46.6739 8.87606 45.5622 9.12525 44.096L11.4734 30.373L1.54411 20.6556C0.480254 19.6207 1.06489 17.8095 2.53128 17.5986L16.2559 15.5957L22.3994 3.10891C23.0512 1.77685 24.9488 1.77685 25.6102 3.10891L31.7441 15.5957L45.4687 17.5986C46.9351 17.8095 47.5197 19.6207 46.4559 20.6556L36.5266 30.373L38.8748 44.096C39.1239 45.5622 37.5905 46.6835 36.2774 45.9839L24 39.5057Z\"/></g></svg>";

var reorder_24x24$1 = "<svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M17 5L12 0L7 5H11V9H13V5H17Z\"/><path d=\"M13 19V15H11V19H7L12 24L17 19H13Z\"/></svg>";

var restoredown_16x16$1 = "<svg viewBox=\"0 0 16 16\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M15 6C15 6.55 14.55 7 14 7H10C9.45 7 9 6.55 9 6V2C9 1.45 9.45 1 10 1C10.55 1 11 1.45 11 2V3.59L13.29 1.29C13.49 1.09 13.74 1 14 1C14.26 1 14.51 1.1 14.71 1.29C15.1 1.68 15.1 2.31 14.71 2.7L12.42 4.99H14.01C14.56 4.99 15.01 5.44 15.01 5.99L15 6ZM6 9H2C1.45 9 0.999998 9.45 0.999998 10C0.999998 10.55 1.45 11 2 11H3.59L1.29 13.29C0.899998 13.68 0.899998 14.31 1.29 14.7C1.68 15.09 2.31 15.09 2.7 14.7L4.99 12.41V14C4.99 14.55 5.44 15 5.99 15C6.54 15 6.99 14.55 6.99 14V10C6.99 9.45 6.54 9 5.99 9H6Z\"/></svg>";

var search_24x24$1 = "<svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M14 2C9.6 2 6 5.6 6 10C6 11.8 6.6 13.5 7.7 14.9L2.3 20.3C1.9 20.7 1.9 21.3 2.3 21.7C2.5 21.9 2.7 22 3 22C3.3 22 3.5 21.9 3.7 21.7L9.1 16.3C10.5 17.4 12.2 18 14 18C18.4 18 22 14.4 22 10C22 5.6 18.4 2 14 2ZM14 16C10.7 16 8 13.3 8 10C8 6.7 10.7 4 14 4C17.3 4 20 6.7 20 10C20 13.3 17.3 16 14 16Z\"/></svg>";

var smiley_rate1_24x24$1 = "<svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M4 4.9938C4 4.44362 4.45 3.99348 5 3.99348H6.59L5.3 2.70306C4.91 2.31293 4.91 1.68272 5.3 1.2926C5.69 0.902468 6.32 0.902468 6.71 1.2926L9.71 4.29357C9.8 4.3836 9.88 4.49364 9.93 4.62368C10.03 4.86376 10.03 5.14385 9.93 5.38393C9.88 5.50397 9.81 5.614 9.71 5.71404L6.71 8.71501C6.51 8.91508 6.26 9.00511 6 9.00511C5.74 9.00511 5.49 8.90508 5.29 8.71501C4.9 8.32489 4.9 7.69468 5.29 7.30456L6.58 6.01413H4.99C4.44 6.01413 3.99 5.56399 3.99 5.01381L4 4.9938ZM14.08 5.37393C14.13 5.49397 14.2 5.604 14.3 5.70403L17.3 8.70501C17.5 8.90508 17.75 8.99511 18.01 8.99511C18.27 8.99511 18.52 8.89507 18.72 8.70501C19.11 8.31488 19.11 7.68468 18.72 7.29455L17.43 6.00413H19.02C19.57 6.00413 20.02 5.55399 20.02 5.00381C20.02 4.45363 19.57 4.00348 19.02 4.00348H17.43L18.72 2.71306C19.11 2.32293 19.11 1.69273 18.72 1.3026C18.33 0.912471 17.7 0.912471 17.31 1.3026L14.31 4.30358C14.22 4.39361 14.14 4.50364 14.09 4.63368C13.99 4.87376 13.99 5.15385 14.09 5.39393L14.08 5.37393ZM22 14.9971V20.999C22 22.6496 20.65 24 19 24H5C3.35 24 2 22.6496 2 20.999V14.9971C2 13.3465 3.35 11.9961 5 11.9961H19C20.65 11.9961 22 13.3465 22 14.9971ZM19 13.9967H16V16.9977H20V14.9971C20 14.4469 19.55 13.9967 19 13.9967ZM14 16.9977V13.9967H10V16.9977H14ZM10 18.9984V21.9993H14V18.9984H10ZM4 14.9971V16.9977H8V13.9967H5C4.45 13.9967 4 14.4469 4 14.9971ZM5 21.9993H8V18.9984H4V20.999C4 21.5492 4.45 21.9993 5 21.9993ZM20 20.999V18.9984H16V21.9993H19C19.55 21.9993 20 21.5492 20 20.999Z\"/></svg>";

var smiley_rate10_24x24$1 = "<svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M12.01 23C6.85721 23 1.15412 19.9621 0.0134987 13.1669C-0.0765501 12.6272 0.293651 12.1076 0.833944 12.0177C1.38424 11.9277 1.89452 12.2975 1.98457 12.8371C2.92508 18.4732 7.69767 20.9914 12 20.9914C16.3023 20.9914 21.0749 18.4732 22.0154 12.8371C22.1055 12.2975 22.6158 11.9277 23.1661 12.0177C23.7063 12.1076 24.0765 12.6272 23.9865 13.1669C22.8559 19.9521 17.1428 23 11.99 23H12.01ZM21.165 6.15177C22.3056 5.01257 22.3056 3.16386 21.165 2.02465L21.0049 1.85477C19.9143 0.765533 18.1633 0.725561 17.0227 1.71487C15.8821 0.715568 14.1312 0.765533 13.0406 1.85477L12.8705 2.01466C11.7299 3.15386 11.7299 5.00257 12.8705 6.14178L17.0227 10.2889L21.175 6.14178L21.165 6.15177ZM15.742 3.27378L17.0127 4.54289L18.2834 3.27378C18.6436 2.91403 19.2239 2.91403 19.5841 3.27378L19.7442 3.43367C20.1044 3.79342 20.1044 4.37301 19.7442 4.73276L17.0127 7.46086L14.2812 4.73276C13.921 4.37301 13.921 3.79342 14.2812 3.43367L14.4413 3.27378C14.6214 3.09391 14.8515 3.00397 15.0917 3.00397C15.3318 3.00397 15.5619 3.09391 15.742 3.27378ZM11.1595 6.15177C12.3002 5.01257 12.3002 3.16386 11.1595 2.02465L10.9995 1.85477C9.90886 0.765533 8.15792 0.725561 7.0173 1.71487C5.87668 0.715568 4.12573 0.765533 3.03514 1.85477L2.86505 2.01466C1.72443 3.15386 1.72443 5.00257 2.86505 6.14178L7.0173 10.2889L11.1695 6.14178L11.1595 6.15177ZM5.7366 3.27378L7.00729 4.54289L8.27798 3.27378C8.63818 2.91403 9.21849 2.91403 9.57869 3.27378L9.73877 3.43367C10.099 3.79342 10.099 4.37301 9.73877 4.73276L7.00729 7.46086L4.27581 4.73276C3.91562 4.37301 3.91562 3.79342 4.27581 3.43367L4.4359 3.27378C4.61599 3.09391 4.84612 3.00397 5.08625 3.00397C5.32638 3.00397 5.5565 3.09391 5.7366 3.27378Z\"/></svg>";

var smiley_rate2_24x24$1 = "<svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><g clip-path=\"url(#clip0_15894_140103)\"><path d=\"M4.88291 4.51001C4.47291 4.51001 4.08291 4.25001 3.94291 3.84001C3.76291 3.32001 4.03291 2.75001 4.55291 2.57001L8.32291 1.25001C8.84291 1.06001 9.41291 1.34001 9.59291 1.86001C9.77291 2.38001 9.50291 2.95001 8.98291 3.13001L5.20291 4.45001C5.09291 4.49001 4.98291 4.51001 4.87291 4.51001H4.88291ZM19.8129 3.89001C20.0229 3.38001 19.7729 2.79001 19.2629 2.59001L15.5529 1.07001C15.0429 0.860007 14.4529 1.11001 14.2529 1.62001C14.0429 2.13001 14.2929 2.72001 14.8029 2.92001L18.5029 4.43001C18.6229 4.48001 18.7529 4.50001 18.8829 4.50001C19.2729 4.50001 19.6529 4.27001 19.8129 3.88001V3.89001ZM3.50291 6.00001C2.64291 6.37001 1.79291 6.88001 1.00291 7.48001C0.79291 7.64001 0.64291 7.87001 0.59291 8.14001C0.48291 8.73001 0.87291 9.29001 1.45291 9.40001C2.04291 9.51001 2.60291 9.12001 2.71291 8.54001C2.87291 7.69001 3.12291 6.83001 3.50291 5.99001V6.00001ZM21.0429 8.55001C21.6029 10.48 24.2429 8.84001 22.7529 7.48001C21.9629 6.88001 21.1129 6.37001 20.2529 6.00001C20.6329 6.84001 20.8829 7.70001 21.0429 8.55001ZM21.5729 13.2C21.2529 14.2 22.5429 15.09 23.3629 14.39C23.8529 14 23.9229 13.29 23.5429 12.81C21.7429 10.67 22.1329 10.55 21.5829 13.2H21.5729ZM1.75291 11C1.22291 11.79 -0.14709 12.64 0.0129102 13.75C0.15291 14.36 0.75291 14.74 1.35291 14.6C2.98291 14.1 1.80291 12.22 1.75291 11ZM19.8829 17C19.8829 13.14 16.2929 10 11.8829 10C7.47291 10 3.88291 13.14 3.88291 17C3.88291 20.86 7.47291 24 11.8829 24C16.2929 24 19.8829 20.86 19.8829 17ZM17.8829 17C17.8829 19.76 15.1929 22 11.8829 22C8.57291 22 5.88291 19.76 5.88291 17C5.88291 14.24 8.57291 12 11.8829 12C15.1929 12 17.8829 14.24 17.8829 17Z\"/></g><defs><clipPath id=\"clip0_15894_140103\"><rect width=\"24\" height=\"24\" fill=\"white\"/></clipPath></defs></svg>";

var smiley_rate3_24x24$1 = "<svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M7.01915 7C6.46961 7 6.01998 6.55 6.01998 6V2C6.01998 1.45 6.46961 1 7.01915 1C7.56869 1 8.01832 1.45 8.01832 2V6C8.01832 6.55 7.56869 7 7.01915 7ZM18.01 6V2C18.01 1.45 17.5604 1 17.0108 1C16.4613 1 16.0117 1.45 16.0117 2V6C16.0117 6.55 16.4613 7 17.0108 7C17.5604 7 18.01 6.55 18.01 6ZM16.4213 21.58L18.01 19.99L19.2989 21.28C19.6886 21.67 20.3181 21.67 20.7077 21.28C21.0974 20.89 21.0974 20.26 20.7077 19.87L19.4188 18.58C18.6395 17.8 17.3705 17.8 16.5912 18.58L15.0025 20.17L13.4138 18.58C12.6345 17.8 11.3655 17.8 10.5862 18.58L8.9975 20.17L7.40883 18.58C6.62948 17.8 5.36053 17.8 4.58118 18.58L3.29226 19.87C2.90258 20.26 2.90258 20.89 3.29226 21.28C3.68193 21.67 4.31141 21.67 4.70108 21.28L5.99001 19.99L7.57868 21.58C8.35803 22.36 9.62698 22.36 10.4063 21.58L11.995 19.99L13.5837 21.58C13.9734 21.97 14.4829 22.16 14.9925 22.16C15.5021 22.16 16.0117 21.97 16.4013 21.58H16.4213Z\"/></svg>";

var smiley_rate4_24x24$1 = "<svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M7.06927 7C6.51927 7 6.06927 6.55 6.06927 6V2C6.06927 1.45 6.51927 1 7.06927 1C7.61927 1 8.06927 1.45 8.06927 2V6C8.06927 6.55 7.61927 7 7.06927 7ZM18.0693 6V2C18.0693 1.45 17.6193 1 17.0693 1C16.5193 1 16.0693 1.45 16.0693 2V6C16.0693 6.55 16.5193 7 17.0693 7C17.6193 7 18.0693 6.55 18.0693 6ZM22.5693 21.9C23.0693 21.66 23.2793 21.07 23.0393 20.57C21.1093 16.52 16.9093 14 12.0693 14C7.22927 14 3.02927 16.52 1.09927 20.57C0.859273 21.07 1.06927 21.67 1.56927 21.9C2.06927 22.14 2.65927 21.93 2.89927 21.43C4.49927 18.08 8.00927 16 12.0593 16C16.1093 16 19.6293 18.08 21.2193 21.43C21.3893 21.79 21.7493 22 22.1193 22C22.2593 22 22.4093 21.97 22.5493 21.9H22.5693Z\"/></svg>";

var smiley_rate5_24x24$1 = "<svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M7.00572 7C6.45572 7 6.00572 6.55 6.00572 6V2C6.00572 1.45 6.45572 1 7.00572 1C7.55572 1 8.00572 1.45 8.00572 2V6C8.00572 6.55 7.55572 7 7.00572 7ZM18.0057 6V2C18.0057 1.45 17.5557 1 17.0057 1C16.4557 1 16.0057 1.45 16.0057 2V6C16.0057 6.55 16.4557 7 17.0057 7C17.5557 7 18.0057 6.55 18.0057 6ZM19.9457 21.33C20.1257 20.81 19.8557 20.24 19.3357 20.05C14.5457 18.35 9.45572 18.35 4.66572 20.05C4.14572 20.23 3.87572 20.81 4.05572 21.33C4.23572 21.85 4.80572 22.12 5.33572 21.94C9.69572 20.4 14.3057 20.4 18.6657 21.94C18.7757 21.98 18.8857 22 18.9957 22C19.4057 22 19.7957 21.74 19.9357 21.33H19.9457Z\"/></svg>";

var smiley_rate6_24x24$1 = "<svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M7 7C6.45 7 6 6.55 6 6V2C6 1.45 6.45 1 7 1C7.55 1 8 1.45 8 2V6C8 6.55 7.55 7 7 7ZM18 6V2C18 1.45 17.55 1 17 1C16.45 1 16 1.45 16 2V6C16 6.55 16.45 7 17 7C17.55 7 18 6.55 18 6ZM21 21C21 20.45 20.55 20 20 20H4C3.45 20 3 20.45 3 21C3 21.55 3.45 22 4 22H20C20.55 22 21 21.55 21 21Z\"/></svg>";

var smiley_rate7_24x24$1 = "<svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M12.0022 23.99C11.452 23.99 11.0018 23.5402 11.0018 22.9904C11.0018 22.4407 11.452 21.9909 12.0022 21.9909C16.3137 21.9909 21.0755 19.472 22.0158 13.8344C22.1058 13.2947 22.616 12.9248 23.1662 13.0148C23.7064 13.1047 24.0765 13.6245 23.9865 14.1643C22.8561 20.9513 17.144 24 11.9922 24L12.0022 23.99ZM8.00072 5.99783V1.99957C8.00072 1.4498 7.55056 1 7.00036 1C6.45016 1 6 1.4498 6 1.99957V5.99783C6 6.54759 6.45016 6.99739 7.00036 6.99739C7.55056 6.99739 8.00072 6.54759 8.00072 5.99783ZM18.0043 5.99783V1.99957C18.0043 1.4498 17.5542 1 17.004 1C16.4538 1 16.0036 1.4498 16.0036 1.99957V5.99783C16.0036 6.54759 16.4538 6.99739 17.004 6.99739C17.5542 6.99739 18.0043 6.54759 18.0043 5.99783Z\"/></svg>";

var smiley_rate8_24x24$1 = "<svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M12.01 24C6.85721 24 1.15412 20.96 0.0134987 14.16C-0.0765501 13.62 0.293651 13.1 0.833944 13.01C1.38424 12.92 1.89452 13.29 1.98457 13.83C2.92508 19.47 7.69767 21.99 12 21.99C16.3023 21.99 21.0749 19.47 22.0154 13.83C22.1055 13.29 22.6158 12.92 23.1661 13.01C23.7063 13.1 24.0765 13.62 23.9865 14.16C22.8559 20.95 17.1428 24 11.99 24H12.01ZM8.00783 6V2C8.00783 1.45 7.55759 1 7.00729 1C6.45699 1 6.00675 1.45 6.00675 2V6C6.00675 6.55 6.45699 7 7.00729 7C7.55759 7 8.00783 6.55 8.00783 6ZM18.0133 6V2C18.0133 1.45 17.563 1 17.0127 1C16.4624 1 16.0122 1.45 16.0122 2V6C16.0122 6.55 16.4624 7 17.0127 7C17.563 7 18.0133 6.55 18.0133 6Z\"/></svg>";

var smiley_rate9_24x24$1 = "<svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M12.01 24C6.85767 24 1.15509 20.96 0.0145752 14.16C-0.0354475 13.87 0.0445888 13.57 0.234675 13.35C0.424761 13.13 0.704888 13 0.995019 13H23.005C23.2951 13 23.5752 13.13 23.7653 13.35C23.9554 13.57 24.0354 13.87 23.9854 14.16C22.8549 20.95 17.1423 24 11.99 24H12.01ZM2.25559 15C3.61621 19.82 8.0182 22 12.01 22C16.0018 22 20.4038 19.82 21.7644 15H2.25559ZM8.00819 6V2C8.00819 1.45 7.55799 1 7.00774 1C6.45749 1 6.00729 1.45 6.00729 2V6C6.00729 6.55 6.45749 7 7.00774 7C7.55799 7 8.00819 6.55 8.00819 6ZM18.0127 6V2C18.0127 1.45 17.5625 1 17.0123 1C16.462 1 16.0118 1.45 16.0118 2V6C16.0118 6.55 16.462 7 17.0123 7C17.5625 7 18.0127 6.55 18.0127 6Z\"/></svg>";

const icons$1 = {
  "modernbooleancheckchecked": modernbooleancheckchecked$1,
  "modernbooleancheckind": modernbooleancheckind$1,
  "modernbooleancheckunchecked": modernbooleancheckunchecked$1,
  "moderncheck": moderncheck$1,
  "modernradio": modernradio$1,
  "progressbutton": progressbutton$1,
  "removefile": removefile$1,
  "timercircle": timercircle$1,
  "add-24x24": add_24x24$1,
  "arrowleft-16x16": arrowleft_16x16$1,
  "arrowright-16x16": arrowright_16x16$1,
  "camera-24x24": camera_24x24$1,
  "camera-32x32": camera_32x32$1,
  "cancel-24x24": cancel_24x24$1,
  "check-16x16": check_16x16$1,
  "check-24x24": check_24x24$1,
  "chevrondown-24x24": chevrondown_24x24$1,
  "chevronright-16x16": chevronright_16x16$1,
  "clear-16x16": clear_16x16$1,
  "clear-24x24": clear_24x24$1,
  "close-16x16": close_16x16$1,
  "close-24x24": close_24x24$1,
  "collapse-16x16": collapse_16x16$1,
  "collapsedetails-16x16": collapsedetails_16x16$1,
  "delete-16x16": delete_16x16$1,
  "delete-24x24": delete_24x24$1,
  "drag-24x24": drag_24x24$1,
  "draghorizontal-24x16": draghorizontal_24x16$1,
  "editsmall-16x16": editsmall_16x16$1,
  "expand-16x16": expand_16x16$1,
  "expanddetails-16x16": expanddetails_16x16$1,
  "file-72x72": file_72x72$1,
  "flip-24x24": flip_24x24$1,
  "folder-24x24": folder_24x24$1,
  "fullsize-16x16": fullsize_16x16$1,
  "image-48x48": image_48x48$1,
  "loading-48x48": loading_48x48$1,
  "maximize-16x16": maximize_16x16$1,
  "minimize-16x16": minimize_16x16$1,
  "more-24x24": more_24x24$1,
  "navmenu-24x24": navmenu_24x24$1,
  "noimage-48x48": noimage_48x48$1,
  "ranking-arrows": ranking_arrows$1,
  "rankingundefined-16x16": rankingundefined_16x16$1,
  "rating-star-2": rating_star_2$1,
  "rating-star-small-2": rating_star_small_2$1,
  "rating-star-small": rating_star_small$1,
  "rating-star": rating_star$1,
  "reorder-24x24": reorder_24x24$1,
  "restoredown-16x16": restoredown_16x16$1,
  "search-24x24": search_24x24$1,
  "smiley-rate1-24x24": smiley_rate1_24x24$1,
  "smiley-rate10-24x24": smiley_rate10_24x24$1,
  "smiley-rate2-24x24": smiley_rate2_24x24$1,
  "smiley-rate3-24x24": smiley_rate3_24x24$1,
  "smiley-rate4-24x24": smiley_rate4_24x24$1,
  "smiley-rate5-24x24": smiley_rate5_24x24$1,
  "smiley-rate6-24x24": smiley_rate6_24x24$1,
  "smiley-rate7-24x24": smiley_rate7_24x24$1,
  "smiley-rate8-24x24": smiley_rate8_24x24$1,
  "smiley-rate9-24x24": smiley_rate9_24x24$1,
};

var modernbooleancheckchecked = "<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 24 24\"><polygon points=\"19,10 14,10 14,5 10,5 10,10 5,10 5,14 10,14 10,19 14,19 14,14 19,14 \"/></svg>";

var modernbooleancheckind = "<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 24 24\"><path d=\"M22,0H2C0.9,0,0,0.9,0,2v20c0,1.1,0.9,2,2,2h20c1.1,0,2-0.9,2-2V2C24,0.9,23.1,0,22,0z M21,18L6,3h15V18z M3,6l15,15H3V6z\"/></svg>";

var modernbooleancheckunchecked = "<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 24 24\"><rect x=\"5\" y=\"10\" width=\"14\" height=\"4\"/></svg>";

var moderncheck = "<svg viewBox=\"0 0 24 24\"><path d=\"M5,13l2-2l3,3l7-7l2,2l-9,9L5,13z\"/></svg>";

var modernradio = "<svg viewBox=\"-12 -12 24 24\"><circle r=\"6\" cx=\"0\" cy=\"0\"/></svg>";

var progressbutton = "<svg viewBox=\"0 0 10 10\"><polygon points=\"2,2 0,4 5,9 10,4 8,2 5,5 \"/></svg>";

var removefile = "<svg viewBox=\"0 0 16 16\"><path d=\"M8,2C4.7,2,2,4.7,2,8s2.7,6,6,6s6-2.7,6-6S11.3,2,8,2z M11,10l-1,1L8,9l-2,2l-1-1l2-2L5,6l1-1l2,2l2-2l1,1L9,8 L11,10z\"/></svg>";

var timercircle = "<svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" viewBox=\"0 0 160 160\"><circle cx=\"80\" cy=\"80\" r=\"70\" style=\"stroke:var(--sd-timer-stroke-background-color);stroke-width:var(--sd-timer-stroke-background-width)\" stroke-dasharray=\"none\" stroke-dashoffset=\"none\"/><circle cx=\"80\" cy=\"80\" r=\"70\"/></svg>";

var add_24x24 = "<svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M15.75 12C15.75 12.41 15.41 12.75 15 12.75H12.75V15C12.75 15.41 12.41 15.75 12 15.75C11.59 15.75 11.25 15.41 11.25 15V12.75H9C8.59 12.75 8.25 12.41 8.25 12C8.25 11.59 8.59 11.25 9 11.25H11.25V9C11.25 8.59 11.59 8.25 12 8.25C12.41 8.25 12.75 8.59 12.75 9V11.25H15C15.41 11.25 15.75 11.59 15.75 12ZM21.75 12C21.75 17.38 17.38 21.75 12 21.75C6.62 21.75 2.25 17.38 2.25 12C2.25 6.62 6.62 2.25 12 2.25C17.38 2.25 21.75 6.62 21.75 12ZM20.25 12C20.25 7.45 16.55 3.75 12 3.75C7.45 3.75 3.75 7.45 3.75 12C3.75 16.55 7.45 20.25 12 20.25C16.55 20.25 20.25 16.55 20.25 12Z\"/></svg>";

var arrowleft_16x16 = "<svg viewBox=\"0 0 16 16\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M14.7475 7.9975C14.7475 8.4075 14.4075 8.7475 13.9975 8.7475H3.8075L7.5275 12.4675C7.8175 12.7575 7.8175 13.2375 7.5275 13.5275C7.3775 13.6775 7.1875 13.7475 6.9975 13.7475C6.8075 13.7475 6.6175 13.6775 6.4675 13.5275L1.4675 8.5275C1.1775 8.2375 1.1775 7.7575 1.4675 7.4675L6.4675 2.4675C6.7575 2.1775 7.2375 2.1775 7.5275 2.4675C7.8175 2.7575 7.8175 3.2375 7.5275 3.5275L3.8075 7.2475H13.9975C14.4075 7.2475 14.7475 7.5875 14.7475 7.9975Z\"/></svg>";

var arrowright_16x16 = "<svg viewBox=\"0 0 16 16\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M14.53 8.5275L9.53 13.5275C9.38 13.6775 9.19 13.7475 9 13.7475C8.81 13.7475 8.62 13.6775 8.47 13.5275C8.18 13.2375 8.18 12.7575 8.47 12.4675L12.19 8.7475H2C1.59 8.7475 1.25 8.4075 1.25 7.9975C1.25 7.5875 1.59 7.2475 2 7.2475H12.19L8.47 3.5275C8.18 3.2375 8.18 2.7575 8.47 2.4675C8.76 2.1775 9.24 2.1775 9.53 2.4675L14.53 7.4675C14.82 7.7575 14.82 8.2375 14.53 8.5275Z\"/></svg>";

var camera_24x24 = "<svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M19.19 4.25H17.12C16.72 4.25 16.35 4.03 16.17 3.67C15.73 2.8 14.86 2.25 13.88 2.25H10.12C9.14 2.25 8.27 2.79 7.83 3.67C7.65 4.03 7.29 4.25 6.88 4.25H4.81C3.4 4.25 2.25 5.4 2.25 6.81V18.19C2.25 19.6 3.4 20.75 4.81 20.75H19.19C20.6 20.75 21.75 19.6 21.75 18.19V6.81C21.75 5.4 20.6 4.25 19.19 4.25ZM20.25 18.19C20.25 18.77 19.78 19.25 19.19 19.25H4.81C4.23 19.25 3.75 18.78 3.75 18.19V6.81C3.75 6.23 4.22 5.75 4.81 5.75H6.88C7.86 5.75 8.73 5.21 9.17 4.33C9.35 3.97 9.71 3.75 10.12 3.75H13.88C14.28 3.75 14.65 3.97 14.83 4.33C15.27 5.2 16.14 5.75 17.12 5.75H19.19C19.77 5.75 20.25 6.22 20.25 6.81V18.19ZM12 6.25C8.83 6.25 6.25 8.83 6.25 12C6.25 15.17 8.83 17.75 12 17.75C15.17 17.75 17.75 15.17 17.75 12C17.75 8.83 15.17 6.25 12 6.25ZM12 16.25C9.66 16.25 7.75 14.34 7.75 12C7.75 9.66 9.66 7.75 12 7.75C14.34 7.75 16.25 9.66 16.25 12C16.25 14.34 14.34 16.25 12 16.25ZM14.75 12C14.75 13.52 13.52 14.75 12 14.75C11.59 14.75 11.25 14.41 11.25 14C11.25 13.59 11.59 13.25 12 13.25C12.69 13.25 13.25 12.69 13.25 12C13.25 11.59 13.59 11.25 14 11.25C14.41 11.25 14.75 11.59 14.75 12Z\"/></svg>";

var camera_32x32 = "<svg viewBox=\"0 0 32 32\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M25 7.25H22.19C21.73 7.25 21.31 7 21.09 6.59L20.89 6.22C20.23 5.01 18.97 4.25 17.59 4.25H14.41C13.03 4.25 11.77 5 11.11 6.22L10.91 6.6C10.69 7 10.27 7.26 9.81 7.26H7C4.93 7.26 3.25 8.94 3.25 11.01V24.01C3.25 26.08 4.93 27.76 7 27.76H25C27.07 27.76 28.75 26.08 28.75 24.01V11C28.75 8.93 27.07 7.25 25 7.25ZM27.25 24C27.25 25.24 26.24 26.25 25 26.25H7C5.76 26.25 4.75 25.24 4.75 24V11C4.75 9.76 5.76 8.75 7 8.75H9.81C10.82 8.75 11.75 8.2 12.23 7.31L12.43 6.94C12.82 6.21 13.58 5.76 14.41 5.76H17.59C18.42 5.76 19.18 6.21 19.57 6.94L19.77 7.31C20.25 8.2 21.18 8.76 22.19 8.76H25C26.24 8.76 27.25 9.77 27.25 11.01V24.01V24ZM16 10.25C12.28 10.25 9.25 13.28 9.25 17C9.25 20.72 12.28 23.75 16 23.75C19.72 23.75 22.75 20.72 22.75 17C22.75 13.28 19.72 10.25 16 10.25ZM16 22.25C13.11 22.25 10.75 19.89 10.75 17C10.75 14.11 13.11 11.75 16 11.75C18.89 11.75 21.25 14.11 21.25 17C21.25 19.89 18.89 22.25 16 22.25ZM19.75 17C19.75 19.07 18.07 20.75 16 20.75C15.59 20.75 15.25 20.41 15.25 20C15.25 19.59 15.59 19.25 16 19.25C17.24 19.25 18.25 18.24 18.25 17C18.25 16.59 18.59 16.25 19 16.25C19.41 16.25 19.75 16.59 19.75 17Z\"/></svg>";

var cancel_24x24 = "<svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M12.8099 11.75L15.2799 9.28C15.5699 8.99 15.5699 8.51 15.2799 8.22C14.9899 7.93 14.5099 7.93 14.2199 8.22L11.7499 10.69L9.27994 8.22C8.98994 7.93 8.50994 7.93 8.21994 8.22C7.92994 8.51 7.92994 8.99 8.21994 9.28L10.6899 11.75L8.21994 14.22C7.92994 14.51 7.92994 14.99 8.21994 15.28C8.36994 15.43 8.55994 15.5 8.74994 15.5C8.93994 15.5 9.12994 15.43 9.27994 15.28L11.7499 12.81L14.2199 15.28C14.3699 15.43 14.5599 15.5 14.7499 15.5C14.9399 15.5 15.1299 15.43 15.2799 15.28C15.5699 14.99 15.5699 14.51 15.2799 14.22L12.8099 11.75Z\"/></svg>";

var check_16x16 = "<svg viewBox=\"0 0 16 16\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M14.0275 5.0275L6.5275 12.5275C6.3775 12.6775 6.1875 12.7475 5.9975 12.7475C5.8075 12.7475 5.6175 12.6775 5.4675 12.5275L2.4675 9.5275C2.1775 9.2375 2.1775 8.7575 2.4675 8.4675C2.7575 8.1775 3.2375 8.1775 3.5275 8.4675L5.9975 10.9375L12.9675 3.9675C13.2575 3.6775 13.7375 3.6775 14.0275 3.9675C14.3175 4.2575 14.3175 4.7375 14.0275 5.0275Z\"/></svg>";

var check_24x24 = "<svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M19.5275 7.5275L9.5275 17.5275C9.3775 17.6775 9.1875 17.7475 8.9975 17.7475C8.8075 17.7475 8.6175 17.6775 8.4675 17.5275L4.4675 13.5275C4.1775 13.2375 4.1775 12.7575 4.4675 12.4675C4.7575 12.1775 5.2375 12.1775 5.5275 12.4675L8.9975 15.9375L18.4675 6.4675C18.7575 6.1775 19.2375 6.1775 19.5275 6.4675C19.8175 6.7575 19.8175 7.2375 19.5275 7.5275Z\"/></svg>";

var chevrondown_24x24 = "<svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M16.5275 10.5275L12.5275 14.5275C12.3775 14.6775 12.1875 14.7475 11.9975 14.7475C11.8075 14.7475 11.6175 14.6775 11.4675 14.5275L7.4675 10.5275C7.1775 10.2375 7.1775 9.7575 7.4675 9.4675C7.7575 9.1775 8.2375 9.1775 8.5275 9.4675L11.9975 12.9375L15.4675 9.4675C15.7575 9.1775 16.2375 9.1775 16.5275 9.4675C16.8175 9.7575 16.8175 10.2375 16.5275 10.5275Z\"/></svg>";

var chevronright_16x16 = "<svg viewBox=\"0 0 16 16\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M11.35 8.34627L7.35 12.3463C7.25 12.4463 7.12 12.4963 7 12.4963C6.88 12.4963 6.74 12.4463 6.65 12.3463C6.45 12.1463 6.45 11.8363 6.65 11.6363L10.3 7.98627L6.65 4.34627C6.45 4.15627 6.45 3.83627 6.65 3.64627C6.85 3.45627 7.16 3.44627 7.35 3.64627L11.35 7.64627C11.55 7.84627 11.55 8.15627 11.35 8.35627V8.34627Z\"/></svg>";

var clear_16x16 = "<svg viewBox=\"0 0 16 16\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M12.35 11.65C12.55 11.85 12.55 12.16 12.35 12.36C12.25 12.46 12.12 12.51 12 12.51C11.88 12.51 11.74 12.46 11.65 12.36L8 8.71L4.35 12.36C4.25 12.46 4.12 12.51 4 12.51C3.88 12.51 3.74 12.46 3.65 12.36C3.45 12.16 3.45 11.85 3.65 11.65L7.3 8L3.65 4.35C3.45 4.16 3.45 3.84 3.65 3.65C3.85 3.46 4.16 3.45 4.35 3.65L8 7.3L11.65 3.65C11.85 3.45 12.16 3.45 12.36 3.65C12.56 3.85 12.56 4.16 12.36 4.36L8.71 8.01L12.36 11.66L12.35 11.65Z\"/></svg>";

var clear_24x24 = "<svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M20.12 10.9325C20.64 10.4125 20.93 9.7225 20.93 8.9925C20.93 8.2625 20.64 7.5725 20.12 7.0525L16.95 3.8825C15.88 2.8125 14.13 2.8125 13.06 3.8825L3.88 13.0525C3.36 13.5725 3.07 14.2625 3.07 14.9925C3.07 15.7225 3.36 16.4125 3.88 16.9325L5.64 18.6925C6.57 19.6225 7.78 20.0825 9 20.0825C10.22 20.0825 11.43 19.6225 12.36 18.6925L20.12 10.9325ZM14.12 4.9325C14.36 4.6925 14.67 4.5625 15 4.5625C15.33 4.5625 15.65 4.6925 15.88 4.9325L19.05 8.1025C19.54 8.5925 19.54 9.3825 19.05 9.8725L12.99 15.9325L8.05 10.9925L14.12 4.9325ZM6.7 17.6325L4.94 15.8725C4.45 15.3825 4.45 14.5925 4.94 14.1025L7 12.0425L11.94 16.9825L11.3 17.6225C10.07 18.8525 7.93 18.8525 6.7 17.6225V17.6325ZM22.75 20.9925C22.75 21.4025 22.41 21.7425 22 21.7425H14C13.59 21.7425 13.25 21.4025 13.25 20.9925C13.25 20.5825 13.59 20.2425 14 20.2425H22C22.41 20.2425 22.75 20.5825 22.75 20.9925ZM4.75 20.9925C4.75 21.4025 4.41 21.7425 4 21.7425H2C1.59 21.7425 1.25 21.4025 1.25 20.9925C1.25 20.5825 1.59 20.2425 2 20.2425H4C4.41 20.2425 4.75 20.5825 4.75 20.9925Z\"/></svg>";

var close_16x16 = "<svg viewBox=\"0 0 16 16\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M13.5275 12.4675C13.8175 12.7575 13.8175 13.2375 13.5275 13.5275C13.3775 13.6775 13.1875 13.7475 12.9975 13.7475C12.8075 13.7475 12.6175 13.6775 12.4675 13.5275L7.9975 9.0575L3.5275 13.5275C3.3775 13.6775 3.1875 13.7475 2.9975 13.7475C2.8075 13.7475 2.6175 13.6775 2.4675 13.5275C2.1775 13.2375 2.1775 12.7575 2.4675 12.4675L6.9375 7.9975L2.4675 3.5275C2.1775 3.2375 2.1775 2.7575 2.4675 2.4675C2.7575 2.1775 3.2375 2.1775 3.5275 2.4675L7.9975 6.9375L12.4675 2.4675C12.7575 2.1775 13.2375 2.1775 13.5275 2.4675C13.8175 2.7575 13.8175 3.2375 13.5275 3.5275L9.0575 7.9975L13.5275 12.4675Z\"/></svg>";

var close_24x24 = "<svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M19.5275 18.4675C19.8175 18.7575 19.8175 19.2375 19.5275 19.5275C19.3775 19.6775 19.1875 19.7475 18.9975 19.7475C18.8075 19.7475 18.6175 19.6775 18.4675 19.5275L11.9975 13.0575L5.5275 19.5275C5.3775 19.6775 5.1875 19.7475 4.9975 19.7475C4.8075 19.7475 4.6175 19.6775 4.4675 19.5275C4.1775 19.2375 4.1775 18.7575 4.4675 18.4675L10.9375 11.9975L4.4675 5.5275C4.1775 5.2375 4.1775 4.7575 4.4675 4.4675C4.7575 4.1775 5.2375 4.1775 5.5275 4.4675L11.9975 10.9375L18.4675 4.4675C18.7575 4.1775 19.2375 4.1775 19.5275 4.4675C19.8175 4.7575 19.8175 5.2375 19.5275 5.5275L13.0575 11.9975L19.5275 18.4675Z\"/></svg>";

var collapse_16x16 = "<svg viewBox=\"0 0 16 16\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M11.75 8C11.75 8.41 11.41 8.75 11 8.75H5C4.59 8.75 4.25 8.41 4.25 8C4.25 7.59 4.59 7.25 5 7.25H11C11.41 7.25 11.75 7.59 11.75 8Z\"/></svg>";

var collapsedetails_16x16 = "<svg viewBox=\"0 0 16 16\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M11.75 8C11.75 8.41 11.41 8.75 11 8.75H5C4.59 8.75 4.25 8.41 4.25 8C4.25 7.59 4.59 7.25 5 7.25H11C11.41 7.25 11.75 7.59 11.75 8Z\"/></svg>";

var delete_16x16 = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\"><path d=\"M13 3.25H10.75V3C10.75 2.04 9.96 1.25 9 1.25H7C6.04 1.25 5.25 2.04 5.25 3V3.25H3C2.59 3.25 2.25 3.59 2.25 4C2.25 4.41 2.59 4.75 3 4.75H3.25V13C3.25 13.96 4.04 14.75 5 14.75H11C11.96 14.75 12.75 13.96 12.75 13V4.75H13C13.41 4.75 13.75 4.41 13.75 4C13.75 3.59 13.41 3.25 13 3.25ZM6.75 3C6.75 2.86 6.86 2.75 7 2.75H9C9.14 2.75 9.25 2.86 9.25 3V3.25H6.75V3ZM11.25 13C11.25 13.14 11.14 13.25 11 13.25H5C4.86 13.25 4.75 13.14 4.75 13V4.75H11.25V13ZM9.25 6.25C9.66 6.25 10 6.59 10 7V11C10 11.41 9.66 11.75 9.25 11.75C8.84 11.75 8.5 11.41 8.5 11V7C8.5 6.59 8.84 6.25 9.25 6.25ZM7.5 7V11C7.5 11.41 7.16 11.75 6.75 11.75C6.34 11.75 6 11.41 6 11V7C6 6.59 6.34 6.25 6.75 6.25C7.16 6.25 7.5 6.59 7.5 7Z\"/></svg>";

var delete_24x24 = "<svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M12.75 9V17C12.75 17.41 12.41 17.75 12 17.75C11.59 17.75 11.25 17.41 11.25 17V9C11.25 8.59 11.59 8.25 12 8.25C12.41 8.25 12.75 8.59 12.75 9ZM14.25 9V17C14.25 17.41 14.59 17.75 15 17.75C15.41 17.75 15.75 17.41 15.75 17V9C15.75 8.59 15.41 8.25 15 8.25C14.59 8.25 14.25 8.59 14.25 9ZM9 8.25C8.59 8.25 8.25 8.59 8.25 9V17C8.25 17.41 8.59 17.75 9 17.75C9.41 17.75 9.75 17.41 9.75 17V9C9.75 8.59 9.41 8.25 9 8.25ZM20.75 6C20.75 6.41 20.41 6.75 20 6.75H18.75V18C18.75 19.52 17.52 20.75 16 20.75H8C6.48 20.75 5.25 19.52 5.25 18V6.75H4C3.59 6.75 3.25 6.41 3.25 6C3.25 5.59 3.59 5.25 4 5.25H8.25V4C8.25 3.04 9.04 2.25 10 2.25H14C14.96 2.25 15.75 3.04 15.75 4V5.25H20C20.41 5.25 20.75 5.59 20.75 6ZM9.75 5.25H14.25V4C14.25 3.86 14.14 3.75 14 3.75H10C9.86 3.75 9.75 3.86 9.75 4V5.25ZM17.25 6.75H6.75V18C6.75 18.69 7.31 19.25 8 19.25H16C16.69 19.25 17.25 18.69 17.25 18V6.75Z\"/></svg>";

var drag_24x24 = "<svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M14.5 8.75C15.19 8.75 15.75 8.19 15.75 7.5C15.75 6.81 15.19 6.25 14.5 6.25C13.81 6.25 13.25 6.81 13.25 7.5C13.25 8.19 13.81 8.75 14.5 8.75ZM14.5 7.25C14.64 7.25 14.75 7.36 14.75 7.5C14.75 7.78 14.25 7.78 14.25 7.5C14.25 7.36 14.36 7.25 14.5 7.25ZM9.5 6.25C8.81 6.25 8.25 6.81 8.25 7.5C8.25 8.19 8.81 8.75 9.5 8.75C10.19 8.75 10.75 8.19 10.75 7.5C10.75 6.81 10.19 6.25 9.5 6.25ZM9.25 7.5C9.25 7.36 9.36 7.25 9.5 7.25C9.64 7.25 9.75 7.36 9.75 7.5C9.75 7.78 9.25 7.78 9.25 7.5ZM14.5 11.25C13.81 11.25 13.25 11.81 13.25 12.5C13.25 13.19 13.81 13.75 14.5 13.75C15.19 13.75 15.75 13.19 15.75 12.5C15.75 11.81 15.19 11.25 14.5 11.25ZM14.25 12.5C14.25 12.36 14.36 12.25 14.5 12.25C14.64 12.25 14.75 12.36 14.75 12.5C14.75 12.78 14.25 12.78 14.25 12.5ZM9.5 11.25C8.81 11.25 8.25 11.81 8.25 12.5C8.25 13.19 8.81 13.75 9.5 13.75C10.19 13.75 10.75 13.19 10.75 12.5C10.75 11.81 10.19 11.25 9.5 11.25ZM9.25 12.5C9.25 12.36 9.36 12.25 9.5 12.25C9.64 12.25 9.75 12.36 9.75 12.5C9.75 12.78 9.25 12.78 9.25 12.5ZM14.5 16.25C13.81 16.25 13.25 16.81 13.25 17.5C13.25 18.19 13.81 18.75 14.5 18.75C15.19 18.75 15.75 18.19 15.75 17.5C15.75 16.81 15.19 16.25 14.5 16.25ZM14.25 17.5C14.25 17.36 14.36 17.25 14.5 17.25C14.64 17.25 14.75 17.36 14.75 17.5C14.75 17.78 14.25 17.78 14.25 17.5ZM9.5 16.25C8.81 16.25 8.25 16.81 8.25 17.5C8.25 18.19 8.81 18.75 9.5 18.75C10.19 18.75 10.75 18.19 10.75 17.5C10.75 16.81 10.19 16.25 9.5 16.25ZM9.25 17.5C9.25 17.36 9.36 17.25 9.5 17.25C9.64 17.25 9.75 17.36 9.75 17.5C9.75 17.78 9.25 17.78 9.25 17.5Z\"/></svg>";

var draghorizontal_24x16 = "<svg viewBox=\"0 0 24 16\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M17.5 9.25C16.81 9.25 16.25 9.81 16.25 10.5C16.25 11.19 16.81 11.75 17.5 11.75C18.19 11.75 18.75 11.19 18.75 10.5C18.75 9.81 18.19 9.25 17.5 9.25ZM17.25 10.5C17.25 10.36 17.36 10.25 17.5 10.25C17.64 10.25 17.75 10.36 17.75 10.5C17.75 10.78 17.25 10.78 17.25 10.5ZM17.5 6.75C18.19 6.75 18.75 6.19 18.75 5.5C18.75 4.81 18.19 4.25 17.5 4.25C16.81 4.25 16.25 4.81 16.25 5.5C16.25 6.19 16.81 6.75 17.5 6.75ZM17.5 5.25C17.64 5.25 17.75 5.36 17.75 5.5C17.75 5.78 17.25 5.78 17.25 5.5C17.25 5.36 17.36 5.25 17.5 5.25ZM12.5 9.25C11.81 9.25 11.25 9.81 11.25 10.5C11.25 11.19 11.81 11.75 12.5 11.75C13.19 11.75 13.75 11.19 13.75 10.5C13.75 9.81 13.19 9.25 12.5 9.25ZM12.25 10.5C12.25 10.36 12.36 10.25 12.5 10.25C12.64 10.25 12.75 10.36 12.75 10.5C12.75 10.78 12.25 10.78 12.25 10.5ZM12.5 4.25C11.81 4.25 11.25 4.81 11.25 5.5C11.25 6.19 11.81 6.75 12.5 6.75C13.19 6.75 13.75 6.19 13.75 5.5C13.75 4.81 13.19 4.25 12.5 4.25ZM12.25 5.5C12.25 5.36 12.36 5.25 12.5 5.25C12.64 5.25 12.75 5.36 12.75 5.5C12.75 5.78 12.25 5.78 12.25 5.5ZM7.5 9.25C6.81 9.25 6.25 9.81 6.25 10.5C6.25 11.19 6.81 11.75 7.5 11.75C8.19 11.75 8.75 11.19 8.75 10.5C8.75 9.81 8.19 9.25 7.5 9.25ZM7.25 10.5C7.25 10.36 7.36 10.25 7.5 10.25C7.64 10.25 7.75 10.36 7.75 10.5C7.75 10.78 7.25 10.78 7.25 10.5ZM7.5 4.25C6.81 4.25 6.25 4.81 6.25 5.5C6.25 6.19 6.81 6.75 7.5 6.75C8.19 6.75 8.75 6.19 8.75 5.5C8.75 4.81 8.19 4.25 7.5 4.25ZM7.25 5.5C7.25 5.36 7.36 5.25 7.5 5.25C7.64 5.25 7.75 5.36 7.75 5.5C7.75 5.78 7.25 5.78 7.25 5.5Z\"/></svg>";

var editsmall_16x16 = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\"><path d=\"M13.1209 3.05249L12.9509 2.88249C11.8809 1.81249 10.1309 1.81249 9.06089 2.88249L3.47089 8.46249C3.37089 8.56249 3.31089 8.68249 3.27089 8.81249L2.27089 12.8125C2.21089 13.0625 2.28089 13.3425 2.47089 13.5225C2.61089 13.6625 2.80089 13.7425 3.00089 13.7425C3.06089 13.7425 3.12089 13.7425 3.18089 13.7225L7.18089 12.7225C7.31089 12.6925 7.43089 12.6225 7.53089 12.5225L13.1209 6.93249C14.1909 5.86249 14.1909 4.11249 13.1209 3.04249V3.05249ZM6.62089 11.3125L4.04089 11.9625L4.69089 9.38249L8.01089 6.06249L9.95089 8.00249L6.63089 11.3225L6.62089 11.3125ZM12.0609 5.87249L11.0009 6.93249L9.06089 4.99249L10.1209 3.93249C10.6109 3.44249 11.4009 3.44249 11.8909 3.93249L12.0609 4.10249C12.5509 4.59249 12.5509 5.38249 12.0609 5.87249Z\"/></svg>";

var expand_16x16 = "<svg viewBox=\"0 0 16 16\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M11.75 8C11.75 8.41 11.41 8.75 11 8.75H8.75V11C8.75 11.41 8.41 11.75 8 11.75C7.59 11.75 7.25 11.41 7.25 11V8.75H5C4.59 8.75 4.25 8.41 4.25 8C4.25 7.59 4.59 7.25 5 7.25H7.25V5C7.25 4.59 7.59 4.25 8 4.25C8.41 4.25 8.75 4.59 8.75 5V7.25H11C11.41 7.25 11.75 7.59 11.75 8Z\"/></svg>";

var expanddetails_16x16 = "<svg viewBox=\"0 0 16 16\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M11.75 8C11.75 8.41 11.41 8.75 11 8.75H8.75V11C8.75 11.41 8.41 11.75 8 11.75C7.59 11.75 7.25 11.41 7.25 11V8.75H5C4.59 8.75 4.25 8.41 4.25 8C4.25 7.59 4.59 7.25 5 7.25H7.25V5C7.25 4.59 7.59 4.25 8 4.25C8.41 4.25 8.75 4.59 8.75 5V7.25H11C11.41 7.25 11.75 7.59 11.75 8Z\"/></svg>";

var file_72x72 = "<svg viewBox=\"0 0 72 72\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M62.83 12.83L53.17 3.17C52.7982 2.79866 52.357 2.50421 51.8714 2.30346C51.3858 2.1027 50.8654 1.99959 50.34 2H14C12.4087 2 10.8826 2.63214 9.75735 3.75736C8.63214 4.88258 8 6.4087 8 8V64C8 65.5913 8.63214 67.1174 9.75735 68.2426C10.8826 69.3679 12.4087 70 14 70H58C59.5913 70 61.1174 69.3679 62.2426 68.2426C63.3679 67.1174 64 65.5913 64 64V15.66C64.0004 15.1346 63.8973 14.6142 63.6965 14.1286C63.4958 13.643 63.2013 13.2018 62.83 12.83ZM52 4.83L61.17 14H56C54.9391 14 53.9217 13.5786 53.1716 12.8284C52.4214 12.0783 52 11.0609 52 10V4.83ZM62 64C62 65.0609 61.5786 66.0783 60.8284 66.8284C60.0783 67.5786 59.0609 68 58 68H14C12.9391 68 11.9217 67.5786 11.1716 66.8284C10.4214 66.0783 10 65.0609 10 64V8C10 6.93914 10.4214 5.92172 11.1716 5.17157C11.9217 4.42143 12.9391 4 14 4H50V10C50 11.5913 50.6321 13.1174 51.7574 14.2426C52.8826 15.3679 54.4087 16 56 16H62V64ZM22 26H50V28H22V26ZM22 32H50V34H22V32ZM22 38H50V40H22V38ZM22 44H50V46H22V44Z\"/></svg>";

var flip_24x24 = "<svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M14.53 17.4775C14.82 17.7675 14.82 18.2475 14.53 18.5375L11.53 21.5375C11.38 21.6875 11.19 21.7575 11 21.7575C10.81 21.7575 10.62 21.6875 10.47 21.5375C10.18 21.2475 10.18 20.7675 10.47 20.4775L12.2 18.7475C12.13 18.7475 12.07 18.7475 12 18.7475C6.62 18.7475 2.25 15.7475 2.25 12.0575C2.25 10.2975 3.22 8.6375 4.99 7.3875C5.33 7.1475 5.8 7.2275 6.03 7.5675C6.27 7.9075 6.19 8.3775 5.85 8.6075C4.49 9.5675 3.74 10.7875 3.74 12.0575C3.74 14.9175 7.44 17.2475 11.99 17.2475C12.05 17.2475 12.11 17.2475 12.17 17.2475L10.46 15.5375C10.17 15.2475 10.17 14.7675 10.46 14.4775C10.75 14.1875 11.23 14.1875 11.52 14.4775L14.52 17.4775H14.53ZM12 5.2575C11.93 5.2575 11.87 5.2575 11.8 5.2575L13.53 3.5275C13.82 3.2375 13.82 2.7575 13.53 2.4675C13.24 2.1775 12.76 2.1775 12.47 2.4675L9.47 5.4675C9.18 5.7575 9.18 6.2375 9.47 6.5275L12.47 9.5275C12.62 9.6775 12.81 9.7475 13 9.7475C13.19 9.7475 13.38 9.6775 13.53 9.5275C13.82 9.2375 13.82 8.7575 13.53 8.4675L11.82 6.7575C11.88 6.7575 11.94 6.7575 12 6.7575C16.55 6.7575 20.25 9.0875 20.25 11.9475C20.25 13.2075 19.5 14.4375 18.14 15.3975C17.8 15.6375 17.72 16.1075 17.96 16.4475C18.11 16.6575 18.34 16.7675 18.57 16.7675C18.72 16.7675 18.87 16.7275 19 16.6275C20.77 15.3775 21.75 13.7175 21.75 11.9575C21.75 8.2675 17.38 5.2675 12 5.2675V5.2575Z\"/></svg>";

var folder_24x24 = "<svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M21.72 9.24C21.45 8.92 21.12 8.67 20.75 8.5V8C20.75 6.48 19.52 5.25 18 5.25H10.65C10.32 4.1 9.26 3.25 8 3.25H6C4.48 3.25 3.25 4.48 3.25 6V18C3.25 19.52 4.48 20.75 6 20.75H18.33C19.66 20.75 20.8 19.8 21.04 18.49L22.31 11.49C22.46 10.69 22.24 9.86 21.72 9.24ZM4.75 18V6C4.75 5.31 5.31 4.75 6 4.75H8C8.69 4.75 9.25 5.31 9.25 6C9.25 6.41 9.59 6.75 10 6.75H18C18.69 6.75 19.25 7.31 19.25 8V8.25H9.27C7.94 8.25 6.8 9.2 6.56 10.51L5.29 17.51C5.19 18.07 5.27 18.64 5.51 19.15C5.06 18.96 4.75 18.52 4.75 18ZM20.83 11.22L19.56 18.22C19.45 18.81 18.94 19.25 18.33 19.25H8C7.63 19.25 7.28 19.09 7.04 18.8C6.8 18.51 6.7 18.14 6.77 17.78L8.04 10.78C8.15 10.19 8.66 9.75 9.27 9.75H19.6C19.97 9.75 20.32 9.91 20.56 10.2C20.8 10.49 20.9 10.86 20.83 11.22Z\"/></svg>";

var fullsize_16x16 = "<svg viewBox=\"0 0 16 16\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M12 3.25H4C3.04 3.25 2.25 4.04 2.25 5V11C2.25 11.96 3.04 12.75 4 12.75H12C12.96 12.75 13.75 11.96 13.75 11V5C13.75 4.04 12.96 3.25 12 3.25ZM12.25 11C12.25 11.14 12.14 11.25 12 11.25H4C3.86 11.25 3.75 11.14 3.75 11V5C3.75 4.86 3.86 4.75 4 4.75H12C12.14 4.75 12.25 4.86 12.25 5V11Z\"/></svg>";

var image_48x48 = "<svg viewBox=\"0 0 48 48\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M33 10.25H15C12.38 10.25 10.25 12.38 10.25 15V33C10.25 35.62 12.38 37.75 15 37.75H33C35.62 37.75 37.75 35.62 37.75 33V15C37.75 12.38 35.62 10.25 33 10.25ZM36.25 33C36.25 34.79 34.79 36.25 33 36.25H15C13.21 36.25 11.75 34.79 11.75 33V15C11.75 13.21 13.21 11.75 15 11.75H33C34.79 11.75 36.25 13.21 36.25 15V33ZM30.5 14.25C28.71 14.25 27.25 15.71 27.25 17.5C27.25 19.29 28.71 20.75 30.5 20.75C32.29 20.75 33.75 19.29 33.75 17.5C33.75 15.71 32.29 14.25 30.5 14.25ZM30.5 19.25C29.54 19.25 28.75 18.46 28.75 17.5C28.75 16.54 29.54 15.75 30.5 15.75C31.46 15.75 32.25 16.54 32.25 17.5C32.25 18.46 31.46 19.25 30.5 19.25ZM29.26 26.28C28.94 25.92 28.49 25.71 28.01 25.7C27.54 25.68 27.07 25.87 26.73 26.2L24.95 27.94L22.28 25.23C21.94 24.89 21.5 24.71 21 24.71C20.52 24.71 20.06 24.93 19.74 25.28L14.74 30.78C14.25 31.3 14.12 32.06 14.41 32.72C14.69 33.36 15.28 33.75 15.95 33.75H32.07C32.74 33.75 33.33 33.35 33.61 32.72C33.89 32.06 33.77 31.31 33.29 30.79L29.27 26.29L29.26 26.28ZM32.22 32.12C32.18 32.2 32.13 32.25 32.06 32.25H15.94C15.87 32.25 15.81 32.21 15.78 32.12C15.77 32.09 15.71 31.93 15.83 31.8L20.84 26.29C20.9 26.22 20.99 26.21 21.02 26.21C21.06 26.21 21.14 26.22 21.2 26.29L24.4 29.54C24.69 29.83 25.16 29.84 25.46 29.54L27.77 27.27C27.83 27.21 27.9 27.2 27.94 27.2C28.01 27.2 28.06 27.21 28.13 27.28L32.16 31.79C32.16 31.79 32.16 31.79 32.17 31.8C32.29 31.93 32.23 32.09 32.22 32.12Z\"/></svg>";

var loading_48x48 = "<svg viewBox=\"0 0 48 48\" xmlns=\"http://www.w3.org/2000/svg\"><g clip-path=\"url(#clip0_19679_369428)\"><path opacity=\"0.1\" d=\"M24 40C15.18 40 8 32.82 8 24C8 15.18 15.18 8 24 8C32.82 8 40 15.18 40 24C40 32.82 32.82 40 24 40ZM24 12C17.38 12 12 17.38 12 24C12 30.62 17.38 36 24 36C30.62 36 36 30.62 36 24C36 17.38 30.62 12 24 12Z\" fill=\"black\" fill-opacity=\"0.91\"/><path d=\"M10 26C8.9 26 8 25.1 8 24C8 15.18 15.18 8 24 8C25.1 8 26 8.9 26 10C26 11.1 25.1 12 24 12C17.38 12 12 17.38 12 24C12 25.1 11.1 26 10 26Z\"/></g><defs><clipPath id=\"clip0_19679_369428\"><rect width=\"32\" height=\"32\" fill=\"white\" transform=\"translate(8 8)\"/></clipPath></defs></svg>";

var maximize_16x16 = "<svg viewBox=\"0 0 16 16\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M13.75 3V7C13.75 7.41 13.41 7.75 13 7.75C12.59 7.75 12.25 7.41 12.25 7V4.81L9.53 7.53C9.38 7.68 9.19 7.75 9 7.75C8.81 7.75 8.62 7.68 8.47 7.53C8.18 7.24 8.18 6.76 8.47 6.47L11.19 3.75H9C8.59 3.75 8.25 3.41 8.25 3C8.25 2.59 8.59 2.25 9 2.25H13C13.1 2.25 13.19 2.27 13.29 2.31C13.47 2.39 13.62 2.53 13.7 2.72C13.74 2.81 13.76 2.91 13.76 3.01L13.75 3ZM7.53 8.47C7.24 8.18 6.76 8.18 6.47 8.47L3.75 11.19V9C3.75 8.59 3.41 8.25 3 8.25C2.59 8.25 2.25 8.59 2.25 9V13C2.25 13.1 2.27 13.19 2.31 13.29C2.39 13.47 2.53 13.62 2.72 13.7C2.81 13.74 2.91 13.76 3.01 13.76H7.01C7.42 13.76 7.76 13.42 7.76 13.01C7.76 12.6 7.42 12.26 7.01 12.26H4.82L7.54 9.54C7.83 9.25 7.83 8.77 7.54 8.48L7.53 8.47Z\"/></svg>";

var minimize_16x16 = "<svg viewBox=\"0 0 16 16\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M13.75 8C13.75 8.41 13.41 8.75 13 8.75H3C2.59 8.75 2.25 8.41 2.25 8C2.25 7.59 2.59 7.25 3 7.25H13C13.41 7.25 13.75 7.59 13.75 8Z\"/></svg>";

var more_24x24 = "<svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M12 10.25C11.04 10.25 10.25 11.04 10.25 12C10.25 12.96 11.04 13.75 12 13.75C12.96 13.75 13.75 12.96 13.75 12C13.75 11.04 12.96 10.25 12 10.25ZM11.75 12C11.75 11.86 11.86 11.75 12 11.75C12.14 11.75 12.25 11.86 12.25 12C12.25 12.28 11.75 12.28 11.75 12ZM19 10.25C18.04 10.25 17.25 11.04 17.25 12C17.25 12.96 18.04 13.75 19 13.75C19.96 13.75 20.75 12.96 20.75 12C20.75 11.04 19.96 10.25 19 10.25ZM18.75 12C18.75 11.86 18.86 11.75 19 11.75C19.14 11.75 19.25 11.86 19.25 12C19.25 12.28 18.75 12.28 18.75 12ZM5 10.25C4.04 10.25 3.25 11.04 3.25 12C3.25 12.96 4.04 13.75 5 13.75C5.96 13.75 6.75 12.96 6.75 12C6.75 11.04 5.96 10.25 5 10.25ZM4.75 12C4.75 11.86 4.86 11.75 5 11.75C5.14 11.75 5.25 11.86 5.25 12C5.25 12.28 4.75 12.28 4.75 12Z\"/></svg>";

var navmenu_24x24 = "<svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M3.25 7C3.25 6.59 3.59 6.25 4 6.25H15C15.41 6.25 15.75 6.59 15.75 7C15.75 7.41 15.41 7.75 15 7.75H4C3.59 7.75 3.25 7.41 3.25 7ZM20 11.25H4C3.59 11.25 3.25 11.59 3.25 12C3.25 12.41 3.59 12.75 4 12.75H20C20.41 12.75 20.75 12.41 20.75 12C20.75 11.59 20.41 11.25 20 11.25ZM9 16.25H4C3.59 16.25 3.25 16.59 3.25 17C3.25 17.41 3.59 17.75 4 17.75H9C9.41 17.75 9.75 17.41 9.75 17C9.75 16.59 9.41 16.25 9 16.25Z\"/></svg>";

var noimage_48x48 = "<svg viewBox=\"0 0 48 48\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M30.4975 14.2475C28.7075 14.2475 27.2475 15.7075 27.2475 17.4975C27.2475 19.2875 28.7075 20.7475 30.4975 20.7475C32.2875 20.7475 33.7475 19.2875 33.7475 17.4975C33.7475 15.7075 32.2875 14.2475 30.4975 14.2475ZM30.4975 19.2475C29.5375 19.2475 28.7475 18.4575 28.7475 17.4975C28.7475 16.5375 29.5375 15.7475 30.4975 15.7475C31.4575 15.7475 32.2475 16.5375 32.2475 17.4975C32.2475 18.4575 31.4575 19.2475 30.4975 19.2475ZM13.5175 11.2175C13.4375 10.8075 13.7075 10.4175 14.1175 10.3375C14.4275 10.2775 14.7175 10.2475 14.9975 10.2475H32.9975C35.6175 10.2475 37.7475 12.3775 37.7475 14.9975V32.9975C37.7475 33.2775 37.7175 33.5675 37.6575 33.8775C37.5875 34.2375 37.2775 34.4875 36.9175 34.4875C36.8675 34.4875 36.8275 34.4875 36.7775 34.4775C36.3675 34.3975 36.1075 34.0075 36.1775 33.5975C36.2175 33.3775 36.2375 33.1775 36.2375 32.9975V14.9975C36.2375 13.2075 34.7775 11.7475 32.9875 11.7475H14.9975C14.8075 11.7475 14.6175 11.7675 14.3975 11.8075C13.9875 11.8875 13.5975 11.6175 13.5175 11.2075V11.2175ZM34.4775 36.7775C34.5575 37.1875 34.2875 37.5775 33.8775 37.6575C33.5675 37.7175 33.2775 37.7475 32.9975 37.7475H14.9975C12.3775 37.7475 10.2475 35.6175 10.2475 32.9975V14.9975C10.2475 14.7175 10.2775 14.4275 10.3375 14.1175C10.4175 13.7075 10.8075 13.4375 11.2175 13.5175C11.6275 13.5975 11.8875 13.9875 11.8175 14.3975C11.7775 14.6175 11.7575 14.8175 11.7575 14.9975V32.9975C11.7575 34.7875 13.2175 36.2475 15.0075 36.2475H33.0075C33.1975 36.2475 33.3875 36.2275 33.6075 36.1875C34.0075 36.1075 34.4075 36.3775 34.4875 36.7875L34.4775 36.7775ZM15.8275 31.7975C15.6975 31.9375 15.7575 32.0875 15.7775 32.1175C15.8175 32.1975 15.8675 32.2475 15.9375 32.2475H29.8175C30.2275 32.2475 30.5675 32.5875 30.5675 32.9975C30.5675 33.4075 30.2275 33.7475 29.8175 33.7475H15.9375C15.2675 33.7475 14.6775 33.3475 14.3975 32.7175C14.1075 32.0575 14.2375 31.2975 14.7275 30.7775L19.7275 25.2775C20.0475 24.9275 20.5075 24.7175 20.9875 24.7075C21.4875 24.7275 21.9375 24.8875 22.2675 25.2275L25.4675 28.4775C25.7575 28.7675 25.7575 29.2475 25.4675 29.5375C25.1675 29.8275 24.6975 29.8275 24.4075 29.5375L21.2075 26.2875C21.1475 26.2175 21.0675 26.1875 21.0275 26.2075C20.9875 26.2075 20.9075 26.2175 20.8475 26.2875L15.8375 31.7975H15.8275ZM38.5275 38.5275C38.3775 38.6775 38.1875 38.7475 37.9975 38.7475C37.8075 38.7475 37.6175 38.6775 37.4675 38.5275L9.4675 10.5275C9.1775 10.2375 9.1775 9.7575 9.4675 9.4675C9.7575 9.1775 10.2375 9.1775 10.5275 9.4675L38.5275 37.4675C38.8175 37.7575 38.8175 38.2375 38.5275 38.5275Z\"/></svg>";

var ranking_arrows = "<svg viewBox=\"0 0 10 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M10 5L5 0L0 5H4V9H6V5H10Z\"/><path d=\"M6 19V15H4V19H0L5 24L10 19H6Z\"/></svg>";

var rankingundefined_16x16 = "<svg viewBox=\"0 0 16 16\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M11.75 8C11.75 8.41 11.41 8.75 11 8.75H5C4.59 8.75 4.25 8.41 4.25 8C4.25 7.59 4.59 7.25 5 7.25H11C11.41 7.25 11.75 7.59 11.75 8Z\"/></svg>";

var rating_star_2 = "<svg viewBox=\"0 0 48 48\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M24 39.5057L11.7226 45.9839C10.4095 46.6739 8.87606 45.5622 9.12525 44.096L11.4734 30.373L1.54411 20.6556C0.480254 19.6207 1.06489 17.8095 2.53128 17.5986L16.2559 15.5957L22.3994 3.10891C23.0512 1.77685 24.9488 1.77685 25.6102 3.10891L31.7441 15.5957L45.4687 17.5986C46.9351 17.8095 47.5197 19.6207 46.4559 20.6556L36.5266 30.373L38.8748 44.096C39.1239 45.5622 37.5905 46.6835 36.2774 45.9839L24 39.5057Z\" fill=\"none\" stroke-width=\"2\"/><path d=\"M24.3981 33.1305L24 32.9206L23.6019 33.1305L15.8715 37.2059L17.3542 28.5663L17.43 28.1246L17.1095 27.8113L10.83 21.6746L19.4965 20.4049L19.9405 20.3399L20.1387 19.9373L24 12.0936L27.8613 19.9373L28.0595 20.3399L28.5035 20.4049L37.17 21.6746L30.8905 27.8113L30.57 28.1246L30.6458 28.5663L32.1285 37.2059L24.3981 33.1305Z\" stroke-width=\"1.70746\"/></svg>";

var rating_star_small_2 = "<svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M12 19.3373L6.13001 22.4373C5.50001 22.7673 4.77001 22.2373 4.89001 21.5373L6.01001 14.9773L1.26001 10.3273C0.750007 9.83728 1.03001 8.96728 1.73001 8.86728L8.29001 7.90728L11.23 1.93728C11.54 1.29728 12.45 1.29728 12.77 1.93728L15.7 7.90728L22.26 8.86728C22.96 8.96728 23.24 9.83728 22.73 10.3273L17.98 14.9773L19.1 21.5373C19.22 22.2373 18.49 22.7773 17.86 22.4373L11.99 19.3373H12Z\" fill=\"none\" stroke-width=\"2\"/><path d=\"M12 15.9472L8.58001 17.7572L9.23001 13.9272L6.45001 11.2072L10.29 10.6472L12 7.17725L13.71 10.6472L17.55 11.2072L14.77 13.9272L15.42 17.7572L12 15.9472Z\"/></svg>";

var rating_star_small = "<svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><g><path d=\"M12 19.3373L6.13001 22.4373C5.50001 22.7673 4.77001 22.2373 4.89001 21.5373L6.01001 14.9773L1.26001 10.3273C0.750007 9.83728 1.03001 8.96728 1.73001 8.86728L8.29001 7.90728L11.23 1.93728C11.54 1.29728 12.45 1.29728 12.77 1.93728L15.7 7.90728L22.26 8.86728C22.96 8.96728 23.24 9.83728 22.73 10.3273L17.98 14.9773L19.1 21.5373C19.22 22.2373 18.49 22.7773 17.86 22.4373L11.99 19.3373H12Z\"/></g></svg>";

var rating_star = "<svg viewBox=\"0 0 48 48\" xmlns=\"http://www.w3.org/2000/svg\"><g><path d=\"M24 39.5057L11.7226 45.9839C10.4095 46.6739 8.87606 45.5622 9.12525 44.096L11.4734 30.373L1.54411 20.6556C0.480254 19.6207 1.06489 17.8095 2.53128 17.5986L16.2559 15.5957L22.3994 3.10891C23.0512 1.77685 24.9488 1.77685 25.6102 3.10891L31.7441 15.5957L45.4687 17.5986C46.9351 17.8095 47.5197 19.6207 46.4559 20.6556L36.5266 30.373L38.8748 44.096C39.1239 45.5622 37.5905 46.6835 36.2774 45.9839L24 39.5057Z\"/></g></svg>";

var reorder_24x24 = "<svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M8.9444 10.75H15.0544C15.7144 10.75 16.3144 10.39 16.6144 9.80002C16.9144 9.22002 16.8644 8.52002 16.4844 7.98002L13.4244 3.71002C12.7644 2.79002 11.2344 2.79002 10.5744 3.71002L7.5244 7.99002C7.1444 8.53002 7.0944 9.22002 7.3944 9.81002C7.6944 10.4 8.2944 10.76 8.9544 10.76L8.9444 10.75ZM8.7444 8.86002L11.7944 4.58002C11.8644 4.49002 11.9544 4.48002 11.9944 4.48002C12.0344 4.48002 12.1344 4.49002 12.1944 4.58002L15.2544 8.86002C15.3344 8.97002 15.3044 9.07002 15.2744 9.12002C15.2444 9.17002 15.1844 9.26002 15.0544 9.26002H8.9444C8.8144 9.26002 8.7444 9.18002 8.7244 9.12002C8.7044 9.06002 8.6644 8.97002 8.7444 8.86002ZM15.0544 13.25H8.9444C8.2844 13.25 7.6844 13.61 7.3844 14.2C7.0844 14.78 7.1344 15.48 7.5144 16.02L10.5744 20.3C10.9044 20.76 11.4344 21.03 11.9944 21.03C12.5544 21.03 13.0944 20.76 13.4144 20.3L16.4744 16.02C16.8544 15.48 16.9044 14.79 16.6044 14.2C16.3044 13.61 15.7044 13.25 15.0444 13.25H15.0544ZM15.2644 15.15L12.2044 19.43C12.0744 19.61 11.9244 19.61 11.7944 19.43L8.7344 15.15C8.6544 15.04 8.6844 14.94 8.7144 14.89C8.7444 14.84 8.8044 14.75 8.9344 14.75H15.0444C15.1744 14.75 15.2444 14.83 15.2644 14.89C15.2844 14.95 15.3244 15.04 15.2444 15.15H15.2644Z\"/></svg>";

var restoredown_16x16 = "<svg viewBox=\"0 0 16 16\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M7.69 8.71C7.73 8.8 7.75 8.9 7.75 9V13C7.75 13.41 7.41 13.75 7 13.75C6.59 13.75 6.25 13.41 6.25 13V10.81L3.53 13.53C3.38 13.68 3.19 13.75 3 13.75C2.81 13.75 2.62 13.68 2.47 13.53C2.18 13.24 2.18 12.76 2.47 12.47L5.19 9.75H3C2.59 9.75 2.25 9.41 2.25 9C2.25 8.59 2.59 8.25 3 8.25H7C7.1 8.25 7.19 8.27 7.29 8.31C7.47 8.39 7.62 8.53 7.7 8.72L7.69 8.71ZM13 6.25H10.81L13.53 3.53C13.82 3.24 13.82 2.76 13.53 2.47C13.24 2.18 12.76 2.18 12.47 2.47L9.75 5.19V3C9.75 2.59 9.41 2.25 9 2.25C8.59 2.25 8.25 2.59 8.25 3V7C8.25 7.1 8.27 7.19 8.31 7.29C8.39 7.47 8.53 7.62 8.72 7.7C8.81 7.74 8.91 7.76 9.01 7.76H13.01C13.42 7.76 13.76 7.42 13.76 7.01C13.76 6.6 13.42 6.26 13.01 6.26L13 6.25Z\"/></svg>";

var search_24x24 = "<svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M13.9975 2.25C9.7275 2.25 6.2475 5.73 6.2475 10C6.2475 11.87 6.9075 13.58 8.0175 14.92L2.4675 20.47C2.1775 20.76 2.1775 21.24 2.4675 21.53C2.6175 21.68 2.8075 21.75 2.9975 21.75C3.1875 21.75 3.3775 21.68 3.5275 21.53L9.0775 15.98C10.4175 17.08 12.1275 17.75 13.9975 17.75C18.2675 17.75 21.7475 14.27 21.7475 10C21.7475 5.73 18.2675 2.25 13.9975 2.25ZM13.9975 16.25C10.5475 16.25 7.7475 13.45 7.7475 10C7.7475 6.55 10.5475 3.75 13.9975 3.75C17.4475 3.75 20.2475 6.55 20.2475 10C20.2475 13.45 17.4475 16.25 13.9975 16.25Z\"/></svg>";

var smiley_rate1_24x24 = "<svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M4 4.9938C4 4.44362 4.45 3.99348 5 3.99348H6.59L5.3 2.70306C4.91 2.31293 4.91 1.68272 5.3 1.2926C5.69 0.902468 6.32 0.902468 6.71 1.2926L9.71 4.29357C9.8 4.3836 9.88 4.49364 9.93 4.62368C10.03 4.86376 10.03 5.14385 9.93 5.38393C9.88 5.50397 9.81 5.614 9.71 5.71404L6.71 8.71501C6.51 8.91508 6.26 9.00511 6 9.00511C5.74 9.00511 5.49 8.90508 5.29 8.71501C4.9 8.32489 4.9 7.69468 5.29 7.30456L6.58 6.01413H4.99C4.44 6.01413 3.99 5.56399 3.99 5.01381L4 4.9938ZM14.08 5.37393C14.13 5.49397 14.2 5.604 14.3 5.70403L17.3 8.70501C17.5 8.90508 17.75 8.99511 18.01 8.99511C18.27 8.99511 18.52 8.89507 18.72 8.70501C19.11 8.31488 19.11 7.68468 18.72 7.29455L17.43 6.00413H19.02C19.57 6.00413 20.02 5.55399 20.02 5.00381C20.02 4.45363 19.57 4.00348 19.02 4.00348H17.43L18.72 2.71306C19.11 2.32293 19.11 1.69273 18.72 1.3026C18.33 0.912471 17.7 0.912471 17.31 1.3026L14.31 4.30358C14.22 4.39361 14.14 4.50364 14.09 4.63368C13.99 4.87376 13.99 5.15385 14.09 5.39393L14.08 5.37393ZM22 14.9971V20.999C22 22.6496 20.65 24 19 24H5C3.35 24 2 22.6496 2 20.999V14.9971C2 13.3465 3.35 11.9961 5 11.9961H19C20.65 11.9961 22 13.3465 22 14.9971ZM19 13.9967H16V16.9977H20V14.9971C20 14.4469 19.55 13.9967 19 13.9967ZM14 16.9977V13.9967H10V16.9977H14ZM10 18.9984V21.9993H14V18.9984H10ZM4 14.9971V16.9977H8V13.9967H5C4.45 13.9967 4 14.4469 4 14.9971ZM5 21.9993H8V18.9984H4V20.999C4 21.5492 4.45 21.9993 5 21.9993ZM20 20.999V18.9984H16V21.9993H19C19.55 21.9993 20 21.5492 20 20.999Z\"/></svg>";

var smiley_rate10_24x24 = "<svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M12.01 23C6.85721 23 1.15412 19.9621 0.0134987 13.1669C-0.0765501 12.6272 0.293651 12.1076 0.833944 12.0177C1.38424 11.9277 1.89452 12.2975 1.98457 12.8371C2.92508 18.4732 7.69767 20.9914 12 20.9914C16.3023 20.9914 21.0749 18.4732 22.0154 12.8371C22.1055 12.2975 22.6158 11.9277 23.1661 12.0177C23.7063 12.1076 24.0765 12.6272 23.9865 13.1669C22.8559 19.9521 17.1428 23 11.99 23H12.01ZM21.165 6.15177C22.3056 5.01257 22.3056 3.16386 21.165 2.02465L21.0049 1.85477C19.9143 0.765533 18.1633 0.725561 17.0227 1.71487C15.8821 0.715568 14.1312 0.765533 13.0406 1.85477L12.8705 2.01466C11.7299 3.15386 11.7299 5.00257 12.8705 6.14178L17.0227 10.2889L21.175 6.14178L21.165 6.15177ZM15.742 3.27378L17.0127 4.54289L18.2834 3.27378C18.6436 2.91403 19.2239 2.91403 19.5841 3.27378L19.7442 3.43367C20.1044 3.79342 20.1044 4.37301 19.7442 4.73276L17.0127 7.46086L14.2812 4.73276C13.921 4.37301 13.921 3.79342 14.2812 3.43367L14.4413 3.27378C14.6214 3.09391 14.8515 3.00397 15.0917 3.00397C15.3318 3.00397 15.5619 3.09391 15.742 3.27378ZM11.1595 6.15177C12.3002 5.01257 12.3002 3.16386 11.1595 2.02465L10.9995 1.85477C9.90886 0.765533 8.15792 0.725561 7.0173 1.71487C5.87668 0.715568 4.12573 0.765533 3.03514 1.85477L2.86505 2.01466C1.72443 3.15386 1.72443 5.00257 2.86505 6.14178L7.0173 10.2889L11.1695 6.14178L11.1595 6.15177ZM5.7366 3.27378L7.00729 4.54289L8.27798 3.27378C8.63818 2.91403 9.21849 2.91403 9.57869 3.27378L9.73877 3.43367C10.099 3.79342 10.099 4.37301 9.73877 4.73276L7.00729 7.46086L4.27581 4.73276C3.91562 4.37301 3.91562 3.79342 4.27581 3.43367L4.4359 3.27378C4.61599 3.09391 4.84612 3.00397 5.08625 3.00397C5.32638 3.00397 5.5565 3.09391 5.7366 3.27378Z\"/></svg>";

var smiley_rate2_24x24 = "<svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><g clip-path=\"url(#clip0_15894_140103)\"><path d=\"M4.88291 4.51001C4.47291 4.51001 4.08291 4.25001 3.94291 3.84001C3.76291 3.32001 4.03291 2.75001 4.55291 2.57001L8.32291 1.25001C8.84291 1.06001 9.41291 1.34001 9.59291 1.86001C9.77291 2.38001 9.50291 2.95001 8.98291 3.13001L5.20291 4.45001C5.09291 4.49001 4.98291 4.51001 4.87291 4.51001H4.88291ZM19.8129 3.89001C20.0229 3.38001 19.7729 2.79001 19.2629 2.59001L15.5529 1.07001C15.0429 0.860007 14.4529 1.11001 14.2529 1.62001C14.0429 2.13001 14.2929 2.72001 14.8029 2.92001L18.5029 4.43001C18.6229 4.48001 18.7529 4.50001 18.8829 4.50001C19.2729 4.50001 19.6529 4.27001 19.8129 3.88001V3.89001ZM3.50291 6.00001C2.64291 6.37001 1.79291 6.88001 1.00291 7.48001C0.79291 7.64001 0.64291 7.87001 0.59291 8.14001C0.48291 8.73001 0.87291 9.29001 1.45291 9.40001C2.04291 9.51001 2.60291 9.12001 2.71291 8.54001C2.87291 7.69001 3.12291 6.83001 3.50291 5.99001V6.00001ZM21.0429 8.55001C21.6029 10.48 24.2429 8.84001 22.7529 7.48001C21.9629 6.88001 21.1129 6.37001 20.2529 6.00001C20.6329 6.84001 20.8829 7.70001 21.0429 8.55001ZM21.5729 13.2C21.2529 14.2 22.5429 15.09 23.3629 14.39C23.8529 14 23.9229 13.29 23.5429 12.81C21.7429 10.67 22.1329 10.55 21.5829 13.2H21.5729ZM1.75291 11C1.22291 11.79 -0.14709 12.64 0.0129102 13.75C0.15291 14.36 0.75291 14.74 1.35291 14.6C2.98291 14.1 1.80291 12.22 1.75291 11ZM19.8829 17C19.8829 13.14 16.2929 10 11.8829 10C7.47291 10 3.88291 13.14 3.88291 17C3.88291 20.86 7.47291 24 11.8829 24C16.2929 24 19.8829 20.86 19.8829 17ZM17.8829 17C17.8829 19.76 15.1929 22 11.8829 22C8.57291 22 5.88291 19.76 5.88291 17C5.88291 14.24 8.57291 12 11.8829 12C15.1929 12 17.8829 14.24 17.8829 17Z\"/></g><defs><clipPath id=\"clip0_15894_140103\"><rect width=\"24\" height=\"24\" fill=\"white\"/></clipPath></defs></svg>";

var smiley_rate3_24x24 = "<svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M7.01915 7C6.46961 7 6.01998 6.55 6.01998 6V2C6.01998 1.45 6.46961 1 7.01915 1C7.56869 1 8.01832 1.45 8.01832 2V6C8.01832 6.55 7.56869 7 7.01915 7ZM18.01 6V2C18.01 1.45 17.5604 1 17.0108 1C16.4613 1 16.0117 1.45 16.0117 2V6C16.0117 6.55 16.4613 7 17.0108 7C17.5604 7 18.01 6.55 18.01 6ZM16.4213 21.58L18.01 19.99L19.2989 21.28C19.6886 21.67 20.3181 21.67 20.7077 21.28C21.0974 20.89 21.0974 20.26 20.7077 19.87L19.4188 18.58C18.6395 17.8 17.3705 17.8 16.5912 18.58L15.0025 20.17L13.4138 18.58C12.6345 17.8 11.3655 17.8 10.5862 18.58L8.9975 20.17L7.40883 18.58C6.62948 17.8 5.36053 17.8 4.58118 18.58L3.29226 19.87C2.90258 20.26 2.90258 20.89 3.29226 21.28C3.68193 21.67 4.31141 21.67 4.70108 21.28L5.99001 19.99L7.57868 21.58C8.35803 22.36 9.62698 22.36 10.4063 21.58L11.995 19.99L13.5837 21.58C13.9734 21.97 14.4829 22.16 14.9925 22.16C15.5021 22.16 16.0117 21.97 16.4013 21.58H16.4213Z\"/></svg>";

var smiley_rate4_24x24 = "<svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M7.06927 7C6.51927 7 6.06927 6.55 6.06927 6V2C6.06927 1.45 6.51927 1 7.06927 1C7.61927 1 8.06927 1.45 8.06927 2V6C8.06927 6.55 7.61927 7 7.06927 7ZM18.0693 6V2C18.0693 1.45 17.6193 1 17.0693 1C16.5193 1 16.0693 1.45 16.0693 2V6C16.0693 6.55 16.5193 7 17.0693 7C17.6193 7 18.0693 6.55 18.0693 6ZM22.5693 21.9C23.0693 21.66 23.2793 21.07 23.0393 20.57C21.1093 16.52 16.9093 14 12.0693 14C7.22927 14 3.02927 16.52 1.09927 20.57C0.859273 21.07 1.06927 21.67 1.56927 21.9C2.06927 22.14 2.65927 21.93 2.89927 21.43C4.49927 18.08 8.00927 16 12.0593 16C16.1093 16 19.6293 18.08 21.2193 21.43C21.3893 21.79 21.7493 22 22.1193 22C22.2593 22 22.4093 21.97 22.5493 21.9H22.5693Z\"/></svg>";

var smiley_rate5_24x24 = "<svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M7.00572 7C6.45572 7 6.00572 6.55 6.00572 6V2C6.00572 1.45 6.45572 1 7.00572 1C7.55572 1 8.00572 1.45 8.00572 2V6C8.00572 6.55 7.55572 7 7.00572 7ZM18.0057 6V2C18.0057 1.45 17.5557 1 17.0057 1C16.4557 1 16.0057 1.45 16.0057 2V6C16.0057 6.55 16.4557 7 17.0057 7C17.5557 7 18.0057 6.55 18.0057 6ZM19.9457 21.33C20.1257 20.81 19.8557 20.24 19.3357 20.05C14.5457 18.35 9.45572 18.35 4.66572 20.05C4.14572 20.23 3.87572 20.81 4.05572 21.33C4.23572 21.85 4.80572 22.12 5.33572 21.94C9.69572 20.4 14.3057 20.4 18.6657 21.94C18.7757 21.98 18.8857 22 18.9957 22C19.4057 22 19.7957 21.74 19.9357 21.33H19.9457Z\"/></svg>";

var smiley_rate6_24x24 = "<svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M7 7C6.45 7 6 6.55 6 6V2C6 1.45 6.45 1 7 1C7.55 1 8 1.45 8 2V6C8 6.55 7.55 7 7 7ZM18 6V2C18 1.45 17.55 1 17 1C16.45 1 16 1.45 16 2V6C16 6.55 16.45 7 17 7C17.55 7 18 6.55 18 6ZM21 21C21 20.45 20.55 20 20 20H4C3.45 20 3 20.45 3 21C3 21.55 3.45 22 4 22H20C20.55 22 21 21.55 21 21Z\"/></svg>";

var smiley_rate7_24x24 = "<svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M12.0022 23.99C11.452 23.99 11.0018 23.5402 11.0018 22.9904C11.0018 22.4407 11.452 21.9909 12.0022 21.9909C16.3137 21.9909 21.0755 19.472 22.0158 13.8344C22.1058 13.2947 22.616 12.9248 23.1662 13.0148C23.7064 13.1047 24.0765 13.6245 23.9865 14.1643C22.8561 20.9513 17.144 24 11.9922 24L12.0022 23.99ZM8.00072 5.99783V1.99957C8.00072 1.4498 7.55056 1 7.00036 1C6.45016 1 6 1.4498 6 1.99957V5.99783C6 6.54759 6.45016 6.99739 7.00036 6.99739C7.55056 6.99739 8.00072 6.54759 8.00072 5.99783ZM18.0043 5.99783V1.99957C18.0043 1.4498 17.5542 1 17.004 1C16.4538 1 16.0036 1.4498 16.0036 1.99957V5.99783C16.0036 6.54759 16.4538 6.99739 17.004 6.99739C17.5542 6.99739 18.0043 6.54759 18.0043 5.99783Z\"/></svg>";

var smiley_rate8_24x24 = "<svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M12.01 24C6.85721 24 1.15412 20.96 0.0134987 14.16C-0.0765501 13.62 0.293651 13.1 0.833944 13.01C1.38424 12.92 1.89452 13.29 1.98457 13.83C2.92508 19.47 7.69767 21.99 12 21.99C16.3023 21.99 21.0749 19.47 22.0154 13.83C22.1055 13.29 22.6158 12.92 23.1661 13.01C23.7063 13.1 24.0765 13.62 23.9865 14.16C22.8559 20.95 17.1428 24 11.99 24H12.01ZM8.00783 6V2C8.00783 1.45 7.55759 1 7.00729 1C6.45699 1 6.00675 1.45 6.00675 2V6C6.00675 6.55 6.45699 7 7.00729 7C7.55759 7 8.00783 6.55 8.00783 6ZM18.0133 6V2C18.0133 1.45 17.563 1 17.0127 1C16.4624 1 16.0122 1.45 16.0122 2V6C16.0122 6.55 16.4624 7 17.0127 7C17.563 7 18.0133 6.55 18.0133 6Z\"/></svg>";

var smiley_rate9_24x24 = "<svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M12.01 24C6.85767 24 1.15509 20.96 0.0145752 14.16C-0.0354475 13.87 0.0445888 13.57 0.234675 13.35C0.424761 13.13 0.704888 13 0.995019 13H23.005C23.2951 13 23.5752 13.13 23.7653 13.35C23.9554 13.57 24.0354 13.87 23.9854 14.16C22.8549 20.95 17.1423 24 11.99 24H12.01ZM2.25559 15C3.61621 19.82 8.0182 22 12.01 22C16.0018 22 20.4038 19.82 21.7644 15H2.25559ZM8.00819 6V2C8.00819 1.45 7.55799 1 7.00774 1C6.45749 1 6.00729 1.45 6.00729 2V6C6.00729 6.55 6.45749 7 7.00774 7C7.55799 7 8.00819 6.55 8.00819 6ZM18.0127 6V2C18.0127 1.45 17.5625 1 17.0123 1C16.462 1 16.0118 1.45 16.0118 2V6C16.0118 6.55 16.462 7 17.0123 7C17.5625 7 18.0127 6.55 18.0127 6Z\"/></svg>";

const icons = {
  "modernbooleancheckchecked": modernbooleancheckchecked,
  "modernbooleancheckind": modernbooleancheckind,
  "modernbooleancheckunchecked": modernbooleancheckunchecked,
  "moderncheck": moderncheck,
  "modernradio": modernradio,
  "progressbutton": progressbutton,
  "removefile": removefile,
  "timercircle": timercircle,
  "add-24x24": add_24x24,
  "arrowleft-16x16": arrowleft_16x16,
  "arrowright-16x16": arrowright_16x16,
  "camera-24x24": camera_24x24,
  "camera-32x32": camera_32x32,
  "cancel-24x24": cancel_24x24,
  "check-16x16": check_16x16,
  "check-24x24": check_24x24,
  "chevrondown-24x24": chevrondown_24x24,
  "chevronright-16x16": chevronright_16x16,
  "clear-16x16": clear_16x16,
  "clear-24x24": clear_24x24,
  "close-16x16": close_16x16,
  "close-24x24": close_24x24,
  "collapse-16x16": collapse_16x16,
  "collapsedetails-16x16": collapsedetails_16x16,
  "delete-16x16": delete_16x16,
  "delete-24x24": delete_24x24,
  "drag-24x24": drag_24x24,
  "draghorizontal-24x16": draghorizontal_24x16,
  "editsmall-16x16": editsmall_16x16,
  "expand-16x16": expand_16x16,
  "expanddetails-16x16": expanddetails_16x16,
  "file-72x72": file_72x72,
  "flip-24x24": flip_24x24,
  "folder-24x24": folder_24x24,
  "fullsize-16x16": fullsize_16x16,
  "image-48x48": image_48x48,
  "loading-48x48": loading_48x48,
  "maximize-16x16": maximize_16x16,
  "minimize-16x16": minimize_16x16,
  "more-24x24": more_24x24,
  "navmenu-24x24": navmenu_24x24,
  "noimage-48x48": noimage_48x48,
  "ranking-arrows": ranking_arrows,
  "rankingundefined-16x16": rankingundefined_16x16,
  "rating-star-2": rating_star_2,
  "rating-star-small-2": rating_star_small_2,
  "rating-star-small": rating_star_small,
  "rating-star": rating_star,
  "reorder-24x24": reorder_24x24,
  "restoredown-16x16": restoredown_16x16,
  "search-24x24": search_24x24,
  "smiley-rate1-24x24": smiley_rate1_24x24,
  "smiley-rate10-24x24": smiley_rate10_24x24,
  "smiley-rate2-24x24": smiley_rate2_24x24,
  "smiley-rate3-24x24": smiley_rate3_24x24,
  "smiley-rate4-24x24": smiley_rate4_24x24,
  "smiley-rate5-24x24": smiley_rate5_24x24,
  "smiley-rate6-24x24": smiley_rate6_24x24,
  "smiley-rate7-24x24": smiley_rate7_24x24,
  "smiley-rate8-24x24": smiley_rate8_24x24,
  "smiley-rate9-24x24": smiley_rate9_24x24,
};

class Scroll extends React.Component {
    constructor(props) {
        super(props);
        this.rootRef = React.createRef();
        this.model = new ScrollViewModel();
        this.model.onInnerHeightChanged = (hasScroll) => {
            if (!!this.props.onInnerHeightChanged) {
                this.props.onInnerHeightChanged(hasScroll);
            }
        };
    }
    componentDidMount() {
        const container = this.rootRef.current;
        if (!container)
            return;
        this.model.setRootElement(container);
    }
    componentWillUnmount() {
        this.model.unsubscribeRootElement();
        this.model.setRootElement(undefined);
    }
    render() {
        return this.props.disabled ?
            React.createElement(React.Fragment, null, this.props.children) :
            React.createElement("div", { ref: this.rootRef, className: "sv-scroll__wrapper" },
                React.createElement("div", { className: "sv-scroll__scroller sv-drag-target-skipped", onScroll: () => this.model.onScrollContainer() },
                    React.createElement("div", { className: "sv-scroll__container" }, this.props.children)),
                React.createElement("div", { className: "sv-scroll__scrollbar", onScroll: () => this.model.onScrollScrollbar() },
                    React.createElement("div", { className: "sv-scroll__scrollbar-sizer" })));
    }
}
ReactElementFactory.Instance.registerElement("svc-scroll", (props) => {
    return React.createElement(Scroll, props);
});

addIconsToThemeSet("v1", icons$1);
addIconsToThemeSet("v2", icons);
SvgRegistry.registerIcons(icons);
class Survey extends SurveyElementBase {
    constructor(props) {
        super(props);
        this.previousJSON = {};
        this.isSurveyUpdated = false;
        this.createSurvey(props);
        this.updateSurvey(props, {});
        this.rootRef = React.createRef();
        this.rootNodeId = props.id || null;
        this.rootNodeClassName = props.className || "";
    }
    getStateElement() {
        return this.survey;
    }
    onSurveyUpdated() {
        if (!!this.survey) {
            const el = this.rootRef.current;
            if (!!el)
                this.survey.afterRenderSurvey(el);
            this.survey.startTimerFromUI();
            this.setSurveyEvents();
        }
    }
    shouldComponentUpdate(nextProps, nextState) {
        if (!super.shouldComponentUpdate(nextProps, nextState))
            return false;
        if (this.isModelJSONChanged(nextProps)) {
            this.destroySurvey();
            this.createSurvey(nextProps);
            this.updateSurvey(nextProps, {});
            this.isSurveyUpdated = true;
        }
        return true;
    }
    componentDidUpdate(prevProps, prevState) {
        super.componentDidUpdate(prevProps, prevState);
        this.updateSurvey(this.props, prevProps);
        if (this.isSurveyUpdated) {
            this.onSurveyUpdated();
            this.isSurveyUpdated = false;
        }
    }
    componentDidMount() {
        super.componentDidMount();
        this.onSurveyUpdated();
    }
    destroySurvey() {
        if (this.survey) {
            this.survey.renderCallback = undefined;
            this.survey.onPartialSend.clear();
            this.survey.stopTimer();
            this.survey.destroyResizeObserver();
        }
    }
    componentWillUnmount() {
        super.componentWillUnmount();
        this.destroySurvey();
    }
    doRender() {
        let renderResult;
        if (this.survey.state == "completed") {
            renderResult = this.renderCompleted();
        }
        else if (this.survey.state == "completedbefore") {
            renderResult = this.renderCompletedBefore();
        }
        else if (this.survey.state == "loading") {
            renderResult = this.renderLoading();
        }
        else if (this.survey.state == "empty") {
            renderResult = this.renderEmptySurvey();
        }
        else {
            renderResult = this.renderSurvey();
        }
        const backgroundImage = !!this.survey.backgroundImage ? React.createElement("div", { className: this.css.rootBackgroundImage, style: this.survey.backgroundImageStyle }) : null;
        const header = this.survey.headerView === "basic" ? React.createElement(SurveyHeader, { survey: this.survey }) : null;
        const onSubmit = function (event) {
            event.preventDefault();
        };
        let customHeader = React.createElement("div", { className: "sv_custom_header" });
        if (this.survey.hasLogo) {
            customHeader = null;
        }
        const rootCss = this.survey.getRootCss();
        const cssClasses = this.rootNodeClassName ? this.rootNodeClassName + " " + rootCss : rootCss;
        return (React.createElement("div", { id: this.rootNodeId, ref: this.rootRef, className: cssClasses, style: this.survey.themeVariables, lang: this.survey.locale || "en", dir: this.survey.localeDir },
            React.createElement(Scroll, { disabled: this.survey.rootScrollDisabled },
                this.survey.needRenderIcons ? React.createElement(SvgBundleComponent, null) : null,
                React.createElement(PopupModal, null),
                React.createElement("div", { className: this.survey.wrapperFormCss },
                    backgroundImage,
                    React.createElement("form", { onSubmit: onSubmit },
                        React.createElement(Scroll, { disabled: this.survey.formScrollDisabled },
                            customHeader,
                            React.createElement("div", { className: this.css.container },
                                header,
                                React.createElement(ComponentsContainer, { survey: this.survey, container: "header", needRenderWrapper: false }),
                                renderResult,
                                React.createElement(ComponentsContainer, { survey: this.survey, container: "footer", needRenderWrapper: false })))),
                    React.createElement(NotifierComponent, { notifier: this.survey.notifier })))));
    }
    renderElement() {
        return this.doRender();
    }
    get css() {
        return this.survey.css;
    }
    set css(value) {
        this.survey.css = value;
    }
    renderCompleted() {
        if (!this.survey.showCompletedPage)
            return null;
        var htmlValue = { __html: this.survey.processedCompletedHtml };
        return (React.createElement(React.Fragment, null,
            React.createElement("div", { dangerouslySetInnerHTML: htmlValue, className: this.survey.completedCss }),
            React.createElement(ComponentsContainer, { survey: this.survey, container: "completePage", needRenderWrapper: false })));
    }
    renderCompletedBefore() {
        var htmlValue = { __html: this.survey.processedCompletedBeforeHtml };
        return (React.createElement("div", { dangerouslySetInnerHTML: htmlValue, className: this.survey.completedBeforeCss }));
    }
    renderLoading() {
        var htmlValue = { __html: this.survey.processedLoadingHtml };
        return (React.createElement("div", { dangerouslySetInnerHTML: htmlValue, className: this.survey.loadingBodyCss }));
    }
    renderSurvey() {
        var activePage = this.survey.activePage
            ? this.renderPage(this.survey.activePage)
            : null;
        this.survey.isShowStartingPage;
        var pageId = this.survey.activePage ? this.survey.activePage.id : "";
        let className = this.survey.bodyCss;
        const style = {};
        if (!!this.survey.renderedWidth) {
            style.maxWidth = this.survey.renderedWidth;
        }
        return (React.createElement("div", { className: this.survey.bodyContainerCss },
            React.createElement(ComponentsContainer, { survey: this.survey, container: "left" }),
            React.createElement("div", { className: "sv-components-column sv-components-column--expandable" },
                React.createElement(ComponentsContainer, { survey: this.survey, container: "center" }),
                React.createElement("div", { id: pageId, className: className, style: style },
                    React.createElement(ComponentsContainer, { survey: this.survey, container: "contentTop" }),
                    activePage,
                    React.createElement(ComponentsContainer, { survey: this.survey, container: "contentBottom" }),
                    this.survey.showBrandInfo ? React.createElement(BrandInfo, null) : null)),
            React.createElement(ComponentsContainer, { survey: this.survey, container: "right" })));
    }
    renderPage(page) {
        return ReactElementFactory.Instance.createElement(this.survey.pageComponent || "sv-page", {
            survey: this.survey,
            page: page,
            css: this.css,
            creator: this,
        });
    }
    renderEmptySurvey() {
        return React.createElement("div", { className: this.css.bodyEmpty }, this.survey.emptySurveyText);
    }
    createSurvey(newProps) {
        if (!newProps)
            newProps = {};
        this.previousJSON = {};
        if (newProps) {
            if (newProps.model) {
                this.survey = newProps.model;
            }
            else {
                if (newProps.json) {
                    this.previousJSON = newProps.json;
                    this.survey = new SurveyModel(newProps.json);
                }
            }
        }
        else {
            this.survey = new SurveyModel();
        }
        if (!!newProps.css) {
            this.survey.css = this.css;
        }
    }
    isModelJSONChanged(newProps) {
        if (!!newProps["model"]) {
            return this.survey !== newProps["model"];
        }
        if (!!newProps["json"]) {
            return !Helpers.isTwoValueEquals(newProps["json"], this.previousJSON);
        }
        return false;
    }
    updateSurvey(newProps, oldProps) {
        if (!newProps)
            return;
        oldProps = oldProps || {};
        for (var key in newProps) {
            if (key == "model" || key == "children" || key == "json") {
                continue;
            }
            if (key == "css") {
                this.survey.mergeValues(newProps.css, this.survey.getCss());
                this.survey["updateNavigationCss"]();
                this.survey["updateElementCss"]();
                continue;
            }
            if (newProps[key] === oldProps[key])
                continue;
            if (key.indexOf("on") == 0 && this.survey[key] && this.survey[key].add) {
                if (!!oldProps[key]) {
                    this.survey[key].remove(oldProps[key]);
                }
                this.survey[key].add(newProps[key]);
            }
            else {
                this.survey[key] = newProps[key];
            }
        }
    }
    setSurveyEvents() {
        var self = this;
        this.survey.renderCallback = function () {
            var counter = !!self.state && !!self.state.modelChanged ? self.state.modelChanged : 0;
            self.setState({ modelChanged: counter + 1 });
        };
        this.survey.onPartialSend.add((sender) => {
            if (!!self.state) {
                self.setState(self.state);
            }
        });
    }
    //ISurveyCreator
    createQuestionElement(question) {
        return ReactQuestionFactory.Instance.createQuestion(question.isDefaultRendering() ? question.getTemplate() : question.getComponentName(), {
            question: question,
            isDisplayMode: question.isInputReadOnly,
            creator: this,
        });
    }
    renderError(key, error, cssClasses, element) {
        return ReactElementFactory.Instance.createElement(this.survey.questionErrorComponent, { key: key, error, cssClasses, element });
    }
    questionTitleLocation() {
        return this.survey.questionTitleLocation;
    }
    questionErrorLocation() {
        return this.survey.questionErrorLocation;
    }
}
ReactElementFactory.Instance.registerElement("survey", (props) => {
    return React.createElement(Survey, props);
});
function attachKey2click(element, viewModel, options = { processEsc: true, disableTabStop: false }) {
    let props = {};
    if ((!!viewModel && viewModel.disableTabStop) || (!!options && options.disableTabStop)) {
        props = { tabIndex: -1 };
    }
    else {
        options = Object.assign({}, options);
        props = {
            tabIndex: 0,
            onKeyUp: (evt) => {
                evt.preventDefault();
                evt.stopPropagation();
                doKey2ClickUp(evt, options);
            },
            onKeyDown: (evt) => doKey2ClickDown(evt, options),
            onBlur: (evt) => doKey2ClickBlur(evt),
        };
    }
    props["onPointerUp"] = (evt) => {
        if (evt.pointerType === "pen") {
            evt.preventDefault();
            evt.stopPropagation();
            const element = evt.target;
            if (element === null || element === void 0 ? void 0 : element.click)
                element.click();
        }
    };
    return React.cloneElement(element, props);
}

class SurveyNavigationBase extends SurveyElementBase {
    constructor(props) {
        super(props);
        this.updateStateFunction = null;
        this.state = { update: 0 };
    }
    get survey() {
        return this.props.survey;
    }
    get css() {
        return this.props.css || this.survey.css;
    }
    componentDidMount() {
        if (this.survey) {
            var self = this;
            this.updateStateFunction = function () {
                self.setState({ update: self.state.update + 1 });
            };
            this.survey.onPageVisibleChanged.add(this.updateStateFunction);
        }
    }
    componentWillUnmount() {
        if (this.survey && this.updateStateFunction) {
            this.survey.onPageVisibleChanged.remove(this.updateStateFunction);
            this.updateStateFunction = null;
        }
    }
}

class SurveyTimerPanel extends ReactSurveyElement {
    constructor(props) {
        super(props);
        this.circleLength = 440;
    }
    getStateElement() {
        return this.timerModel;
    }
    get timerModel() {
        return this.props.model;
    }
    get progress() {
        return -this.timerModel.progress * this.circleLength;
    }
    render() {
        if (!this.timerModel.isRunning) {
            return null;
        }
        let result = React.createElement("div", { className: this.timerModel.survey.getCss().timerRoot }, this.timerModel.text);
        if (this.timerModel.showTimerAsClock) {
            let style = { strokeDasharray: this.circleLength, strokeDashoffset: this.progress };
            const progress = (this.timerModel.showProgress ? React.createElement(SvgIcon, { className: this.timerModel.getProgressCss(), style: style, iconName: "icon-timercircle", size: "auto" }) : null);
            result =
                (React.createElement("div", { className: this.timerModel.rootCss },
                    progress,
                    React.createElement("div", { className: this.timerModel.textContainerCss },
                        React.createElement("span", { className: this.timerModel.majorTextCss }, this.timerModel.clockMajorText),
                        (this.timerModel.clockMinorText ? React.createElement("span", { className: this.timerModel.minorTextCss }, this.timerModel.clockMinorText) : null))));
        }
        return result;
    }
}
ReactElementFactory.Instance.registerElement("sv-timerpanel", (props) => {
    return React.createElement(SurveyTimerPanel, props);
});

class SurveyRowElement extends SurveyElementBase {
    constructor(props) {
        super(props);
        this.element.cssClasses;
        this.rootRef = React.createRef();
    }
    getStateElement() {
        return this.element;
    }
    get element() {
        return this.props.element;
    }
    get index() {
        return this.props.index;
    }
    get row() {
        return this.props.row;
    }
    get survey() {
        return this.props.survey;
    }
    get creator() {
        return this.props.creator;
    }
    get css() {
        return this.props.css;
    }
    componentDidMount() {
        super.componentDidMount();
        if (this.rootRef.current) {
            (this.element).setWrapperElement(this.rootRef.current);
        }
    }
    componentWillUnmount() {
        super.componentWillUnmount();
        this.element.setWrapperElement(undefined);
    }
    shouldComponentUpdate(nextProps, nextState) {
        if (!super.shouldComponentUpdate(nextProps, nextState))
            return false;
        if (nextProps.element !== this.element) {
            if (nextProps.element) {
                nextProps.element.setWrapperElement(this.rootRef.current);
            }
            if (this.element) {
                this.element.setWrapperElement(undefined);
            }
        }
        this.element.cssClasses;
        return true;
    }
    renderElement() {
        const element = this.element;
        const innerElement = this.createElement(element, this.index);
        const css = element.cssClassesValue;
        const focusIn = () => {
            const el = element;
            if (el && el.isQuestion) {
                el.focusIn();
            }
        };
        return (React.createElement("div", { className: css.questionWrapper, style: element.rootStyle, "data-key": element.name + this.index, onFocus: focusIn, ref: this.rootRef }, innerElement));
    }
    createElement(element, elementIndex) {
        if (!this.row.isNeedRender) {
            return ReactElementFactory.Instance.createElement(element.skeletonComponentName, { element: element, css: this.css, });
        }
        let elementType = element.getTemplate();
        if (!ReactElementFactory.Instance.isElementRegistered(elementType)) {
            elementType = "question";
        }
        return ReactElementFactory.Instance.createElement(elementType, {
            element: element,
            creator: this.creator,
            survey: this.survey,
            css: this.css,
        });
    }
}

class SurveyRow extends SurveyElementBase {
    constructor(props) {
        super(props);
        this.rootRef = React.createRef();
        this.recalculateCss();
    }
    recalculateCss() {
        this.row.visibleElements.map(element => element.cssClasses);
    }
    getStateElement() {
        return this.row;
    }
    get row() {
        return this.props.row;
    }
    get survey() {
        return this.props.survey;
    }
    get creator() {
        return this.props.creator;
    }
    get css() {
        return this.props.css;
    }
    canRender() {
        return !!this.row && !!this.survey && !!this.creator;
    }
    renderElementContent() {
        const elements = this.row.visibleElements.map((element, elementIndex) => {
            return (React.createElement(SurveyRowElement, { element: element, index: elementIndex, row: this.row, survey: this.survey, creator: this.creator, css: this.css, key: element.id }));
        });
        return (React.createElement("div", { ref: this.rootRef, className: this.row.getRowCss() }, elements));
    }
    renderElement() {
        const survey = this.survey;
        const content = this.renderElementContent();
        const wrapper = ReactSurveyElementsWrapper.wrapRow(survey, content, this.row);
        return wrapper || content;
    }
    componentDidMount() {
        super.componentDidMount();
        var el = this.rootRef.current;
        if (this.rootRef.current) {
            this.row.setRootElement(this.rootRef.current);
        }
        if (!!el && !this.row.isNeedRender) {
            var rowContainerDiv = el;
            this.lazyRenderingTimeout = setTimeout(() => {
                this.row.startLazyRendering(rowContainerDiv);
            }, 10);
        }
    }
    shouldComponentUpdate(nextProps, nextState) {
        if (!super.shouldComponentUpdate(nextProps, nextState))
            return false;
        if (nextProps.row !== this.row) {
            nextProps.row.isNeedRender = this.row.isNeedRender;
            nextProps.row.setRootElement(this.rootRef.current);
            this.row.setRootElement(undefined);
            this.stopLazyRendering();
        }
        this.recalculateCss();
        return true;
    }
    stopLazyRendering() {
        clearTimeout(this.lazyRenderingTimeout);
        this.row.stopLazyRendering();
        this.row.isNeedRender = !this.row.isLazyRendering();
    }
    componentWillUnmount() {
        super.componentWillUnmount();
        if (!!this.row) {
            if (!this.row.hasActiveUISubscribers) {
                this.row.setRootElement(undefined);
                this.stopLazyRendering();
            }
        }
    }
    createElement(element, elementIndex) {
        const index = elementIndex ? "-" + elementIndex : 0;
        var elementType = element.getType();
        if (!ReactElementFactory.Instance.isElementRegistered(elementType)) {
            elementType = "question";
        }
        return ReactElementFactory.Instance.createElement(elementType, {
            key: element.name + index,
            element: element,
            creator: this.creator,
            survey: this.survey,
            css: this.css,
        });
    }
}

class SurveyPanelBase extends SurveyElementBase {
    constructor(props) {
        super(props);
        this.rootRef = React.createRef();
    }
    getStateElement() {
        return this.panelBase;
    }
    canUsePropInState(key) {
        return key !== "elements" && super.canUsePropInState(key);
    }
    get survey() {
        return this.getSurvey();
    }
    get creator() {
        return this.props.creator;
    }
    get css() {
        return this.getCss();
    }
    get panelBase() {
        return this.getPanelBase();
    }
    getPanelBase() {
        return this.props.element || this.props.question;
    }
    getSurvey() {
        return (this.props.survey || (!!this.panelBase ? this.panelBase.survey : null));
    }
    getCss() {
        return this.props.css;
    }
    componentDidMount() {
        super.componentDidMount();
        this.doAfterRender();
    }
    componentWillUnmount() {
        super.componentWillUnmount();
        var el = this.rootRef.current;
        if (!!el) {
            el.removeAttribute("data-rendered");
        }
    }
    componentDidUpdate(prevProps, prevState) {
        super.componentDidUpdate(prevProps, prevState);
        if (!!prevProps.page &&
            !!this.survey &&
            !!this.survey.activePage &&
            prevProps.page.id === this.survey.activePage.id)
            return;
        this.doAfterRender();
    }
    doAfterRender() {
        var el = this.rootRef.current;
        if (el && this.survey) {
            if (this.panelBase.isPanel) {
                this.panelBase.afterRender(el);
            }
            else {
                this.survey.afterRenderPage(el);
            }
        }
    }
    getIsVisible() {
        return this.panelBase.isVisible;
    }
    canRender() {
        return (super.canRender() && !!this.survey && !!this.panelBase && !!this.panelBase.survey && this.getIsVisible());
    }
    renderRows(css) {
        return this.panelBase.visibleRows.map((row) => this.createRow(row, css));
    }
    createRow(row, css) {
        return (React.createElement(SurveyRow, { key: row.id, row: row, survey: this.survey, creator: this.creator, css: css }));
    }
}

class CharacterCounterComponent extends SurveyElementBase {
    getStateElement() {
        return this.props.counter;
    }
    renderElement() {
        return (React.createElement("div", { className: this.props.remainingCharacterCounter }, this.props.counter.remainingCharacterCounter));
    }
}
ReactElementFactory.Instance.registerElement("sv-character-counter", (props) => {
    return React.createElement(CharacterCounterComponent, props);
});

class TextAreaComponent extends SurveyElementBase {
    constructor(props) {
        super(props);
        this.initialValue = this.viewModel.getTextValue() || "";
        this.textareaRef = React.createRef();
    }
    get viewModel() {
        return this.props.viewModel;
    }
    canRender() {
        return !!this.viewModel.question;
    }
    componentDidMount() {
        super.componentDidMount();
        let el = this.textareaRef.current;
        if (!!el) {
            this.viewModel.setElement(el);
        }
    }
    componentWillUnmount() {
        super.componentWillUnmount();
        this.viewModel.resetElement();
    }
    renderElement() {
        return (React.createElement("textarea", { id: this.viewModel.id, className: this.viewModel.className, ref: this.textareaRef, disabled: this.viewModel.isDisabledAttr, readOnly: this.viewModel.isReadOnlyAttr, rows: this.viewModel.rows, cols: this.viewModel.cols, placeholder: this.viewModel.placeholder, maxLength: this.viewModel.maxLength, defaultValue: this.initialValue, onChange: (event) => { this.viewModel.onTextAreaInput(event); }, onFocus: (event) => { this.viewModel.onTextAreaFocus(event); }, onBlur: (event) => { this.viewModel.onTextAreaBlur(event); }, onKeyDown: (event) => { this.viewModel.onTextAreaKeyDown(event); }, "aria-required": this.viewModel.ariaRequired, "aria-label": this.viewModel.ariaLabel, "aria-labelledby": this.viewModel.ariaLabelledBy, "aria-describedby": this.viewModel.ariaDescribedBy, "aria-invalid": this.viewModel.ariaInvalid, "aria-errormessage": this.viewModel.ariaErrormessage, style: { resize: this.viewModel.question.resizeStyle } }));
    }
}
ReactElementFactory.Instance.registerElement("sv-text-area", (props) => {
    return React.createElement(TextAreaComponent, props);
});

class SurveyQuestionComment extends SurveyQuestionUncontrolledElement {
    renderCharacterCounter() {
        let counter = null;
        if (!!this.question.getMaxLength()) {
            counter = React.createElement(CharacterCounterComponent, { counter: this.question.characterCounter, remainingCharacterCounter: this.question.cssClasses.remainingCharacterCounter });
        }
        return counter;
    }
    constructor(props) {
        super(props);
    }
    renderElement() {
        if (this.question.isReadOnlyRenderDiv()) {
            return React.createElement("div", null, this.question.value);
        }
        const counter = this.renderCharacterCounter();
        const textAreaModel = this.props.question.textAreaModel;
        return (React.createElement(React.Fragment, null,
            React.createElement(TextAreaComponent, { viewModel: textAreaModel }),
            counter));
    }
}
class SurveyQuestionCommentItem extends ReactSurveyElement {
    constructor(props) {
        super(props);
        this.textAreaModel = this.getTextAreaModel();
    }
    canRender() {
        return !!this.props.question;
    }
    getTextAreaModel() {
        return this.props.question.commentTextAreaModel;
    }
    renderElement() {
        const question = this.props.question;
        if (question.isReadOnlyRenderDiv()) {
            const comment = this.textAreaModel.getTextValue() || "";
            return React.createElement("div", null, comment);
        }
        return (React.createElement(TextAreaComponent, { key: this.getKey(), viewModel: this.textAreaModel }));
    }
    getKey() { return undefined; }
}
class SurveyQuestionCommentValueItem extends SurveyQuestionCommentItem {
    constructor(props) {
        super(props);
    }
    getTextAreaModel() {
        return this.props.question.getCommentTextAreaModel(this.props.item);
    }
    getKey() { return this.props.item.uniqueId; }
}
ReactQuestionFactory.Instance.registerQuestion("comment", (props) => {
    return React.createElement(SurveyQuestionComment, props);
});

class SurveyCustomWidget extends SurveyQuestionElementBase {
    constructor(props) {
        super(props);
        this.widgetRef = React.createRef();
    }
    _afterRender() {
        if (this.questionBase.customWidget) {
            let el = this.widgetRef.current;
            if (!!el) {
                this.questionBase.customWidget.afterRender(this.questionBase, el);
                this.questionBase.customWidgetData.isNeedRender = false;
            }
        }
    }
    componentDidMount() {
        super.componentDidMount();
        if (this.questionBase) {
            this._afterRender();
        }
    }
    componentDidUpdate(prevProps, prevState) {
        super.componentDidUpdate(prevProps, prevState);
        var isDefaultRender = !!this.questionBase.customWidget &&
            this.questionBase.customWidget.isDefaultRender;
        if (this.questionBase && !isDefaultRender) {
            this._afterRender();
        }
    }
    componentWillUnmount() {
        super.componentWillUnmount();
        if (this.questionBase.customWidget) {
            let el = this.widgetRef.current;
            if (!!el) {
                this.questionBase.customWidget.willUnmount(this.questionBase, el);
            }
        }
    }
    canRender() {
        return super.canRender() && this.questionBase.visible;
    }
    renderElement() {
        let customWidget = this.questionBase.customWidget;
        if (customWidget.isDefaultRender) {
            return (React.createElement("div", { ref: this.widgetRef }, this.creator.createQuestionElement(this.questionBase)));
        }
        let widget = null;
        if (customWidget.widgetJson.render) {
            widget = customWidget.widgetJson.render(this.questionBase);
        }
        else {
            if (customWidget.htmlTemplate) {
                let htmlValue = { __html: customWidget.htmlTemplate };
                return React.createElement("div", { ref: this.widgetRef, dangerouslySetInnerHTML: htmlValue });
            }
        }
        return React.createElement("div", { ref: this.widgetRef }, widget);
    }
}

class SurveyElementHeader extends SurveyElementBase {
    get element() {
        return this.props.element;
    }
    getRenderedElements() {
        return [this.element];
    }
    renderElement() {
        const element = this.element;
        const title = element.hasTitle ? (React.createElement(TitleElement, { element: element })) : null;
        const description = element.hasDescriptionUnderTitle
            ? SurveyElementBase.renderQuestionDescription(this.element)
            : null;
        const additionalTitleToolbarElement = element.hasAdditionalTitleToolbar ? React.createElement(SurveyActionBar, { model: element.additionalTitleToolbar }) : null;
        const headerStyle = { width: undefined };
        if (element instanceof Question) {
            headerStyle.width = element.titleWidth;
        }
        return (React.createElement("div", { className: element.cssHeader, onClick: (e) => element.clickTitleFunction && element.clickTitleFunction(e.nativeEvent), style: headerStyle },
            title,
            description,
            additionalTitleToolbarElement));
    }
}

class SurveyQuestionSigleInputSummary extends ReactSurveyElement {
    constructor(props) {
        super(props);
    }
    get css() {
        return this.props.css;
    }
    get summary() {
        return this.props.summary;
    }
    renderElement() {
        if (!this.summary)
            return null;
        return this.summary.isEmpty() ? this.renderNoItems() : this.renderItems();
    }
    renderItems() {
        return (React.createElement("div", { className: this.css.summary }, this.summary.items.map((item, index) => this.renderItem(item, index))));
    }
    renderNoItems() {
        const q = this.summary.question;
        const placeholder = ReactElementFactory.Instance.createElement("sv-placeholder-" + q.getTemplate(), { cssClasses: this.css, question: q });
        return placeholder || React.createElement("div", null, this.renderLocString(this.summary.noEntry));
    }
    renderItem(item, index) {
        const btnEdit = item.btnEdit ?
            React.createElement("button", { className: this.css.summaryRowActionEdit, onClick: () => item.btnEdit.action(), title: item.btnEdit.title },
                React.createElement(SvgIcon, { iconName: "icon-editsmall-16x16", iconSize: "auto" })) : null;
        const btnDelete = item.showRemove && item.btnRemove ?
            React.createElement("button", { className: this.css.summaryRowActionDelete, onClick: () => item.btnRemove.action(), title: item.btnRemove.title },
                React.createElement(SvgIcon, { iconName: "icon-delete-16x16", iconSize: "auto" })) : null;
        return React.createElement("div", { className: this.css.summaryRow, key: index },
            React.createElement("div", { className: this.css.summaryRowContent }, this.renderLocString(item.locText)),
            React.createElement("div", { className: this.css.summaryRowActions },
                btnEdit,
                btnDelete));
    }
}
ReactElementFactory.Instance.registerElement("sv-singleinput-summary", (props) => {
    return React.createElement(SurveyQuestionSigleInputSummary, props);
});

class SurveyBreadcrumbs extends SurveyElementBase {
    constructor(props) {
        super(props);
    }
    getStateElement() {
        return this.props.model;
    }
    get items() {
        return this.props.model.actions;
    }
    get css() {
        return this.props.css;
    }
    renderElement() {
        if (!this.items || !this.items.length)
            return null;
        const items = this.renderItems();
        return (React.createElement("div", { className: this.css.breadcrumbsRoot }, items));
    }
    renderItems() {
        const result = [];
        this.items.concat([]).forEach((item, itemIndex) => {
            if (itemIndex) {
                result.push(React.createElement(SvgIcon, { key: item.renderedId + "_separator", className: this.css.breadcrumbsSeparator, iconName: "arrowright-16x16", size: "auto" }));
            }
            result.push(React.createElement(SurveyAction, { key: item.renderedId, item: item }));
        });
        return result;
    }
}
ReactElementFactory.Instance.registerElement("sv-breadcrumbs", (props) => {
    return React.createElement(SurveyBreadcrumbs, props);
});

class SurveyQuestion extends SurveyElementBase {
    static renderQuestionBody(creator, question) {
        // if (!question.isVisible) return null;
        var customWidget = question.customWidget;
        if (!customWidget) {
            return creator.createQuestionElement(question);
        }
        return React.createElement(SurveyCustomWidget, { creator: creator, question: question });
    }
    constructor(props) {
        super(props);
        this.isNeedFocus = false;
        this.rootRef = React.createRef();
    }
    getStateElement() {
        return this.question;
    }
    get question() {
        return this.props.element;
    }
    get creator() {
        return this.props.creator;
    }
    componentDidMount() {
        super.componentDidMount();
        if (!!this.question) {
            this.question["react"] = this;
        }
        this.doAfterRender();
    }
    componentWillUnmount() {
        super.componentWillUnmount();
        if (!!this.question) {
            this.question["react"] = null;
        }
        const el = this.rootRef.current;
        if (!!el) {
            el.removeAttribute("data-rendered");
        }
    }
    componentDidUpdate(prevProps, prevState) {
        super.componentDidUpdate(prevProps, prevState);
        this.doAfterRender();
    }
    doAfterRender() {
        if (this.isNeedFocus) {
            if (!this.question.isCollapsed) {
                this.question.clickTitleFunction();
            }
            this.isNeedFocus = false;
        }
        if (this.question) {
            var el = this.rootRef.current;
            if (el && el.getAttribute("data-rendered") !== "r") {
                el.setAttribute("data-rendered", "r");
                if (this.question.afterRender) {
                    this.question.afterRender(el);
                }
            }
        }
    }
    canRender() {
        return (super.canRender() &&
            !!this.question &&
            !!this.creator);
    }
    renderQuestionContent() {
        let question = this.question;
        var contentStyle = {
            display: this.question.renderedIsExpanded ? "" : "none",
        };
        var cssClasses = question.cssClasses;
        var questionRender = this.renderQuestion();
        var comment = question && question.hasComment ? this.renderComment(cssClasses) : null;
        var descriptionUnderInput = question.hasDescriptionUnderInput
            ? this.renderDescription()
            : null;
        return (React.createElement("div", { className: question.cssContent || undefined, style: contentStyle, "aria-hidden": question.contentAriaHidden, role: "presentation", "data-sv-drop-target-matrix": this.question.dragDropMatrixAttribute, "data-sv-drop-target-matrix-row": this.question.dragDropMatrixAttribute },
            questionRender,
            comment,
            descriptionUnderInput));
    }
    renderElement() {
        var question = this.question;
        var cssClasses = question.cssClasses;
        var header = this.renderHeader(question);
        var headerTop = question.hasTitleOnLeftTop ? header : null;
        var headerBottom = question.hasTitleOnBottom ? header : null;
        const errorsAboveQuestion = this.question.showErrorsAboveQuestion
            ? this.renderErrors(cssClasses, "")
            : null;
        const errorsBelowQuestion = this.question.showErrorsBelowQuestion
            ? this.renderErrors(cssClasses, "")
            : null;
        const rootStyle = question.getRootStyle();
        const singleBreadcrumbs = question.singleInputHasActions ? this.renderSingleInputBreadcrumbs(question, cssClasses) : undefined;
        const singleSummary = question.singleInputSummary ? this.renderSingleInputSummary(question, cssClasses) : undefined;
        const singleInput = singleSummary || (question.singleInputQuestion ? this.renderSingleInputQuestion(question, cssClasses) : undefined);
        const questionContent = singleInput || this.wrapQuestionContent(this.renderQuestionContent());
        return (React.createElement(React.Fragment, null,
            React.createElement("div", { ref: this.rootRef, id: question.id, className: question.getRootCss(), style: rootStyle, "data-name": question.name, role: question.ariaRole, "aria-required": this.question.ariaRequired, "aria-invalid": this.question.ariaInvalid, "aria-label": this.question.ariaLabel, "aria-labelledby": question.ariaLabelledBy, "aria-describedby": question.ariaDescribedBy, "aria-expanded": question.ariaExpanded },
                singleBreadcrumbs,
                errorsAboveQuestion,
                headerTop,
                questionContent,
                headerBottom,
                errorsBelowQuestion)));
    }
    renderSingleInputQuestion(question, cssClasses) {
        const singleQuestion = question.singleInputQuestion;
        const key = singleQuestion.id;
        return React.createElement(SurveyQuestion, { key: key, element: singleQuestion, creator: this.creator, css: cssClasses });
    }
    renderSingleInputBreadcrumbs(question, cssClasses) {
        return React.createElement(SurveyBreadcrumbs, { model: question.singleInputActions, css: cssClasses });
    }
    renderSingleInputSummary(question, cssClasses) {
        return React.createElement(SurveyQuestionSigleInputSummary, { summary: question.singleInputSummary, creator: this.creator, css: cssClasses });
    }
    wrapElement(element) {
        const survey = this.question.survey;
        let wrapper = null;
        if (survey) {
            wrapper = ReactSurveyElementsWrapper.wrapElement(survey, element, this.question);
        }
        return wrapper !== null && wrapper !== void 0 ? wrapper : element;
    }
    wrapQuestionContent(element) {
        const survey = this.question.survey;
        let wrapper = null;
        if (survey) {
            wrapper = ReactSurveyElementsWrapper.wrapQuestionContent(survey, element, this.question);
        }
        return wrapper !== null && wrapper !== void 0 ? wrapper : element;
    }
    renderQuestion() {
        return SurveyQuestion.renderQuestionBody(this.creator, this.question);
    }
    renderDescription() {
        return SurveyElementBase.renderQuestionDescription(this.question);
    }
    renderComment(cssClasses) {
        const commentText = SurveyElementBase.renderLocString(this.question.locCommentText);
        return (React.createElement("div", { className: this.question.getCommentAreaCss() },
            React.createElement("div", null, commentText),
            React.createElement(SurveyQuestionCommentItem, { question: this.question, cssClasses: cssClasses, isDisplayMode: this.question.isInputReadOnly })));
    }
    renderHeader(question) {
        return React.createElement(SurveyElementHeader, { element: question });
    }
    renderErrors(cssClasses, location) {
        return (React.createElement(SurveyElementErrors, { element: this.question, cssClasses: cssClasses, creator: this.creator, location: location, id: this.question.id + "_errors" }));
    }
}
ReactElementFactory.Instance.registerElement("question", (props) => {
    return React.createElement(SurveyQuestion, props);
});
class SurveyElementErrors extends ReactSurveyElement {
    constructor(props) {
        super(props);
        this.state = this.getState();
    }
    get id() {
        return this.props.element.id + "_errors";
    }
    get element() {
        return this.props.element;
    }
    get creator() {
        return this.props.creator;
    }
    getState(prevState = null) {
        return !prevState ? { error: 0 } : { error: prevState.error + 1 };
    }
    canRender() {
        return !!this.element && this.element.hasVisibleErrors;
    }
    componentWillUnmount() {
    }
    renderElement() {
        const errors = [];
        for (let i = 0; i < this.element.renderedErrors.length; i++) {
            const key = "error" + i;
            errors.push(this.creator.renderError(key, this.element.renderedErrors[i], this.cssClasses, this.element));
        }
        return (React.createElement("div", { className: this.element.cssError, id: this.id, role: "alert", "aria-live": "polite", "aria-atomic": "true" }, errors));
    }
}
class SurveyQuestionAndErrorsWrapped extends ReactSurveyElement {
    constructor(props) {
        super(props);
    }
    getStateElement() {
        return this.question;
    }
    get question() {
        return this.getQuestion();
    }
    get creator() {
        return this.props.creator;
    }
    getQuestion() {
        return this.props.question;
    }
    get itemCss() {
        return this.props.itemCss;
    }
    componentDidMount() {
        super.componentDidMount();
        this.doAfterRender();
    }
    componentDidUpdate(prevProps, prevState) {
        super.componentDidUpdate(prevProps, prevState);
        this.doAfterRender();
    }
    doAfterRender() { }
    canRender() {
        return !!this.question;
    }
    renderContent() {
        var renderedQuestion = this.renderQuestion();
        return (React.createElement(React.Fragment, null, renderedQuestion));
    }
    getShowErrors() {
        return this.question.isVisible;
    }
    renderQuestion() {
        return SurveyQuestion.renderQuestionBody(this.creator, this.question);
    }
}
class SurveyQuestionAndErrorsCell extends SurveyQuestionAndErrorsWrapped {
    constructor(props) {
        super(props);
        this.cellRef = React.createRef();
    }
    componentWillUnmount() {
        super.componentWillUnmount();
        if (this.question) {
            var el = this.cellRef.current;
            if (!!el) {
                el.removeAttribute("data-rendered");
            }
        }
    }
    renderCellContent() {
        return (React.createElement("div", { className: this.props.cell.cellQuestionWrapperClassName }, this.renderQuestion()));
    }
    renderElement() {
        var style = this.getCellStyle();
        const cell = this.props.cell;
        const focusIn = () => { cell.focusIn(); };
        return (React.createElement("td", { ref: this.cellRef, className: this.itemCss, colSpan: cell.colSpans, title: cell.getTitle(), style: style, onFocus: focusIn }, this.wrapCell(this.props.cell, this.renderCellContent())));
    }
    getCellStyle() {
        return null;
    }
    getHeaderText() {
        return "";
    }
    wrapCell(cell, element) {
        if (!cell) {
            return element;
        }
        const survey = this.question.survey;
        let wrapper = null;
        if (survey) {
            wrapper = ReactSurveyElementsWrapper.wrapMatrixCell(survey, element, cell, this.props.reason);
        }
        return wrapper !== null && wrapper !== void 0 ? wrapper : element;
    }
}
class SurveyQuestionErrorCell extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            changed: 0
        };
        if (this.question) {
            this.registerCallback(this.question);
        }
    }
    get question() {
        return this.props.question;
    }
    update() {
        this.setState({ changed: this.state.changed + 1 });
    }
    getQuestionPropertiesToTrack() {
        return ["errors"];
    }
    registerCallback(question) {
        question.registerFunctionOnPropertiesValueChanged(this.getQuestionPropertiesToTrack(), () => {
            this.update();
        }, "__reactSubscription");
    }
    unRegisterCallback(question) {
        question.unRegisterFunctionOnPropertiesValueChanged(this.getQuestionPropertiesToTrack(), "__reactSubscription");
    }
    componentDidUpdate(prevProps) {
        if (prevProps.question && prevProps.question !== this.question) {
            this.unRegisterCallback(prevProps.cell);
        }
        if (this.question) {
            this.registerCallback(this.question);
        }
    }
    componentWillUnmount() {
        if (this.question) {
            this.unRegisterCallback(this.question);
        }
    }
    render() {
        return React.createElement(SurveyElementErrors, { element: this.question, creator: this.props.creator, cssClasses: this.question.cssClasses });
    }
}

class SurveyPage extends SurveyPanelBase {
    constructor(props) {
        super(props);
    }
    getPanelBase() {
        return this.props.page;
    }
    get page() {
        return this.panelBase;
    }
    renderElement() {
        var title = this.renderTitle();
        var description = this.renderDescription();
        var rows = this.renderRows(this.panelBase.cssClasses);
        const errors = (React.createElement(SurveyElementErrors, { element: this.panelBase, cssClasses: this.panelBase.cssClasses, creator: this.creator }));
        return (React.createElement("div", { ref: this.rootRef, className: this.page.cssRoot },
            title,
            description,
            errors,
            rows));
    }
    renderTitle() {
        return React.createElement(TitleElement, { element: this.page });
    }
    renderDescription() {
        if (!this.page._showDescription)
            return null;
        var text = SurveyElementBase.renderLocString(this.page.locDescription);
        return (React.createElement("div", { className: this.panelBase.cssClasses.page.description }, text));
    }
}
ReactElementFactory.Instance.registerElement("sv-page", (props) => {
    return React.createElement(SurveyPage, props);
});

class SurveyPanel extends SurveyPanelBase {
    constructor(props) {
        super(props);
        this.hasBeenExpanded = false;
    }
    get panel() {
        return this.panelBase;
    }
    renderElement() {
        const header = this.renderHeader();
        const errors = (React.createElement(SurveyElementErrors, { element: this.panelBase, cssClasses: this.panelBase.cssClasses, creator: this.creator }));
        const style = {
            paddingLeft: this.panel.innerPaddingLeft,
            display: this.panel.renderedIsExpanded ? undefined : "none",
        };
        let content = null;
        if (this.panel.renderedIsExpanded) {
            // this.hasBeenExpanded = true;
            const rows = this.renderRows(this.panelBase.cssClasses);
            const className = this.panelBase.cssClasses.panel.content;
            content = this.renderContent(style, rows, className);
        }
        const focusIn = () => {
            if (this.panelBase)
                this.panelBase.focusIn();
        };
        return (React.createElement("div", { ref: this.rootRef, className: this.panelBase.getContainerCss(), onFocus: focusIn, id: this.panelBase.id },
            this.panel.showErrorsAbovePanel ? errors : null,
            header,
            this.panel.showErrorsAbovePanel ? null : errors,
            content));
    }
    renderHeader() {
        if (!this.panel.hasTitle && !this.panel.hasDescription) {
            return null;
        }
        return React.createElement(SurveyElementHeader, { element: this.panel });
    }
    wrapElement(element) {
        const survey = this.panel.survey;
        let wrapper = null;
        if (survey) {
            wrapper = ReactSurveyElementsWrapper.wrapElement(survey, element, this.panel);
        }
        return wrapper !== null && wrapper !== void 0 ? wrapper : element;
    }
    renderContent(style, rows, className) {
        const bottom = this.renderBottom();
        return (React.createElement("div", { style: style, className: className, id: this.panel.contentId, role: this.panel.ariaRole, "aria-labelledby": this.panel.ariaLabelledBy, "aria-label": this.panel.ariaLabel },
            rows,
            bottom));
    }
    renderTitle() {
        if (!this.panelBase.title)
            return null;
        return React.createElement(TitleElement, { element: this.panelBase });
    }
    renderDescription() {
        if (!this.panelBase.description)
            return null;
        var text = SurveyElementBase.renderLocString(this.panelBase.locDescription);
        return (React.createElement("div", { className: this.panel.cssClasses.panel.description }, text));
    }
    renderBottom() {
        const footerToolbar = this.panel.getFooterToolbar();
        if (!footerToolbar.hasActions)
            return null;
        return React.createElement(SurveyActionBar, { model: footerToolbar });
    }
    getIsVisible() {
        return this.panelBase.getIsContentVisible();
    }
}
ReactElementFactory.Instance.registerElement("panel", (props) => {
    return React.createElement(SurveyPanel, props);
});

class SurveyFlowPanel extends SurveyPanel {
    constructor(props) {
        super(props);
    }
    get flowPanel() {
        return this.panel;
    }
    componentDidMount() {
        super.componentDidMount();
        if (!!this.flowPanel) {
            this.flowPanel.onCustomHtmlProducing = function () {
                return "";
            };
            this.flowPanel.onGetHtmlForQuestion = this.renderQuestion;
        }
    }
    componentWillUnmount() {
        super.componentWillUnmount();
        if (!!this.flowPanel) {
            this.flowPanel.onCustomHtmlProducing = null;
            this.flowPanel.onGetHtmlForQuestion = null;
        }
    }
    getQuestion(name) {
        return this.flowPanel.getQuestionByName(name);
    }
    renderQuestion(question) {
        return "<question>" + question.name + "</question>";
    }
    renderRows() {
        const result = this.renderHtml();
        if (!!result) {
            return [result];
        }
        else {
            return [];
        }
    }
    getNodeIndex() {
        return this.renderedIndex++;
    }
    renderHtml() {
        if (!this.flowPanel)
            return null;
        const html = "<span>" + this.flowPanel.produceHtml() + "</span>";
        if (!DOMParser) {
            const htmlValue = { __html: html };
            return React.createElement("div", { dangerouslySetInnerHTML: htmlValue });
        }
        const doc = new DOMParser().parseFromString(html, "text/xml");
        this.renderedIndex = 0;
        return this.renderParentNode(doc);
    }
    renderNodes(domNodes) {
        const nodes = [];
        for (let i = 0; i < domNodes.length; i++) {
            const node = this.renderNode(domNodes[i]);
            if (!!node) {
                nodes.push(node);
            }
        }
        return nodes;
    }
    getStyle(nodeType) {
        const style = {};
        if (nodeType.toLowerCase() === "b") {
            style.fontWeight = "bold";
        }
        if (nodeType.toLowerCase() === "i") {
            style.fontStyle = "italic";
        }
        if (nodeType.toLowerCase() === "u") {
            style.textDecoration = "underline";
        }
        return style;
    }
    renderParentNode(node) {
        const nodeType = node.nodeName.toLowerCase();
        const children = this.renderNodes(this.getChildDomNodes(node));
        if (nodeType === "div")
            return React.createElement("div", { key: this.getNodeIndex() }, children);
        return (React.createElement("span", { key: this.getNodeIndex(), style: this.getStyle(nodeType) }, children));
    }
    renderNode(node) {
        if (!this.hasTextChildNodesOnly(node)) {
            return this.renderParentNode(node);
        }
        const nodeType = node.nodeName.toLowerCase();
        if (nodeType === "question") {
            const question = this.flowPanel.getQuestionByName(node.textContent);
            if (!question)
                return null;
            const questionBody = (React.createElement(SurveyQuestion, { key: question.name, element: question, creator: this.creator, css: this.css }));
            return React.createElement("span", { key: this.getNodeIndex() }, questionBody);
        }
        if (nodeType === "div") {
            return React.createElement("div", { key: this.getNodeIndex() }, node.textContent);
        }
        return (React.createElement("span", { key: this.getNodeIndex(), style: this.getStyle(nodeType) }, node.textContent));
    }
    getChildDomNodes(node) {
        const domNodes = [];
        for (let i = 0; i < node.childNodes.length; i++) {
            domNodes.push(node.childNodes[i]);
        }
        return domNodes;
    }
    hasTextChildNodesOnly(node) {
        const nodes = node.childNodes;
        for (let i = 0; i < nodes.length; i++) {
            if (nodes[i].nodeName.toLowerCase() !== "#text")
                return false;
        }
        return true;
    }
    renderContent(style, rows) {
        return React.createElement("f-panel", { style: style }, rows);
    }
}
ReactElementFactory.Instance.registerElement("flowpanel", props => {
    return React.createElement(SurveyFlowPanel, props);
});

class SurveyQuestionSelectbase extends SurveyQuestionElementBase {
    constructor(props) {
        super(props);
    }
    get question() {
        return this.questionBase;
    }
    renderElement() {
        var cssClasses = this.question.cssClasses;
        return (React.createElement("fieldset", { className: this.question.getSelectBaseRootCss(), ref: (fieldset) => (this.setControl(fieldset)), role: this.question.a11y_input_ariaRole, "aria-required": this.question.a11y_input_ariaRequired, "aria-label": this.question.a11y_input_ariaLabel, "aria-labelledby": this.question.a11y_input_ariaLabelledBy, "aria-describedby": this.question.a11y_input_ariaDescribedBy, "aria-invalid": this.question.a11y_input_ariaInvalid, "aria-errormessage": this.question.a11y_input_ariaErrormessage },
            this.renderHeader(),
            this.question.hasColumns
                ? this.getColumnedBody(cssClasses)
                : this.getBody(cssClasses),
            this.getFooter()));
    }
    renderHeader() { return null; }
    getFooter() {
        if (this.question.hasFootItems) {
            const items = this.question.footItems.map((item, ii) => this.renderItem(item, false, this.question.cssClasses));
            return React.createElement(React.Fragment, null, items);
        }
        return null;
    }
    getStateValue() { return undefined; }
    isItemChecked(item, value) { return false; }
    getColumnedBody(cssClasses) {
        return (React.createElement("div", { className: cssClasses.rootMultiColumn }, this.getColumns(cssClasses)));
    }
    getColumns(cssClasses) {
        const value = this.getStateValue();
        return this.question.columns.map((column, ci) => {
            var items = column.map((item, ii) => this.renderItem(item, ci === 0 && ii === 0, cssClasses, "" + ci + ii, this.isItemChecked(item, value)));
            return (React.createElement("div", { key: "column" + ci + this.question.getItemsColumnKey(column), className: this.question.getColumnClass(), role: "presentation" }, items));
        });
    }
    getBody(cssClasses) {
        if (this.question.blockedRow) {
            return React.createElement("div", { className: cssClasses.rootRow }, this.getItems(cssClasses, this.question.dataChoices));
        }
        else {
            return React.createElement(React.Fragment, null, this.getItems(cssClasses, this.question.bodyItems));
        }
    }
    getItems(cssClasses, choices) {
        const items = [];
        const value = this.getStateValue();
        for (let i = 0; i < choices.length; i++) {
            const item = choices[i];
            const renderedItem = this.renderItem(item, i == 0, cssClasses, "" + i, this.isItemChecked(item, value));
            if (!!renderedItem) {
                items.push(renderedItem);
            }
        }
        return items;
    }
    get textStyle() {
        return null;
    }
    renderItem(item, isFirst, cssClasses, index, isChecked) {
        const renderedItem = ReactElementFactory.Instance.createElement(this.question.itemComponent, {
            key: item.uniqueId,
            question: this.question,
            cssClasses: cssClasses,
            isDisplayMode: this.isDisplayMode,
            item: item,
            textStyle: this.textStyle,
            index: index,
            isFirst: isFirst,
            isChecked: isChecked,
            creator: this.props.creator,
        });
        const survey = this.question.survey;
        let wrappedItem = null;
        if (!!survey && !!renderedItem) {
            wrappedItem = ReactSurveyElementsWrapper.wrapItemValue(survey, renderedItem, this.question, item);
        }
        return wrappedItem !== null && wrappedItem !== void 0 ? wrappedItem : renderedItem;
    }
}
class SurveyQuestionSelectBaseItem extends ReactSurveyElement {
    constructor(props) {
        super(props);
        this.handleOnChange = (event) => {
            this.doOnItemChange(event);
        };
        this.rootRef = React.createRef();
    }
    getStateElement() {
        return this.item;
    }
    get question() {
        return this.props.question;
    }
    get item() {
        return this.props.item;
    }
    get textStyle() {
        return this.props.textStyle;
    }
    get isFirst() {
        return this.props.isFirst;
    }
    get index() {
        return this.props.index;
    }
    get hideCaption() {
        return this.props.hideCaption === true;
    }
    get ariaLabel() {
        return this.props.ariaLabel || null;
    }
    componentDidUpdate(prevProps, prevState) {
        super.componentDidUpdate(prevProps, prevState);
        if (prevProps.item !== this.props.item && !this.question.isDesignMode) {
            if (this.props.item) {
                this.props.item.setRootElement(this.rootRef.current);
            }
            if (prevProps.item) {
                prevProps.item.setRootElement(undefined);
            }
        }
    }
    shouldComponentUpdate(nextProps, nextState) {
        if (!super.shouldComponentUpdate(nextProps, nextState))
            return false;
        return (!this.question.customWidget ||
            !!this.question.customWidgetData.isNeedRender ||
            !!this.question.customWidget.widgetJson.isDefaultRender ||
            !!this.question.customWidget.widgetJson.render);
    }
    doOnItemChange(event) { }
    canRender() {
        return !!this.item && !!this.question;
    }
    renderElement() {
        return React.createElement(React.Fragment, null,
            this.renderElementContent(),
            this.renderPanel(),
            this.renderComment());
    }
    renderElementContent() {
        return null;
    }
    get inputStyle() {
        return null; //{ marginRight: "3px" };
    }
    renderComment() {
        if (!this.item.isCommentShowing)
            return null;
        return React.createElement("div", { className: this.question.getCommentAreaCss(true) },
            React.createElement(SurveyQuestionCommentValueItem, { question: this.question, item: this.item, cssClasses: this.question.cssClasses }));
    }
    renderPanel() {
        if (this.item.isPanelShowing) {
            const panel = this.item.panel;
            return (React.createElement(SurveyPanel, { key: panel.id, element: panel, survey: this.question.survey, cssClasses: this.props.cssClasses, isDisplayMode: this.isDisplayMode, creator: this.props.creator }));
        }
        return null;
    }
    componentDidMount() {
        super.componentDidMount();
        if (!this.question.isDesignMode) {
            this.item.setRootElement(this.rootRef.current);
        }
    }
    componentWillUnmount() {
        super.componentWillUnmount();
        if (!this.question.isDesignMode) {
            this.item.setRootElement(undefined);
        }
    }
}

class SurveyQuestionCheckbox extends SurveyQuestionSelectbase {
    constructor(props) {
        super(props);
    }
    get question() {
        return this.questionBase;
    }
    renderHeader() {
        return React.createElement(React.Fragment, null,
            React.createElement("legend", { className: "sv-hidden" }, this.question.locTitle.renderedHtml),
            this.getHeader());
    }
    getHeader() {
        if (this.question.hasHeadItems) {
            return this.question.headItems.map((item, ii) => this.renderItem(item, false, this.question.cssClasses));
        }
        return null;
    }
}
class SurveyQuestionCheckboxItem extends SurveyQuestionSelectBaseItem {
    constructor(props) {
        super(props);
    }
    doOnItemChange(event) {
        this.question.clickItemHandler(this.item, event.target.checked);
    }
    renderElementContent() {
        const isChecked = this.question.isItemSelected(this.item);
        return this.renderCheckbox(isChecked);
    }
    get inputStyle() {
        return null; //{ marginRight: "3px" };
    }
    renderCheckbox(isChecked) {
        const id = this.question.getItemId(this.item);
        const itemClass = this.question.getItemClass(this.item);
        const labelClass = this.question.getLabelClass(this.item);
        const itemLabel = !this.hideCaption ? React.createElement("span", { className: this.cssClasses.controlLabel }, this.renderLocString(this.item.locText, this.textStyle)) : null;
        return (React.createElement("div", { className: itemClass, role: "presentation", ref: this.rootRef },
            React.createElement("label", { className: labelClass },
                React.createElement("input", { className: this.cssClasses.itemControl, type: "checkbox", name: this.question.name + this.item.id, value: this.item.value, id: id, style: this.inputStyle, disabled: !this.question.getItemEnabled(this.item), readOnly: this.question.isReadOnlyAttr, checked: isChecked, onChange: this.handleOnChange, required: this.question.hasRequiredError(), "aria-label": this.ariaLabel }),
                this.cssClasses.materialDecorator ?
                    React.createElement("span", { className: this.cssClasses.materialDecorator }, this.question.itemSvgIcon ?
                        React.createElement("svg", { className: this.cssClasses.itemDecorator },
                            React.createElement("use", { xlinkHref: this.question.itemSvgIcon })) :
                        null) :
                    null,
                itemLabel)));
    }
}
ReactElementFactory.Instance.registerElement("survey-checkbox-item", (props) => {
    return React.createElement(SurveyQuestionCheckboxItem, props);
});
ReactQuestionFactory.Instance.registerQuestion("checkbox", (props) => {
    return React.createElement(SurveyQuestionCheckbox, props);
});

class SurveyQuestionRanking extends SurveyQuestionElementBase {
    get question() {
        return this.questionBase;
    }
    renderElement() {
        if (!this.question.selectToRankEnabled) {
            return (React.createElement("div", { className: this.question.rootClass, ref: (root) => (this.setControl(root)) }, this.getItems()));
        }
        else {
            const unrankedItem = true;
            return (React.createElement("div", { className: this.question.rootClass, ref: (root) => (this.setControl(root)) },
                React.createElement("div", { className: this.question.getContainerClasses("from"), "data-ranking": "from-container" },
                    this.getItems(this.question.renderedUnRankingChoices, unrankedItem),
                    this.question.renderedUnRankingChoices.length === 0 ? React.createElement("div", { className: this.question.cssClasses.containerPlaceholder },
                        " ",
                        this.renderLocString(this.question.locSelectToRankEmptyRankedAreaText),
                        " ") : null),
                React.createElement("div", { className: this.question.cssClasses.containersDivider }),
                React.createElement("div", { className: this.question.getContainerClasses("to"), "data-ranking": "to-container" },
                    this.getItems(),
                    this.question.renderedRankingChoices.length === 0 ? React.createElement("div", { className: this.question.cssClasses.containerPlaceholder },
                        " ",
                        this.renderLocString(this.question.locSelectToRankEmptyUnrankedAreaText),
                        " ") : null)));
        }
    }
    getItems(choices = this.question.renderedRankingChoices, unrankedItem) {
        const items = [];
        for (let i = 0; i < choices.length; i++) {
            const item = choices[i];
            items.push(this.renderItem(item, i, (event) => {
                this.question.handleKeydown.call(this.question, event, item);
            }, (event) => {
                event.persist();
                //event.preventDefault();
                this.question.handlePointerDown.call(this.question, event, item, event.currentTarget);
            }, (event) => {
                event.persist();
                //event.preventDefault();
                this.question.handlePointerUp.call(this.question, event, item, event.currentTarget);
            }, this.question.cssClasses, this.question.getItemClass(item), this.question, unrankedItem));
        }
        return items;
    }
    renderItem(item, i, handleKeydown, handlePointerDown, handlePointerUp, cssClasses, itemClass, question, unrankedItem) {
        "id-" + item.renderedId;
        const text = this.renderLocString(item.locText);
        const index = i;
        const indexText = this.question.getNumberByIndex(index);
        const tabIndex = this.question.getItemTabIndex(item);
        const renderedItem = (React.createElement(SurveyQuestionRankingItem, { key: item.uniqueId, text: text, index: index, indexText: indexText, itemTabIndex: tabIndex, handleKeydown: handleKeydown, handlePointerDown: handlePointerDown, handlePointerUp: handlePointerUp, cssClasses: cssClasses, itemClass: itemClass, question: question, unrankedItem: unrankedItem, item: item }));
        const survey = this.question.survey;
        let wrappedItem = null;
        if (!!survey) {
            wrappedItem = ReactSurveyElementsWrapper.wrapItemValue(survey, renderedItem, this.question, item);
        }
        return wrappedItem !== null && wrappedItem !== void 0 ? wrappedItem : renderedItem;
    }
}
class SurveyQuestionRankingItem extends ReactSurveyElement {
    get text() {
        return this.props.text;
    }
    get index() {
        return this.props.index;
    }
    get indexText() {
        return this.props.indexText;
    }
    get handleKeydown() {
        return this.props.handleKeydown;
    }
    get handlePointerDown() {
        return this.props.handlePointerDown;
    }
    get handlePointerUp() {
        return this.props.handlePointerUp;
    }
    get cssClasses() {
        return this.props.cssClasses;
    }
    get itemClass() {
        return this.props.itemClass;
    }
    get itemTabIndex() {
        return this.props.itemTabIndex;
    }
    get question() {
        return this.props.question;
    }
    get unrankedItem() {
        return this.props.unrankedItem;
    }
    get item() {
        return this.props.item;
    }
    renderEmptyIcon() {
        return (React.createElement("svg", null,
            React.createElement("use", { xlinkHref: this.question.dashSvgIcon })));
    }
    renderElement() {
        let itemContent = ReactElementFactory.Instance.createElement(this.question.itemComponent, { item: this.item, cssClasses: this.cssClasses });
        return (React.createElement("div", { id: this.question.getItemId(this.item), tabIndex: this.itemTabIndex, className: this.itemClass, onKeyDown: this.handleKeydown, onPointerDown: this.handlePointerDown, onPointerUp: this.handlePointerUp, "data-sv-drop-target-ranking-item": this.index },
            React.createElement("div", { tabIndex: -1, style: { outline: "none" } },
                React.createElement("div", { className: this.cssClasses.itemGhostNode }),
                React.createElement("div", { className: this.cssClasses.itemContent },
                    React.createElement("div", { className: this.cssClasses.itemIconContainer },
                        React.createElement("svg", { className: this.question.getIconHoverCss() },
                            React.createElement("use", { xlinkHref: this.question.dragDropSvgIcon })),
                        React.createElement("svg", { className: this.question.getIconFocusCss() },
                            React.createElement("use", { xlinkHref: this.question.arrowsSvgIcon }))),
                    React.createElement("div", { className: this.question.getItemIndexClasses(this.item) }, (!this.unrankedItem && this.indexText) ? this.indexText : this.renderEmptyIcon()),
                    itemContent))));
    }
}
class SurveyQuestionRankingItemContent extends ReactSurveyElement {
    get item() {
        return this.props.item;
    }
    get cssClasses() {
        return this.props.cssClasses;
    }
    renderElement() {
        return React.createElement("div", { className: this.cssClasses.controlLabel }, SurveyElementBase.renderLocString(this.item.locText));
    }
}
ReactElementFactory.Instance.registerElement("sv-ranking-item", props => {
    return React.createElement(SurveyQuestionRankingItemContent, props);
});
ReactQuestionFactory.Instance.registerQuestion("ranking", (props) => {
    return React.createElement(SurveyQuestionRanking, props);
});

class RatingItemBase extends SurveyElementBase {
    constructor(props) {
        super(props);
        this.handleOnMouseDown = this.handleOnMouseDown.bind(this);
    }
    get question() {
        return this.props.question;
    }
    get item() {
        return this.props.item;
    }
    get index() {
        return this.props.index;
    }
    getStateElement() {
        return this.item;
    }
    handleOnMouseDown(event) {
        this.question.onMouseDown();
    }
}
class RatingItem extends RatingItemBase {
    render() {
        var itemText = this.renderLocString(this.item.locText);
        return (React.createElement("label", { className: this.item.className, onMouseDown: this.handleOnMouseDown },
            React.createElement("input", { type: "radio", className: "sv-visuallyhidden", name: this.question.questionName, id: this.question.getInputId(this.index), value: this.item.value, disabled: this.question.isDisabledAttr, readOnly: this.question.isReadOnlyAttr, checked: this.question.value == this.item.value, onClick: this.props.handleOnClick, onChange: () => { }, "aria-label": this.question.ariaLabel }),
            React.createElement("span", { className: this.question.cssClasses.itemText, "data-text": this.item.text }, itemText)));
    }
    componentDidMount() {
        super.componentDidMount();
    }
}
ReactElementFactory.Instance.registerElement("sv-rating-item", (props) => {
    return React.createElement(RatingItem, props);
});

class RatingItemStar extends RatingItemBase {
    render() {
        return (React.createElement("label", { className: this.item.className, onMouseDown: this.handleOnMouseDown, onMouseOver: e => this.question.onItemMouseIn(this.item), onMouseOut: e => this.question.onItemMouseOut(this.item), title: this.item.text },
            React.createElement("input", { type: "radio", className: "sv-visuallyhidden", name: this.question.questionName, id: this.question.getInputId(this.index), value: this.item.value, disabled: this.question.isDisabledAttr, readOnly: this.question.isReadOnlyAttr, checked: this.question.value == this.item.value, onClick: this.props.handleOnClick, onChange: () => { }, "aria-label": this.question.ariaLabel }),
            React.createElement(SvgIcon, { className: "sv-star", size: "auto", iconName: this.question.itemStarIcon }),
            React.createElement(SvgIcon, { className: "sv-star-2", size: "auto", iconName: this.question.itemStarIconAlt })));
    }
}
ReactElementFactory.Instance.registerElement("sv-rating-item-star", (props) => {
    return React.createElement(RatingItemStar, props);
});

class RatingItemSmiley extends RatingItemBase {
    render() {
        return (React.createElement("label", { style: this.item.style, className: this.item.className, onMouseDown: this.handleOnMouseDown, onMouseOver: e => this.question.onItemMouseIn(this.item), onMouseOut: e => this.question.onItemMouseOut(this.item), title: this.item.text },
            React.createElement("input", { type: "radio", className: "sv-visuallyhidden", name: this.question.questionName, id: this.question.getInputId(this.index), value: this.item.value, disabled: this.question.isDisabledAttr, readOnly: this.question.isReadOnlyAttr, checked: this.question.value == this.item.value, onClick: this.props.handleOnClick, onChange: () => { }, "aria-label": this.question.ariaLabel }),
            React.createElement(SvgIcon, { size: "auto", iconName: this.question.getItemSmileyIconName(this.item) })));
    }
}
ReactElementFactory.Instance.registerElement("sv-rating-item-smiley", (props) => {
    return React.createElement(RatingItemSmiley, props);
});

class RatingDropdownItem extends SurveyElementBase {
    get item() {
        return this.props.item;
    }
    getStateElement() {
        return this.item;
    }
    render() {
        if (!this.item)
            return null;
        const item = this.props.item;
        const description = this.renderDescription(item);
        return (React.createElement("div", { className: "sd-rating-dropdown-item" },
            React.createElement("span", { className: "sd-rating-dropdown-item_text" }, item.title),
            description));
    }
    renderDescription(item) {
        if (!item.description)
            return null;
        return (React.createElement("div", { className: "sd-rating-dropdown-item_description" }, this.renderLocString(item.description, undefined, "locString")));
    }
}
ReactElementFactory.Instance.registerElement("sv-rating-dropdown-item", (props) => {
    return React.createElement(RatingDropdownItem, props);
});

class TagboxFilterString extends SurveyElementBase {
    get model() {
        return this.props.model;
    }
    get question() {
        return this.props.question;
    }
    componentDidUpdate(prevProps, prevState) {
        super.componentDidUpdate(prevProps, prevState);
        this.updateDomElement();
    }
    componentDidMount() {
        super.componentDidMount();
        this.updateDomElement();
    }
    updateDomElement() {
        if (!!this.inputElement) {
            const control = this.inputElement;
            const newValue = this.model.inputStringRendered;
            if (!Helpers.isTwoValueEquals(newValue, control.value, false, true, false)) {
                control.value = this.model.inputStringRendered;
            }
        }
    }
    onChange(e) {
        var _a;
        const activeElement = (_a = e.target.getRootNode()) === null || _a === void 0 ? void 0 : _a.activeElement;
        if (e.target === activeElement) {
            this.model.inputStringRendered = e.target.value;
        }
    }
    keyhandler(e) {
        this.model.inputKeyHandler(e);
    }
    onBlur(e) {
        this.question.onBlur(e);
    }
    onFocus(e) {
        this.question.onFocus(e);
    }
    constructor(props) {
        super(props);
    }
    getStateElement() {
        return this.model;
    }
    render() {
        return (React.createElement("div", { className: this.question.cssClasses.hint },
            this.model.showHintPrefix ?
                (React.createElement("div", { className: this.question.cssClasses.hintPrefix },
                    React.createElement("span", null, this.model.hintStringPrefix))) : null,
            React.createElement("div", { className: this.question.cssClasses.hintSuffixWrapper },
                this.model.showHintString ?
                    (React.createElement("div", { className: this.question.cssClasses.hintSuffix },
                        React.createElement("span", { style: { visibility: "hidden" }, "data-bind": "text: model.filterString" }, this.model.inputStringRendered),
                        React.createElement("span", null, this.model.hintStringSuffix))) : null,
                React.createElement("input", { type: "text", autoComplete: "off", id: this.question.getInputId(), inputMode: this.model.inputMode, ref: (element) => (this.inputElement = element), className: this.question.cssClasses.filterStringInput, disabled: this.question.isInputReadOnly, readOnly: this.model.filterReadOnly ? true : undefined, size: !this.model.inputStringRendered ? 1 : undefined, role: this.model.ariaInputRole, "aria-required": this.model.ariaInputRequired, "aria-invalid": this.model.ariaInputInvalid, "aria-errormessage": this.model.ariaInputErrorMessage, "aria-expanded": this.model.ariaInputExpanded, "aria-label": this.model.ariaInputLabel, "aria-labelledby": this.model.ariaInputLabelledby, "aria-describedby": this.model.ariaInputDescribedby, "aria-controls": this.model.ariaInputControls, "aria-activedescendant": this.model.ariaInputActivedescendant, placeholder: this.model.filterStringPlaceholder, onKeyDown: (e) => { this.keyhandler(e); }, onChange: (e) => { this.onChange(e); }, onBlur: (e) => { this.onBlur(e); }, onFocus: (e) => { this.onFocus(e); } }))));
    }
}
ReactQuestionFactory.Instance.registerQuestion("sv-tagbox-filter", (props) => {
    return React.createElement(TagboxFilterString, props);
});

class SurveyQuestionOptionItem extends ReactSurveyElement {
    constructor(props) {
        super(props);
        this.state = { changed: 0 };
        this.setupModel();
    }
    componentDidUpdate(prevProps, prevState) {
        super.componentDidUpdate(prevProps, prevState);
        this.setupModel();
    }
    componentDidMount() {
        super.componentDidMount();
        this.setupModel();
    }
    componentWillUnmount() {
        super.componentWillUnmount();
        if (!!this.item) {
            this.item.locText.onChanged = () => { };
        }
    }
    setupModel() {
        if (!this.item.locText)
            return;
        const self = this;
        this.item.locText.onChanged = () => {
            self.setState({ changed: self.state.changed + 1 });
        };
    }
    getStateElement() {
        return this.item;
    }
    get item() {
        return this.props.item;
    }
    canRender() {
        return !!this.item;
    }
    renderElement() {
        return (React.createElement("option", { value: this.item.value, disabled: !this.item.isEnabled }, this.item.text));
    }
}

class SurveyQuestionDropdownBase extends SurveyQuestionUncontrolledElement {
    constructor() {
        super(...arguments);
        this.click = (event) => {
            var _a;
            (_a = this.question.dropdownListModel) === null || _a === void 0 ? void 0 : _a.onClick(event);
        };
        this.chevronPointerDown = (event) => {
            var _a;
            (_a = this.question.dropdownListModel) === null || _a === void 0 ? void 0 : _a.chevronPointerDown(event);
        };
        this.clear = (event) => {
            var _a;
            (_a = this.question.dropdownListModel) === null || _a === void 0 ? void 0 : _a.onClear(event);
        };
        this.keyhandler = (event) => {
            var _a;
            (_a = this.question.dropdownListModel) === null || _a === void 0 ? void 0 : _a.keyHandler(event);
        };
        this.blur = (event) => {
            this.updateInputDomElement();
            this.question.onBlur(event);
        };
        this.focus = (event) => {
            this.question.onFocus(event);
        };
    }
    get dropdownListModel() {
        return this.question["dropdownListModel"];
    }
    getStateElement() {
        return this.question["dropdownListModel"];
    }
    setValueCore(newValue) {
        this.questionBase.renderedValue = newValue;
    }
    getValueCore() {
        return this.questionBase.renderedValue;
    }
    renderReadOnlyElement() {
        if (this.question.showInputFieldComponent) {
            return (React.createElement("div", { className: this.question.cssClasses.controlValue }, this.renderValueElement()));
        }
        if (this.question.readOnlyText) {
            return (React.createElement("div", { className: this.question.cssClasses.controlValue }, this.renderLocString(this.question.locReadOnlyText)));
        }
        return null;
    }
    renderSelect(cssClasses) {
        let selectElement = null;
        const dropdownListModel = this.dropdownListModel;
        if (this.question.isReadOnly) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            selectElement = React.createElement("div", { id: this.question.inputId, role: dropdownListModel === null || dropdownListModel === void 0 ? void 0 : dropdownListModel.ariaQuestionRole, "aria-label": dropdownListModel === null || dropdownListModel === void 0 ? void 0 : dropdownListModel.ariaQuestionLabel, "aria-labelledby": dropdownListModel === null || dropdownListModel === void 0 ? void 0 : dropdownListModel.ariaQuestionLabelledby, "aria-describedby": dropdownListModel === null || dropdownListModel === void 0 ? void 0 : dropdownListModel.ariaQuestionDescribedby, "aria-expanded": "false", "aria-readonly": "true", "aria-disabled": "true", tabIndex: this.question.isDisabledAttr ? undefined : 0, className: this.question.getControlClass(), ref: (div) => (this.setControl(div)) },
                this.renderReadOnlyElement(),
                this.renderEditorButtons());
        }
        else {
            selectElement = React.createElement(React.Fragment, null,
                this.renderInput(),
                this.question.isInputReadOnly ? null : React.createElement(Popup, { model: dropdownListModel.popupModel }));
        }
        return (React.createElement("div", { className: cssClasses.selectWrapper, onClick: this.click }, selectElement));
    }
    renderValueElement() {
        if (this.question.showInputFieldComponent) {
            const listModel = this.dropdownListModel;
            const actionItem = !!listModel ? listModel.getSelectedAction() : this.question.selectedItem;
            return ReactElementFactory.Instance.createElement(this.question.inputFieldComponentName, { item: actionItem, question: this.question });
        }
        else if (this.question.showSelectedItemLocText) {
            return this.renderLocString(this.question.selectedItemLocText);
        }
        return null;
    }
    renderInput() {
        const dropdownListModel = this.dropdownListModel;
        let valueElement = this.renderValueElement();
        return (React.createElement("div", { id: this.question.inputId, className: this.question.getControlClass(), tabIndex: dropdownListModel.noTabIndex ? undefined : 0, 
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            disabled: this.question.isDisabledAttr, required: this.question.isRequired, onKeyDown: this.keyhandler, onBlur: this.blur, onFocus: this.focus, role: dropdownListModel.ariaQuestionRole, "aria-required": dropdownListModel.ariaQuestionRequired, "aria-invalid": dropdownListModel.ariaQuestionInvalid, "aria-errormessage": dropdownListModel.ariaQuestionErrorMessage, "aria-expanded": dropdownListModel.ariaQuestionExpanded, "aria-label": dropdownListModel.ariaQuestionLabel, "aria-labelledby": dropdownListModel.ariaQuestionLabelledby, "aria-describedby": dropdownListModel.ariaQuestionDescribedby, "aria-controls": dropdownListModel.ariaQuestionControls, "aria-activedescendant": dropdownListModel.ariaQuestionActivedescendant, ref: (div) => (this.setControl(div)) },
            dropdownListModel.showHintPrefix ?
                (React.createElement("div", { className: this.question.cssClasses.hintPrefix },
                    React.createElement("span", null, dropdownListModel.hintStringPrefix))) : null,
            React.createElement("div", { className: this.question.cssClasses.controlValue },
                dropdownListModel.showHintString ?
                    (React.createElement("div", { className: this.question.cssClasses.hintSuffix },
                        React.createElement("span", { style: { visibility: "hidden" }, "data-bind": "text: model.filterString" }, dropdownListModel.inputStringRendered),
                        React.createElement("span", null, dropdownListModel.hintStringSuffix))) : null,
                valueElement,
                dropdownListModel.needRenderInput ? this.renderFilterInput() : null),
            this.renderEditorButtons()));
    }
    renderFilterInput() {
        const { root } = settings.environment;
        const dropdownListModel = this.dropdownListModel;
        const onInputChange = (e) => {
            var _a;
            const activeElement = (_a = e.target.getRootNode()) === null || _a === void 0 ? void 0 : _a.activeElement;
            if (e.target === activeElement) {
                dropdownListModel.inputStringRendered = e.target.value;
            }
        };
        return React.createElement("input", { type: "text", autoComplete: "off", id: this.question.getInputId(), ref: (element) => (this.inputElement = element), className: this.question.cssClasses.filterStringInput, role: dropdownListModel.ariaInputRole, "aria-required": dropdownListModel.ariaInputRequired, "aria-invalid": dropdownListModel.ariaInputInvalid, "aria-errormessage": dropdownListModel.ariaInputErrorMessage, "aria-expanded": dropdownListModel.ariaInputExpanded, "aria-label": dropdownListModel.ariaInputLabel, "aria-labelledby": dropdownListModel.ariaInputLabelledby, "aria-describedby": dropdownListModel.ariaInputDescribedby, "aria-controls": dropdownListModel.ariaInputControls, "aria-activedescendant": dropdownListModel.ariaInputActivedescendant, placeholder: dropdownListModel.placeholderRendered, readOnly: dropdownListModel.filterReadOnly ? true : undefined, tabIndex: dropdownListModel.noTabIndex ? undefined : -1, disabled: this.question.isDisabledAttr, inputMode: dropdownListModel.inputMode, onChange: (e) => { onInputChange(e); }, onBlur: this.blur, onFocus: this.focus });
    }
    renderOther(item, cssClasses) {
        if (!item || !item.isCommentShowing)
            return null;
        return (React.createElement("div", { key: item.uniqueId, className: this.question.getCommentAreaCss(true) },
            React.createElement(SurveyQuestionCommentValueItem, { question: this.question, item: item, cssClasses: this.question.cssClasses })));
    }
    renderEditorButtons() {
        return React.createElement(SurveyActionBar, { model: this.dropdownListModel.editorButtons });
    }
    componentDidUpdate(prevProps, prevState) {
        super.componentDidUpdate(prevProps, prevState);
        this.updateInputDomElement();
    }
    componentDidMount() {
        super.componentDidMount();
        this.updateInputDomElement();
    }
    componentWillUnmount() {
        super.componentWillUnmount();
        if (this.question.dropdownListModel)
            this.question.dropdownListModel.focused = false;
    }
    updateInputDomElement() {
        if (!!this.inputElement) {
            const control = this.inputElement;
            const newValue = this.question.dropdownListModel.inputStringRendered;
            if (!Helpers.isTwoValueEquals(newValue, control.value, false, true, false)) {
                control.value = this.question.dropdownListModel.inputStringRendered;
            }
        }
    }
}

class SurveyQuestionDropdown extends SurveyQuestionDropdownBase {
    constructor(props) {
        super(props);
    }
    renderElement() {
        const cssClasses = this.question.cssClasses;
        const comment = this.renderOther(this.question.selectedItem, cssClasses);
        const select = this.renderSelect(cssClasses);
        return (React.createElement("div", { className: this.question.renderCssRoot },
            select,
            comment));
    }
}
ReactQuestionFactory.Instance.registerQuestion("dropdown", (props) => {
    return React.createElement(SurveyQuestionDropdown, props);
});

class SurveyQuestionTagboxItem extends ReactSurveyElement {
    constructor(props) {
        super(props);
    }
    get question() {
        return this.props.question;
    }
    get item() {
        return this.props.item;
    }
    canRender() {
        return !!this.item && !!this.question;
    }
    renderElement() {
        const text = this.renderLocString(this.item.locText);
        const removeItem = (event) => {
            this.question.dropdownListModel.deselectItem(this.item.value);
            event.stopPropagation();
        };
        return (React.createElement("div", { className: "sv-tagbox__item" },
            React.createElement("div", { className: "sv-tagbox__item-text" }, text),
            React.createElement("div", { className: this.question.cssClasses.cleanItemButton, onClick: removeItem },
                React.createElement(SvgIcon, { className: this.question.cssClasses.cleanItemButtonSvg, iconName: this.question.cssClasses.cleanItemButtonIconId, size: "auto" }))));
    }
}

class SurveyQuestionTagbox extends SurveyQuestionDropdownBase {
    constructor(props) {
        super(props);
    }
    renderItem(key, item) {
        const renderedItem = (React.createElement(SurveyQuestionTagboxItem, { key: key, question: this.question, item: item }));
        return renderedItem;
    }
    renderInput() {
        const dropdownListModel = this.dropdownListModel;
        const items = this.question.selectedChoices.map((choice, index) => { return this.renderItem("item" + index, choice); });
        return (React.createElement("div", { id: this.question.inputId, className: this.question.getControlClass(), tabIndex: dropdownListModel.noTabIndex ? undefined : 0, 
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            disabled: this.question.isInputReadOnly, required: this.question.isRequired, onKeyDown: this.keyhandler, onBlur: this.blur, role: dropdownListModel.ariaQuestionRole, "aria-required": dropdownListModel.ariaQuestionRequired, "aria-invalid": dropdownListModel.ariaQuestionInvalid, "aria-errormessage": dropdownListModel.ariaQuestionErrorMessage, "aria-label": dropdownListModel.ariaQuestionLabel, "aria-labelledby": dropdownListModel.ariaQuestionLabelledby, "aria-describedby": dropdownListModel.ariaQuestionDescribedby, "aria-expanded": dropdownListModel.ariaQuestionExpanded, "aria-controls": dropdownListModel.ariaQuestionControls, "aria-activedescendant": dropdownListModel.ariaQuestionActivedescendant, ref: (div) => (this.setControl(div)) },
            React.createElement("div", { className: this.question.cssClasses.controlValue },
                items,
                dropdownListModel.needRenderInput ? React.createElement(TagboxFilterString, { model: dropdownListModel, question: this.question }) : null),
            this.renderEditorButtons()));
    }
    renderElement() {
        const cssClasses = this.question.cssClasses;
        const comment = this.renderOther(this.question.otherItem, cssClasses);
        const select = this.renderSelect(cssClasses);
        return (React.createElement("div", { className: this.question.renderCssRoot },
            select,
            comment));
    }
}
ReactQuestionFactory.Instance.registerQuestion("tagbox", (props) => {
    return React.createElement(SurveyQuestionTagbox, props);
});

class SurveyQuestionDropdownSelect extends SurveyQuestionDropdown {
    constructor(props) {
        super(props);
    }
    renderSelect(cssClasses) {
        const click = (event) => {
            this.question.onClick(event);
        };
        const keyup = (event) => {
            this.question.onKeyUp(event);
        };
        const selectElement = this.isDisplayMode ? (
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        React.createElement("div", { id: this.question.inputId, className: this.question.getControlClass(), disabled: true }, this.question.readOnlyText)) :
            (React.createElement("select", { id: this.question.inputId, className: this.question.getControlClass(), ref: (select) => (this.setControl(select)), autoComplete: this.question.autocomplete, onChange: this.updateValueOnEvent, onInput: this.updateValueOnEvent, onClick: click, onKeyUp: keyup, "aria-required": this.question.a11y_input_ariaRequired, "aria-label": this.question.a11y_input_ariaLabel, "aria-invalid": this.question.a11y_input_ariaInvalid, "aria-errormessage": this.question.a11y_input_ariaErrormessage, required: this.question.isRequired },
                this.question.allowClear ? (React.createElement("option", { value: "" }, this.question.placeholder)) : null,
                this.question.visibleChoices.map((item) => React.createElement(SurveyQuestionOptionItem, { key: item.uniqueId, item: item }))));
        return (React.createElement("div", { className: cssClasses.selectWrapper },
            selectElement,
            this.createChevronButton()));
    }
    createChevronButton() {
        if (!this.question.cssClasses.chevronButtonIconId)
            return null;
        return (React.createElement("div", { className: this.question.cssClasses.chevronButton, "aria-hidden": "true", onPointerDown: this.chevronPointerDown },
            React.createElement(SvgIcon, { className: this.question.cssClasses.chevronButtonSvg, iconName: this.question.cssClasses.chevronButtonIconId, size: "auto" })));
    }
}
ReactQuestionFactory.Instance.registerQuestion("sv-dropdown-select", (props) => {
    return React.createElement(SurveyQuestionDropdownSelect, props);
});
RendererFactory.Instance.registerRenderer("dropdown", "select", "sv-dropdown-select");

class SurveyQuestionMatrix extends SurveyQuestionElementBase {
    constructor(props) {
        super(props);
        this.state = { rowsChanged: 0 };
    }
    get question() {
        return this.questionBase;
    }
    componentDidMount() {
        super.componentDidMount();
        if (this.question) {
            var self = this;
            this.question.visibleRowsChangedCallback = function () {
                self.setState({ rowsChanged: self.state.rowsChanged + 1 });
            };
        }
    }
    componentWillUnmount() {
        super.componentWillUnmount();
        if (this.question) {
            this.question.visibleRowsChangedCallback = null;
        }
    }
    renderElement() {
        var cssClasses = this.question.cssClasses;
        var rowsTH = this.question.hasRows ? React.createElement("td", null) : null;
        var headers = [];
        for (var i = 0; i < this.question.visibleColumns.length; i++) {
            var column = this.question.visibleColumns[i];
            var columText = this.renderLocString(column.locText);
            const style = {};
            if (!!this.question.columnMinWidth) {
                style.minWidth = this.question.columnMinWidth;
                style.width = this.question.columnMinWidth;
            }
            headers.push(React.createElement("th", { className: this.question.cssClasses.headerCell, style: style, key: column.uniqueId }, this.wrapCell({ column: column }, columText, "column-header")));
        }
        var rows = [];
        var visibleRows = this.question.visibleRows;
        for (var i = 0; i < visibleRows.length; i++) {
            var row = visibleRows[i];
            rows.push(React.createElement(SurveyQuestionMatrixRow, { key: row.uniqueId, question: this.question, cssClasses: cssClasses, row: row, isFirst: i == 0 }));
        }
        var header = !this.question.showHeader ? null : (React.createElement("thead", { role: "presentation" },
            React.createElement("tr", null,
                rowsTH,
                headers)));
        return (React.createElement("div", { className: this.question.getTableWrapperCss(), ref: root => (this.setControl(root)) },
            React.createElement("fieldset", { role: "radiogroup" },
                React.createElement("legend", { className: "sv-visuallyhidden" }, this.question.locTitle.renderedHtml),
                React.createElement("table", { className: this.question.getTableCss(), role: "presentation" },
                    header,
                    React.createElement("tbody", null, rows)))));
    }
}
class SurveyQuestionMatrixRow extends ReactSurveyElement {
    constructor(props) {
        super(props);
    }
    getStateElement() {
        if (!!this.row)
            return this.row.item;
        return super.getStateElement();
    }
    get question() {
        return this.props.question;
    }
    get row() {
        return this.props.row;
    }
    wrapCell(cell, element, reason) {
        if (!reason) {
            return element;
        }
        const survey = this.question.survey;
        let wrapper = null;
        if (survey) {
            wrapper = ReactSurveyElementsWrapper.wrapMatrixCell(survey, element, cell, reason);
        }
        return wrapper !== null && wrapper !== void 0 ? wrapper : element;
    }
    canRender() {
        return !!this.row;
    }
    renderElement() {
        var rowsTD = null;
        if (this.question.hasRows) {
            var rowText = this.renderLocString(this.row.locText);
            const style = {};
            if (!!this.question.rowTitleWidth) {
                style.minWidth = this.question.rowTitleWidth;
                style.width = this.question.rowTitleWidth;
            }
            rowsTD = React.createElement("td", { style: style, className: this.row.rowTextClasses }, this.wrapCell({ row: this.row }, rowText, "row-header"));
        }
        var tds = this.generateTds();
        return (React.createElement("tr", { className: this.row.rowClasses || undefined },
            rowsTD,
            tds));
    }
    generateTds() {
        const tds = [];
        const row = this.row;
        const cellComponent = this.question.cellComponent;
        for (var i = 0; i < this.question.visibleColumns.length; i++) {
            let td = null;
            const column = this.question.visibleColumns[i];
            const key = column.uniqueId;
            let itemClass = this.question.getItemClass(row, column);
            if (this.question.hasCellText) {
                const getHandler = (column) => () => this.cellClick(row, column);
                td = (React.createElement("td", { key: key, className: itemClass, onClick: getHandler ? getHandler(column) : () => { } }, this.renderLocString(this.question.getCellDisplayLocText(row.name, column))));
            }
            else {
                const renderedCell = ReactElementFactory.Instance.createElement(cellComponent, {
                    question: this.question,
                    row: this.row,
                    column: column,
                    columnIndex: i,
                    cssClasses: this.cssClasses,
                    cellChanged: () => { this.cellClick(this.row, column); }
                });
                td = (React.createElement("td", { key: key, "data-responsive-title": column.locText.renderedHtml, className: this.question.cssClasses.cell }, renderedCell));
            }
            tds.push(td);
        }
        return tds;
    }
    cellClick(row, column) {
        row.cellClick(column);
        this.setState({ value: row.value });
    }
}
class SurveyQuestionMatrixCell extends ReactSurveyElement {
    constructor(props) {
        super(props);
        this.handleOnMouseDown = this.handleOnMouseDown.bind(this);
        this.handleOnChange = this.handleOnChange.bind(this);
    }
    handleOnChange(event) {
        if (!!this.props.cellChanged) {
            this.props.cellChanged();
        }
        this.setState({ value: this.row.isChecked(this.column) });
    }
    handleOnMouseDown(event) {
        this.question.onMouseDown();
    }
    get question() {
        return this.props.question;
    }
    get row() {
        return this.props.row;
    }
    get column() {
        return this.props.column;
    }
    get columnIndex() {
        return this.props.columnIndex;
    }
    canRender() {
        return !!this.question && !!this.row;
    }
    renderElement() {
        const isChecked = this.row.isChecked(this.column);
        const inputId = this.question.inputId + "_" + this.row.name + "_" + this.columnIndex;
        const itemClass = this.question.getItemClass(this.row, this.column);
        const itemSvgIcon = this.question.getItemSvgIcon(this.row, this.column);
        const mobileSpan = this.question.isMobile ?
            (React.createElement("span", { className: this.question.cssClasses.cellResponsiveTitle }, this.renderLocString(this.column.locText)))
            : undefined;
        return (React.createElement("label", { onMouseDown: this.handleOnMouseDown, className: itemClass },
            this.renderInput(inputId, isChecked),
            React.createElement("span", { className: this.question.cssMaterialDecorator }, itemSvgIcon ?
                React.createElement("svg", { className: this.question.cssItemDecorator },
                    React.createElement("use", { xlinkHref: itemSvgIcon })) : null),
            mobileSpan));
    }
    renderInput(inputId, isChecked) {
        return (React.createElement("input", { id: inputId, type: this.question.checkType, className: this.question.cssItemValue, name: this.row.fullName, value: this.column.value, disabled: this.row.isDisabledAttr, readOnly: this.row.isReadOnlyAttr, checked: isChecked, onChange: this.handleOnChange, "aria-required": this.question.a11y_input_ariaRequired, "aria-label": this.question.getCellAriaLabel(this.row, this.column), "aria-invalid": this.question.a11y_input_ariaInvalid, "aria-errormessage": this.question.a11y_input_ariaErrormessage }));
    }
}
ReactElementFactory.Instance.registerElement("survey-matrix-cell", props => {
    return React.createElement(SurveyQuestionMatrixCell, props);
});
ReactQuestionFactory.Instance.registerQuestion("matrix", props => {
    return React.createElement(SurveyQuestionMatrix, props);
});

class SurveyQuestionHtml extends SurveyQuestionElementBase {
    constructor(props) {
        super(props);
    }
    get question() {
        return this.questionBase;
    }
    componentDidMount() {
        this.reactOnStrChanged();
    }
    componentWillUnmount() {
        this.question.locHtml.onChanged = function () { };
    }
    componentDidUpdate(prevProps, prevState) {
        this.reactOnStrChanged();
    }
    reactOnStrChanged() {
        this.question.locHtml.onChanged = () => {
            this.setState({ changed: !!this.state && this.state.changed ? this.state.changed + 1 : 1 });
        };
    }
    canRender() {
        return super.canRender() && !!this.question.html;
    }
    renderElement() {
        var htmlValue = { __html: this.question.locHtml.renderedHtml };
        return (React.createElement("div", { className: this.question.renderCssRoot, dangerouslySetInnerHTML: htmlValue }));
    }
}
ReactQuestionFactory.Instance.registerQuestion("html", (props) => {
    return React.createElement(SurveyQuestionHtml, props);
});

class LoadingIndicatorComponent extends React.Component {
    render() {
        return (React.createElement("div", { className: "sd-loading-indicator" },
            React.createElement(SvgIcon, { iconName: "icon-loading", size: "auto" })));
    }
}

class SurveyQuestionFile extends SurveyQuestionElementBase {
    constructor(props) {
        super(props);
    }
    get question() {
        return this.questionBase;
    }
    renderElement() {
        const preview = this.question.allowShowPreview ? this.renderPreview() : null;
        const loadingIndicator = this.question.showLoadingIndicator ? this.renderLoadingIndicator() : null;
        const video = this.question.isPlayingVideo ? this.renderVideo() : null;
        const fileDecorator = this.question.showFileDecorator ? this.renderFileDecorator() : null;
        const fileNavigator = this.question.fileNavigatorVisible ? (React.createElement(SurveyActionBar, { model: this.question.fileNavigator })) : null;
        const acceptedTypes = this.question.renderedAcceptedTypes;
        const className = !this.isDisplayMode ? this.question.cssClasses.fileInput : this.question.getReadOnlyFileCss();
        const style = this.isDisplayMode ? { color: "transparent" } : {};
        let fileInput;
        if (this.question.isReadOnlyAttr) {
            fileInput = React.createElement("input", { readOnly: true, type: "file", className: className, id: this.question.inputId, ref: input => (this.setControl(input)), style: style, multiple: this.question.allowMultiple, placeholder: this.question.title, accept: acceptedTypes });
        }
        else if (this.question.isDisabledAttr) {
            fileInput = React.createElement("input", { disabled: true, type: "file", className: className, id: this.question.inputId, ref: input => (this.setControl(input)), style: style, multiple: this.question.allowMultiple, placeholder: this.question.title, accept: acceptedTypes });
        }
        else if (this.question.hasFileUI) {
            fileInput = React.createElement("input", { type: "file", disabled: this.isDisplayMode, tabIndex: -1, className: className, id: this.question.inputId, ref: input => (this.setControl(input)), style: style, "aria-required": this.question.ariaRequired, "aria-label": this.question.ariaLabel, "aria-invalid": this.question.ariaInvalid, "aria-errormessage": this.question.ariaErrormessage, multiple: this.question.allowMultiple, title: this.question.inputTitle, accept: acceptedTypes, capture: this.question.renderCapture });
        }
        else {
            fileInput = null;
        }
        return (React.createElement("div", { className: this.question.fileRootCss, ref: el => (this.setContent(el)) },
            fileInput,
            React.createElement("div", { className: this.question.cssClasses.dragArea, onDrop: this.question.onDrop, onDragOver: this.question.onDragOver, onDragLeave: this.question.onDragLeave, onDragEnter: this.question.onDragEnter },
                fileDecorator,
                loadingIndicator,
                video,
                preview,
                fileNavigator)));
    }
    renderFileDecorator() {
        const actionsContainer = this.question.actionsContainerVisible ? React.createElement(SurveyActionBar, { model: this.question.actionsContainer }) : null;
        return (React.createElement("div", { className: this.question.getFileDecoratorCss() },
            this.question.showDragAreaPlaceholder ? React.createElement("span", { className: this.question.cssClasses.dragAreaPlaceholder }, this.renderLocString(this.question.locRenderedPlaceholder)) : false,
            React.createElement("div", { className: this.question.cssClasses.wrapper }, actionsContainer)));
    }
    renderPreview() {
        return ReactElementFactory.Instance.createElement("sv-file-preview", { question: this.question });
    }
    renderLoadingIndicator() {
        return React.createElement("div", { className: this.question.cssClasses.loadingIndicator },
            React.createElement(LoadingIndicatorComponent, null));
    }
    renderVideo() {
        return (React.createElement("div", { className: this.question.cssClasses.videoContainer },
            React.createElement(SurveyAction, { item: this.question.changeCameraAction }),
            React.createElement(SurveyAction, { item: this.question.closeCameraAction }),
            React.createElement("video", { autoPlay: true, playsInline: true, id: this.question.videoId, className: this.question.cssClasses.video }),
            React.createElement(SurveyAction, { item: this.question.takePictureAction })));
    }
}
ReactQuestionFactory.Instance.registerQuestion("file", props => {
    return React.createElement(SurveyQuestionFile, props);
});

class SurveyFileChooseButton extends ReactSurveyElement {
    constructor(props) {
        super(props);
    }
    get question() {
        return (this.props.item && this.props.item.data.question) || this.props.data.question;
    }
    render() {
        return attachKey2click(React.createElement("label", { tabIndex: 0, className: this.question.getChooseFileCss(), htmlFor: this.question.inputId, "aria-label": this.question.chooseButtonText, onClick: (e) => this.question.chooseFile(e.nativeEvent) },
            (!!this.question.cssClasses.chooseFileIconId) ? React.createElement(SvgIcon, { title: this.question.chooseButtonText, iconName: this.question.cssClasses.chooseFileIconId, size: "auto" }) : null,
            React.createElement("span", null, this.question.chooseButtonText)));
    }
}
ReactElementFactory.Instance.registerElement("sv-file-choose-btn", (props) => {
    return React.createElement(SurveyFileChooseButton, props);
});

class SurveyFilePage extends SurveyElementBase {
    get question() {
        return this.props.question;
    }
    get page() {
        return this.props.page;
    }
    renderElement() {
        const items = this.page.items.map((item, index) => { return ReactElementFactory.Instance.createElement("sv-file-item", { item, question: this.question, key: index }); });
        return (React.createElement("div", { className: this.page.css, id: this.page.id }, items));
    }
}

class SurveyFilePreview extends SurveyElementBase {
    get question() {
        return this.props.question;
    }
    renderFileSign(className, val) {
        if (!className || !val.name)
            return null;
        return (React.createElement("div", { className: className },
            React.createElement("a", { href: val.content, onClick: event => {
                    this.question.doDownloadFile(event, val);
                }, title: val.name, download: val.name, style: { width: this.question.imageWidth } }, val.name)));
    }
    renderElement() {
        const content = this.question.renderedPages.map((page, index) => { return (React.createElement(SurveyFilePage, { page: page, question: this.question, key: page.id })); });
        return React.createElement("div", { className: this.question.cssClasses.fileList || undefined }, content);
    }
    canRender() {
        return this.question.showPreviewContainer;
    }
}
ReactElementFactory.Instance.registerElement("sv-file-preview", (props) => {
    return React.createElement(SurveyFilePreview, props);
});

class SurveyFileItem extends SurveyElementBase {
    get question() {
        return this.props.question;
    }
    get item() {
        return this.props.item;
    }
    renderFileSign(className, val) {
        if (!className || !val.name)
            return null;
        return (React.createElement("div", { className: className },
            React.createElement("a", { href: val.content, onClick: event => {
                    this.question.doDownloadFile(event, val);
                }, title: val.name, download: val.name, target: "_blank", rel: "noreferrer", style: { width: this.question.imageWidth } }, val.name)));
    }
    renderElement() {
        const val = this.item;
        return (React.createElement("span", { className: this.question.cssClasses.previewItem, onClick: (event) => this.question.doDownloadFileFromContainer(event) },
            this.renderFileSign(this.question.cssClasses.fileSign, val),
            React.createElement("div", { className: this.question.getImageWrapperCss(val) },
                this.question.canPreviewImage(val) ? (React.createElement("img", { src: val.content, style: { height: this.question.imageHeight, width: this.question.imageWidth }, alt: "File preview" })) : (this.question.cssClasses.defaultImage ? (React.createElement(SvgIcon, { iconName: this.question.cssClasses.defaultImageIconId, size: "auto", className: this.question.cssClasses.defaultImage })) : null),
                val.name && !this.question.isReadOnly ? (React.createElement("div", { className: this.question.getRemoveButtonCss(), onClick: (event) => this.question.doRemoveFile(val, event) },
                    React.createElement("span", { className: this.question.cssClasses.removeFile }, this.question.removeFileCaption),
                    (this.question.cssClasses.removeFileSvgIconId) ?
                        (React.createElement(SvgIcon, { title: this.question.removeFileCaption, iconName: this.question.cssClasses.removeFileSvgIconId, size: "auto", className: this.question.cssClasses.removeFileSvg })) : null)) : null),
            this.renderFileSign(this.question.cssClasses.fileSignBottom, val)));
    }
    canRender() {
        return this.question.showPreviewContainer;
    }
}
ReactElementFactory.Instance.registerElement("sv-file-item", (props) => {
    return React.createElement(SurveyFileItem, props);
});

class SurveyQuestionMultipleText extends SurveyQuestionElementBase {
    constructor(props) {
        super(props);
    }
    get question() {
        return this.questionBase;
    }
    renderElement() {
        var cssClasses = this.question.cssClasses;
        var tableRows = this.question.getRows();
        var rows = [];
        for (var i = 0; i < tableRows.length; i++) {
            if (tableRows[i].isVisible) {
                rows.push(this.renderRow(i, tableRows[i].cells, cssClasses));
            }
        }
        return (React.createElement("table", { className: this.question.getQuestionRootCss() },
            React.createElement("tbody", null, rows)));
    }
    renderCell(cell, cssClasses, index) {
        let cellContent;
        const focusIn = () => { cell.item.focusIn(); };
        if (cell.isErrorsCell) {
            cellContent = React.createElement(SurveyQuestionErrorCell, { question: cell.item.editor, creator: this.creator });
        }
        else {
            cellContent = React.createElement(SurveyMultipleTextItem, { question: this.question, item: cell.item, creator: this.creator, cssClasses: cssClasses });
        }
        return (React.createElement("td", { key: cell.item.id, className: cell.className, onFocus: focusIn }, cellContent));
    }
    renderRow(rowIndex, cells, cssClasses) {
        const key = "item" + rowIndex;
        const tds = [];
        for (let i = 0; i < cells.length; i++) {
            const cell = cells[i];
            tds.push(this.renderCell(cell, cssClasses, i));
        }
        return (React.createElement("tr", { key: key, className: cssClasses.row }, tds));
    }
}
class SurveyMultipleTextItem extends ReactSurveyElement {
    get question() {
        return this.props.question;
    }
    get item() {
        return this.props.item;
    }
    getStateElements() {
        return [this.item, this.item.editor];
    }
    get creator() {
        return this.props.creator;
    }
    renderElement() {
        const item = this.item;
        const cssClasses = this.cssClasses;
        const titleStyle = {};
        if (!!this.question.itemTitleWidth) {
            titleStyle.minWidth = this.question.itemTitleWidth;
            titleStyle.width = this.question.itemTitleWidth;
        }
        return (React.createElement("label", { className: this.question.getItemLabelCss(item) },
            React.createElement("span", { className: cssClasses.itemTitle, style: titleStyle },
                React.createElement(TitleContent, { element: item.editor, cssClasses: item.editor.cssClasses })),
            React.createElement(SurveyMultipleTextItemEditor, { cssClasses: cssClasses, itemCss: this.question.getItemCss(), question: item.editor, creator: this.creator })));
    }
}
class SurveyMultipleTextItemEditor extends SurveyQuestionAndErrorsWrapped {
    renderElement() {
        return React.createElement("div", { className: this.itemCss }, this.renderContent());
    }
}
ReactQuestionFactory.Instance.registerQuestion("multipletext", (props) => {
    return React.createElement(SurveyQuestionMultipleText, props);
});

class SurveyQuestionRadiogroup extends SurveyQuestionSelectbase {
    constructor(props) {
        super(props);
    }
    get question() {
        return this.questionBase;
    }
    getFooter() {
        return React.createElement(React.Fragment, null,
            super.getFooter(),
            this.renderClearButton());
    }
    renderClearButton() {
        if (!this.question.showClearButtonInContent)
            return null;
        return (React.createElement("div", null,
            React.createElement("input", { type: "button", className: this.question.cssClasses.clearButton, onClick: () => this.question.clearValueFromUI(), value: this.question.clearButtonCaption })));
    }
    getStateValue() {
        return !this.question.isEmpty() ? this.question.renderedValue : "";
    }
    isItemChecked(item, value) { return item.value === value; }
}
class SurveyQuestionRadioItem extends SurveyQuestionSelectBaseItem {
    constructor(props) {
        super(props);
        this.handleOnMouseDown = this.handleOnMouseDown.bind(this);
    }
    getStateElement() {
        return this.item;
    }
    get question() {
        return this.props.question;
    }
    get isChecked() {
        return this.props.isChecked;
    }
    doOnItemChange(event) {
        this.question.clickItemHandler(this.item);
    }
    handleOnMouseDown(event) {
        this.question.onMouseDown();
    }
    renderElementContent() {
        return this.renderRadioButton();
    }
    renderRadioButton() {
        var itemClass = this.question.getItemClass(this.item);
        var labelClass = this.question.getLabelClass(this.item);
        var controlLabelClass = this.question.getControlLabelClass(this.item);
        const itemLabel = !this.hideCaption ? React.createElement("span", { className: controlLabelClass }, this.renderLocString(this.item.locText, this.textStyle)) : null;
        return (React.createElement("div", { className: itemClass, role: "presentation", ref: this.rootRef },
            React.createElement("label", { onMouseDown: this.handleOnMouseDown, className: labelClass },
                React.createElement("input", { "aria-errormessage": this.question.ariaErrormessage, className: this.cssClasses.itemControl, id: this.question.getItemId(this.item), type: "radio", name: this.question.questionName, checked: this.isChecked, value: this.item.value, disabled: !this.question.getItemEnabled(this.item), readOnly: this.question.isReadOnlyAttr, onChange: this.handleOnChange, "aria-label": this.ariaLabel }),
                this.cssClasses.materialDecorator ?
                    React.createElement("span", { className: this.cssClasses.materialDecorator }, this.question.itemSvgIcon ?
                        React.createElement("svg", { className: this.cssClasses.itemDecorator },
                            React.createElement("use", { xlinkHref: this.question.itemSvgIcon })) :
                        null) :
                    null,
                itemLabel)));
    }
}
ReactElementFactory.Instance.registerElement("survey-radiogroup-item", (props) => {
    return React.createElement(SurveyQuestionRadioItem, props);
});
ReactQuestionFactory.Instance.registerQuestion("radiogroup", (props) => {
    return React.createElement(SurveyQuestionRadiogroup, props);
});

class SurveyQuestionText extends SurveyQuestionUncontrolledElement {
    //controlRef: React.RefObject<HTMLInputElement>;
    constructor(props) {
        super(props);
        //this.controlRef = React.createRef();
    }
    renderInput() {
        const inputClass = this.question.getControlClass();
        const placeholder = this.question.renderedPlaceholder;
        if (this.question.isReadOnlyRenderDiv()) {
            return React.createElement("div", null, this.question.inputValue);
        }
        const counter = !!this.question.getMaxLength() ? (React.createElement(CharacterCounterComponent, { counter: this.question.characterCounter, remainingCharacterCounter: this.question.cssClasses.remainingCharacterCounter })) : null;
        return (React.createElement(React.Fragment, null,
            React.createElement("input", { id: this.question.inputId, 
                // disabled={this.isDisplayMode}
                disabled: this.question.isDisabledAttr, readOnly: this.question.isReadOnlyAttr, className: inputClass, type: this.question.inputType, 
                //ref={this.controlRef}
                ref: (input) => (this.setControl(input)), style: this.question.inputStyle, maxLength: this.question.getMaxLength(), min: this.question.renderedMin, max: this.question.renderedMax, step: this.question.renderedStep, size: this.question.inputSize, placeholder: placeholder, list: this.question.dataListId, autoComplete: this.question.autocomplete, onBlur: (event) => { this.question.onBlur(event); }, onFocus: (event) => { this.question.onFocus(event); }, onChange: this.question.onChange, onClick: this.question.readOnlyBlocker, onPointerDown: this.question.readOnlyBlocker, onKeyUp: this.question.onKeyUp, onKeyDown: this.question.onKeyDown, onCompositionUpdate: (event) => this.question.onCompositionUpdate(event.nativeEvent), "aria-required": this.question.a11y_input_ariaRequired, "aria-label": this.question.a11y_input_ariaLabel, "aria-labelledby": this.question.a11y_input_ariaLabelledBy, "aria-describedby": this.question.a11y_input_ariaDescribedBy, "aria-invalid": this.question.a11y_input_ariaInvalid, "aria-errormessage": this.question.a11y_input_ariaErrormessage }),
            counter));
    }
    renderElement() {
        return (this.question.dataListId ?
            React.createElement("div", null,
                this.renderInput(),
                this.renderDataList()) :
            this.renderInput());
    }
    setValueCore(newValue) {
        this.question.inputValue = newValue;
    }
    getValueCore() {
        return this.question.inputValue;
    }
    renderDataList() {
        if (!this.question.dataListId)
            return null;
        var items = this.question.dataList;
        if (items.length == 0)
            return null;
        var options = [];
        for (var i = 0; i < items.length; i++) {
            options.push(React.createElement("option", { key: "item" + i, value: items[i] }));
        }
        return React.createElement("datalist", { id: this.question.dataListId }, options);
    }
}
ReactQuestionFactory.Instance.registerQuestion("text", (props) => {
    return React.createElement(SurveyQuestionText, props);
});

class SurveyQuestionBoolean extends SurveyQuestionElementBase {
    constructor(props) {
        super(props);
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleOnClick = this.handleOnClick.bind(this);
        this.handleOnLabelClick = this.handleOnLabelClick.bind(this);
        this.handleOnSwitchClick = this.handleOnSwitchClick.bind(this);
        this.handleOnKeyDown = this.handleOnKeyDown.bind(this);
        this.checkRef = React.createRef();
    }
    getStateElement() {
        return this.question;
    }
    get question() {
        return this.questionBase;
    }
    /*
    private get allowClick(): boolean {
      return this.question.isIndeterminate && !this.isDisplayMode;
    }
    */
    doCheck(value) {
        this.question.booleanValue = value;
    }
    handleOnChange(event) {
        this.doCheck(event.target.checked);
    }
    handleOnClick(event) {
        this.question.onLabelClick(event, true);
    }
    handleOnSwitchClick(event) {
        this.question.onSwitchClickModel(event.nativeEvent);
    }
    handleOnLabelClick(event, value) {
        this.question.onLabelClick(event, value);
    }
    handleOnKeyDown(event) {
        this.question.onKeyDownCore(event);
    }
    updateDomElement() {
        if (!this.question)
            return;
        const el = this.checkRef.current;
        if (el) {
            el.indeterminate = this.question.isIndeterminate;
        }
        this.setControl(el);
        super.updateDomElement();
    }
    renderElement() {
        const cssClasses = this.question.cssClasses;
        const itemClass = this.question.getItemCss();
        return (React.createElement("div", { className: cssClasses.root, onKeyDown: this.handleOnKeyDown },
            React.createElement("label", { className: itemClass },
                React.createElement("input", { ref: this.checkRef, type: "checkbox", name: this.question.name, value: this.question.booleanValue === null
                        ? ""
                        : this.question.booleanValue, id: this.question.inputId, className: cssClasses.control, disabled: this.question.isDisabledAttr, readOnly: this.question.isReadOnlyAttr, checked: this.question.booleanValue || false, onChange: this.handleOnChange, role: this.question.a11y_input_ariaRole, "aria-required": this.question.a11y_input_ariaRequired, "aria-label": this.question.a11y_input_ariaLabel, "aria-labelledby": this.question.a11y_input_ariaLabelledBy, "aria-describedby": this.question.a11y_input_ariaDescribedBy, "aria-invalid": this.question.a11y_input_ariaInvalid, "aria-errormessage": this.question.a11y_input_ariaErrormessage }),
                React.createElement("div", { className: cssClasses.sliderGhost, onClick: (event) => this.handleOnLabelClick(event, this.question.swapOrder) },
                    React.createElement("span", { className: this.question.getLabelCss(this.question.swapOrder) }, this.renderLocString(this.question.locLabelLeft))),
                React.createElement("div", { className: cssClasses.switch, onClick: this.handleOnSwitchClick },
                    React.createElement("span", { className: cssClasses.slider }, this.question.isDeterminated && cssClasses.sliderText ?
                        React.createElement("span", { className: cssClasses.sliderText }, this.renderLocString(this.question.getCheckedLabel()))
                        : null)),
                React.createElement("div", { className: cssClasses.sliderGhost, onClick: (event) => this.handleOnLabelClick(event, !this.question.swapOrder) },
                    React.createElement("span", { className: this.question.getLabelCss(!this.question.swapOrder) }, this.renderLocString(this.question.locLabelRight))))));
    }
}
ReactQuestionFactory.Instance.registerQuestion("boolean", (props) => {
    return React.createElement(SurveyQuestionBoolean, props);
});

class SurveyQuestionBooleanCheckbox extends SurveyQuestionBoolean {
    constructor(props) {
        super(props);
    }
    renderElement() {
        const cssClasses = this.question.cssClasses;
        const itemClass = this.question.getCheckboxItemCss();
        const description = this.question.canRenderLabelDescription ?
            SurveyElementBase.renderQuestionDescription(this.question) : null;
        return (React.createElement("div", { className: cssClasses.rootCheckbox },
            React.createElement("div", { className: itemClass },
                React.createElement("label", { className: cssClasses.checkboxLabel },
                    React.createElement("input", { ref: this.checkRef, type: "checkbox", name: this.question.name, value: this.question.booleanValue === null
                            ? ""
                            : this.question.booleanValue, id: this.question.inputId, className: cssClasses.controlCheckbox, disabled: this.question.isDisabledAttr, readOnly: this.question.isReadOnlyAttr, checked: this.question.booleanValue || false, onChange: this.handleOnChange, "aria-required": this.question.a11y_input_ariaRequired, "aria-label": this.question.a11y_input_ariaLabel, "aria-labelledby": this.question.a11y_input_ariaLabelledBy, "aria-describedby": this.question.a11y_input_ariaDescribedBy, "aria-invalid": this.question.a11y_input_ariaInvalid, "aria-errormessage": this.question.a11y_input_ariaErrormessage }),
                    React.createElement("span", { className: cssClasses.checkboxMaterialDecorator },
                        this.question.svgIcon ?
                            React.createElement("svg", { className: cssClasses.checkboxItemDecorator },
                                React.createElement("use", { xlinkHref: this.question.svgIcon })) : null,
                        React.createElement("span", { className: "check" })),
                    this.question.isLabelRendered && (React.createElement("span", { className: cssClasses.checkboxControlLabel, id: this.question.labelRenderedAriaID },
                        React.createElement(TitleActions, { element: this.question, cssClasses: this.question.cssClasses })))),
                description)));
    }
}
ReactQuestionFactory.Instance.registerQuestion("sv-boolean-checkbox", (props) => {
    return React.createElement(SurveyQuestionBooleanCheckbox, props);
});
RendererFactory.Instance.registerRenderer("boolean", "checkbox", "sv-boolean-checkbox");

class SurveyQuestionBooleanRadio extends SurveyQuestionBoolean {
    constructor(props) {
        super(props);
    }
    renderRadioItem(value, locText) {
        const cssClasses = this.question.cssClasses;
        const handleOnChange = () => {
            if (!this.question.isInputReadOnly) {
                this.question.value = value;
            }
        };
        return (React.createElement("div", { role: "presentation", className: this.question.getRadioItemClass(cssClasses, value) },
            React.createElement("label", { className: cssClasses.radioLabel },
                React.createElement("input", { type: "radio", name: this.question.questionName, value: value, "aria-errormessage": this.question.ariaErrormessage, checked: value === this.question.value, disabled: this.question.isDisabledAttr, readOnly: this.question.isReadOnlyAttr, className: cssClasses.itemRadioControl, onChange: handleOnChange }),
                this.question.cssClasses.materialRadioDecorator ?
                    (React.createElement("span", { className: cssClasses.materialRadioDecorator }, this.question.itemSvgIcon ?
                        (React.createElement("svg", { className: cssClasses.itemRadioDecorator },
                            React.createElement("use", { xlinkHref: this.question.itemSvgIcon }))) : null)) : null,
                React.createElement("span", { className: cssClasses.radioControlLabel }, this.renderLocString(locText)))));
    }
    renderElement() {
        const cssClasses = this.question.cssClasses;
        return (React.createElement("div", { className: cssClasses.rootRadio, onKeyDown: this.handleOnKeyDown },
            React.createElement("fieldset", { role: "presentation", className: cssClasses.radioFieldset }, !this.question.swapOrder ?
                (React.createElement(React.Fragment, null,
                    this.renderRadioItem(this.question.getValueFalse(), this.question.locLabelFalse),
                    this.renderRadioItem(this.question.getValueTrue(), this.question.locLabelTrue)))
                :
                    (React.createElement(React.Fragment, null,
                        this.renderRadioItem(this.question.getValueTrue(), this.question.locLabelTrue),
                        this.renderRadioItem(this.question.getValueFalse(), this.question.locLabelFalse))))));
    }
}
ReactQuestionFactory.Instance.registerQuestion("sv-boolean-radio", (props) => {
    return React.createElement(SurveyQuestionBooleanRadio, props);
});
RendererFactory.Instance.registerRenderer("boolean", "radio", "sv-boolean-radio");

class SurveyQuestionEmpty extends SurveyQuestionElementBase {
    constructor(props) {
        super(props);
        this.state = { value: this.question.value };
    }
    get question() {
        return this.questionBase;
    }
    renderElement() {
        return React.createElement("div", null);
    }
}
ReactQuestionFactory.Instance.registerQuestion("empty", (props) => {
    return React.createElement(SurveyQuestionEmpty, props);
});

class MatrixRow extends SurveyElementBase {
    constructor(props) {
        super(props);
        this.root = React.createRef();
        this.onPointerDownHandler = (event) => {
            this.parentMatrix.onPointerDown(event.nativeEvent, this.model.row);
        };
    }
    get model() {
        return this.props.model;
    }
    get parentMatrix() {
        return this.props.parentMatrix;
    }
    getStateElement() {
        return this.model;
    }
    componentDidMount() {
        super.componentDidMount();
        if (this.root.current) {
            this.model.setRootElement(this.root.current);
        }
    }
    componentWillUnmount() {
        super.componentWillUnmount();
        this.model.setRootElement(undefined);
    }
    shouldComponentUpdate(nextProps, nextState) {
        if (!super.shouldComponentUpdate(nextProps, nextState))
            return false;
        if (nextProps.model !== this.model) {
            if (nextProps.element) {
                nextProps.element.setRootElement(this.root.current);
            }
            if (this.model) {
                this.model.setRootElement(undefined);
            }
        }
        return true;
    }
    render() {
        const model = this.model;
        if (!model.visible)
            return null;
        return (React.createElement("tr", { ref: this.root, className: model.className, "data-sv-drop-target-matrix-row": model.dropTargetId }, this.props.children));
    }
}
ReactElementFactory.Instance.registerElement("sv-matrix-row", (props) => {
    return React.createElement(MatrixRow, props);
});

class SurveyQuestionMatrixDynamicDragDropIcon extends ReactSurveyElement {
    get question() {
        return this.props.item.data.question;
    }
    get row() {
        return this.props.item.data.row;
    }
    renderElement() {
        return React.createElement("div", { onPointerDown: (event) => { this.question.onPointerDown(event.nativeEvent, this.row); } }, this.renderIcon());
    }
    renderIcon() {
        if (this.question.iconDragElement) {
            return (React.createElement("svg", { className: this.question.cssClasses.dragElementDecorator },
                React.createElement("use", { xlinkHref: this.question.iconDragElement })));
        }
        else {
            return (React.createElement("span", { className: this.question.cssClasses.iconDrag }));
        }
    }
}
ReactElementFactory.Instance.registerElement("sv-matrix-drag-drop-icon", (props) => {
    return React.createElement(SurveyQuestionMatrixDynamicDragDropIcon, props);
});

class SurveyQuestionMatrixTable extends SurveyElementBase {
    get question() {
        return this.props.question;
    }
    get creator() {
        return this.props.creator;
    }
    get table() {
        return this.question.renderedTable;
    }
    getStateElement() {
        return this.table;
    }
    wrapCell(cell, element, reason) {
        return this.props.wrapCell(cell, element, reason);
    }
    renderHeader() {
        const table = this.question.renderedTable;
        if (!table.showHeader)
            return null;
        const headers = [];
        const cells = table.headerRow.cells;
        for (var i = 0; i < cells.length; i++) {
            const cell = cells[i];
            const key = "column" + i;
            const columnStyle = {};
            if (!!cell.width) {
                columnStyle.width = cell.width;
            }
            if (!!cell.minWidth) {
                columnStyle.minWidth = cell.minWidth;
            }
            const cellContent = this.renderCellContent(cell, "column-header", {});
            const header = cell.hasTitle ?
                React.createElement("th", { className: cell.className, key: key, style: columnStyle },
                    " ",
                    cellContent,
                    " ")
                : React.createElement("td", { className: cell.className, key: key, style: columnStyle });
            headers.push(header);
        }
        return (React.createElement("thead", null,
            React.createElement("tr", null, headers)));
    }
    renderFooter() {
        const table = this.question.renderedTable;
        if (!table.showFooter)
            return null;
        const row = this.renderRow("footer", table.footerRow, this.question.cssClasses, "row-footer");
        return React.createElement("tfoot", null, row);
    }
    renderRows() {
        const cssClasses = this.question.cssClasses;
        const rows = [];
        const renderedRows = this.question.renderedTable.renderedRows;
        for (var i = 0; i < renderedRows.length; i++) {
            rows.push(this.renderRow(renderedRows[i].id, renderedRows[i], cssClasses));
        }
        return React.createElement("tbody", null, rows);
    }
    renderRow(keyValue, row, cssClasses, reason) {
        const matrixrow = [];
        const cells = row.cells;
        for (var i = 0; i < cells.length; i++) {
            matrixrow.push(this.renderCell(cells[i], cssClasses, reason));
        }
        const key = "row" + keyValue;
        return (React.createElement(React.Fragment, { key: key }, (reason == "row-footer") ? React.createElement("tr", null, matrixrow) : React.createElement(MatrixRow, { model: row, parentMatrix: this.question }, matrixrow)));
    }
    renderCell(cell, cssClasses, reason) {
        const key = "cell" + cell.id;
        if (cell.hasQuestion) {
            return (React.createElement(SurveyQuestionMatrixDropdownCell, { key: key, cssClasses: cssClasses, cell: cell, creator: this.creator, reason: reason }));
        }
        if (cell.isErrorsCell) {
            if (cell.isErrorsCell) {
                return (React.createElement(SurveyQuestionMatrixDropdownErrorsCell, { cell: cell, key: key, keyValue: key, question: cell.question, creator: this.creator }));
            }
        }
        let calcReason = reason;
        if (!calcReason) {
            calcReason = cell.hasTitle ? "row-header" : "";
        }
        const cellContent = this.renderCellContent(cell, calcReason, cssClasses);
        let cellStyle = null;
        if (!!cell.width || !!cell.minWidth) {
            cellStyle = {};
            if (!!cell.width)
                cellStyle.width = cell.width;
            if (!!cell.minWidth)
                cellStyle.minWidth = cell.minWidth;
        }
        return (React.createElement("td", { className: cell.className, key: key, style: cellStyle, colSpan: cell.colSpans, title: cell.getTitle() }, cellContent));
    }
    renderCellContent(cell, reason, cssClasses) {
        let cellContent = null;
        let cellStyle = null;
        if (!!cell.width || !!cell.minWidth) {
            cellStyle = {};
            if (!!cell.width)
                cellStyle.width = cell.width;
            if (!!cell.minWidth)
                cellStyle.minWidth = cell.minWidth;
        }
        if (cell.hasTitle) {
            reason = "row-header";
            const str = this.renderLocString(cell.locTitle);
            const require = !!cell.column ? React.createElement(SurveyQuestionMatrixHeaderRequired, { column: cell.column, question: this.question }) : null;
            cellContent = (React.createElement(React.Fragment, null,
                str,
                require));
        }
        if (cell.isDragHandlerCell) {
            cellContent = (React.createElement(React.Fragment, null,
                React.createElement(SurveyQuestionMatrixDynamicDragDropIcon, { item: { data: { row: cell.row, question: this.question } } })));
        }
        if (cell.isActionsCell) {
            cellContent = (ReactElementFactory.Instance.createElement("sv-matrixdynamic-actions-cell", {
                question: this.question, cssClasses, cell, model: cell.item.getData()
            }));
        }
        if (cell.hasPanel) {
            cellContent = (React.createElement(SurveyPanel, { key: cell.panel.id, element: cell.panel, survey: this.question.survey, cssClasses: cssClasses, isDisplayMode: this.isDisplayMode, creator: this.creator }));
        }
        if (!cellContent)
            return null;
        const readyCell = (React.createElement(React.Fragment, null, cellContent));
        return this.wrapCell(cell, readyCell, reason);
    }
    renderElement() {
        const header = this.renderHeader();
        const footers = this.renderFooter();
        const rows = this.renderRows();
        return (React.createElement("table", { className: this.question.getTableCss() },
            header,
            rows,
            footers));
    }
}
class SurveyQuestionMatrixDropdownBase extends SurveyQuestionElementBase {
    constructor(props) {
        super(props);
        //Create rendered table in contructor and not on rendering
        this.question.renderedTable;
        this.state = this.getState();
    }
    get question() {
        return this.questionBase;
    }
    getState(prevState = null) {
        return { rowCounter: !prevState ? 0 : prevState.rowCounter + 1 };
    }
    updateStateOnCallback() {
        if (this.isRendering)
            return;
        this.setState(this.getState(this.state));
    }
    componentDidMount() {
        super.componentDidMount();
        this.question.onRenderedTableResetCallback = () => {
            this.updateStateOnCallback();
        };
    }
    componentWillUnmount() {
        super.componentWillUnmount();
        this.question.onRenderedTableResetCallback = () => { };
    }
    renderElement() {
        return this.renderTableDiv();
    }
    renderTableDiv() {
        return (React.createElement("div", { className: this.question.getTableWrapperCss(), ref: (root) => (this.setControl(root)) },
            React.createElement(SurveyQuestionMatrixTable, { question: this.question, creator: this.creator, wrapCell: (cell, element, reason) => this.wrapCell(cell, element, reason) })));
    }
}
class SurveyQuestionMatrixActionsCell extends ReactSurveyElement {
    constructor(props) {
        super(props);
    }
    get model() {
        return this.props.model;
    }
    renderElement() {
        return (React.createElement(SurveyActionBar, { model: this.model, handleClick: false }));
    }
}
class SurveyQuestionMatrixDropdownErrorsCell extends SurveyQuestionErrorCell {
    constructor(props) {
        super(props);
    }
    get key() {
        return this.props.keyValue;
    }
    get cell() {
        return this.props.cell;
    }
    render() {
        if (!this.cell.isVisible)
            return null;
        return React.createElement("td", { className: this.cell.className, key: this.key, colSpan: this.cell.colSpans, title: this.cell.getTitle() }, super.render());
    }
    getQuestionPropertiesToTrack() {
        return super.getQuestionPropertiesToTrack().concat(["visible"]);
    }
}
ReactElementFactory.Instance.registerElement("sv-matrixdynamic-actions-cell", (props) => {
    return React.createElement(SurveyQuestionMatrixActionsCell, props);
});
class SurveyQuestionMatrixHeaderRequired extends ReactSurveyElement {
    constructor(props) {
        super(props);
    }
    get column() {
        return this.props.column;
    }
    get question() {
        return this.props.question;
    }
    getStateElement() {
        return this.column;
    }
    renderElement() {
        if (!this.column.isRenderedRequired)
            return null;
        return (React.createElement(React.Fragment, null,
            React.createElement("span", null, "\u00A0"),
            React.createElement("span", { className: this.question.cssClasses.cellRequiredMark }, this.column.requiredMark)));
    }
}
class SurveyQuestionMatrixDropdownCell extends SurveyQuestionAndErrorsCell {
    constructor(props) {
        super(props);
    }
    get cell() {
        return this.props.cell;
    }
    get itemCss() {
        return !!this.cell ? this.cell.className : "";
    }
    getQuestion() {
        var q = super.getQuestion();
        if (!!q)
            return q;
        return !!this.cell ? this.cell.question : null;
    }
    doAfterRender() {
        var el = this.cellRef.current;
        if (el &&
            this.cell &&
            this.question &&
            this.question.survey &&
            el.getAttribute("data-rendered") !== "r") {
            el.setAttribute("data-rendered", "r");
            const options = {
                cell: this.cell,
                cellQuestion: this.question,
                htmlElement: el,
                row: this.cell.row,
                column: this.cell.cell.column,
            };
            this.question.survey.matrixAfterCellRender(options);
            this.question.afterRenderCore(el);
        }
    }
    getShowErrors() {
        return (this.question.isVisible &&
            (!this.cell.isChoice || this.cell.isFirstChoice));
    }
    getCellStyle() {
        var res = super.getCellStyle();
        if (!!this.cell.width || !!this.cell.minWidth) {
            if (!res)
                res = {};
            if (!!this.cell.width)
                res.width = this.cell.width;
            if (!!this.cell.minWidth)
                res.minWidth = this.cell.minWidth;
        }
        return res;
    }
    getHeaderText() {
        return this.cell.headers;
    }
    renderElement() {
        if (!this.cell.isVisible) {
            return null;
        }
        return super.renderElement();
    }
    renderCellContent() {
        const content = super.renderCellContent();
        const responsiveTitle = this.cell.showResponsiveTitle ? (React.createElement("span", { className: this.cell.responsiveTitleCss },
            this.renderLocString(this.cell.responsiveLocTitle),
            React.createElement(SurveyQuestionMatrixHeaderRequired, { column: this.cell.column, question: this.cell.matrix }))) : null;
        return React.createElement(React.Fragment, null,
            responsiveTitle,
            content);
    }
    renderQuestion() {
        if (!this.question.isVisible)
            return React.createElement(React.Fragment, null);
        if (!this.cell.isChoice)
            return SurveyQuestion.renderQuestionBody(this.creator, this.question);
        if (this.cell.isOtherChoice)
            return this.renderOtherComment();
        if (this.cell.isCheckbox)
            return this.renderCellCheckboxButton();
        return this.renderCellRadiogroupButton();
    }
    renderOtherComment() {
        const question = this.cell.question;
        const cssClasses = question.cssClasses || {};
        return React.createElement(SurveyQuestionCommentValueItem, { question: question, item: question.otherItem, cssClasses: cssClasses });
    }
    renderCellCheckboxButton() {
        var key = this.cell.question.id + "item" + this.cell.choiceIndex;
        return (React.createElement(SurveyQuestionCheckboxItem, { key: key, question: this.cell.question, cssClasses: this.cell.question.cssClasses, isDisplayMode: this.cell.question.isInputReadOnly, item: this.cell.item, isFirst: this.cell.isFirstChoice, index: this.cell.choiceIndex.toString(), hideCaption: true, ariaLabel: this.getCellAriaLabel() }));
    }
    renderCellRadiogroupButton() {
        var key = this.cell.question.id + "item" + this.cell.choiceIndex;
        return (React.createElement(SurveyQuestionRadioItem, { key: key, question: this.cell.question, cssClasses: this.cell.question.cssClasses, isDisplayMode: this.cell.question.isInputReadOnly, item: this.cell.item, index: this.cell.choiceIndex.toString(), isChecked: this.cell.question.value === this.cell.item.value, isDisabled: this.cell.question.isReadOnly || !this.cell.item.isEnabled, hideCaption: true, ariaLabel: this.getCellAriaLabel() }));
    }
    getCellAriaLabel() {
        return this.question.parentQuestion.getCellAriaLabel(this.cell.row, this.cell.column);
    }
}

class SurveyQuestionMatrixDropdown extends SurveyQuestionMatrixDropdownBase {
    constructor(props) {
        super(props);
    }
}
ReactQuestionFactory.Instance.registerQuestion("matrixdropdown", props => {
    return React.createElement(SurveyQuestionMatrixDropdown, props);
});

class SurveyQuestionMatrixDynamic extends SurveyQuestionMatrixDropdownBase {
    constructor(props) {
        super(props);
        this.handleOnRowAddClick = this.handleOnRowAddClick.bind(this);
    }
    get matrix() {
        return this.questionBase;
    }
    handleOnRowAddClick(event) {
        this.matrix.addRowUI();
    }
    renderElement() {
        var cssClasses = this.question.cssClasses;
        var showTable = this.question.renderedTable.showTable;
        var mainDiv = showTable
            ? this.renderTableDiv()
            : this.renderNoRowsContent(cssClasses);
        return (React.createElement("div", null,
            this.renderAddRowButtonOnTop(cssClasses),
            mainDiv,
            this.renderAddRowButtonOnBottom(cssClasses)));
    }
    renderAddRowButtonOnTop(cssClasses) {
        if (!this.matrix.renderedTable.showAddRowOnTop)
            return null;
        return this.renderAddRowButton(cssClasses);
    }
    renderAddRowButtonOnBottom(cssClasses) {
        if (!this.matrix.renderedTable.showAddRowOnBottom)
            return null;
        return this.renderAddRowButton(cssClasses);
    }
    renderNoRowsContent(cssClasses) {
        return ReactElementFactory.Instance.createElement("sv-placeholder-matrixdynamic", { cssClasses: cssClasses, question: this.matrix });
    }
    renderAddRowButton(cssClasses, isEmptySection = false) {
        return ReactElementFactory.Instance.createElement("sv-matrixdynamic-add-btn", {
            question: this.question, cssClasses, isEmptySection
        });
    }
}
ReactQuestionFactory.Instance.registerQuestion("matrixdynamic", (props) => {
    return React.createElement(SurveyQuestionMatrixDynamic, props);
});
class SurveyQuestionMatrixDynamicAddButton extends ReactSurveyElement {
    constructor(props) {
        super(props);
        this.handleOnRowAddClick = this.handleOnRowAddClick.bind(this);
    }
    get matrix() {
        return this.props.question;
    }
    handleOnRowAddClick(event) {
        this.matrix.addRowUI();
    }
    renderElement() {
        const addRowText = this.renderLocString(this.matrix.locAddRowText);
        const addButton = (React.createElement("button", { className: this.matrix.getAddRowButtonCss(this.props.isEmptySection), type: "button", disabled: this.matrix.isInputReadOnly, onClick: this.matrix.isDesignMode ? undefined : this.handleOnRowAddClick },
            addRowText,
            React.createElement("span", { className: this.props.cssClasses.iconAdd }, this.cssClasses.iconAddId && React.createElement("svg", null,
                React.createElement("use", { xlinkHref: this.cssClasses.iconAddId })))));
        return (this.props.isEmptySection ? addButton : React.createElement("div", { className: this.props.cssClasses.footer }, addButton));
    }
}
class SurveyQuestionMatrixDynamicPlaceholder extends ReactSurveyElement {
    constructor(props) {
        super(props);
    }
    renderElement() {
        const cssClasses = this.props.cssClasses;
        const matrix = this.props.question;
        const showAddButton = matrix.renderedTable.showAddRow;
        const text = this.renderLocString(matrix.locNoRowsText);
        const textDiv = React.createElement("div", { className: cssClasses.noRowsText }, text);
        const btn = showAddButton ? this.renderAddRowButton(cssClasses, matrix) : undefined;
        return (React.createElement("div", { className: cssClasses.noRowsSection },
            textDiv,
            btn));
    }
    renderAddRowButton(cssClasses, question) {
        return ReactElementFactory.Instance.createElement("sv-matrixdynamic-add-btn", {
            question: question, cssClasses: cssClasses, isEmptySection: true
        });
    }
}
ReactElementFactory.Instance.registerElement("sv-matrixdynamic-add-btn", (props) => { return React.createElement(SurveyQuestionMatrixDynamicAddButton, props); });
ReactElementFactory.Instance.registerElement("sv-placeholder-matrixdynamic", (props) => { return React.createElement(SurveyQuestionMatrixDynamicPlaceholder, props); });

class SurveyQuestionPanelDynamic extends SurveyQuestionElementBase {
    constructor(props) {
        super(props);
    }
    get question() {
        return this.questionBase;
    }
    componentDidMount() {
        super.componentDidMount();
        this.setState({ panelCounter: 0 });
        const self = this;
        this.question.panelCountChangedCallback = function () {
            self.updateQuestionRendering();
        };
        this.question.currentIndexChangedCallback = function () {
            self.updateQuestionRendering();
        };
        this.question.renderModeChangedCallback = function () {
            self.updateQuestionRendering();
        };
    }
    componentWillUnmount() {
        super.componentWillUnmount();
        this.question.panelCountChangedCallback = () => { };
        this.question.currentIndexChangedCallback = () => { };
        this.question.renderModeChangedCallback = () => { };
    }
    updateQuestionRendering() {
        this.setState({
            panelCounter: this.state ? this.state.panelCounter + 1 : 1,
        });
    }
    renderElement() {
        const panels = [];
        const cssClasses = this.question.cssClasses;
        this.question.renderedPanels.forEach((panel, index) => {
            panels.push(React.createElement(SurveyQuestionPanelDynamicItem, { key: panel.id, element: panel, question: this.question, index: index, cssClasses: cssClasses, isDisplayMode: this.isDisplayMode, creator: this.creator }));
        });
        const rangeTop = this.question.isRangeShowing && this.question.isProgressTopShowing
            ? this.renderRange()
            : null;
        const navV2 = this.renderNavigatorV2();
        const noEntriesPlaceholder = this.renderPlaceholder(cssClasses);
        return (React.createElement("div", { className: cssClasses.root },
            this.question.hasTabbedMenu ? React.createElement("div", { className: this.question.getTabsContainerCss() },
                React.createElement(SurveyActionBar, { model: this.question.tabbedMenu })) : null,
            noEntriesPlaceholder,
            rangeTop,
            React.createElement("div", { className: this.question.cssClasses.panelsContainer }, panels),
            navV2));
    }
    renderRange() {
        return (React.createElement("div", { className: this.question.cssClasses.progress },
            React.createElement("div", { className: this.question.cssClasses.progressBar, style: { width: this.question.progress }, role: "progressbar", "aria-label": this.question.progressBarAriaLabel })));
    }
    renderAddRowButton() {
        return ReactElementFactory.Instance.createElement("sv-paneldynamic-add-btn", {
            data: { question: this.question }
        });
    }
    renderNavigatorV2() {
        if (!this.question.showNavigation)
            return null;
        const range = this.question.isRangeShowing && this.question.isProgressBottomShowing ? this.renderRange() : null;
        return (React.createElement("div", { className: this.question.cssClasses.footer },
            React.createElement("hr", { className: this.question.cssClasses.separator }),
            range,
            this.question.showFooterToolbar ? (React.createElement("div", { className: this.question.cssClasses.footerButtonsContainer },
                React.createElement(SurveyActionBar, { model: this.question.footerToolbar }))) : null));
    }
    renderPlaceholder(cssClasses) {
        if (this.question.getShowNoEntriesPlaceholder())
            return ReactElementFactory.Instance.createElement("sv-placeholder-paneldynamic", { cssClasses: cssClasses, question: this.question });
        return null;
    }
}
class SurveyQuestionPanelDynamicItem extends SurveyPanel {
    get question() {
        return this.props.question;
    }
    get index() {
        return this.props.index;
    }
    getSurvey() {
        return !!this.question ? this.question.survey : null;
    }
    getCss() {
        const survey = this.getSurvey();
        return !!survey ? survey.getCss() : {};
    }
    render() {
        const panel = super.render();
        const removeButton = this.renderButton();
        const separator = this.question.showSeparator(this.index) ?
            (React.createElement("hr", { className: this.question.cssClasses.separator })) : null;
        return (React.createElement(React.Fragment, null,
            React.createElement("div", { className: this.question.getPanelWrapperCss(this.panel) },
                panel,
                removeButton),
            separator));
    }
    renderButton() {
        if (!this.question.canRenderRemovePanelOnRight(this.panel))
            return null;
        return ReactElementFactory.Instance.createElement("sv-paneldynamic-remove-btn", {
            data: { question: this.question, panel: this.panel }
        });
    }
}
ReactQuestionFactory.Instance.registerQuestion("paneldynamic", props => {
    return React.createElement(SurveyQuestionPanelDynamic, props);
});
class SurveyQuestionPanelDynamicPlaceholder extends ReactSurveyElement {
    constructor(props) {
        super(props);
    }
    renderElement() {
        const cssClasses = this.props.cssClasses;
        const question = this.props.question;
        return (React.createElement("div", { className: cssClasses.noEntriesPlaceholder },
            React.createElement("span", null, this.renderLocString(question.locNoEntriesText)),
            this.renderAddRowButton(question)));
    }
    renderAddRowButton(question) {
        return ReactElementFactory.Instance.createElement("sv-paneldynamic-add-btn", {
            data: { question: question }
        });
    }
}
ReactElementFactory.Instance.registerElement("sv-placeholder-paneldynamic", (props) => { return React.createElement(SurveyQuestionPanelDynamicPlaceholder, props); });

class SurveyProgress extends SurveyNavigationBase {
    constructor(props) {
        super(props);
    }
    get isTop() {
        return this.props.isTop;
    }
    get model() {
        return this.props.model;
    }
    getStateElement() {
        return this.model;
    }
    get progress() {
        return this.model.progressValue;
    }
    get progressText() {
        return this.model.progressText;
    }
    get progressBarAriaLabel() {
        return this.model.progressBarAriaLabel;
    }
    render() {
        var progressStyle = {
            width: this.progress + "%",
        };
        return (React.createElement("div", { className: this.model.getProgressCssClasses(this.props.container) },
            React.createElement("div", { style: progressStyle, className: this.model.css.progressBar, role: "progressbar", "aria-valuemin": 0, "aria-valuemax": 100, "aria-label": this.progressBarAriaLabel },
                React.createElement("span", { className: SurveyProgressModel.getProgressTextInBarCss(this.model.css) }, this.progressText)),
            React.createElement("span", { className: SurveyProgressModel.getProgressTextUnderBarCss(this.model.css) }, this.progressText)));
    }
}
ReactElementFactory.Instance.registerElement("sv-progress-pages", props => {
    return React.createElement(SurveyProgress, props);
});
ReactElementFactory.Instance.registerElement("sv-progress-questions", props => {
    return React.createElement(SurveyProgress, props);
});
ReactElementFactory.Instance.registerElement("sv-progress-correctquestions", props => {
    return React.createElement(SurveyProgress, props);
});
ReactElementFactory.Instance.registerElement("sv-progress-requiredquestions", props => {
    return React.createElement(SurveyProgress, props);
});

class SurveyProgressButtons extends SurveyNavigationBase {
    constructor(props) {
        super(props);
        this.listContainerRef = React.createRef();
    }
    get model() {
        return this.props.model;
    }
    get container() {
        return this.props.container;
    }
    getStateElement() {
        return this.model;
    }
    onResize(canShowItemTitles) {
        this.setState({ canShowItemTitles });
        this.setState({ canShowHeader: !canShowItemTitles });
    }
    onUpdateScroller(hasScroller) {
        this.setState({ hasScroller });
    }
    onUpdateSettings() {
        this.setState({ canShowItemTitles: this.model.showItemTitles });
        this.setState({ canShowFooter: !this.model.showItemTitles });
    }
    render() {
        return (React.createElement("div", { className: this.model.getRootCss(this.props.container), style: { "maxWidth": this.model.progressWidth, ["--sd-progress-buttons-pages-count"]: this.model.visiblePages.length }, role: "progressbar", "aria-valuemin": 0, "aria-valuemax": 100, "aria-label": this.model.progressBarAriaLabel },
            this.state.canShowHeader ? React.createElement("div", { className: this.css.progressButtonsHeader },
                React.createElement("div", { className: this.css.progressButtonsPageTitle, title: this.model.headerText }, this.model.headerText)) : null,
            React.createElement("div", { className: this.css.progressButtonsContainer },
                React.createElement("div", { className: this.model.getScrollButtonCss(this.state.hasScroller, true), role: "button", onClick: () => this.clickScrollButton(this.listContainerRef.current, true) }),
                React.createElement("div", { className: this.css.progressButtonsListContainer, ref: this.listContainerRef },
                    React.createElement("ul", { className: this.css.progressButtonsList }, this.getListElements())),
                React.createElement("div", { className: this.model.getScrollButtonCss(this.state.hasScroller, false), role: "button", onClick: () => this.clickScrollButton(this.listContainerRef.current, false) })),
            this.state.canShowFooter ? React.createElement("div", { className: this.css.progressButtonsFooter },
                React.createElement("div", { className: this.css.progressButtonsPageTitle, title: this.model.footerText }, this.model.footerText)) : null));
    }
    getListElements() {
        let buttons = [];
        this.model.visiblePages.forEach((page, index) => {
            buttons.push(this.renderListElement(page, index));
        });
        return buttons;
    }
    renderListElement(page, index) {
        const text = SurveyElementBase.renderLocString(page.locNavigationTitle);
        return (React.createElement("li", { key: "listelement" + index, className: this.model.getListElementCss(index), onClick: this.model.isListElementClickable(index)
                ? () => this.model.clickListElement(page)
                : undefined, "data-page-number": this.model.getItemNumber(page) },
            React.createElement("div", { className: this.css.progressButtonsConnector }),
            this.state.canShowItemTitles ? React.createElement(React.Fragment, null,
                React.createElement("div", { className: this.css.progressButtonsPageTitle, title: page.renderedNavigationTitle }, text),
                React.createElement("div", { className: this.css.progressButtonsPageDescription, title: page.navigationDescription }, page.navigationDescription)) : null,
            React.createElement("div", { className: this.css.progressButtonsButton },
                React.createElement("div", { className: this.css.progressButtonsButtonBackground }),
                React.createElement("div", { className: this.css.progressButtonsButtonContent }),
                React.createElement("span", null, this.model.getItemNumber(page)))));
    }
    clickScrollButton(listContainerElement, isLeftScroll) {
        if (!!listContainerElement) {
            listContainerElement.scrollLeft += (isLeftScroll ? -1 : 1) * 70;
        }
    }
    componentDidMount() {
        super.componentDidMount();
        this.respManager = new ProgressButtonsResponsivityManager(this.model, this.listContainerRef.current, this);
    }
    componentWillUnmount() {
        if (!!this.respManager) {
            this.respManager.dispose();
        }
        super.componentWillUnmount();
    }
}
ReactElementFactory.Instance.registerElement("sv-progress-buttons", (props) => {
    return React.createElement(SurveyProgressButtons, props);
});

class ListItem extends SurveyElementBase {
    constructor(props) {
        super(props);
        this.handleKeydown = (event) => {
            this.model.onKeyDown(event);
        };
        this.elementRef = React.createRef();
    }
    get model() {
        return this.props.model;
    }
    get item() {
        return this.props.item;
    }
    getStateElement() {
        return this.item;
    }
    render() {
        if (!this.item)
            return null;
        const className = this.model.getItemClass(this.item);
        const itemContent = this.item.component || this.model.itemComponent;
        const newElement = ReactElementFactory.Instance.createElement(itemContent, { item: this.item, key: this.item.id, model: this.model });
        const contentWrap = React.createElement("div", { ref: this.elementRef, style: this.model.getItemStyle(this.item), className: this.model.cssClasses.itemBody, title: this.item.getTooltip(), onMouseOver: (event) => { this.model.onItemHover(this.item); }, onMouseLeave: (event) => { this.model.onItemLeave(this.item); } }, newElement);
        const separator = this.item.needSeparator ? React.createElement("div", { className: this.model.cssClasses.itemSeparator }) : null;
        const isVisible = this.model.isItemVisible(this.item);
        const style = {
            display: isVisible ? null : "none"
        };
        return attachKey2click(React.createElement("li", { className: className, role: this.model.listItemRole, style: style, id: this.item.elementId, "aria-selected": this.model.getA11yItemAriaSelected(this.item), "aria-checked": this.model.getA11yItemAriaChecked(this.item), onClick: (event) => {
                this.model.onItemClick(this.item);
                event.stopPropagation();
            }, onPointerDown: (event) => this.model.onPointerDown(event, this.item) },
            separator,
            contentWrap), this.item);
    }
    componentDidMount() {
        var _a;
        super.componentDidMount();
        this.model.onItemRended(this.item, (_a = this.elementRef) === null || _a === void 0 ? void 0 : _a.current);
    }
}
ReactElementFactory.Instance.registerElement("sv-list-item", (props) => {
    return React.createElement(ListItem, props);
});

class List extends SurveyElementBase {
    constructor(props) {
        super(props);
        this.handleKeydown = (event) => {
            this.model.onKeyDown(event);
        };
        this.handleMouseMove = (event) => {
            this.model.onMouseMove(event);
        };
        this.state = {
            filterString: this.model.filterString || ""
        };
        this.listContainerRef = React.createRef();
    }
    get model() {
        return this.props.model;
    }
    getStateElement() {
        return this.model;
    }
    componentDidMount() {
        super.componentDidMount();
        if (!!this.listContainerRef && !!this.listContainerRef.current) {
            this.model.initListContainerHtmlElement(this.listContainerRef.current);
        }
    }
    componentDidUpdate(prevProps, prevState) {
        var _a;
        super.componentDidUpdate(prevProps, prevState);
        if (this.model !== prevProps.model) {
            if (this.model && !!((_a = this.listContainerRef) === null || _a === void 0 ? void 0 : _a.current)) {
                this.model.initListContainerHtmlElement(this.listContainerRef.current);
            }
            if (prevProps.model) {
                prevProps.model.initListContainerHtmlElement(undefined);
            }
        }
    }
    componentWillUnmount() {
        super.componentWillUnmount();
        if (!!this.model) {
            this.model.initListContainerHtmlElement(undefined);
        }
    }
    renderElement() {
        return (React.createElement("div", { className: this.model.cssClasses.root, ref: this.listContainerRef },
            this.searchElementContent(),
            this.emptyContent(),
            this.renderList()));
    }
    renderList() {
        if (!this.model.renderElements)
            return null;
        const items = this.renderItems();
        const ulStyle = { display: this.model.isEmpty ? "none" : null };
        return (React.createElement("ul", { className: this.model.getListClass(), style: ulStyle, role: this.model.listRole, "aria-label": this.model.a11ya11y_input_ariaLabel, id: this.model.elementId, onMouseDown: (e) => {
                e.preventDefault();
            }, onKeyDown: this.handleKeydown, onMouseMove: this.handleMouseMove }, items));
    }
    renderItems() {
        if (!this.model) {
            return null;
        }
        const items = this.model.renderedActions;
        if (!items) {
            return null;
        }
        return items.map((item, itemIndex) => {
            return (React.createElement(ListItem, { model: this.model, item: item, key: "item" + itemIndex }));
        });
    }
    searchElementContent() {
        if (!this.model.showFilter)
            return null;
        else {
            const onChange = (e) => {
                var _a;
                const activeElement = (_a = e.target.getRootNode()) === null || _a === void 0 ? void 0 : _a.activeElement;
                if (e.target === activeElement) {
                    this.model.filterString = e.target.value;
                }
            };
            const onKeyUp = (e) => {
                this.model.goToItems(e);
            };
            const clearButton = this.model.showSearchClearButton && !!this.model.filterString ?
                React.createElement("button", { className: this.model.cssClasses.searchClearButtonIcon, onClick: (event) => { this.model.onClickSearchClearButton(event); } },
                    React.createElement(SvgIcon, { iconName: "icon-searchclear", size: "auto" })) : null;
            return (React.createElement("div", { className: this.model.cssClasses.filter },
                React.createElement("div", { className: this.model.cssClasses.filterIcon },
                    React.createElement(SvgIcon, { iconName: "icon-search", size: "auto" })),
                React.createElement("input", { type: "text", className: this.model.cssClasses.filterInput, "aria-label": this.model.filterStringPlaceholder, placeholder: this.model.filterStringPlaceholder, value: this.state.filterString, onKeyUp: onKeyUp, onChange: onChange }),
                clearButton));
        }
    }
    emptyContent() {
        const style = { display: this.model.isEmpty ? null : "none" };
        return (React.createElement("div", { className: this.model.cssClasses.emptyContainer, style: style },
            React.createElement("div", { className: this.model.cssClasses.emptyText, "aria-label": this.model.emptyMessage }, this.model.emptyMessage)));
    }
}
ReactElementFactory.Instance.registerElement("sv-list", (props) => {
    return React.createElement(List, props);
});

class SurveyProgressToc extends SurveyNavigationBase {
    componentDidMount() {
        super.componentDidMount();
        const tocModel = this.props.model;
        tocModel.updateStickyTOCSize(this.survey.rootElement);
    }
    render() {
        const tocModel = this.props.model;
        let content;
        if (tocModel.isMobile) {
            content = React.createElement("div", { onClick: tocModel.togglePopup },
                React.createElement(SvgIcon, { iconName: tocModel.icon, size: 24 }),
                React.createElement(Popup, { model: tocModel.popupModel }));
        }
        else {
            content = React.createElement(List, { model: tocModel.listModel });
        }
        return (React.createElement("div", { className: tocModel.containerCss }, content));
    }
}
ReactElementFactory.Instance.registerElement("sv-navigation-toc", (props) => {
    return React.createElement(SurveyProgressToc, props);
});

class SurveyQuestionRating extends SurveyQuestionElementBase {
    constructor(props) {
        super(props);
        this.handleOnClick = this.handleOnClick.bind(this);
    }
    get question() {
        return this.questionBase;
    }
    handleOnClick(event) {
        this.question.setValueFromClick(event.target.value);
        this.setState({ value: this.question.value });
    }
    componentDidMount() {
        super.componentDidMount();
        this.setState({ value: this.question.value });
    }
    renderItem(item, index) {
        const renderedItem = ReactElementFactory.Instance.createElement(this.question.itemComponent, {
            question: this.question,
            item: item,
            index: index,
            key: "value" + index,
            handleOnClick: this.handleOnClick,
            isDisplayMode: this.isDisplayMode
        });
        return renderedItem;
    }
    renderElement() {
        var cssClasses = this.question.cssClasses;
        var minText = this.question.minRateDescription
            ? this.renderLocString(this.question.locMinRateDescription)
            : null;
        var maxText = this.question.maxRateDescription
            ? this.renderLocString(this.question.locMaxRateDescription)
            : null;
        return (React.createElement("div", { className: this.question.ratingRootCss, ref: (div) => (this.setControl(div)) },
            React.createElement("fieldset", { role: this.question.a11y_input_ariaRole, "aria-required": this.question.a11y_input_ariaRequired, "aria-label": this.question.a11y_input_ariaLabel, "aria-labelledby": this.question.a11y_input_ariaLabelledBy, "aria-describedby": this.question.a11y_input_ariaDescribedBy, "aria-invalid": this.question.a11y_input_ariaInvalid, "aria-errormessage": this.question.a11y_input_ariaErrormessage },
                React.createElement("legend", { role: "presentation", className: "sv-hidden" }),
                !!this.question.hasMinLabel ? React.createElement("span", { className: cssClasses.minText }, minText) : null,
                this.question.renderedRateItems.map((item, index) => this.renderItem(item, index)),
                !!this.question.hasMaxLabel ? React.createElement("span", { className: cssClasses.maxText }, maxText) : null)));
    }
}
ReactQuestionFactory.Instance.registerQuestion("rating", (props) => {
    return React.createElement(SurveyQuestionRating, props);
});

class SurveyQuestionRatingDropdown extends SurveyQuestionDropdownBase {
    constructor(props) {
        super(props);
    }
    renderElement() {
        var cssClasses = this.question.cssClasses;
        var select = this.renderSelect(cssClasses);
        return (React.createElement("div", { className: this.question.cssClasses.rootDropdown }, select));
    }
}
ReactQuestionFactory.Instance.registerQuestion("sv-rating-dropdown", (props) => {
    return React.createElement(SurveyQuestionRatingDropdown, props);
});
RendererFactory.Instance.registerRenderer("rating", "dropdown", "sv-rating-dropdown");

class SurveyQuestionSlider extends SurveyQuestionElementBase {
    constructor(props) {
        super(props);
        this.rangeInputRef = React.createRef();
    }
    componentDidMount() {
        super.componentDidMount();
        this.question.refreshInputRange(this.rangeInputRef.current);
    }
    get question() {
        return this.questionBase;
    }
    getStateElement() {
        return this.question;
    }
    renderElement() {
        const { cssClasses, showLabels, sliderType, getTrackPercentLeft, getTrackPercentRight, allowDragRange, setValueByClickOnPath } = this.question;
        const rangeInput = (sliderType === "single" && allowDragRange) ? null : this.getRangeInput();
        const thumbsAndInputs = this.getInputsAndThumbs();
        const labels = showLabels ? this.getLabels() : null;
        return (React.createElement("div", { className: this.question.rootCss, ref: (div) => (this.setControl(div)) },
            rangeInput,
            React.createElement("div", { className: cssClasses.visualContainer, onPointerUp: (e) => { setValueByClickOnPath(e.nativeEvent, this.control); } },
                React.createElement("div", { className: cssClasses.visualContainerSlider },
                    React.createElement("div", { className: cssClasses.inverseTrackLeft, style: { width: getTrackPercentLeft() + "%" } }),
                    React.createElement("div", { className: cssClasses.inverseTrackRight, style: { width: getTrackPercentRight() + "%" } }),
                    React.createElement("div", { className: cssClasses.rangeTrack, style: { left: getTrackPercentLeft() + "%", right: getTrackPercentRight() + "%" } }),
                    thumbsAndInputs)),
            labels));
    }
    getInputsAndThumbs() {
        const inputsAndThumbs = [];
        const value = this.question.renderedValue;
        for (let i = 0; i < value.length; i++) {
            const thumbAndInput = React.createElement(React.Fragment, { key: i },
                this.getInput(i),
                this.getThumb(i));
            inputsAndThumbs.push(thumbAndInput);
        }
        return inputsAndThumbs;
    }
    getThumb(i) {
        const { cssClasses, getThumbContainerCss, tooltipVisibility, tooltipCss, getPercent, renderedValue, getTooltipValue } = this.question;
        const value = renderedValue[i];
        let tooltip = null;
        if (tooltipVisibility !== "never") {
            tooltip = React.createElement("div", { className: tooltipCss },
                React.createElement("div", { className: cssClasses.tooltipPanel },
                    React.createElement("div", { className: cssClasses.tooltipValue }, getTooltipValue(i))));
        }
        const thumb = React.createElement("div", { className: getThumbContainerCss(i), style: { left: getPercent(value) + "%" } },
            tooltip,
            React.createElement("div", { className: cssClasses.thumb },
                React.createElement("div", { className: cssClasses.thumbDot })));
        return thumb;
    }
    getInput(i) {
        const { renderedMax: max, renderedMin: min, step, cssClasses, isDisabledAttr, renderedValue, handleOnChange, handlePointerDown, handlePointerUp, handleKeyDown, handleKeyUp, handleOnFocus, handleOnBlur, id } = this.question;
        const value = renderedValue[i];
        const input = React.createElement("input", { className: cssClasses.input, id: id + "-sjs-slider-input-" + i, type: "range", min: min, max: max, step: step, value: value, onChange: (e) => { handleOnChange(e.nativeEvent, i); }, onPointerDown: (e) => { handlePointerDown(e.nativeEvent); }, onPointerUp: (e) => { e.stopPropagation(); handlePointerUp(e.nativeEvent); }, onKeyDown: (e) => { handleKeyDown(e.nativeEvent); }, onKeyUp: (e) => { handleKeyUp(e.nativeEvent); }, onFocus: () => { handleOnFocus(i); }, onBlur: () => { handleOnBlur(); }, disabled: isDisabledAttr, "aria-required": this.question.a11y_input_ariaRequired, "aria-label": this.question.a11y_input_ariaLabel, "aria-labelledby": this.question.a11y_input_ariaLabelledBy, "aria-describedby": this.question.a11y_input_ariaDescribedBy, "aria-invalid": this.question.a11y_input_ariaInvalid, "aria-errormessage": this.question.a11y_input_ariaErrormessage });
        return input;
    }
    getRangeInput() {
        const { renderedMax: max, renderedMin: min, step, cssClasses, handleRangeOnChange, handleRangePointerDown, handleRangePointerUp, id } = this.question;
        return React.createElement("input", { name: "range-input", id: id + "-sjs-slider-input-range-input", ref: this.rangeInputRef, className: cssClasses.input, type: "range", "aria-hidden": "true", min: min, max: max, step: step, tabIndex: -1, onChange: (e) => { handleRangeOnChange(e.nativeEvent); }, onPointerDown: (e) => { e.persist(); handleRangePointerDown(e.nativeEvent, this.control); }, onPointerUp: (e) => { handleRangePointerUp(e.nativeEvent, this.control); } });
    }
    getLabels() {
        const labels = [];
        const { renderedLabels, cssClasses } = this.question;
        for (let i = 0; i < renderedLabels.length; i++) {
            const label = ReactElementFactory.Instance.createElement("sv-slider-label-item", { item: renderedLabels[i], question: this.question, key: renderedLabels[i].id });
            labels.push(label);
        }
        return React.createElement("div", { className: cssClasses.labelsContainer },
            React.createElement("div", null, labels));
    }
}
ReactQuestionFactory.Instance.registerQuestion("slider", (props) => {
    return React.createElement(SurveyQuestionSlider, props);
});

class SurveyQuestionExpression extends SurveyQuestionElementBase {
    constructor(props) {
        super(props);
    }
    get question() {
        return this.questionBase;
    }
    renderElement() {
        var cssClasses = this.question.cssClasses;
        return (React.createElement("div", { id: this.question.inputId, className: cssClasses.root, ref: (div) => (this.setControl(div)), "aria-live": "polite", "aria-label": this.question.formatedValue }, this.question.formatedValue));
    }
}
ReactQuestionFactory.Instance.registerQuestion("expression", (props) => {
    return React.createElement(SurveyQuestionExpression, props);
});

class PopupSurvey extends Survey {
    constructor(props) {
        super(props);
        this.handleOnExpanded = this.handleOnExpanded.bind(this);
    }
    getStateElements() {
        return [this.popup, this.popup.survey];
    }
    handleOnExpanded(event) {
        this.popup.changeExpandCollapse();
    }
    canRender() {
        return super.canRender() && this.popup.isShowing;
    }
    renderElement() {
        var header = this.renderWindowHeader();
        var body = this.renderBody();
        let style = {};
        if (!!this.popup.renderedWidth) {
            style.width = this.popup.renderedWidth;
            style.maxWidth = this.popup.renderedWidth;
        }
        return (React.createElement("div", { className: this.popup.cssRoot, style: style, onScroll: () => this.popup.onScroll() },
            React.createElement("div", { className: this.popup.cssRootContent },
                header,
                body)));
    }
    renderWindowHeader() {
        var popup = this.popup;
        var headerCss = popup.cssHeaderRoot;
        var titleCollapsed = null;
        var expandCollapseIcon;
        var closeButton = null;
        var allowFullScreenButon = null;
        if (popup.isCollapsed) {
            headerCss += " " + popup.cssRootCollapsedMod;
            titleCollapsed = this.renderTitleCollapsed(popup);
            expandCollapseIcon = this.renderExpandIcon();
        }
        else {
            expandCollapseIcon = this.renderCollapseIcon();
        }
        if (popup.allowClose) {
            closeButton = this.renderCloseButton(this.popup);
        }
        if (popup.allowFullScreen) {
            allowFullScreenButon = this.renderAllowFullScreenButon(this.popup);
        }
        return (React.createElement("div", { className: popup.cssHeaderRoot },
            titleCollapsed,
            React.createElement("div", { className: popup.cssHeaderButtonsContainer },
                allowFullScreenButon,
                React.createElement("div", { className: popup.cssHeaderCollapseButton, onClick: this.handleOnExpanded }, expandCollapseIcon),
                closeButton)));
    }
    renderTitleCollapsed(popup) {
        if (!popup.locTitle)
            return null;
        return React.createElement("div", { className: popup.cssHeaderTitleCollapsed }, popup.locTitle.renderedHtml);
    }
    renderExpandIcon() {
        return React.createElement(SvgIcon, { iconName: "icon-restore_16x16", size: 16 });
    }
    renderCollapseIcon() {
        return React.createElement(SvgIcon, { iconName: "icon-minimize_16x16", size: 16 });
    }
    renderCloseButton(popup) {
        return (React.createElement("div", { className: popup.cssHeaderCloseButton, onClick: () => {
                popup.hide();
                if (typeof this.props.onClose == "function") {
                    this.props.onClose();
                }
            } },
            React.createElement(SvgIcon, { iconName: "icon-close_16x16", size: 16 })));
    }
    renderAllowFullScreenButon(popup) {
        let Icon;
        if (popup.isFullScreen) {
            Icon = React.createElement(SvgIcon, { iconName: "icon-back-to-panel_16x16", size: 16 });
        }
        else {
            Icon = React.createElement(SvgIcon, { iconName: "icon-full-screen_16x16", size: 16 });
        }
        return (React.createElement("div", { className: popup.cssHeaderFullScreenButton, onClick: () => { popup.toggleFullScreen(); } }, Icon));
    }
    renderBody() {
        return React.createElement("div", { className: this.popup.cssBody }, this.doRender());
    }
    createSurvey(newProps) {
        if (!newProps)
            newProps = {};
        super.createSurvey(newProps);
        this.popup = new PopupSurveyModel(null, this.survey);
        if (newProps.closeOnCompleteTimeout) {
            this.popup.closeOnCompleteTimeout = newProps.closeOnCompleteTimeout;
        }
        this.popup.allowClose = newProps.allowClose;
        this.popup.allowFullScreen = newProps.allowFullScreen;
        this.popup.isShowing = true;
        if (!this.popup.isExpanded && (newProps.expanded || newProps.isExpanded))
            this.popup.expand();
    }
}
/**
 * @deprecated Use `PopupSurvey` instead.
 */
class SurveyWindow extends PopupSurvey {
}

class SurveyQuestionImagePicker extends SurveyQuestionElementBase {
    constructor(props) {
        super(props);
    }
    get question() {
        return this.questionBase;
    }
    renderElement() {
        var cssClasses = this.question.cssClasses;
        return (React.createElement("fieldset", { className: this.question.getSelectBaseRootCss(), style: this.question.getContainerStyle() },
            React.createElement("legend", { className: "sv-hidden" }, this.question.locTitle.renderedHtml),
            this.question.hasColumns ? this.getColumns(cssClasses) : this.getItems(cssClasses)));
    }
    getColumns(cssClasses) {
        return this.question.columns.map((column, ci) => {
            var items = column.map((item, ii) => this.renderItem(item, cssClasses));
            return (React.createElement("div", { key: "column" + ci + this.question.getItemsColumnKey(column), className: this.question.getColumnClass(), role: "presentation" }, items));
        });
    }
    getItems(cssClasses) {
        var items = [];
        for (var i = 0; i < this.question.visibleChoices.length; i++) {
            var item = this.question.visibleChoices[i];
            items.push(this.renderItem(item, cssClasses));
        }
        return items;
    }
    get textStyle() {
        return { marginLeft: "3px", display: "inline", position: "static" };
    }
    renderItem(item, cssClasses) {
        const renderedItem = React.createElement(SurveyQuestionImagePickerItem, { key: item.uniqueId, question: this.question, item: item, cssClasses: cssClasses });
        const survey = this.question.survey;
        let wrappedItem = null;
        if (!!survey) {
            wrappedItem = ReactSurveyElementsWrapper.wrapItemValue(survey, renderedItem, this.question, item);
        }
        return wrappedItem !== null && wrappedItem !== void 0 ? wrappedItem : renderedItem;
    }
}
class SurveyQuestionImagePickerItem extends ReactSurveyElement {
    constructor(props) {
        super(props);
        this.handleOnChange = this.handleOnChange.bind(this);
    }
    getStateElement() {
        return this.item;
    }
    componentDidMount() {
        super.componentDidMount();
        this.reactOnStrChanged();
    }
    componentWillUnmount() {
        super.componentWillUnmount();
        this.item.locImageLink.onChanged = function () { };
    }
    componentDidUpdate(prevProps, prevState) {
        super.componentDidUpdate(prevProps, prevState);
        this.reactOnStrChanged();
    }
    reactOnStrChanged() {
        this.item.locImageLink.onChanged = () => {
            this.setState({ locImageLinkchanged: !!this.state && this.state.locImageLink ? this.state.locImageLink + 1 : 1 });
        };
    }
    get cssClasses() {
        return this.props.cssClasses;
    }
    get item() {
        return this.props.item;
    }
    get question() {
        return this.props.question;
    }
    handleOnChange(event) {
        if (this.question.isReadOnlyAttr)
            return;
        if (this.question.multiSelect) {
            if (event.target.checked) {
                this.question.value = this.question.value.concat(event.target.value);
            }
            else {
                var currValue = this.question.value;
                currValue.splice(this.question.value.indexOf(event.target.value), 1);
                this.question.value = currValue;
            }
        }
        else {
            this.question.value = event.target.value;
        }
        this.setState({ value: this.question.value });
    }
    renderElement() {
        const item = this.item;
        const question = this.question;
        const cssClasses = this.cssClasses;
        var isChecked = question.isItemSelected(item);
        var itemClass = question.getItemClass(item);
        var text = null;
        if (question.showLabel) {
            text = (React.createElement("span", { className: question.cssClasses.itemText }, item.text ? SurveyElementBase.renderLocString(item.locText) : item.value));
        }
        var style = { objectFit: this.question.imageFit };
        var control = null;
        if (item.locImageLink.renderedHtml && this.question.contentMode === "image") {
            control = (React.createElement("img", { className: cssClasses.image, src: item.locImageLink.renderedHtml, width: this.question.renderedImageWidth, height: this.question.renderedImageHeight, alt: item.locText.renderedHtml, style: style, onLoad: (event) => { this.question["onContentLoaded"](item, event.nativeEvent); }, onError: (event) => { item.onErrorHandler(item, event.nativeEvent); } }));
        }
        if (item.locImageLink.renderedHtml && this.question.contentMode === "video") {
            control = (React.createElement("video", { controls: true, className: cssClasses.image, src: item.locImageLink.renderedHtml, width: this.question.renderedImageWidth, height: this.question.renderedImageHeight, style: style, onLoadedMetadata: (event) => { this.question["onContentLoaded"](item, event.nativeEvent); }, onError: (event) => { item.onErrorHandler(item, event.nativeEvent); } }));
        }
        if (!item.locImageLink.renderedHtml || item.contentNotLoaded) {
            let style = {
                width: this.question.renderedImageWidth,
                height: this.question.renderedImageHeight,
                objectFit: this.question.imageFit
            };
            control = (React.createElement("div", { className: cssClasses.itemNoImage, style: style }, cssClasses.itemNoImageSvgIcon ?
                React.createElement(SvgIcon, { className: cssClasses.itemNoImageSvgIcon, iconName: this.question.cssClasses.itemNoImageSvgIconId, size: 48 }) :
                null));
        }
        const renderedItem = (React.createElement("div", { className: itemClass },
            React.createElement("label", { className: cssClasses.label },
                React.createElement("input", { className: cssClasses.itemControl, id: this.question.getItemId(item), type: this.question.inputType, name: this.question.questionName, checked: isChecked, value: item.value, disabled: !this.question.getItemEnabled(item), readOnly: this.question.isReadOnlyAttr, onChange: this.handleOnChange, required: this.question.inputRequiredAttribute, "aria-label": item.locText.renderedHtml, "aria-invalid": this.question.ariaInvalid, "aria-errormessage": this.question.ariaErrormessage }),
                React.createElement("div", { className: this.question.cssClasses.itemDecorator },
                    React.createElement("div", { className: this.question.cssClasses.imageContainer },
                        !!this.question.cssClasses.checkedItemDecorator ?
                            React.createElement("span", { className: this.question.cssClasses.checkedItemDecorator, "aria-hidden": "true" }, !!this.question.cssClasses.checkedItemSvgIconId ? React.createElement(SvgIcon, { size: "auto", className: this.question.cssClasses.checkedItemSvgIcon, iconName: this.question.cssClasses.checkedItemSvgIconId }) : null) : null,
                        control),
                    text))));
        return renderedItem;
    }
}
ReactQuestionFactory.Instance.registerQuestion("imagepicker", (props) => {
    return React.createElement(SurveyQuestionImagePicker, props);
});

class SurveyQuestionImageMap extends SurveyQuestionElementBase {
    constructor(props) {
        super(props);
        this.state = { width: undefined, height: undefined, scale: undefined };
    }
    get question() {
        return this.questionBase;
    }
    componentDidMount() {
        super.componentDidMount();
    }
    componentWillUnmount() {
        super.componentWillUnmount();
    }
    renderElement() {
        return (React.createElement("div", { className: this.question.cssClasses.root, ref: (root) => (this.setControl(root)) },
            React.createElement("img", { className: this.question.cssClasses.bg, id: `${this.question.id}-bg`, src: this.question.imageLink, role: "presentation" }),
            React.createElement("svg", { className: this.question.cssClasses.svg, id: `${this.question.id}-svg` })));
    }
}
ReactQuestionFactory.Instance.registerQuestion("imagemap", (props) => {
    return React.createElement(SurveyQuestionImageMap, props);
});

class SurveyQuestionImage extends SurveyQuestionElementBase {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        super.componentDidMount();
        this.question.locImageLink.onChanged = () => {
            this.forceUpdate();
        };
    }
    componentWillUnmount() {
        super.componentWillUnmount();
        this.question.locImageLink.onChanged = () => { };
    }
    get question() {
        return this.questionBase;
    }
    renderElement() {
        var cssClasses = this.question.getImageCss();
        var style = { objectFit: this.question.imageFit, width: this.question.renderedStyleWidth, height: this.question.renderedStyleHeight };
        if (!this.question.imageLink || this.question.contentNotLoaded) {
            style["display"] = "none";
        }
        var control = null;
        if (this.question.renderedMode === "image") {
            control = (React.createElement("img", { className: cssClasses, src: this.question.locImageLink.renderedHtml || null, alt: this.question.renderedAltText, width: this.question.renderedWidth, height: this.question.renderedHeight, style: style, onLoad: (event) => { this.question.onLoadHandler(); }, onError: (event) => { this.question.onErrorHandler(); } }));
        }
        if (this.question.renderedMode === "video") {
            control = (React.createElement("video", { controls: true, className: cssClasses, src: this.question.locImageLink.renderedHtml, width: this.question.renderedWidth, height: this.question.renderedHeight, style: style, onLoadedMetadata: (event) => { this.question.onLoadHandler(); }, onError: (event) => { this.question.onErrorHandler(); } }));
        }
        if (this.question.renderedMode === "youtube") {
            control = (React.createElement("iframe", { className: cssClasses, src: this.question.locImageLink.renderedHtml, width: this.question.renderedWidth, height: this.question.renderedHeight, style: style, title: this.question.renderedAltText }));
        }
        var noImage = null;
        if (!this.question.imageLink || this.question.contentNotLoaded) {
            noImage = (React.createElement("div", { className: this.question.cssClasses.noImage },
                React.createElement(SvgIcon, { iconName: this.question.cssClasses.noImageSvgIconId, size: 48 })));
        }
        return React.createElement("div", { className: this.question.cssClasses.root },
            control,
            noImage);
    }
}
ReactQuestionFactory.Instance.registerQuestion("image", (props) => {
    return React.createElement(SurveyQuestionImage, props);
});

class SurveyQuestionSignaturePad extends SurveyQuestionElementBase {
    constructor(props) {
        super(props);
        this.state = { value: this.question.value };
    }
    get question() {
        return this.questionBase;
    }
    renderElement() {
        var cssClasses = this.question.cssClasses;
        const loadingIndicator = this.question.showLoadingIndicator ? this.renderLoadingIndicator() : null;
        var clearButton = this.renderCleanButton();
        return (React.createElement("div", { className: cssClasses.root, ref: (root) => (this.setControl(root)), style: { width: this.question.renderedCanvasWidth } },
            React.createElement("div", { className: cssClasses.placeholder, style: { display: this.question.needShowPlaceholder() ? "" : "none" } }, this.renderLocString(this.question.locRenderedPlaceholder)),
            React.createElement("div", null,
                this.renderBackgroundImage(),
                React.createElement("canvas", { tabIndex: -1, className: this.question.cssClasses.canvas, onBlur: (event) => { this.question.onBlur(event); } })),
            clearButton,
            loadingIndicator));
    }
    renderBackgroundImage() {
        if (!this.question.backgroundImage)
            return null;
        return React.createElement("img", { className: this.question.cssClasses.backgroundImage, src: this.question.backgroundImage, style: { width: this.question.renderedCanvasWidth }, role: "presentation" });
    }
    renderLoadingIndicator() {
        return React.createElement("div", { className: this.question.cssClasses.loadingIndicator },
            React.createElement(LoadingIndicatorComponent, null));
    }
    renderCleanButton() {
        if (!this.question.canShowClearButton)
            return null;
        var cssClasses = this.question.cssClasses;
        return React.createElement("div", { className: cssClasses.controls },
            React.createElement("button", { type: "button", className: cssClasses.clearButton, title: this.question.clearButtonCaption, onClick: () => this.question.clearValueFromUI() },
                this.question.cssClasses.clearButtonIconId ? React.createElement(SvgIcon, { iconName: this.question.cssClasses.clearButtonIconId, size: "auto" }) : React.createElement("span", null, "\u2716"),
                " "));
    }
}
ReactQuestionFactory.Instance.registerQuestion("signaturepad", (props) => {
    return React.createElement(SurveyQuestionSignaturePad, props);
});

class SurveyQuestionButtonGroup extends SurveyQuestionElementBase {
    constructor(props) {
        super(props);
    }
    get question() {
        return this.questionBase;
    }
    getStateElement() {
        return this.question;
    }
    renderElement() {
        const items = this.renderItems();
        return React.createElement("div", { className: this.question.cssClasses.root }, items);
    }
    renderItems() {
        return this.question.visibleChoices.map((item, index) => {
            return (React.createElement(SurveyButtonGroupItem, { key: this.question.inputId + "_" + index, item: item, question: this.question, index: index }));
        });
    }
}
ReactQuestionFactory.Instance.registerQuestion("buttongroup", (props) => {
    return React.createElement(SurveyQuestionButtonGroup, props);
});
class SurveyButtonGroupItem extends SurveyElementBase {
    constructor(props) {
        super(props);
    }
    get index() {
        return this.props.index;
    }
    get question() {
        return this.props.question;
    }
    get item() {
        return this.props.item;
    }
    getStateElement() {
        return this.item;
    }
    renderElement() {
        this.model = new ButtonGroupItemModel(this.question, this.item, this.index);
        const icon = this.renderIcon();
        const input = this.renderInput();
        const caption = this.renderCaption();
        return (React.createElement("label", { className: this.model.css.label, title: this.model.caption.renderedHtml },
            input,
            React.createElement("div", { className: this.model.css.decorator },
                icon,
                caption)));
    }
    renderIcon() {
        if (!!this.model.iconName) {
            return (React.createElement(SvgIcon, { className: this.model.css.icon, iconName: this.model.iconName, size: this.model.iconSize || 24 }));
        }
        return null;
    }
    renderInput() {
        return (React.createElement("input", { className: this.model.css.control, id: this.model.id, type: "radio", name: this.model.name, checked: this.model.selected, value: this.model.value, disabled: this.model.readOnly, onChange: () => {
                this.model.onChange();
            }, "aria-required": this.model.isRequired, "aria-label": this.model.caption.renderedHtml, "aria-invalid": this.model.hasErrors, "aria-errormessage": this.model.describedBy }));
    }
    renderCaption() {
        if (!this.model.showCaption)
            return null;
        let caption = this.renderLocString(this.model.caption);
        return (React.createElement("span", { className: this.model.css.caption, title: this.model.caption.renderedHtml }, caption));
    }
}
// ReactQuestionFactory.Instance.registerQuestion("buttongroup", props => {
//   return React.createElement(SurveyQuestionButtonGroup, props);
// });

class SurveyQuestionButtonGroupDropdown extends SurveyQuestionDropdownBase {
    constructor(props) {
        super(props);
    }
    renderElement() {
        const cssClasses = this.question.cssClasses;
        const select = this.renderSelect(cssClasses);
        return (React.createElement("div", { className: this.question.cssClasses.rootDropdown }, select));
    }
}
ReactQuestionFactory.Instance.registerQuestion("sv-buttongroup-dropdown", (props) => {
    return React.createElement(SurveyQuestionButtonGroupDropdown, props);
});
RendererFactory.Instance.registerRenderer("buttongroup", "dropdown", "sv-buttongroup-dropdown");

class SurveyQuestionCustom extends SurveyQuestionUncontrolledElement {
    constructor(props) {
        super(props);
    }
    getStateElements() {
        const res = super.getStateElements();
        if (!!this.question.contentQuestion) {
            res.push(this.question.contentQuestion);
        }
        return res;
    }
    getRenderedElements() {
        const res = super.getRenderedElements();
        if (!!this.question.contentQuestion) {
            res.push(this.question.contentQuestion);
        }
        return res;
    }
    renderElement() {
        return SurveyQuestion.renderQuestionBody(this.creator, this.question.contentQuestion);
    }
}
class SurveyQuestionComposite extends SurveyQuestionUncontrolledElement {
    constructor(props) {
        super(props);
    }
    canRender() {
        return !!this.question.contentPanel;
    }
    renderElement() {
        return (React.createElement(SurveyPanel, { element: this.question.contentPanel, creator: this.creator, survey: this.question.survey }));
    }
}
ReactQuestionFactory.Instance.registerQuestion("custom", (props) => {
    return React.createElement(SurveyQuestionCustom, props);
});
ReactQuestionFactory.Instance.registerQuestion("composite", (props) => {
    return React.createElement(SurveyQuestionComposite, props);
});

class ListItemContent extends SurveyElementBase {
    get model() {
        return this.props.model;
    }
    get item() {
        return this.props.item;
    }
    getStateElement() {
        return this.item;
    }
    render() {
        if (!this.item)
            return null;
        const text = this.renderLocString(this.item.locTitle, undefined, "locString");
        const icon = (this.item.iconName) ?
            React.createElement(SvgIcon, { className: this.model.cssClasses.itemIcon, iconName: this.item.iconName, size: this.item.iconSize, "aria-label": this.item.title }) : null;
        const markerIcon = (this.item.markerIconName) ?
            React.createElement(SvgIcon, { className: this.item.cssClasses.itemMarkerIcon, iconName: this.item.markerIconName, size: "auto" }) : null;
        return React.createElement(React.Fragment, null,
            icon,
            text,
            markerIcon);
    }
}
ReactElementFactory.Instance.registerElement("sv-list-item-content", (props) => {
    return React.createElement(ListItemContent, props);
});

class ListItemGroup extends SurveyElementBase {
    get model() {
        return this.props.model;
    }
    get item() {
        return this.props.item;
    }
    getStateElement() {
        return this.item;
    }
    render() {
        var _a;
        if (!this.item)
            return null;
        const newElement = ReactElementFactory.Instance.createElement("sv-list-item-content", { item: this.item, key: "content" + this.item.id, model: this.model });
        return React.createElement(React.Fragment, null,
            newElement,
            React.createElement(Popup, { model: (_a = this.item) === null || _a === void 0 ? void 0 : _a.popupModel }));
    }
}
ReactElementFactory.Instance.registerElement("sv-list-item-group", (props) => {
    return React.createElement(ListItemGroup, props);
});

class LogoImage extends React.Component {
    constructor(props) {
        super(props);
    }
    get survey() {
        return this.props.data;
    }
    render() {
        const content = [];
        content.push(React.createElement("div", { key: "logo-image", className: this.survey.logoClassNames },
            React.createElement("img", { className: this.survey.css.logoImage, src: this.survey.locLogo.renderedHtml || null, alt: this.survey.locTitle.renderedHtml, width: this.survey.renderedLogoWidth, height: this.survey.renderedLogoHeight, style: { objectFit: this.survey.logoFit, width: this.survey.renderedStyleLogoWidth, height: this.survey.renderedStyleLogoHeight } })));
        return React.createElement(React.Fragment, null, content);
    }
}
ReactElementFactory.Instance.registerElement("sv-logo-image", (props) => {
    return React.createElement(LogoImage, props);
});

class SurveyQuestionMatrixDynamicRemoveButton extends ReactSurveyElement {
    constructor(props) {
        super(props);
        this.handleOnRowRemoveClick = this.handleOnRowRemoveClick.bind(this);
    }
    get question() {
        return this.props.item.data.question;
    }
    get row() {
        return this.props.item.data.row;
    }
    handleOnRowRemoveClick(event) {
        this.question.removeRowUI(this.row);
    }
    renderElement() {
        var removeRowText = this.renderLocString(this.question.locRemoveRowText);
        return (React.createElement("button", { className: this.question.getRemoveRowButtonCss(), type: "button", onClick: this.handleOnRowRemoveClick, disabled: this.question.isInputReadOnly },
            removeRowText,
            React.createElement("span", { className: this.question.cssClasses.iconRemove })));
    }
}
ReactElementFactory.Instance.registerElement("sv-matrix-remove-button", (props) => {
    return React.createElement(SurveyQuestionMatrixDynamicRemoveButton, props);
});

class SurveyQuestionMatrixDetailButton extends ReactSurveyElement {
    constructor(props) {
        super(props);
        this.handleOnShowHideClick = this.handleOnShowHideClick.bind(this);
    }
    getStateElement() {
        return this.props.item;
    }
    get item() {
        return this.props.item;
    }
    get question() {
        return this.props.item.data.question;
    }
    get row() {
        return this.props.item.data.row;
    }
    handleOnShowHideClick(event) {
        this.row.showHideDetailPanelClick();
    }
    renderElement() {
        var isExpanded = this.row.isDetailPanelShowing;
        var ariaExpanded = isExpanded;
        var ariaControls = isExpanded ? this.row.detailPanelId : undefined;
        return (React.createElement("button", { type: "button", title: this.props.item.title, onClick: this.handleOnShowHideClick, className: this.question.getDetailPanelButtonCss(this.row), "aria-expanded": ariaExpanded, "aria-controls": ariaControls },
            React.createElement(SvgIcon, { className: this.question.getDetailPanelIconCss(this.row), iconName: this.question.getDetailPanelIconId(this.row), size: "auto" })));
    }
}
ReactElementFactory.Instance.registerElement("sv-matrix-detail-button", props => {
    return React.createElement(SurveyQuestionMatrixDetailButton, props);
});

class SurveyQuestionPanelDynamicAction extends ReactSurveyElement {
    constructor(props) {
        super(props);
    }
    get data() {
        return (this.props.item && this.props.item.data) || this.props.data;
    }
    get question() {
        return (this.props.item && this.props.item.data.question) || this.props.data.question;
    }
    get isActionEnabled() {
        return !this.props.item || this.props.item.enabled !== false;
    }
}
class SurveyQuestionPanelDynamicAddButton extends SurveyQuestionPanelDynamicAction {
    constructor() {
        super(...arguments);
        this.handleClick = (event) => {
            if (!this.isActionEnabled)
                return;
            this.question.addPanelUI();
        };
    }
    get isActionEnabled() {
        if (this.props.item)
            return this.props.item.enabled !== false;
        return this.question.enableAddPanel !== false;
    }
    renderElement() {
        if (!this.question.canAddPanel)
            return null;
        const btnText = this.renderLocString(this.question.locAddPanelText);
        return (React.createElement("button", { type: "button", id: this.question.addButtonId, className: this.question.getAddButtonCss(), onClick: this.handleClick, disabled: !this.isActionEnabled },
            React.createElement("span", { className: this.question.cssClasses.buttonAddText }, btnText)));
    }
}
ReactElementFactory.Instance.registerElement("sv-paneldynamic-add-btn", (props) => {
    return React.createElement(SurveyQuestionPanelDynamicAddButton, props);
});

class SurveyQuestionPanelDynamicRemoveButton extends SurveyQuestionPanelDynamicAction {
    constructor() {
        super(...arguments);
        this.handleClick = (event) => {
            if (!this.isActionEnabled)
                return;
            this.question.removePanelUI(this.data.panel);
        };
    }
    renderElement() {
        const btnText = this.renderLocString(this.question.locRemovePanelText);
        const id = this.question.getPanelRemoveButtonId(this.data.panel);
        return (React.createElement("button", { id: id, className: this.question.getPanelRemoveButtonCss(), onClick: this.handleClick, disabled: !this.isActionEnabled, type: "button" },
            React.createElement("span", { className: this.question.cssClasses.buttonRemoveText }, btnText),
            React.createElement("span", { className: this.question.cssClasses.iconRemove })));
    }
}
ReactElementFactory.Instance.registerElement("sv-paneldynamic-remove-btn", (props) => {
    return React.createElement(SurveyQuestionPanelDynamicRemoveButton, props);
});

class SurveyQuestionPanelDynamicPrevButton extends SurveyQuestionPanelDynamicAction {
    constructor() {
        super(...arguments);
        this.handleClick = (event) => {
            this.question.goToPrevPanel();
        };
    }
    renderElement() {
        return (React.createElement("div", { title: this.question.panelPrevText, onClick: this.handleClick, className: this.question.getPrevButtonCss() },
            React.createElement(SvgIcon, { iconName: this.question.cssClasses.progressBtnIcon, size: "auto" })));
    }
}
ReactElementFactory.Instance.registerElement("sv-paneldynamic-prev-btn", (props) => {
    return React.createElement(SurveyQuestionPanelDynamicPrevButton, props);
});

class SurveyQuestionPanelDynamicNextButton extends SurveyQuestionPanelDynamicAction {
    constructor() {
        super(...arguments);
        this.handleClick = (event) => {
            this.question.goToNextPanel();
        };
    }
    renderElement() {
        return (React.createElement("div", { title: this.question.panelNextText, onClick: this.handleClick, className: this.question.getNextButtonCss() },
            React.createElement(SvgIcon, { iconName: this.question.cssClasses.progressBtnIcon, size: "auto" })));
    }
}
ReactElementFactory.Instance.registerElement("sv-paneldynamic-next-btn", (props) => {
    return React.createElement(SurveyQuestionPanelDynamicNextButton, props);
});

class SurveyQuestionPanelDynamicProgressText extends SurveyQuestionPanelDynamicAction {
    renderElement() {
        return (React.createElement("div", { className: this.question.cssClasses.progressText }, this.question.progressText));
    }
}
ReactElementFactory.Instance.registerElement("sv-paneldynamic-progress-text", (props) => {
    return React.createElement(SurveyQuestionPanelDynamicProgressText, props);
});

class SurveyNavigationButton extends ReactSurveyElement {
    constructor() {
        super(...arguments);
        this.inputElement = null;
        this.inputParent = null;
        this.setInputRef = (element) => {
            var _a;
            if (!element && !!this.inputElement && !!this.inputParent && this.inputElement.parentNode !== this.inputParent) {
                this.inputParent.appendChild(this.inputElement);
            }
            this.inputElement = element;
            this.inputParent = (_a = element === null || element === void 0 ? void 0 : element.parentNode) !== null && _a !== void 0 ? _a : this.inputParent;
        };
    }
    get item() {
        return this.props.item;
    }
    canRender() {
        return this.item.isVisible;
    }
    renderElement() {
        return (React.createElement("input", { ref: this.setInputRef, className: this.item.innerCss, type: "button", disabled: this.item.disabled, onMouseDown: this.item.data && this.item.data.mouseDown, onClick: this.item.action, title: this.item.getTooltip(), value: this.item.title }));
    }
}
ReactElementFactory.Instance.registerElement("sv-nav-btn", (props) => {
    return React.createElement(SurveyNavigationButton, props);
});

class QuestionErrorComponent extends React.Component {
    render() {
        const error = this.props.error;
        const classes = this.props.cssClasses;
        return (React.createElement("div", null,
            React.createElement("span", { className: error.getCssIcon(classes), "aria-hidden": "true" }),
            React.createElement("span", { className: this.props.cssClasses.error.item || undefined },
                React.createElement(SurveyLocStringViewer, { model: error.locText }))));
    }
}
ReactElementFactory.Instance.registerElement("sv-question-error", (props) => {
    return React.createElement(QuestionErrorComponent, props);
});

class SliderLabelItem extends SurveyElementBase {
    getStateElement() {
        return this.item;
    }
    get item() {
        return this.props.item;
    }
    get question() {
        return this.props.question;
    }
    componentDidUpdate(prevProps, prevState) {
        super.componentDidUpdate(prevProps, prevState);
    }
    renderElement() {
        const { cssClasses, handleLabelPointerUp, getLabelCss, getPercent } = this.question;
        const { value, locText } = this.item;
        let labelText = null;
        let labelTextSecondary = null;
        if (this.item.showValue) {
            labelText = React.createElement("div", { className: cssClasses.labelText }, this.item.value);
            labelTextSecondary = React.createElement("div", { className: cssClasses.labelTextSecondaryMode }, this.renderLocString(locText));
        }
        else {
            labelText = React.createElement("div", { className: cssClasses.labelText }, this.renderLocString(locText));
        }
        return React.createElement("div", { key: this.item.uniqueId, className: getLabelCss(locText), style: { left: getPercent(value) + "%" }, onPointerUp: (e) => { handleLabelPointerUp(e.nativeEvent, value); } },
            React.createElement("div", { className: cssClasses.labelTick }),
            React.createElement("div", { className: cssClasses.labelTextContainer },
                labelText,
                labelTextSecondary));
    }
}
ReactElementFactory.Instance.registerElement("sv-slider-label-item", (props) => {
    return React.createElement(SliderLabelItem, props);
});

class Skeleton extends React.Component {
    render() {
        var _a, _b;
        return (React.createElement("div", { className: "sv-skeleton-element", id: (_a = this.props.element) === null || _a === void 0 ? void 0 : _a.id, style: { height: (_b = this.props.element) === null || _b === void 0 ? void 0 : _b.skeletonHeight } }));
    }
}
ReactElementFactory.Instance.registerElement("sv-skeleton", (props) => {
    return React.createElement(Skeleton, props);
});

class HeaderMobile extends React.Component {
    get model() {
        return this.props.model;
    }
    renderLogoImage() {
        const componentName = this.model.survey.getElementWrapperComponentName(this.model.survey, "logo-image");
        const componentData = this.model.survey.getElementWrapperComponentData(this.model.survey, "logo-image");
        return ReactElementFactory.Instance.createElement(componentName, {
            data: componentData,
        });
    }
    render() {
        return (React.createElement("div", { className: "sv-header--mobile" },
            this.model.survey.hasLogo ? (React.createElement("div", { className: "sv-header__logo" }, this.renderLogoImage())) : null,
            this.model.survey.hasTitle ? (React.createElement("div", { className: "sv-header__title", style: { maxWidth: this.model.renderedTextAreaWidth } },
                React.createElement(TitleElement, { element: this.model.survey }))) : null,
            this.model.survey.renderedHasDescription ? (React.createElement("div", { className: "sv-header__description", style: { maxWidth: this.model.renderedTextAreaWidth } },
                React.createElement("div", { className: this.model.survey.css.description }, SurveyElementBase.renderLocString(this.model.survey.locDescription)))) : null));
    }
}
class HeaderCell extends React.Component {
    get model() {
        return this.props.model;
    }
    renderLogoImage() {
        const componentName = this.model.survey.getElementWrapperComponentName(this.model.survey, "logo-image");
        const componentData = this.model.survey.getElementWrapperComponentData(this.model.survey, "logo-image");
        return ReactElementFactory.Instance.createElement(componentName, {
            data: componentData,
        });
    }
    render() {
        return (React.createElement("div", { className: this.model.css, style: this.model.style },
            React.createElement("div", { className: "sv-header__cell-content", style: this.model.contentStyle },
                this.model.showLogo ? (React.createElement("div", { className: "sv-header__logo" }, this.renderLogoImage())) : null,
                this.model.showTitle ? (React.createElement("div", { className: "sv-header__title", style: { maxWidth: this.model.textAreaWidth } },
                    React.createElement(TitleElement, { element: this.model.survey }))) : null,
                this.model.showDescription ? (React.createElement("div", { className: "sv-header__description", style: { maxWidth: this.model.textAreaWidth } },
                    React.createElement("div", { className: this.model.survey.css.description }, SurveyElementBase.renderLocString(this.model.survey.locDescription)))) : null)));
    }
}
class Header extends SurveyElementBase {
    get model() {
        return this.props.model;
    }
    getStateElement() {
        return this.model;
    }
    renderElement() {
        this.model.survey = this.props.survey;
        if (!(this.props.survey.headerView === "advanced") || this.model.isEmpty) {
            return null;
        }
        let headerContent = null;
        if (this.props.survey.isMobile) {
            headerContent = React.createElement(HeaderMobile, { model: this.model });
        }
        else {
            headerContent = (React.createElement("div", { className: this.model.contentClasses, style: { maxWidth: this.model.maxWidth } }, this.model.cells.map((cell, index) => React.createElement(HeaderCell, { key: index, model: cell }))));
        }
        return (React.createElement("div", { className: this.model.headerClasses, style: { height: this.model.renderedHeight } },
            this.model.backgroundImage ? React.createElement("div", { style: this.model.backgroundImageStyle, className: this.model.backgroundImageClasses }) : null,
            headerContent));
    }
    componentDidMount() {
        super.componentDidMount();
        this.model.processResponsiveness();
    }
    componentDidUpdate(prevProps, prevState) {
        super.componentDidUpdate(prevProps, prevState);
        this.model.processResponsiveness();
    }
}
ReactElementFactory.Instance.registerElement("sv-header", (props) => {
    return React.createElement(Header, props);
});

class SurveyLocStringEditor extends React.Component {
    constructor(props) {
        super(props);
        this.onInput = (event) => {
            this.locStr.text = event.target.innerText;
        };
        this.onClick = (event) => {
            event.preventDefault();
            event.stopPropagation();
        };
        this.state = { changed: 0 };
    }
    get locStr() {
        return this.props.model;
    }
    get style() {
        return this.props.style;
    }
    componentDidMount() {
        if (!this.locStr)
            return;
        var self = this;
        this.locStr.onChanged = function () {
            self.setState({ changed: self.state.changed + 1 });
        };
    }
    componentWillUnmount() {
        if (!this.locStr)
            return;
        this.locStr.onChanged = function () { };
    }
    render() {
        if (!this.locStr) {
            return null;
        }
        if (this.locStr.hasHtml) {
            const htmlValue = { __html: this.locStr.renderedHtml };
            return (React.createElement("span", { className: "sv-string-editor", contentEditable: "true", suppressContentEditableWarning: true, style: this.style, dangerouslySetInnerHTML: htmlValue, onBlur: this.onInput, onClick: this.onClick }));
        }
        return (React.createElement("span", { className: "sv-string-editor", contentEditable: "true", suppressContentEditableWarning: true, style: this.style, onBlur: this.onInput, onClick: this.onClick }, this.locStr.renderedHtml));
    }
}
ReactElementFactory.Instance.registerElement(LocalizableString.editableRenderer, (props) => {
    return React.createElement(SurveyLocStringEditor, props);
});

checkLibraryVersion(`${"2.5.33"}`, "survey-react-ui");

export { CharacterCounterComponent, ComponentsContainer, Header, HeaderCell, HeaderMobile, List, ListItemContent, ListItemGroup, LoadingIndicatorComponent, LogoImage, MatrixRow, NotifierComponent, Popup, PopupModal, PopupSurvey, QuestionErrorComponent, RatingDropdownItem, RatingItem, RatingItemSmiley, RatingItemStar, ReactElementFactory, ReactQuestionFactory, ReactSurveyElement, ReactSurveyElementsWrapper, Scroll, Skeleton, SliderLabelItem, Survey, SurveyActionBar, SurveyElementBase, SurveyElementErrors, SurveyFileChooseButton, SurveyFileItem, SurveyFilePreview, SurveyFlowPanel, SurveyHeader, SurveyLocStringEditor, SurveyLocStringViewer, SurveyNavigationBase, SurveyNavigationButton, SurveyPage, SurveyPanel, SurveyProgress, SurveyProgressButtons, SurveyProgressToc, SurveyQuestion, SurveyQuestionAndErrorsCell, SurveyQuestionBoolean, SurveyQuestionBooleanCheckbox, SurveyQuestionBooleanRadio, SurveyQuestionButtonGroup, SurveyQuestionButtonGroupDropdown, SurveyQuestionCheckbox, SurveyQuestionCheckboxItem, SurveyQuestionComment, SurveyQuestionCommentItem, SurveyQuestionComposite, SurveyQuestionCustom, SurveyQuestionDropdown, SurveyQuestionDropdownBase, SurveyQuestionDropdownSelect, SurveyQuestionElementBase, SurveyQuestionEmpty, SurveyQuestionExpression, SurveyQuestionFile, SurveyQuestionHtml, SurveyQuestionImage, SurveyQuestionImageMap, SurveyQuestionImagePicker, SurveyQuestionMatrix, SurveyQuestionMatrixCell, SurveyQuestionMatrixDetailButton, SurveyQuestionMatrixDropdown, SurveyQuestionMatrixDropdownBase, SurveyQuestionMatrixDropdownCell, SurveyQuestionMatrixDynamic, SurveyQuestionMatrixDynamicAddButton, SurveyQuestionMatrixDynamicDragDropIcon, SurveyQuestionMatrixDynamicRemoveButton, SurveyQuestionMatrixRow, SurveyQuestionMultipleText, SurveyQuestionOptionItem, SurveyQuestionPanelDynamic, SurveyQuestionPanelDynamicAddButton, SurveyQuestionPanelDynamicNextButton, SurveyQuestionPanelDynamicPrevButton, SurveyQuestionPanelDynamicProgressText, SurveyQuestionPanelDynamicRemoveButton, SurveyQuestionRadioItem, SurveyQuestionRadiogroup, SurveyQuestionRanking, SurveyQuestionRankingItem, SurveyQuestionRankingItemContent, SurveyQuestionRating, SurveyQuestionRatingDropdown, SurveyQuestionSignaturePad, SurveyQuestionSlider, SurveyQuestionTagbox, SurveyQuestionTagboxItem, SurveyQuestionText, SurveyRow, SurveyTimerPanel, SurveyWindow, SvgBundleComponent, SvgIcon, TagboxFilterString, TitleActions, TitleElement, attachKey2click };
//# sourceMappingURL=survey-react-ui.mjs.map
