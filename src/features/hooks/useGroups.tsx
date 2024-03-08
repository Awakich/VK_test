import { groups } from '@/features/groups'
import { useEffect, useState } from 'react'

export const useGroups = () => {
    const [data, setData] = useState<Group[]>([])
    const [error, setError] = useState()

    useEffect(() => {
        try {
            const timer = setTimeout(() => {
                setData(groups)
            }, 1000);

            return () => clearTimeout(timer)
        } catch (error: any) {
            setError(error)
        }

    }, [groups.length])

    return { data, error }
}