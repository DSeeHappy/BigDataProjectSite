'use client'
import * as React from "react"
import useSWR from "swr";
import JobWeatherList from "@/app/components/jobweatherlist";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Page({params}) {
    const {data, isLoading, error} = useSWR(process.env.NEXT_PUBLIC_SERVER_URL + '/jobs/'+"f2edfd80-9642-11ee-9a63-67de49319746",fetcher)
    // const {weatherData, isWeatherLoading, weatherError} = useSWR(process.env.NEXT_PUBLIC_SERVER_URL + `/weather/${id}`,fetcher)
    if (error) return <div>Failed to load</div>
    if (!data || isLoading) return <div>Loading...</div>

    return (
        <div className="relative isolate bg-white">
            <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
                <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
                    <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
                        <div
                            className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-gray-100 ring-1 ring-gray-900/10 lg:w-1/2">
                        </div>
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900">Update Job</h2>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            You can schedule the job based on the weather provided. The concept would be that this system could be expanded to provide notifications if the weather changes to something unfavorable. Currently you can only schedule or update the job details.
                        </p>
                    </div>
                </div>
                <form action={process.env.NEXT_PUBLIC_SERVER_URL + "/jobs"} method="POST" className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48">
                    <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                        <div className="sm:col-span-2">
                            <label htmlFor={data.name} className="block text-sm font-semibold leading-6 text-gray-900">
                                Job Name
                            </label>
                            <div className="mt-2.5">
                                <input
                                    name="name"
                                    value=""
                                    id={data.name}
                                    type="text"
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="address" className="block text-sm font-semibold leading-6 text-gray-900">
                            Address
                        </label>
                        <div className="mt-2.5">
                            <input
                                name="address"
                                id="address"
                                type="text"
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
                        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                            <div className="sm:col-span-2">
                                <label htmlFor="city" className="block text-sm font-semibold leading-6 text-gray-900">
                                    City
                                </label>
                                <div className="mt-2.5">
                                    <input
                                        name="city"
                                        type="text"
                                        id="city"
                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                                <div className="sm:col-span-2">
                                    <label htmlFor="state"
                                           className="block text-sm font-semibold leading-6 text-gray-900">
                                        State
                                    </label>
                                    <div className="mt-2.5">
                                        <input
                                            name="state"
                                            type="text"
                                            id="state"
                                            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                                <div className="sm:col-span-2">
                                    <label htmlFor="zipCode"
                                           className="block text-sm font-semibold leading-6 text-gray-900">
                                        Zip Code
                                    </label>
                                    <div className="mt-2.5">
                                        <input
                                            name="zipCode"
                                            type="text"
                                            id="zipCode"
                                            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-8 flex justify-end">
                            <button
                                type="submit"
                                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Create Job
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            <JobWeatherList id={params.id}/>
        </div>
    )
}
