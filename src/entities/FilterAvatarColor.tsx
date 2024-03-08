import { useAppDispatch, useAppSelector } from '@/app/hooks'
import { avatarColors } from '@/features/consts'
import { selectFilterAvatarColorSelector, selectValueColor } from '@/features/slices/selectFilterSlice'
import { FC, useState } from 'react'

const FilterAvatarColor: FC = () => {
    const [openedAvatarColorList, setOpenedAvatarColorList] = useState(false)

    const { text: avatarColorText } = useAppSelector(selectFilterAvatarColorSelector) // Получаем состояние цвета аватарки
    const dispatch = useAppDispatch()

    const selectAvatarColorHandler = (value: string | null, text: string) => {
        dispatch(selectValueColor({ value, text }))
        setOpenedAvatarColorList(!openedAvatarColorList)
    } // При клике выполняем смену цвета и его текста и закрываем всплывающее окно

    return (
        <p>Цвет аватарки:
            <span className='cursor-pointer font-semibold' onClick={() => setOpenedAvatarColorList(!openedAvatarColorList)}>{avatarColorText}</span>
            {openedAvatarColorList && avatarColors.map(({ id, text, value }) => (
                <li onClick={() => selectAvatarColorHandler(value, text)} className='list-none cursor-pointer' key={id}>{text}</li>
            ))}
        </p>
    )
}

export default FilterAvatarColor