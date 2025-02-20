function getTokens(title: string) {
    return [
        {
            type: 'paragraph_open',
            tag: 'p',
            attrs: null,
            map: [0, 1],
            nesting: 1,
            level: 0,
            children: null,
            content: '',
            markup: '',
            info: '',
            meta: null,
            block: true,
            hidden: false,
        },
        {
            type: 'inline',
            tag: '',
            attrs: null,
            map: [0, 1],
            nesting: 0,
            level: 1,
            children: [
                {
                    type: 'text',
                    tag: '',
                    attrs: null,
                    map: null,
                    nesting: 0,
                    level: 0,
                    children: null,
                    content: 'Text before',
                    markup: '',
                    info: '',
                    meta: null,
                    block: false,
                    hidden: false,
                },
            ],
            content: 'Text before',
            markup: '',
            info: '',
            meta: null,
            block: true,
            hidden: false,
        },
        {
            type: 'paragraph_close',
            tag: 'p',
            attrs: null,
            map: null,
            nesting: -1,
            level: 0,
            children: null,
            content: '',
            markup: '',
            info: '',
            meta: null,
            block: true,
            hidden: false,
        },
        {
            type: 'yfm_note_open',
            tag: 'div',
            attrs: [
                ['class', 'yfm-note yfm-accent-info'],
                ['note-type', 'info'],
            ],
            map: null,
            nesting: 1,
            level: 0,
            children: null,
            content: '',
            markup: '',
            info: '',
            meta: null,
            block: false,
            hidden: false,
        },
        {
            type: 'yfm_note_title_open',
            tag: 'p',
            attrs: null,
            map: null,
            nesting: 1,
            level: 0,
            children: null,
            content: '',
            markup: '',
            info: '',
            meta: null,
            block: true,
            hidden: false,
        },
        {
            type: 'inline',
            tag: '',
            attrs: null,
            map: null,
            nesting: 0,
            level: 0,
            children: [
                {
                    type: 'strong_open',
                    tag: 'strong',
                    attrs: null,
                    map: null,
                    nesting: 1,
                    level: 0,
                    children: null,
                    content: '',
                    markup: '',
                    info: '',
                    meta: null,
                    block: false,
                    hidden: false,
                },
                {
                    type: 'text',
                    tag: '',
                    attrs: null,
                    map: null,
                    nesting: 0,
                    level: 0,
                    children: null,
                    content: title,
                    markup: '',
                    info: '',
                    meta: null,
                    block: false,
                    hidden: false,
                },
                {
                    type: 'strong_close',
                    tag: 'strong',
                    attrs: null,
                    map: null,
                    nesting: -1,
                    level: 0,
                    children: null,
                    content: '',
                    markup: '',
                    info: '',
                    meta: null,
                    block: false,
                    hidden: false,
                },
            ],
            content: '',
            markup: '',
            info: '',
            meta: null,
            block: false,
            hidden: false,
        },
        {
            type: 'yfm_note_title_close',
            tag: 'p',
            attrs: null,
            map: null,
            nesting: -1,
            level: 0,
            children: null,
            content: '',
            markup: '',
            info: '',
            meta: null,
            block: true,
            hidden: false,
        },
        {
            type: 'paragraph_open',
            tag: 'p',
            attrs: null,
            map: [4, 5],
            nesting: 1,
            level: 0,
            children: null,
            content: '',
            markup: '',
            info: '',
            meta: null,
            block: true,
            hidden: false,
        },
        {
            type: 'inline',
            tag: '',
            attrs: null,
            map: [4, 5],
            nesting: 0,
            level: 1,
            children: [
                {
                    type: 'text',
                    tag: '',
                    attrs: null,
                    map: null,
                    nesting: 0,
                    level: 0,
                    children: null,
                    content: 'Текст примечания.',
                    markup: '',
                    info: '',
                    meta: null,
                    block: false,
                    hidden: false,
                },
            ],
            content: 'Текст примечания.',
            markup: '',
            info: '',
            meta: null,
            block: true,
            hidden: false,
        },
        {
            type: 'paragraph_close',
            tag: 'p',
            attrs: null,
            map: null,
            nesting: -1,
            level: 0,
            children: null,
            content: '',
            markup: '',
            info: '',
            meta: null,
            block: true,
            hidden: false,
        },
        {
            type: 'yfm_note_close',
            tag: 'div',
            attrs: null,
            map: null,
            nesting: -1,
            level: 0,
            children: null,
            content: '',
            markup: '',
            info: '',
            meta: null,
            block: false,
            hidden: false,
        },
        {
            type: 'paragraph_open',
            tag: 'p',
            attrs: null,
            map: [8, 9],
            nesting: 1,
            level: 0,
            children: null,
            content: '',
            markup: '',
            info: '',
            meta: null,
            block: true,
            hidden: false,
        },
        {
            type: 'inline',
            tag: '',
            attrs: null,
            map: [8, 9],
            nesting: 0,
            level: 1,
            children: [
                {
                    type: 'text',
                    tag: '',
                    attrs: null,
                    map: null,
                    nesting: 0,
                    level: 0,
                    children: null,
                    content: 'Text after',
                    markup: '',
                    info: '',
                    meta: null,
                    block: false,
                    hidden: false,
                },
            ],
            content: 'Text after',
            markup: '',
            info: '',
            meta: null,
            block: true,
            hidden: false,
        },
        {
            type: 'paragraph_close',
            tag: 'p',
            attrs: null,
            map: null,
            nesting: -1,
            level: 0,
            children: null,
            content: '',
            markup: '',
            info: '',
            meta: null,
            block: true,
            hidden: false,
        },
    ];
}

export const base = getTokens('Примечание');
export const customTitle = getTokens('Custom title');
export const emptyTitle = getTokens('');
