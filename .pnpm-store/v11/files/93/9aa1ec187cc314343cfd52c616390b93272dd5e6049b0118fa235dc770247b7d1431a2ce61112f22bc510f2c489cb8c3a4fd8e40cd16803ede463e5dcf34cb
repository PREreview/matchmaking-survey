import { QuestionMatrixBaseModel } from "./martixBase";
import { Question, IConditionObject, IQuestionPlainData } from "./question";
import { HashTable } from "./helpers";
import { Base } from "./base";
import { IElement, IQuestion, ISurveyData, IProgressInfo, IPanel, IPlainDataOptions, ISurveyMatrixCallbacks, ISurveyChoiceCallbacks } from "./base-interfaces";
import { ItemValue } from "./itemvalue";
import { ILocalizableOwner, LocalizableString } from "./localizablestring";
import { PanelModel } from "./panel";
import { SurveyError } from "./survey-error";
import { IMatrixColumnOwner, MatrixDropdownColumn } from "./question_matrixdropdowncolumn";
import { QuestionMatrixDropdownRenderedCell, QuestionMatrixDropdownRenderedRow, QuestionMatrixDropdownRenderedTable } from "./question_matrixdropdownrendered";
import { IObjectValueContext, IValueGetterContext, IValueGetterContextGetValueParams, IValueGetterInfo } from "./conditions/conditionProcessValue";
import { ValidationContext } from "./question";
import { DynamicItemGetterContext, DynamicItemModelBase, IDynamicItemModelData } from "./dynamicItemModelBase";
import { QuestionSingleInputBehavior } from "./question_singleinput_behavior";
export interface IMatrixDropdownData extends IObjectValueContext, IDynamicItemModelData, ILocalizableOwner {
    onRowChanging(row: MatrixDropdownRowModelBase, columnName: string, rowValue: any): any;
    isValidateOnValueChanging: boolean;
    checkIfValueInRowDuplicated(checkedRow: MatrixDropdownRowModelBase, cellQuestion: Question): boolean;
    hasDetailPanel(row: MatrixDropdownRowModelBase): boolean;
    getIsDetailPanelShowing(row: MatrixDropdownRowModelBase): boolean;
    setIsDetailPanelShowing(row: MatrixDropdownRowModelBase, val: boolean): void;
    createRowDetailPanel(row: MatrixDropdownRowModelBase): PanelModel;
    validateCell(row: MatrixDropdownRowModelBase, columnName: string, rowValue: any): SurveyError;
    columns: Array<MatrixDropdownColumn>;
    createQuestion(row: MatrixDropdownRowModelBase, column: MatrixDropdownColumn): Question;
    choices: Array<ItemValue>;
    onTotalValueChanged(): any;
    isMatrixReadOnly(): boolean;
    onRowVisibilityChanged(row: MatrixDropdownRowModelBase): void;
}
export declare class MatrixDropdownCell {
    column: MatrixDropdownColumn;
    row: MatrixDropdownRowModelBase;
    data: IMatrixDropdownData;
    private questionValue;
    constructor(column: MatrixDropdownColumn, row: MatrixDropdownRowModelBase, data: IMatrixDropdownData);
    private updateCellQuestionTitleDueToAccessebility;
    locStrsChanged(): void;
    protected createQuestion(column: MatrixDropdownColumn, row: MatrixDropdownRowModelBase, data: IMatrixDropdownData): Question;
    get question(): Question;
    get value(): any;
    set value(value: any);
    getQuestionWrapperClassName(className: string): string;
    runCondition(properties: HashTable<any>): void;
    private onQuestionVisibilityChanged;
    dispose(): void;
}
export declare class MatrixDropdownTotalCell extends MatrixDropdownCell {
    column: MatrixDropdownColumn;
    row: MatrixDropdownRowModelBase;
    data: IMatrixDropdownData;
    constructor(column: MatrixDropdownColumn, row: MatrixDropdownRowModelBase, data: IMatrixDropdownData);
    protected createQuestion(column: MatrixDropdownColumn, row: MatrixDropdownRowModelBase, data: IMatrixDropdownData): Question;
    locStrsChanged(): void;
    updateCellQuestion(): void;
    getQuestionWrapperClassName(className: string): string;
    getTotalExpression(): string;
}
export declare class MatrixRowGetterContext extends DynamicItemGetterContext {
    protected row: MatrixDropdownRowModelBase;
    constructor(row: MatrixDropdownRowModelBase);
    protected get visibleIndex(): number;
    protected getNextName(): string;
    protected getPrevName(): string;
    protected getVisibleItem(index: number): DynamicItemModelBase;
    protected getSpecificValue(params: IValueGetterContextGetValueParams): IValueGetterInfo;
    protected get questionName(): string;
    protected getItemVariableNames(): Array<string>;
    getRootObj(): IObjectValueContext;
    protected getItemValue(name: string): any;
}
export declare class MatrixDropdownRowModelBase extends DynamicItemModelBase implements ILocalizableOwner {
    data: IMatrixDropdownData;
    private static idCounter;
    private static getId;
    private idValue;
    private detailPanelValue;
    private visibleValue;
    cells: Array<MatrixDropdownCell>;
    showHideDetailPanelClick: any;
    onDetailPanelShowingChanged: () => void;
    visibleIndex: number;
    constructor(data: IMatrixDropdownData, value: any);
    get id(): string;
    get rowName(): any;
    get rowTitle(): any;
    get dataName(): string;
    get text(): any;
    getValueGetterContext(): IValueGetterContext;
    isRowEnabled(): boolean;
    protected isRowHasEnabledCondition(): boolean;
    get isVisible(): boolean;
    get visible(): boolean;
    set visible(val: boolean);
    protected isItemVisible(): boolean;
    get value(): any;
    set value(value: any);
    get filteredValue(): any;
    private getValueCore;
    get locText(): LocalizableString;
    getAccessbilityText(): string;
    get hasPanel(): boolean;
    get detailPanel(): PanelModel;
    get detailPanelId(): string;
    get isDetailPanelShowing(): boolean;
    private setIsDetailPanelShowing;
    private showHideDetailPanel;
    private isCreatingDetailPanel;
    showDetailPanel(): void;
    hideDetailPanel(destroyPanel?: boolean): void;
    private ensureDetailPanel;
    getAllValues(): any;
    getVariableName(): string;
    private getDataRowValue;
    runCondition(properties: HashTable<any>, rowsVisibleIf?: string, alwaysVisible?: boolean): void;
    protected runRowsEnableCondition(properties: HashTable<any>): void;
    protected getRowsVisibleIfExpression(rowsVisibleIf: string): Array<string>;
    private getRowVisibleIfBaseOnExpression;
    updateElementVisibility(): void;
    getNamesWithDefaultValues(): Array<string>;
    clearValue(keepComment?: boolean, fromUI?: boolean): void;
    onAnyValueChanged(name: string, questionName: string): void;
    getDataValueCore(valuesHash: any, key: string): any;
    setValue(name: string, newColumnValue: any): void;
    getComment(name: string): string;
    setComment(name: string, newValue: string, locNotification: any): void;
    private setValueCore;
    private onCellValueChanging;
    private validateCellQuestion;
    get isEmpty(): boolean;
    hasValueAnyQuestion(visibleOnly?: boolean): boolean;
    getQuestionByColumn(column: MatrixDropdownColumn): Question;
    getCellByColumn(column: MatrixDropdownColumn): MatrixDropdownCell;
    private getCellByColumnName;
    getQuestionByColumnName(columnName: string): Question;
    get questions(): Array<Question>;
    get visibleQuestions(): Array<Question>;
    getQuestionByName(name: string): Question;
    getQuestionsByName(name: string): Array<Question>;
    getQuestionsByValueName(name: string, caseInsensitive?: boolean): Array<Question>;
    clearIncorrectValues(val: any): void;
    getLocale(): string;
    getMarkdownHtml(text: string, name: string, item?: any): string;
    getRenderer(name: string): string;
    getRendererContext(locStr: LocalizableString): any;
    getProcessedText(text: string): string;
    locStrsChanged(): void;
    randomSeedChanged(): void;
    updateCellQuestionOnColumnChanged(column: MatrixDropdownColumn, name: string, newValue: any): void;
    updateCellQuestionOnColumnItemValueChanged(column: MatrixDropdownColumn, propertyName: string, obj: ItemValue, name: string, newValue: any, oldValue: any): void;
    onQuestionReadOnlyChanged(): void;
    validate(context: ValidationContext): boolean;
    protected updateCellOnColumnChanged(cell: MatrixDropdownCell, name: string, newValue: any): void;
    updateCellOnColumnItemValueChanged(cell: MatrixDropdownCell, propertyName: string, obj: ItemValue, name: string, newValue: any, oldValue: any): void;
    protected buildCells(value: any): void;
    protected isTwoValueEquals(val1: any, val2: any): boolean;
    private getCellValue;
    protected createCell(column: MatrixDropdownColumn): MatrixDropdownCell;
    get rowIndex(): number;
    getIndex(): number;
    protected getItemIndex(): number;
    get editingObj(): Base;
    private onEditingObjPropertyChanged;
    private editingObjValue;
    dispose(): void;
    private subscribeToChanges;
    private updateOnSetValue;
}
export declare class MatrixDropdownTotalRowModel extends MatrixDropdownRowModelBase {
    constructor(data: IMatrixDropdownData);
    protected createCell(column: MatrixDropdownColumn): MatrixDropdownCell;
    setValue(name: string, newValue: any): void;
    runCondition(properties: HashTable<any>, rowsVisibleIf?: string): void;
    protected updateCellOnColumnChanged(cell: MatrixDropdownCell, name: string, newValue: any): void;
}
export declare class MatrixSingleInputLocOwner implements ILocalizableOwner {
    private matrix;
    private row?;
    constructor(matrix: QuestionMatrixDropdownModelBase, row?: MatrixDropdownRowModelBase);
    getLocale(): string;
    getMarkdownHtml(text: string, name: string, item?: any): string;
    getProcessedText(text: string): string;
    getRenderer(name: string): string;
    getRendererContext(locStr: LocalizableString): any;
}
/**
 * A base class for the [`QuestionMatrixDropdownModel`](https://surveyjs.io/form-library/documentation/questionmatrixdropdownmodel) and [`QuestionMatrixDynamicModel`](https://surveyjs.io/form-library/documentation/questionmatrixdynamicmodel) classes.
 */
