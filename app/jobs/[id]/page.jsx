'use client'
import * as React from "react"
import useSWR from "swr";
import JobWeatherList from "@/app/components/jobweatherlist";
import {useRouter} from "next/navigation";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Page({params}) {
    const router = useRouter();

    async function handleSubmit (event) {
        event.preventDefault()
        await fetch(process.env.NEXT_PUBLIC_SERVER_URL + "/jobs/" +params.id, {
            body: JSON.stringify({
                name: event.target.name.value,
                address: event.target.address.value,
                city: event.target.city.value,
                state: event.target.state.value,
                zip_code: event.target.zip_code.value,
                scheduled_date: event.target.scheduled_date.value,
                company_id: "1"
            }),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'PUT'
        })

        router.push('/')
    }

    const {data, isLoading, error} = useSWR(process.env.NEXT_PUBLIC_SERVER_URL + '/jobs/'+params.id,fetcher)
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
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900">Schedule Job</h2>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            Review the weather forecast for the next 30 days for the job you are scheduling.
                        </p>
                    </div>
                </div>
                <form action={process.env.NEXT_PUBLIC_SERVER_URL + "/jobs"} method="POST" onSubmit={handleSubmit} className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48">
                    <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                        <div className="sm:col-span-2">
                            <label htmlFor={data.name} className="block text-sm font-semibold leading-6 text-gray-900">
                                Job Name
                            </label>
                            <div className="mt-2.5">
                                <input
                                    name="name"
                                    value={data.name}
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
                                value={data.address}
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
                                        value={data.city}
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
                                            value={data.state}
                                            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                                <div className="sm:col-span-2">
                                    <label htmlFor="zip_code"
                                           className="block text-sm font-semibold leading-6 text-gray-900">
                                        Zip Code
                                    </label>
                                    <div className="mt-2.5">
                                        <input
                                            name="zip_code"
                                            type="text"
                                            id="zip_code"
                                            value={data.zip_code}
                                            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                                <div className="sm:col-span-2">
                                    <label htmlFor="scheduled_date"
                                           className="block text-sm font-semibold leading-6 text-gray-900">
                                        Schedule Date
                                    </label>
                                    <div className="mt-2.5">
                                        <input
                                            name="scheduled_date"
                                            type="date"
                                            id="scheduled_date"
                                            value={data.scheduled_date}
                                            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                            </div>

                        <div className="mt-8 flex justify-end">
                            <button
                                type="submit"
                                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Schedule Job
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            <JobWeatherList id={params.id}/>
        </div>
    )
}
