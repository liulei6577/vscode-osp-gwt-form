import {
    CancellationToken,
    CompletionContext,
    CompletionItem,
    CompletionItemKind,
    CompletionItemProvider,
    Position,
    SnippetString,
    TextDocument,
    languages
} from 'vscode';
import { DOCUMENT_SELECTOR } from '../../extension';

/**
 * getTableName(): string
 */
const getTableNameCI: CompletionItem = {
    label: 'getTableName',
    kind: CompletionItemKind.Method,
    insertText: 'getTableName()',
    detail: 'getTableName(): string',
    sortText: '',//TODO
};

/**
 * setTableName(tableName: string)
 */
const setTableNameCI: CompletionItem = {
    label: 'setTableName',
    kind: CompletionItemKind.Method,
    insertText: new SnippetString('setTableName($1)'),
    detail: 'setTableName(tableName: string)',
    sortText: '',//TODO
};

/**
 * removeRowSet(rowSet: EFRowSet)
 */
const removeRowSetCI: CompletionItem = {
    label: 'removeRowSet',
    kind: CompletionItemKind.Method,
    insertText: new SnippetString('removeRowSet($1)'),
    detail: 'removeRowSet(rowSet: EFRowSet)',
    sortText: '',//TODO
};

/**
 * removeAllRowSet()
 */
const removeAllRowSetCI: CompletionItem = {
    label: 'removeAllRowSet',
    kind: CompletionItemKind.Method,
    insertText: 'removeAllRowSet()',
    detail: 'removeAllRowSet()',
    sortText: '',//TODO
};

/**
 * insertRowSet(rowSet: EFRowSet)
 */
const insertRowSetCI: CompletionItem = {
    label: 'insertRowSet',
    kind: CompletionItemKind.Method,
    insertText: new SnippetString('insertRowSet($1)'),
    detail: 'insertRowSet(rowSet: EFRowSet)',
    sortText: '',//TODO
};

/**
 * insertRowSetByIndex(index: number, rowSet: EFRowSet)
 */
const insertRowSetByIndexCI: CompletionItem = {
    label: 'insertRowSetByIndex',
    kind: CompletionItemKind.Method,
    insertText: new SnippetString('insertRowSetByIndex($1, $2)'),
    detail: 'insertRowSetByIndex(index: number, rowSet: EFRowSet)',
    sortText: '',//TODO
};

/**
 * getRowSetIndex(rowSet: EFRowSet): number
 */
const getRowSetIndexCI: CompletionItem = {
    label: 'getRowSetIndex',
    kind: CompletionItemKind.Method,
    insertText: new SnippetString('getRowSetIndex($1)'),
    detail: 'getRowSetIndex(rowSet: EFRowSet): number',
    sortText: '',//TODO
};

/**
 * containsRowSet(rowSet: EFRowSet): boolean
 */
const containsRowSetCI: CompletionItem = {
    label: 'containsRowSet',
    kind: CompletionItemKind.Method,
    insertText: new SnippetString('containsRowSet($1)'),
    detail: 'containsRowSet(rowSet: EFRowSet): boolean',
    sortText: '',//TODO
};

/**
 * getRowCount(): number
 */
const getRowCountCI: CompletionItem = {
    label: 'getRowCount',
    kind: CompletionItemKind.Method,
    insertText: 'getRowCount()',
    detail: 'getRowCount(): number',
    sortText: '',//TODO
};

/**
 * getInsertDataPool(): EFRowSet
 */
const getInsertDataPoolCI: CompletionItem = {
    label: 'getInsertDataPool',
    kind: CompletionItemKind.Method,
    insertText: 'getInsertDataPool()',
    detail: 'getInsertDataPool(): EFRowSet',
    sortText: '',//TODO
};

/**
 * getUpdateDataPool(): EFRowSet
 */
const getUpdateDataPoolCI: CompletionItem = {
    label: 'getUpdateDataPool',
    kind: CompletionItemKind.Method,
    insertText: 'getUpdateDataPool()',
    detail: 'getUpdateDataPool(): EFRowSet',
    sortText: '',//TODO
};

/**
 * getDeleteDataPool(): EFRowSet
 */
const getDeleteDataPoolCI: CompletionItem = {
    label: 'getDeleteDataPool',
    kind: CompletionItemKind.Method,
    insertText: 'getDeleteDataPool()',
    detail: 'getDeleteDataPool(): EFRowSet',
    sortText: '',//TODO
};

class DataSetDot implements CompletionItemProvider {

    async provideCompletionItems(document: TextDocument, position: Position, token: CancellationToken, context: CompletionContext) {
        const linePrefix = document.lineAt(position).text.slice(0, position.character);
        if (linePrefix.toLocaleLowerCase().endsWith("dataset.")) {
            return [
                getTableNameCI,
                setTableNameCI,
                removeRowSetCI,
                removeAllRowSetCI,
                insertRowSetCI,
                insertRowSetByIndexCI,
                getRowSetIndexCI,
                containsRowSetCI,
                getRowCountCI,
                getInsertDataPoolCI,
                getUpdateDataPoolCI,
                getDeleteDataPoolCI,
            ];
        } else {
            return undefined;
        }
    }

}

export function providers() {
    return [
        languages.registerCompletionItemProvider(DOCUMENT_SELECTOR, new DataSetDot(), '.'),
    ];
}