import { FC, useState } from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import FriendsList from '@/widget/FriendsList'

const Group: FC<Group> = ({ id, closed, members_count, name, avatar_color, friends }) => {
    const [activeGroup, setActiveGroup] = useState<number | null>(null)

    const changeClickedHandler = (id: number) => id === activeGroup ? setActiveGroup(null) : setActiveGroup(id) // Обращаемся к определенному элементу по его id и сравнием с текущим если такой есть

    return (
        <Card>
            <CardHeader>
                <CardTitle className='flex items-center gap-2'>
                    {avatar_color ? <div className={`w-[100px] h-[100px] rounded-full`} style={{ backgroundColor: avatar_color }} /> : <p className='w-[100px] h-[100px] text-lg flex text-center  items-center justify-center'>Avatar is none</p>}
                    <div className='flex items-start flex-col space-y-2'>
                        <p>{name}</p>
                        <Badge>{`Сообщество ${closed ? 'закрытое' : 'открытое'}`}</Badge>
                    </div>
                </CardTitle>

                <CardDescription>
                    <span>{`Кол-во подписчиков: ${members_count}`}</span>
                </CardDescription>
            </CardHeader>

            <CardFooter>
                {friends && <Button variant={'link'} onClick={() => changeClickedHandler(id)}>{activeGroup === id ? 'Закрыть друзей' : 'Открыть друзей'}</Button>}

                {activeGroup === id &&
                    <FriendsList friends={friends} />
                }
            </CardFooter>
        </Card>
    )
}

export default Group