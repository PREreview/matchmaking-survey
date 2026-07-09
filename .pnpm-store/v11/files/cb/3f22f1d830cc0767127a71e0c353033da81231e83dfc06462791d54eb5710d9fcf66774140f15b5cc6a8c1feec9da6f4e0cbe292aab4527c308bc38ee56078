import { HashTable } from "./helpers";
import { Question } from "./question";
import { ConditionRunner } from "./conditions/conditionRunner";
/**
 * A base class for all matrix question types.
 */
export declare class QuestionMatrixBaseModel<TRow, TColumn> extends Question {
    protected generatedVisibleRows: Array<TRow>;
    protected generatedTotalRow: TRow;
    visibleRowsChangedCallback: () => void;
    protected createColumnValues(): any;
    constructor(name: string);
    getType(): string;
    protected onPropertyValueChanged(name: string, oldValue: any, newValue: any): void;
    endLoadingFromJson(): void;
    get isCompositeQuestion(): boolean;
    /**
     * Specifies whether to display the table header that contains column captions.
     *
     * Default value: `true`
     */
    showHeader: boolean;
    /**
     * An array of matrix columns.
     *
     * For a Single-Select Matrix, the `columns` array can contain configuration objects with the `text` (display value) and `value` (value to be saved in survey results) properties. Alternatively, the array can contain primitive values that will be used as both the display values and values to be saved in survey results.
     *
     * [Single-Select Matrix Demo](https://surveyjs.io/form-library/examples/single-selection-matrix-table-question/ (linkStyle))
     *
     * For a Multi-Select Matrix or Dynamic Matrix, the `columns` array should contain configuration objects with properties described in the [`MatrixDropdownColumn`](https://surveyjs.io/form-library/documentation/api-reference/multi-select-matrix-column-values) API Reference section.
     *
     * [Multi-Select Matrix Demo](https://surveyjs.io/form-library/examples/questiontype-matrixdropdown/ (linkStyle))
     */
    columns: Array<any>;
    get visibleColumns(): Array<any>;
    protected isColumnVisible(column: any): boolean;
    /**
     * An array of matrix rows.
     *
     * This array can contain primitive values or objects with the `text` (display value) and `value` (value to be saved in survey results) properties.
     *
     * [Single-Select Matrix Demo](https://surveyjs.io/form-library/examples/single-selection-matrix-table-question/ (linkStyle))
     *
     * [Multi-Select Matrix Demo](https://surveyjs.io/form-library/examples/multi-select-matrix-question/ (linkStyle))
  +   */
    rows: Array<any>;
    protected getVisibleRows(): Array<TRow>;
    /**
     * Returns an array of visible matrix rows.
     * @see rowsVisibleIf
     */
    get visibleRows(): Array<TRow>;
    /**
     * A Boolean expression that is evaluated against each matrix row. If the expression evaluates to `false`, the row becomes hidden.
     *
     * A survey parses and runs all expressions on startup. If any values used in the expression change, the survey re-evaluates it.
     *
     * Use the `{item}` placeholder to reference the current row in the expression.
     *
     * Refer to the following help topic for more information: [Conditional Visibility](https://surveyjs.io/form-library/documentation/design-survey-conditional-logic#conditional-visibility).
     *
     * [View Demo](https://surveyjs.io/form-library/examples/change-visibility-of-rows-in-matrix-table/ (linkStyle))
     * @see visibleRows
     * @see columnsVisibleIf
     */
    rowsVisibleIf: string;
    /**
     * A Boolean expression that is evaluated against each matrix column. If the expression evaluates to `false`, the column becomes hidden.
     *
     * A survey parses and runs all expressions on startup. If any values used in the expression change, the survey re-evaluates it.
     *
     * Use the `{item}` placeholder to reference the current column in the expression.
     *
     * Refer to the following help topic for more information: [Conditional Visibility](https://surveyjs.io/form-library/documentation/design-survey-conditional-logic#conditional-visibility).
     *
     * [View Demo](https://surveyjs.io/form-library/examples/change-visibility-of-rows-in-matrix-table/ (linkStyle))
     * @see rowsVisibleIf
     */
    columnsVisibleIf: string;
    protected runConditionCore(properties: HashTable<any>): void;
    protected onColumnsChanged(): void;
    protected onRowsChanged(): void;
    protected updateVisibilityBasedOnRows(): void;
    protected isVisibleCore(): boolean;
    protected shouldRunColumnExpression(): boolean;
    protected runItemsCondition(properties: HashTable<any>): void;
    protected clearGeneratedRows(): void;
    protected createRowsVisibleIfRunner(): ConditionRunner;
    private runConditionsForRows;
    protected runConditionsForColumns(properties: HashTable<any>): boolean;
    protected clearInvisibleColumnValues(): void;
    protected clearInvisibleValuesInRows(): void;
    needResponsiveWidth(): boolean;
    protected get columnsAutoWidth(): boolean;
    getTableCss(): string;
    getTableWrapperCss(): string;
    /**
     * Aligns matrix cell content in the vertical direction.
     */
    verticalAlign: "top" | "middle";
    /**
     * Specifies whether to apply shading to alternate matrix rows.
     *
     * [Single-Select Matrix Demo](https://surveyjs.io/form-library/examples/single-selection-matrix-table-question/ (linkStyle))
     */
    alternateRows: boolean;
    /**
     * Minimum column width in CSS values.
     *
     * [Multi-Select Matrix Demo](https://surveyjs.io/form-library/examples/multi-select-matrix-question/ (linkStyle))
     *
     * [Dynamic Matrix Demo](https://surveyjs.io/form-library/examples/dynamic-matrix-add-new-rows/ (linkStyle))
     * @see width
     */
    columnMinWidth: string;
    /**
     * A width for the column that displays row titles (first column). Accepts CSS values.
     */
    rowTitleWidth: string;
    /**
     * Specifies how to arrange matrix questions.
     *
     * Possible values:
     *
     * - `"table"` - Displays matrix questions in a table.
     * - `"list"` - Displays matrix questions one under another as a list.
     * - `"auto"` (default) - Uses the `"table"` mode if the survey has sufficient width to fit the table or the `"list"` mode otherwise.
     */
    displayMode: "auto" | "table" | "list";
    getCellAriaLabel(row: any, column: any, directRowTitle?: string): string;
    get isNewA11yStructure(): boolean;
    protected getIsMobile(): boolean;
}
