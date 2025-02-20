import {bold} from 'chalk';
import attrs from 'markdown-it-attrs';

import {log, LogLevels} from './log';
import makeHighlight from './highlight';
import extractTitle from './title';
import getHeadings from './headings';
import liquid from './liquid';

import notes from './plugins/notes';
import anchors from './plugins/anchors';
import code from './plugins/code';
import cut from './plugins/cut';
import deflist from './plugins/deflist';
import meta from './plugins/meta';
import sup from './plugins/sup';
import tabs from './plugins/tabs';
import video from './plugins/video';
import monospace from './plugins/monospace';
import yfmTable from './plugins/table';
import {initMd} from './md';
import {MarkdownItPluginCb} from './plugins/typings';
import {HighlightLangMap} from './typings';

interface OutputType {
    result: {
        html: string;
        title?: string;
        headings: unknown[];
        assets?: unknown[];
        meta?: object;
    };
    logs: Record<LogLevels, string[]>;
}
interface Options {
    vars?: Record<string, string>;
    path?: string;
    extractTitle?: boolean;
    needTitle?: boolean;
    allowHTML?: boolean;
    linkify?: boolean;
    breaks?: boolean;
    conditionsInCode?: boolean;
    disableLiquid?: boolean;
    leftDelimiter?: string;
    rightDelimiter?: string;
    isLiquided?: boolean;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    plugins?: MarkdownItPluginCb<any>[];
    highlightLangs?: HighlightLangMap;
    root?: string;
    [x: string]: unknown;
}

function transform(originInput: string, opts: Options = {}): OutputType {
    const {
        vars = {},
        path,
        extractTitle: extractTitleOption,
        needTitle,
        allowHTML = false,
        linkify = false,
        breaks = true,
        conditionsInCode = false,
        disableLiquid = false,
        leftDelimiter = '{',
        rightDelimiter = '}',
        isLiquided = false,
        plugins = [meta, deflist, cut, notes, anchors, tabs, code, sup, video, monospace, yfmTable],
        highlightLangs = {},
        ...customOptions
    } = opts;

    const pluginOptions = {
        ...customOptions,
        vars,
        path,
        extractTitle: extractTitleOption,
        disableLiquid,
        log,
    };

    const input =
        disableLiquid || isLiquided
            ? originInput
            : liquid(originInput, vars, path, {conditionsInCode});

    const highlight = makeHighlight(highlightLangs);
    const md = initMd({html: allowHTML, linkify, highlight, breaks});
    // Need for ids of headers
    md.use(attrs, {leftDelimiter, rightDelimiter});
    plugins.forEach((plugin) => md.use(plugin, pluginOptions));

    try {
        let title;
        let tokens;
        let titleTokens;
        const env = {};

        tokens = md.parse(input, env);

        if (extractTitleOption) {
            ({title, tokens, titleTokens} = extractTitle(tokens));

            // title tokens include other tokens that need to be transformed
            if (titleTokens.length > 1) {
                title = md.renderer.render(titleTokens, md.options, env);
            }
        }
        if (needTitle) {
            ({title} = extractTitle(tokens));
        }

        const headings = getHeadings(tokens);
        const html = md.renderer.render(tokens, md.options, env);

        const assets = md.assets;
        const meta = md.meta;

        return {
            result: {html, title, headings, assets, meta},
            logs: log.get(),
        };
    } catch (err) {
        log.error(`Error occurred${path ? ` in ${bold(path)}` : ''}`);
        throw err;
    }
}

export = transform;

namespace transform {
    export type Output = OutputType;
}
