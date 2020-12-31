import { useRouter } from 'next/router'
import { ReactNode, useState } from 'react'
import { useForm } from 'react-hook-form'

type FormData = {
    email: string
}

export const Subscribe: React.FC = () => {
    const { asPath } = useRouter()
    const { register, handleSubmit, setValue } = useForm<FormData>()
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [message, setMessage] = useState<string | ReactNode | null>()

    async function onSubmit({ email }: FormData) {
        try {
            setIsLoading(true)

            const endpoint = '/api/subscribers'
            const headers = {
                'Content-Type': 'application/json',
            }
            const body = { email, referrer_url: asPath }
            const response = await fetch(endpoint, {
                method: 'POST',
                headers,
                body: JSON.stringify(body),
            })

            if (response.ok) {
                setMessage(<span>Subscribed {email}</span>)
                setValue('email', '')
            } else {
                const data = await response.json()
                setMessage(<span className="text-red-500">{data.error}</span>)
            }
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <form
            className="flex flex-col items-center md:px-1"
            onSubmit={handleSubmit(onSubmit)}
        >
            <div
                className="
                    appearance-none
                    bg-fill
                    flex
                    focus-within:bg-background
                    focus-within:outline-none
                    focus-within:ring
                    focus-within:border-blue-300
                    h-10
                    justify-between
                    mx-auto
                    rounded-lg
                    w-full
                "
            >
                <label className="sr-only" htmlFor="email">
                    Email
                </label>
                <input
                    aria-describedby="email"
                    autoComplete="email"
                    className="
                        bg-transparent
                        flex-1
                        outline-none
                        pl-3
                        md:pl-4
                        pr-2
                        placeholder-muted
                        placeholder-opacity-100
                        text-sm
                        md:text-base
                    "
                    disabled={isLoading}
                    id="email"
                    name="email"
                    placeholder="Occasional emails from Tom"
                    ref={register({ required: true })}
                />
                <button
                    className="
                        font-medium
                        pr-3
                        md:pr-4
                        text-sm
                        text-body
                        disabled:pointer-events-none
                    "
                    disabled={isLoading}
                    type="submit"
                >
                    <span>{isLoading ? 'Subscribing' : 'Subscribe'}</span>
                </button>
            </div>

            {message && (
                <p className="mb-0 mt-2 pl-2 text-sm w-full" id="email-message">
                    {message}
                </p>
            )}
        </form>
    )
}
