import { groups } from '@/features/groups'
import { useEffect, useState } from 'react'

export const useGroups = () => {
    const [data, setData] = useState<Group[]>([])
    const [error, setError] = useState()

    useEffect(() => {
        try { // отлавливаем ошибки если с бекенда придет ошибка
            const timer = setTimeout(() => {
                setData(groups)
            }, 1000); // Делаем искусственную задержку

            return () => clearTimeout(timer) // Выходим из event loop и очищаем timeout
        } catch (error: any) {
            setError(error)
        }

    }, [groups.length])

    return { data, error }
}