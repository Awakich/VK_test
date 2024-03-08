import { useAppSelector } from '@/app/hooks'
import { FC } from 'react'
import { useGroups } from '@/features/hooks/useGroups'
import { checkBoxSelector } from '@/features/slices/checkBoxSlice'
import { selectFilterAvatarColorSelector, selectFilterClosedSelector } from '@/features/slices/selectFilterSlice'
import Group from '@/entities/Group'

const GroupsList: FC = () => {
    const { data: groups, error: isError } = useGroups() // Получаем данные о группах
    const { value: avatarColorsValue } = useAppSelector(selectFilterAvatarColorSelector) // состояние фильтра аватарки
    const { value: closedValue } = useAppSelector(selectFilterClosedSelector) // состояние приватности
    const { isClicked } = useAppSelector(checkBoxSelector) // состояние статуса друзей

    const filterByClosed = (group: Group) => closedValue === null ? group : group.closed !== closedValue
    const filterByAvatarColor = (group: Group) => avatarColorsValue === null ? group : group.avatar_color === avatarColorsValue
    const filterByFriends = (group: Group) => isClicked ? !!group.friends : group;
    const filterCombined = groups.filter(filterByClosed).filter(filterByAvatarColor).filter(filterByFriends) // Объединение фильтров для доп условия

    if (!groups) return <p> Loading...</p>
    if (!!isError) return <p>Error</p>
    if (!filterCombined.length) return <h3 className='text-xl font-semibold'>По вашему запросу ничего не найдено</h3>

    return (
        <section className='grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3'>
            {filterCombined &&
                filterCombined.map(({ id, closed, members_count, name, avatar_color, friends }) => (
                    <Group key={id} id={id} closed={closed} members_count={members_count} name={name} avatar_color={avatar_color} friends={friends} />
                ))
            }
        </section >
    )
}

export default GroupsList