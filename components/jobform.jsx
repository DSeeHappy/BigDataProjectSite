'use client'
import * as React from "react"
import {AddressAutofill} from "@mapbox/search-js-react";
import { useRouter } from "next/navigation";

export default function JobForm() {
    const handleSubmit = async (event, router) => {
        event.preventDefault()
        const res = await fetch(process.env.NEXT_PUBLIC_SERVER_URL + "/jobs", {
            body: JSON.stringify({
                name: event.target.name.value,
                address: event.target.address.value,
                city: event.target.city.value,
                state: event.target.state.value,
                zip_code: event.target.zip_code.value,
                country: event.target.country.value,
                company_id: "1"
            }),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST'
        })
        const result = await res.json()

        console.log(result.id)
        console.log(result.latitude)
        console.log(result.longitude)

        await fetch(process.env.NEXT_PUBLIC_SERVER_URL + "/weather", {
            body: JSON.stringify({
                job_id: result.id,
                lat: result.latitude,
                lon: result.longitude,
            }),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST'
        });

        router.push('/')
    }
    const router = useRouter();

    return (
        <div className="relative isolate bg-white">
            <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
                <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
                    <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
                        <div
                            className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-gray-100 ring-1 ring-gray-900/10 lg:w-1/2">
                        </div>
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900">Create New Job</h2>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            Create a job, this system will provide you the weather to then schedule the job.
                            <br/>
                            Make sure to input an address which includes ful city state, zip code and country. Otherwise you will not be able to continue creating the job.
                        </p>
                    </div>
                </div>
                <form action={process.env.NEXT_PUBLIC_SERVER_URL + "/jobs"} method="POST" onSubmit={(event) => {handleSubmit(event,router)}} className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48">
                        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                            <div className="sm:col-span-2">
                                <label htmlFor="name" className="block text-sm font-semibold leading-6 text-gray-900">
                                    Job Name
                                </label>
                                <div className="mt-2.5">
                                    <input
                                        name="name"
                                        id="name"
                                        type="text"
                                        autoComplete="off"
                                        required={true}
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
                                <AddressAutofill accessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}>

                                    <input
                                        name="address"
                                        id="address"
                                        type="text"
                                        autoComplete="street-address"
                                        required={true}
                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </AddressAutofill>
                            </div>
                        </div>
                        <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
                            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">


                                <div className="sm:col-span-2">
                                    <label htmlFor="city"
                                           className="block text-sm font-semibold leading-6 text-gray-900">
                                        City
                                    </label>
                                    <div className="mt-2.5">

                                        <input
                                            name="city"
                                            type="text"
                                            id="city"
                                            required={true}
                                            autoComplete="address-level2"
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
                                                autoComplete="address-level1"
                                                required={true}
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
                                                required={true}
                                                autoComplete="postal-code"
                                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                                <div className="sm:col-span-2">
                                    <label htmlFor="country"
                                           className="block text-sm font-semibold leading-6 text-gray-900">
                                        Country
                                    </label>
                                    <div className="mt-2.5">

                                        <input
                                            name="country"
                                            type="text"
                                            id="country"
                                            required={true}
                                            autoComplete="country"
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
                                    Create Job
                                </button>
                            </div>
                        </div>
                </form>
            </div>
        </div>
    )
}
