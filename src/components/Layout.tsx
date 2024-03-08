import { FC, ReactNode } from 'react'

type layout = { children: ReactNode }

const Layout: FC<layout> = ({ children }) => {
    return (
        <section className='mx-8 my-4'>
            {children}
        </section>
    )
}

export default Layout