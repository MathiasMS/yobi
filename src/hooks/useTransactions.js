import { useState, useEffect } from 'react'
import axios from 'axios'
import {URL_API} from "../constants/URLConstants";

export const useTransactions = () => {

    const [data, setData] = useState([])
    useEffect(() => {
        const fetchData = async () => {

            const result = await axios(`${URL_API}transactions`)
            setData(result.data)

        }
        fetchData()
    }, [])

    return data
}