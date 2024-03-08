import Friend from '@/entities/Friend'
import { FC } from 'react'

type friendsType = {
    friends?: User[]
}

const FriendsList: FC<friendsType> = ({ friends }) => {
    return (
        <div className='flex flex-col space-y-4 xl:space-y-0 xl:flex-row items-center'>
            {friends && friends.map(({ first_name, last_name }, index) => (
                <Friend first_name={first_name} last_name={last_name} key={index} />
            ))}
        </div>
    )
}

export default FriendsList