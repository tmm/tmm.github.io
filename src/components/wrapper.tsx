import React, { FC, ReactNode } from 'react'

import { Provider } from '@/store'

interface Props {
    element: ReactNode
}

const Wrapper: FC<Props> = ({ element }) => {
    return <Provider>{element}</Provider>
}

export default Wrapper
