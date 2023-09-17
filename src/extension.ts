import * as vscode from 'vscode';
import { providers as MCProviders } from './providers/completions/MC';
import { providers as RowSetProviders } from './providers/completions/RowSet';
import { providers as DataSetProviders } from './providers/completions/DataSet';
import { providers as PostfixProviders } from './providers/completions/Postfix';

export const DOCUMENT_SELECTOR = ['javascript'];

export function activate(context: vscode.ExtensionContext) {
	context.subscriptions.push(
		...MCProviders(),
		...RowSetProviders(),
		...DataSetProviders(),
		...PostfixProviders(),
	);
}