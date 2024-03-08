import { useAppDispatch, useAppSelector } from '@/app/hooks'
import { Checkbox } from '@/components/ui/checkbox'
import { FC, useCallback } from 'react'
import { checkBoxSelector, setClick } from '@/features/slices/checkBoxSlice'
import FilterAvatarColor from '@/entities/FilterAvatarColor'
import FilterClosed from '@/entities/FilterClosed'

const FilterList: FC = () => {
    const dispatch = useAppDispatch()
    const { isClicked } = useAppSelector(checkBoxSelector)
    const changeClick = useCallback(() => dispatch(setClick({ isClicked: !isClicked })), [isClicked]) // сохраняем функцию если использовалась раннее

    return (
        <section className='inline-flex flex-col items-start space-y-4 border px-4 py-2 rounded-lg mb-8'>
            {/* Приватность */}
            <FilterClosed />

            {/* Цвет аватарки */}
            <FilterAvatarColor />

            {/* Есть ли друзья  */}
            <div className='flex space-x-2'>
                <label
                    htmlFor="friends"
                    className="text-lg font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                    Есть ли друзья?
                </label>
                <Checkbox onClick={changeClick} checked={isClicked} id="friends" />
            </div>
        </section>
    )
}

export default FilterList