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
 * getValue(key: string, defValue: any): any
 */
const getValueCI: CompletionItem = {
    label: 'getValue',
    kind: CompletionItemKind.Method,
    insertText: new SnippetString('getValue("$1", $2)'),
    detail: 'getValue(key: string, defValue: any): any',
    sortText: '0',
};

/**
 * setValue(key: string, value: any): any
 */
const setValueCI: CompletionItem = {
    label: 'setValue',
    kind: CompletionItemKind.Method,
    insertText: new SnippetString('setValue("$1", $2)'),
    detail: 'setValue(key: string, value: any): any',
    sortText: '1',
};

/**
 * getValue(key: string, defValue: any): any
 * setValue(key: string, value: any)
 */
class MCDot implements CompletionItemProvider {

    async provideCompletionItems(document: TextDocument, position: Position, token: CancellationToken, context: CompletionContext) {
        const linePrefix = document.lineAt(position).text.slice(0, position.character);
        if (linePrefix.endsWith("MC.")) {
            return [
                getValueCI,
                setValueCI,
            ];
        } else {
            return undefined;
        }
    }
}

export function providers() {
    return [
        languages.registerCompletionItemProvider(DOCUMENT_SELECTOR, new MCDot(), '.'),
    ];
}
