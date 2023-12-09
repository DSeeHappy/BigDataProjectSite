'use client'
import classNames from "@/app/components/classnames";
import {useState} from "react";
import useSWR from "swr";
import moment from "moment";

const fetcher = (url) => fetch(url).then((res) => res.json());

const useWeatherData = (id) => {
    const {data, isLoading, error} = useSWR(process.env.NEXT_PUBLIC_SERVER_URL + "/weather/"+id, fetcher)
    let [isSchedulerOpen, setIsSchedulerOpen] = useState(false)

    if (error) return <div>Failed to load</div>;
    if (!data) return <div>Loading...</div>;

    if (data.weather === undefined) return <div>Loading...</div>;



    const weatherTable = data.weather.map((weatherItem) => (
        <>
            <tr key={weatherItem.id}>
                <td
                    className={classNames( 'whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8')}
                >
                    {formattedDate(weatherItem.dt)}
                </td>
                <td
                    className={classNames( 'whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8')}
                >
                    {weatherItem.main}
                </td>
                <td
                    className={classNames('whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8')}
                >
                    {weatherItem.description}
                </td>
                <td
                    className={classNames( 'whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8')}
                >
                    {weatherItem.deg}
                </td>
                <td
                    className={classNames('whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8')}
                >
                    {weatherItem.rain}
                </td>
                <td
                    className={classNames('whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8')}
                >
                    {weatherItem.snow}
                </td>
                <td
                    className={classNames('whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8')}
                >
                    {weatherItem.pressure}
                </td>
            </tr>
        </>
    ));

    return { weatherList: weatherTable, isLoading, error}
}

const formattedDate = (input) => {
    const t = new Date(0)
    t.setUTCSeconds(input)
    return moment(t).format('MMMM Do YYYY')
}



export default function JobWeatherList({id}) {
    let [isOpen, setIsOpen] = useState(false)
    const {  weatherList,isLoading,error } = useWeatherData(id)

    return (<>
        <div className="px-4 sm:px-6 lg:px-8 bg-blue-100">
            <div className="mt-8 flow-root">
                <div className="-mx-4 -my-2 sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle">
                        <table className="min-w-full border-separate border-spacing-0">
                            <thead>
                            <tr>
                                <th
                                    scope="col"
                                    className="sticky top-0 z-10 border-b border-gray-300 bg-white bg-opacity-75 py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:pl-6 lg:pl-8"
                                >
                                    date
                                </th>
                                <th
                                    scope="col"
                                    className="sticky top-0 z-10 border-b border-gray-300 bg-white bg-opacity-75 py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:pl-6 lg:pl-8"
                                >
                                    main
                                </th>
                                <th
                                    scope="col"
                                    className="sticky top-0 z-10 hidden border-b border-gray-300 bg-white bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:table-cell"
                                >
                                    description
                                </th>
                                <th
                                    scope="col"
                                    className="sticky top-0 z-10 hidden border-b border-gray-300 bg-white bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:table-cell"
                                >
                                    degrees
                                </th>
                                <th
                                    scope="col"
                                    className="sticky top-0 z-10 hidden border-b border-gray-300 bg-white bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:table-cell"
                                >
                                    rain
                                </th>
                                <th
                                    scope="col"
                                    className="sticky top-0 z-10 border-b border-gray-300 bg-white bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter"
                                >
                                    snow
                                </th>
                                <th
                                    scope="col"
                                    className="sticky top-0 z-10 border-b border-gray-300 bg-white bg-opacity-75 px-3 py-3.5 text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter"
                                >
                                    pressure
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            {weatherList ? weatherList : isLoading}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </>)
}