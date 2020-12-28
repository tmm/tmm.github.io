import renderToString from 'next-mdx-remote/render-to-string'

import { mdx } from '@/components'

export const remarkPlugins = [
    require('@silvenon/remark-smartypants'),
    [require('remark-footnotes'), { inlineNotes: true }],
    [
        require('remark-external-links'),
        { target: '_blank', rel: 'noopener noreferrer' },
    ],
    require('remark-slug'),
    [require('remark-autolink-headings'), { behavior: 'wrap' }],
]

export const rehypePlugins = [require('@mapbox/rehype-prism')]

export async function toMdx(markdown: string): Promise<string> {
    return await renderToString(markdown, {
        components: mdx,
        mdxOptions: {
            remarkPlugins,
            rehypePlugins,
        },
    })
}
