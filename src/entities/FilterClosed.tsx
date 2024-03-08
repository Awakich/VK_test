import { useAppDispatch, useAppSelector } from '@/app/hooks'
import { privacy } from '@/features/consts'
import { selectFilterClosedSelector, selectValueClosed } from '@/features/slices/selectFilterSlice'
import { FC, useState } from 'react'

const FilterClosed: FC = () => {
    const [openedClosedList, setOpenedClosedList] = useState(false)

    const { text: closedText } = useAppSelector(selectFilterClosedSelector)
    const dispatch = useAppDispatch()

    const selectValueClosedHandler = (value: boolean | null, text: string) => {
        dispatch(selectValueClosed({ value, text }))
        setOpenedClosedList(!openedClosedList)
    } // При клике выполняем смену приватности и его текста и закрываем всплывающее окно

    return (
        <p>Тип приватности:
            <span className='cursor-pointer font-semibold' onClick={() => setOpenedClosedList(!openedClosedList)}>{closedText}</span>
            {openedClosedList && privacy.map(({ id, text, value }) => (
                <li onClick={() => selectValueClosedHandler(value, text)} className='list-none cursor-pointer' key={id}>{text}</li>
            ))}
        </p>
    )
}

export default FilterClosed