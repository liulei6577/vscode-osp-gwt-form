import {
    CancellationToken,
    CompletionContext,
    CompletionItem,
    CompletionItemKind,
    CompletionItemProvider,
    Position,
    SnippetString,
    TextDocument,
    languages,
    TextEdit,
    Range,
} from 'vscode';

import { DOCUMENT_SELECTOR } from '../../extension';


const buildVarCI = (linePrefix: string, line: number, firstNonhitespaceCharacterIndex: number) => {
    let varCI = new CompletionItem('var', CompletionItemKind.Snippet);
    const expr = linePrefix.slice(0, linePrefix.length - 1);
    varCI.insertText = new SnippetString('var $1 = ' + expr + ';\n');
    varCI.detail = 'var | = ' + expr + ';';
    varCI.sortText = '0';
    varCI.additionalTextEdits = [
        TextEdit.delete(new Range(
            new Position(line, firstNonhitespaceCharacterIndex),
            new Position(line, linePrefix.length + 1)
        ))
    ];
    return varCI;
};

const getString = (linePrefix: string, line: number, firstNonhitespaceCharacterIndex: number) => {
    let varCI = new CompletionItem('var', CompletionItemKind.Snippet);
    const expr = linePrefix.slice(0, linePrefix.length - 1);
    varCI.insertText = new SnippetString('var $1 = ' + expr + ';\n');
    varCI.detail = 'var | = ' + expr + ';';
    varCI.sortText = '0';
    varCI.additionalTextEdits = [
        TextEdit.delete(new Range(
            new Position(line, firstNonhitespaceCharacterIndex),
            new Position(line, linePrefix.length + 1)
        ))
    ];
    return varCI;
};

/**
 * postfix completion
 */
class Postfix implements CompletionItemProvider {

    async provideCompletionItems(document: TextDocument, position: Position, token: CancellationToken, context: CompletionContext) {
        const linePrefix = document.lineAt(position).text.slice(0, position.character);
        if (linePrefix.endsWith(".")) {
            
            let ciArray = [];

            ciArray.push(buildVarCI(linePrefix, position.line, document.lineAt(position.line).firstNonWhitespaceCharacterIndex));

            return ciArray;
        } else {
            return undefined;
        }
    }
}

export function providers() {
    return [
        languages.registerCompletionItemProvider(DOCUMENT_SELECTOR, new Postfix(), '.'),
    ];
}