export declare class QuestionMatrixDropdownModelBase extends QuestionMatrixBaseModel<MatrixDropdownRowModelBase, MatrixDropdownColumn> implements IMatrixDropdownData, IMatrixColumnOwner {
    get matrixCallbacks(): ISurveyMatrixCallbacks;
    get choiceCallbacks(): ISurveyChoiceCallbacks;
    static get defaultCellType(): string;
    static set defaultCellType(val: string);
    static addDefaultColumns(matrix: QuestionMatrixDropdownModelBase): void;
    private detailPanelValue;
    private useCaseSensitiveComparisonValue;
    protected isRowChanging: boolean;
    columnsChangedCallback: () => void;
    onRenderedTableResetCallback: () => void;
    onCellCreatedCallback: (options: any) => void;
    onCellValueChangedCallback: (options: any) => void;
    onHasDetailPanelCallback: (row: MatrixDropdownRowModelBase) => boolean;
    onCreateDetailPanelCallback: (row: MatrixDropdownRowModelBase, panel: PanelModel) => void;
    onCreateDetailPanelRenderedRowCallback: (renderedRow: QuestionMatrixDropdownRenderedRow) => void;
    onAddColumn: (column: MatrixDropdownColumn) => void;
    onRemoveColumn: (column: MatrixDropdownColumn) => void;
    cellValueChangingCallback: (row: any, columnName: string, value: any, oldValue: any) => any;
    protected createColumnValues(): any[];
    protected onPropertyValueChanged(name: string, oldValue: any, newValue: any): void;
    getType(): string;
    protected getAllChildren(): Base[];
    dispose(): void;
    get isContainer(): boolean;
    get isRowsDynamic(): boolean;
    private isUpdating;
    protected get isUpdateLocked(): boolean;
    beginUpdate(): void;
    endUpdate(): void;
    protected updateColumnsAndRows(): void;
    itemValuePropertyChanged(item: ItemValue, name: string, oldValue: any, newValue: any): void;
    /**
     * Specifies whether to display [`columns`](#columns) as rows and [`rows`](#rows) as columns.
     *
     * Default value: `false`
     *
     * [Multi-Select Matrix Demo](https://surveyjs.io/form-library/examples/multi-select-matrix-question/ (linkStyle))
     *
     * [Dynamic Matrix Demo](https://surveyjs.io/form-library/examples/transpose-dynamic-rows-to-columns-in-matrix/ (linkStyle))
     */
    transposeData: boolean;
    /**
     * @deprecated Use the [`transposeData`](#transposeData) property instead.
     */
    get columnLayout(): string;
    set columnLayout(val: string);
    get columnsLocation(): string;
    set columnsLocation(val: string);
    /**
     * Specifies the error message position for questions within detail sections.
     *
     * Possible values:
     *
     * - `"default"` (default) - Inherits the setting from the [`errorLocation`](#errorLocation) property.
     * - `"top"` - Displays error messages above questions.
     * - `"bottom"` - Displays error messages below questions.
     * @see cellErrorLocation
     */
    detailErrorLocation: string;
    /**
     * Specifies the error message position relative to matrix cells.
     *
     * Possible values:
     *
     * - `"default"` (default) - Inherits the setting from the [`errorLocation`](#errorLocation) property.
     * - `"top"` - Displays error messages above matrix cells.
     * - `"bottom"` - Displays error messages below matrix cells.
     * @see detailErrorLocation
     */
    cellErrorLocation: string;
    getChildErrorLocation(child: Question): string;
    /**
     * Returns `true` if [`columns`](#columns) are placed in the horizontal direction and [`rows`](#columns) in the vertical direction.
     *
     * To specify the layout, use the [`transposeData`](#transposeData) property. If you set it to `true`, the survey applies it only when the screen has enough space. Otherwise, the survey falls back to the original layout, but the `transposeData` property remains set to `true`. Unlike `transposeData`, the `isColumnLayoutHorizontal` property always indicates the current layout.
     * @see transposeData
     */
    get isColumnLayoutHorizontal(): boolean;
    /**
     * Enables case-sensitive comparison in columns with the `isUnique` property set to `true`.
     *
     * When this property is `true`, `"ABC"` and `"abc"` are considered different values.
     *
     * Default value: `false`
     * @see keyDuplicationError
     */
    get useCaseSensitiveComparison(): boolean;
    set useCaseSensitiveComparison(val: boolean);
    /**
     * @deprecated Use the [`useCaseSensitiveComparison`](#useCaseSensitiveComparison) property instead.
     */
    get isUniqueCaseSensitive(): boolean;
    set isUniqueCaseSensitive(val: boolean);
    /**
     * Specifies the location of detail sections.
     *
     * Possible values:
     *
     * - `"underRow"` - Displays detail sections under their respective rows. Users can expand any number of detail sections.
     * - `"underRowSingle"` - Displays detail sections under their respective rows, but only one detail section can be expanded at a time.
     * - `"none"` (default) - Hides detail sections.
     *
     * Use the [`detailElements`](#detailElements) property to specify content of detail sections.
     *
     * [View Demo](https://surveyjs.io/form-library/examples/add-expandable-details-section-under-matrix-rows/ (linkStyle))
     * @see detailPanel
     */
    detailPanelMode: string;
    /**
     * Contains a [`PanelModel`](https://surveyjs.io/form-library/documentation/panelmodel) instance that represents a detail section template.
     * @see detailElements
     * @see detailPanelMode
     */
    get detailPanel(): PanelModel;
    getPanels(): Array<IPanel>;
    getPanelInDesignMode(): PanelModel;
    /**
     * An array of survey elements (questions and panels) to be displayed in detail sections.
     *
     * Detail sections are expandable panels displayed under each matrix row. You can use them to display questions that do not fit into the row.
     *
     * Set the [`detailPanelMode`](#detailPanelMode) property to `"underRow"` or `"underRowSingle"` to display detail sections.
     *
     * [View Demo](https://surveyjs.io/form-library/examples/add-expandable-details-section-under-matrix-rows/ (linkStyle))
     * @see detailPanel
     */
    get detailElements(): Array<IElement>;
    protected isPropertyStoredInHash(name: string): boolean;
    protected mergeLocalizationWithInnerObjects(src: Base, locales?: Array<string>): void;
    protected createNewDetailPanel(): PanelModel;
    get hasRowText(): boolean;
    getFooterText(): LocalizableString;
    get canAddRow(): boolean;
    get canRemoveRows(): boolean;
    canRemoveRow(row: MatrixDropdownRowModelBase): boolean;
    onPointerDown(pointerDownEvent: PointerEvent, row: MatrixDropdownRowModelBase): void;
    protected onRowsChanged(): void;
    private updateRowsVisibleIndexes;
    private lockResetRenderedTable;
    protected onStartRowAddingRemoving(): void;
    protected onEndRowAdding(): void;
    protected onEndRowRemoving(row: MatrixDropdownRowModelBase): void;
    protected clearRowsAndResetRenderedTable(): void;
    resetRenderedTable(columnVisibilityChanged?: boolean): void;
    protected clearGeneratedRows(): void;
    protected get isRendredTableCreated(): boolean;
    get renderedTable(): QuestionMatrixDropdownRenderedTable;
    protected createRenderedTable(): QuestionMatrixDropdownRenderedTable;
    protected getRowByQuestion(question: Question): MatrixDropdownRowModelBase;
    protected onMatrixRowCreated(row: MatrixDropdownRowModelBase): void;
    /**
     * Specifies the type of matrix cells. You can override this property for individual columns.
     *
     * Possible values:
     *
     * - [`"dropdown"`](https://surveyjs.io/form-library/documentation/api-reference/dropdown-menu-model)
     * - [`"checkbox"`](https://surveyjs.io/form-library/documentation/api-reference/checkbox-question-model)
     * - [`"radiogroup"`](https://surveyjs.io/form-library/documentation/api-reference/radio-button-question-model)
     * - [`"tagbox"`](https://surveyjs.io/form-library/documentation/api-reference/dropdown-tag-box-model)
     * - [`"text"`](https://surveyjs.io/form-library/documentation/api-reference/text-entry-question-model)
     * - [`"comment"`](https://surveyjs.io/form-library/documentation/api-reference/comment-field-model)
     * - [`"boolean"`](https://surveyjs.io/form-library/documentation/api-reference/boolean-question-model)
     * - [`"expression"`](https://surveyjs.io/form-library/documentation/api-reference/expression-model)
     * - [`"rating"`](https://surveyjs.io/form-library/documentation/api-reference/rating-scale-question-model)
     * - [`"slider"`](https://surveyjs.io/form-library/documentation/api-reference/questionslidermodel)
     *
     * Default value: `"dropdown"` (inherited from [`settings.matrix.defaultCellType`](https://surveyjs.io/form-library/documentation/settings#matrixDefaultCellType))
     *
     * [Multi-Select Matrix Demo](https://surveyjs.io/form-library/examples/multi-select-matrix-question/ (linkStyle))
     *
     * [Dynamic Matrix Demo](https://surveyjs.io/form-library/examples/dynamic-matrix-add-new-rows/ (linkStyle))
     */
    cellType: string;
    isSelectCellType(): boolean;
    private updateColumnsCellType;
    private updateColumnsIndexes;
    /**
     * Specifies the number of columns in Radiogroup and Checkbox cells.
     *
     * Default value: 0 (the number of columns is selected automatically based on the available column width)
     * @see cellType
     */
    columnColCount: number;
    horizontalScroll: boolean;
    get allowAdaptiveActions(): boolean;
    set allowAdaptiveActions(val: boolean);
    hasChoices(): boolean;
    onColumnPropertyChanged(column: MatrixDropdownColumn, name: string, newValue: any): void;
    onColumnNestedPropertyChanged(column: MatrixDropdownColumn, name: string, nestedName: string, newValue: any): void;
    onColumnItemValuePropertyChanged(column: MatrixDropdownColumn, propertyName: string, obj: ItemValue, name: string, newValue: any, oldValue: any): void;
    onShowInMultipleColumnsChanged(column: MatrixDropdownColumn): void;
    onColumnVisibilityChanged(column: MatrixDropdownColumn): void;
    onColumnCellVisibilityChanged(column: MatrixDropdownColumn): void;
    onColumnCellTypeChanged(column: MatrixDropdownColumn): void;
    getDesignRowContext(): IValueGetterContext;
    private updateDefaultRowValue;
    private resetTableAndRows;
    getRowTitleWidth(): string;
    get hasFooter(): boolean;
    getAddRowLocation(): string;
    getShowColumnsIfEmpty(): boolean;
    protected updateShowTableAndAddRow(): void;
    protected updateHasFooter(): void;
    get hasTotal(): boolean;
    getCellType(): string;
    getCustomCellType(column: MatrixDropdownColumn, row: MatrixDropdownRowModelBase, cellType: string): string;
    getConditionJson(operator?: string, path?: string): any;
    clearIncorrectValues(): void;
    clearErrors(): void;
    localeChanged(): void;
    private runFuncForCellQuestions;
    protected runItemsCondition(properties: HashTable<any>): void;
    runTriggers(name: string, value: any, keys?: any): void;
    updateElementVisibility(): void;
    protected shouldRunColumnExpression(): boolean;
    private isRunningCellsCondition;
    protected runCellsCondition(properties: HashTable<any>): boolean;
    protected runConditionsForColumns(properties: HashTable<any>): boolean;
    private checkColumnsVisibility;
    private checkColumnsRenderedRequired;
    private isColumnVisibilityChanged;
    private updateNewVisibleChoices;
    protected runTotalsCondition(properties: HashTable<any>): void;
    IsMultiplyColumn(column: MatrixDropdownColumn): boolean;
    locStrsChanged(): void;
    randomSeedChanged(): void;
    /**
     * Returns a matrix column with a given `name` or `null` if a column with this is not found.
     * @param columnName A column name.
     */
    getColumnByName(columnName: string): MatrixDropdownColumn;
    getColumnName(columnName: string): MatrixDropdownColumn;
    getColumnWidth(column: MatrixDropdownColumn): string;
    /**
     * Gets or sets choice items for Dropdown, Checkbox, and Radiogroup matrix cells. You can override this property for individual columns.
     *
     * This property accepts an array of objects with the following structure:
     *
     * ```js
     * {
     *   "value": any, // A value to be saved in survey results
     *   "text": string, // A display text. This property supports Markdown. When `text` is undefined, `value` is used.
     *   "customProperty": any // Any property that you find useful.
     * }
     * ```
     *
     * To enable Markdown support for the `text` property, implement Markdown-to-HTML conversion in the [onTextMarkdown](https://surveyjs.io/form-library/documentation/api-reference/survey-data-model#onTextMarkdown) event handler. For an example, refer to the following demo: [Convert Markdown to HTML with markdown-it](https://surveyjs.io/form-library/examples/edit-survey-questions-markdown/).
     *
     * If you add custom properties, refer to the following help topic to learn how to serialize them into JSON: [Add Custom Properties to Property Grid](https://surveyjs.io/survey-creator/documentation/property-grid#add-custom-properties-to-the-property-grid).
     *
     * If you need to specify only the `value` property, you can set the `choices` property to an array of primitive values, for example, `[ "item1", "item2", "item3" ]`. These values are both saved in survey results and used as display text.
     * @see cellType
     */
    get choices(): Array<any>;
    set choices(val: Array<any>);
    /**
     * A placeholder for Dropdown matrix cells.
     * @see cellType
     */
    placeholder: string;
    get optionsCaption(): string;
    set optionsCaption(val: string);
    /**
     * An error message displayed when users enter a duplicate value into a column that accepts only unique values (`isUnique` is set to `true` or `keyName` is specified).
     *
     * A default value for this property is taken from a [localization dictionary](https://github.com/surveyjs/survey-library/tree/01bd8abd0c574719956d4d579d48c8010cd389d4/packages/survey-core/src/localization). Refer to the following help topic for more information: [Localization & Globalization](https://surveyjs.io/form-library/documentation/localization).
     * @see useCaseSensitiveComparison
     */
    keyDuplicationError: string;
    /**
     * A title template that applies when the survey is in [input-per-page mode](https://surveyjs.io/form-library/documentation/api-reference/survey-data-model#questionsOnPageMode).
     *
     * Default value: `"Row {rowIndex}"` for Dynamic Matrix | `"{rowTitle}"` for Multi-Select Matrix
     *
     * The template can contain the following placeholders:
     *
     * - `{rowIndex}` - A row index within the collection of all rows. Starts with 1.
     * - `{visibleRowIndex}` - A row index within the collection of visible rows. Starts with 1.
     * - `{rowName}` - A row name (the `value` property within objects in the [`rows`](#rows) array). Use this placeholder if you need to distinguish between matrix rows.
     * - `{rowTitle}` - A row title (the `text` property within objects in the `rows` array).
     * - `{row.columnname}` - The value of a cell in the same row.
     *
     * [View Demo](https://surveyjs.io/form-library/examples/loop-and-merge/ (linkStyle))
     */
    get singleInputTitleTemplate(): string;
    set singleInputTitleTemplate(val: string);
    get locSingleInputTitleTemplate(): LocalizableString;
    getMatrixDropdownBaseSingleQuestionLocTitleCore(): LocalizableString;
    getSingleInputTitleTemplate(): string;
    processSingleInputTitle(text: string, row: MatrixDropdownRowModelBase): string;
    protected createSingleInputBehavior(): QuestionSingleInputBehavior;
    get storeOthersAsComment(): boolean;
    addColumn(name: string, title?: string): MatrixDropdownColumn;
    private visibleRowsArray;
    protected clearVisibleRows(): void;
    protected isColumnVisible(column: any): boolean;
    private isGenereatingRows;
    protected getVisibleRows(): Array<MatrixDropdownRowModelBase>;
    get allRows(): Array<MatrixDropdownRowModelBase>;
    private generateVisibleRowsIfNeeded;
    private runTriggersOnNewRows;
    private getVisibleFromGenerated;
    private updateValueOnRowsGeneration;
    get totalValue(): any;
    protected getVisibleTotalRow(): MatrixDropdownRowModelBase;
    get visibleTotalRow(): MatrixDropdownRowModelBase;
    onSurveyLoad(): void;
    private genetateColumnsName;
    private generateNewName;
    /**
     * Returns an object with row values. If a row has no answers, this method returns an empty object.
     * @param rowIndex A zero-based row index.
     * @see setRowValue
     */
    getRowValue(rowIndex: number): any;
    getItemData(item: ISurveyData): any;
    checkIfValueInRowDuplicated(checkedRow: MatrixDropdownRowModelBase, cellQuestion: Question): boolean;
    /**
     * Assigns values to a row.
     * @param rowIndex A zero-based row index.
     * @param rowValue An object with the following structure: `{ "column_name": columnValue, ... }`
     * @see getRowValue
     */
    setRowValue(rowIndex: number, rowValue: any): any;
    protected generateRows(): Array<MatrixDropdownRowModelBase>;
    protected generateTotalRow(): MatrixDropdownRowModelBase;
    protected createNewValue(nullOnEmpty?: boolean): any;
    protected getRowValueCore(row: MatrixDropdownRowModelBase, questionValue: any, create?: boolean): any;
    protected getRowObj(row: MatrixDropdownRowModelBase): any;
    protected getRowDisplayValue(keysAsText: boolean, row: MatrixDropdownRowModelBase, rowValue: any): any;
    getPlainData(options?: IPlainDataOptions): IQuestionPlainData;
    addConditionObjectsByContext(objects: Array<IConditionObject>, context: any): void;
    onHidingContent(): void;
    protected getIsReadyNestedQuestions(): Array<Question>;
    protected collectNestedQuestionsCore(questions: Array<Question>, visibleOnly: boolean, includeNested: boolean, includeItSelf: boolean): void;
    protected collectNestedQuestonsInRows(rows: Array<MatrixDropdownRowModelBase>, questions: Question[], visibleOnly: boolean, includeNested: boolean, includeItSelf: boolean): void;
    protected getConditionObjectRowName(index: number): string;
    protected getConditionObjectRowText(index: number): string;
    protected getConditionObjectsRowIndeces(): Array<number>;
    getProgressInfo(): IProgressInfo;
    protected getIsRequireToGenerateRows(): boolean;
    protected updateProgressInfoByValues(res: IProgressInfo): void;
    protected updateProgressInfoByRow(res: IProgressInfo, rowValue: any): void;
    private getCellQuestions;
    protected onBeforeValueChanged(val: any): void;
    private onSetQuestionValue;
    protected setQuestionValue(newValue: any): void;
    supportAutoAdvance(): boolean;
    protected getContainsErrors(): boolean;
    protected getIsAnswered(): boolean;
    private checkForAnswersOrErrors;
    protected validateElementCore(context: ValidationContext): boolean;
    protected getIsRunningValidators(): boolean;
    getAllErrors(): Array<SurveyError>;
    private validateRows;
    private isValueDuplicated;
    protected getUniqueColumnsNames(): Array<string>;
    private isValueInColumnDuplicated;
    private getDuplicatedRowAndShowErrors;
    private getDuplicatedRows;
    private showDuplicatedErrorsInRows;
    private removeDuplicatedErrorsInRows;
    private getDuplicationError;
    private addDuplicationError;
    private removeDuplicationError;
    getFirstQuestionToFocus(withError: boolean): Question;
    protected getFirstInputElementId(): string;
    protected getFirstErrorInputElementId(): string;
    protected getFirstCellQuestion(onError: boolean): Question;
    protected onReadOnlyChanged(): void;
    createQuestion(row: MatrixDropdownRowModelBase, column: MatrixDropdownColumn): Question;
    protected createQuestionCore(row: MatrixDropdownRowModelBase, column: MatrixDropdownColumn): Question;
    protected deleteRowValue(newValue: any, row: MatrixDropdownRowModelBase): any;
    private isDoingonAnyValueChanged;
    private isValueChangedWithoutRows;
    onAnyValueChanged(name: string, questionName: string): void;
    protected isObject(value: any): boolean;
    private getOnCellValueChangedOptions;
    protected onCellValueChanged(row: MatrixDropdownRowModelBase, columnName: string, rowValue: any, oldCellValue?: any): void;
    validateCell(row: MatrixDropdownRowModelBase, columnName: string, rowValue: any): SurveyError;
    get isValidateOnValueChanging(): boolean;
    protected get hasInvisibleRows(): boolean;
    getFilteredData(): any;
    protected getFilteredDataCore(): any;
    onRowChanging(row: MatrixDropdownRowModelBase, columnName: string, rowValue: any): any;
    getSharedQuestionFromArray(name: string, rowIndex: number): Question;
    updateItemValue(row: MatrixDropdownRowModelBase, columnName: string, newRowValue: any, isDeletingValue: boolean): void;
    private getNewValueOnRowChanged;
    protected correctValueForMinMaxRows(newValue: any): any;
    getItemIndex(item: ISurveyData): number;
    getElementsInDesign(includeHidden?: boolean): Array<IElement>;
    hasDetailPanel(row: MatrixDropdownRowModelBase): boolean;
    getIsDetailPanelShowing(row: MatrixDropdownRowModelBase): boolean;
    setIsDetailPanelShowing(row: MatrixDropdownRowModelBase, val: boolean): void;
    getDetailPanelButtonCss(row: MatrixDropdownRowModelBase): string;
    getDetailPanelIconCss(row: MatrixDropdownRowModelBase): string;
    getDetailPanelIconId(row: MatrixDropdownRowModelBase): string;
    private updateDetailPanelButtonCss;
    createRowDetailPanel(row: MatrixDropdownRowModelBase): PanelModel;
    getSharedQuestionByName(columnName: string, row: MatrixDropdownRowModelBase): Question;
    getBindedQuestions(): Array<IQuestion>;
    getItem(index: number): DynamicItemModelBase;
    onTotalValueChanged(): any;
    isMatrixReadOnly(): boolean;
    onRowVisibilityChanged(row: MatrixDropdownRowModelBase): void;
    protected clearValueIfInvisibleCore(reason: string): void;
    protected clearInvisibleValuesInRows(): void;
    protected isRowsFiltered(): boolean;
    getQuestionFromArray(name: string, index: number): IQuestion;
    private isMatrixValueEmpty;
    private get SurveyModel();
    getCellTemplateData(cell: QuestionMatrixDropdownRenderedCell): any;
    getCellWrapperComponentName(cell: MatrixDropdownCell): string;
    getCellWrapperComponentData(cell: MatrixDropdownCell): any;
    getColumnHeaderWrapperComponentName(cell: MatrixDropdownCell): string;
    getColumnHeaderWrapperComponentData(cell: MatrixDropdownCell): any;
    getRowHeaderWrapperComponentName(cell: MatrixDropdownCell): string;
    getRowHeaderWrapperComponentData(cell: MatrixDropdownCell): any;
    protected onMobileChanged(): void;
    getRootCss(): string;
    afterRenderQuestionElement(el: HTMLElement): void;
    beforeDestroyQuestionElement(el: HTMLElement): void;
    private rootElement;
    setRootElement(val: HTMLElement): void;
    getRootElement(): HTMLElement;
    get dragDropMatrixAttribute(): string;
}
export declare class MatrixDropdownBaseSingleInputBehavior extends QuestionSingleInputBehavior {
    protected get matrixBase(): QuestionMatrixDropdownModelBase;
    protected getSingleQuestionLocTitleCore(): LocalizableString;
    protected singleInputMoveToFirstCore(): void;
    singleInputEditRow(row: MatrixDropdownRowModelBase): void;
}
