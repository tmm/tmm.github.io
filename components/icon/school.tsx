import { IconProps as Props } from '../icon'

export const School: React.FC<Props> = ({ size, ...restProps }) => {
    return (
        <svg
            fill="none"
            height={size}
            viewBox="0 0 15 15"
            width={size}
            xmlns="http://www.w3.org/2000/svg"
            {...restProps}
        >
            <path
                d="M7.5 4.5l4 2v8h-8v-8l4-2zm0 0V0M0 14.5h15m-13.5 0v-6h2m10 6v-6h-2m-5 6v-3h2v3m-1-14h3v2h-3m0 7a1 1 0 110-2 1 1 0 010 2z"
                stroke="currentColor"
            />
        </svg>
    )
}
