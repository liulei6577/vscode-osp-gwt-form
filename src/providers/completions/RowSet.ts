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
 * getID2Name(DCT_ID: string, COL_ID: string, defName: string): string
 */
const getID2NameCI: CompletionItem = {
    label: 'getID2Name',
    kind: CompletionItemKind.Method,
    insertText: new SnippetString('getID2Name($1, $2, $3)'),
    detail: 'getID2Name(DCT_ID: string, COL_ID: string, defName: string): string',
    sortText: '',//TODO
};

/**
 * setID2Name(DCT_ID: string, COL_ID: string, Name: string)
 */
const setID2NameCI: CompletionItem = {
    label: 'setID2Name',
    kind: CompletionItemKind.Method,
    insertText: new SnippetString('setID2Name($1, $2, $3)'),
    detail: 'setID2Name(DCT_ID: string, COL_ID: string, Name: string)',
    sortText: '',//TODO
};

/**
 * getString(key: string, defvalue: string): string
 */
const getStringCI: CompletionItem = {
    label: 'getString',
    kind: CompletionItemKind.Method,
    insertText: new SnippetString('getString($1, $2)'),
    detail: 'getString(key: string, defvalue: string): string',
    sortText: '0',
};

/**
 * getObject(key: string, defValue: any): any
 */
const getObjectCI: CompletionItem = {
    label: 'getObject',
    kind: CompletionItemKind.Method,
    insertText: new SnippetString('getObject($1, $2)'),
    detail: 'getObject(key: string, defValue: any): any',
    sortText: '',//TODO
};

/**
 * getDouble(key: string, defValue: number): number
 */
const getDoubleCI: CompletionItem = {
    label: 'getDouble',
    kind: CompletionItemKind.Method,
    insertText: new SnippetString('getDouble($1, $2)'),
    detail: 'getDouble(key: string, defValue: number): number',
    sortText: '',//TODO
};

/**
 * getBoolean(key: string, defValue: boolean): boolean
 */
const getBooleanCI: CompletionItem = {
    label: 'getBoolean',
    kind: CompletionItemKind.Method,
    insertText: new SnippetString('getBoolean($1, $2)'),
    detail: 'getBoolean(key: string, defValue: boolean): boolean',
    sortText: '',//TODO
};

/**
 * getInt(key: string, defValue: number): number
 */
const getIntCI: CompletionItem = {
    label: 'getInt',
    kind: CompletionItemKind.Method,
    insertText: new SnippetString('getInt($1, $2)'),
    detail: 'getInt(key: string, defValue: number): number',
    sortText: '',//TODO
};

/**
 * getValue(key: string, defValue: any): any
 */
const getValueCI: CompletionItem = {
    label: 'getValue',
    kind: CompletionItemKind.Method,
    insertText: new SnippetString('getValue($1, $2)'),
    detail: 'getValue(key: string, defValue: any): any',
    sortText: '',//TODO
};


/**
 * putString(key: string, value: string)
 */
const putStringCI: CompletionItem = {
    label: 'putString',
    kind: CompletionItemKind.Method,
    insertText: new SnippetString('putString($1, $2)'),
    detail: 'putString(key: string, value: string)',
    sortText: '1',
};

/**
 * putObject(key: string, value: any)
 */
const putObjectCI: CompletionItem = {
    label: 'putObject',
    kind: CompletionItemKind.Method,
    insertText: new SnippetString('putObject($1, $2)'),
    detail: 'putObject(key: string, value: any)',
    sortText: '',//TODO
};

/**
 * putDouble(key: string, value: number)
 */
const putDoubleCI: CompletionItem = {
    label: 'putDouble',
    kind: CompletionItemKind.Method,
    insertText: new SnippetString('putDouble($1, $2)'),
    detail: 'putDouble(key: string, value: number)',
    sortText: '',//TODO
};
/**
 * putBoolean(key: string, value: boolean)
 */
const putBooleanCI: CompletionItem = {
    label: 'putBoolean',
    kind: CompletionItemKind.Method,
    insertText: new SnippetString('putBoolean($1, $2)'),
    detail: 'putBoolean(key: string, value: boolean)',
    sortText: '',//TODO
};
/**
 * putInt(key: string, value: number)
 */
const putIntCI: CompletionItem = {
    label: 'putInt',
    kind: CompletionItemKind.Method,
    insertText: new SnippetString('putInt($1, $2)'),
    detail: 'putInt(key: string, value: number)',
    sortText: '',//TODO
};
/**
 * putValue(key: string, value: any)
 */
const putValueCI: CompletionItem = {
    label: 'putValue',
    kind: CompletionItemKind.Method,
    insertText: new SnippetString('putValue($1, $2)'),
    detail: 'putValue(key: string, value: any)',
    sortText: '',//TODO
};

/**
 * setDataSet(tableName: string, dataSet: EFDataSet | null)
 */
const setDataSetCI: CompletionItem = {
    label: 'setDataSet',
    kind: CompletionItemKind.Method,
    insertText: new SnippetString('setDataSet($1, $2)'),
    detail: 'setDataSet(tableName: string, dataSet: EFDataSet | null)',
    sortText: '',//TODO
};

/**
 * getDataSet(tableName: string): EFDataSet | null
 */
const getDataSetCI: CompletionItem = {
    label: 'getDataSet',
    kind: CompletionItemKind.Method,
    insertText: new SnippetString('getDataSet($1)'),
    detail: 'getDataSet(tableName: string): EFDataSet | null',
    sortText: '',//TODO
};

class RowSetDot implements CompletionItemProvider {

    async provideCompletionItems(document: TextDocument, position: Position, token: CancellationToken, context: CompletionContext) {
        const linePrefix = document.lineAt(position).text.slice(0, position.character);
        if (linePrefix.toLocaleLowerCase().endsWith("rowset.")) {
            return [
                getID2NameCI,
                setID2NameCI,
                getStringCI,
                getObjectCI,
                getDoubleCI,
                getBooleanCI,
                getIntCI,
                getValueCI,
                putStringCI,
                putObjectCI,
                putDoubleCI,
                putBooleanCI,
                putIntCI,
                putValueCI,
                setDataSetCI,
                getDataSetCI,
            ];
        } else {
            return undefined;
        }
    }

}

export function providers() {
    return [
        languages.registerCompletionItemProvider(DOCUMENT_SELECTOR, new RowSetDot(), '.'),
    ];
}