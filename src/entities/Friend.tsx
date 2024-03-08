import { FC } from 'react'

const Friend: FC<User> = ({ first_name, last_name }) => {
    return (
        <div className='border rounded-lg p-2 mx-2'>
            <p>{first_name} {last_name}</p>
        </div>
    )
}

export default Friend