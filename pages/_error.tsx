import { NextPage } from 'next'

import { Layout } from '@/components'

interface Props {
    status?: number | null
}

const Error: NextPage<Props> = () => {
    const title = 'Something went wrong'
    return (
        <Layout className="max-w-container mx-auto pt-36 px-4" title={title}>
            <article>
                <header className="mb-8">
                    <h1 className="font-normal mb-0 text-base text-center">
                        {title}
                    </h1>
                </header>
                <p>An error occurred.</p>
            </article>
        </Layout>
    )
}

Error.getInitialProps = async (context) => {
    const { res, err } = context
    const status = res ? res.statusCode : err ? err.statusCode : null
    return { status }
}

export default Error
