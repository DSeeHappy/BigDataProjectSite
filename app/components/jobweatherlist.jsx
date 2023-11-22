'use client'
import classNames from "@/app/components/classnames";
import {useState} from "react";
import JobForm from "@/app/components/jobform";
import {Dialog} from '@headlessui/react'

const jobs = [{
    name: 'Simple Job',
    locationAddress: '1800 street address',

},]

export default function JobWeatherList() {
    let [isOpen, setIsOpen] = useState(false)

    return (<>
        <div className="px-4 sm:px-6 lg:px-8">
            <div className="sm:flex sm:items-center">
                <div className="sm:flex-auto">
                    <h1 className="text-base font-semibold leading-6 text-gray-900">Jobs</h1>
                    <p className="mt-2 text-sm text-gray-700">
                        List of jobs scheduled or needing to be scheduled, the weather is displayed from
                        openweathermaps so you can see what to expect on each work day.
                    </p>
                </div>
                <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
                    <button
                        onClick={() => setIsOpen(true)}
                        type="button"
                        className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        New Job
                    </button>
                    <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
                        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
                            <Dialog.Panel>
                                <JobForm/>
                                <button onClick={() => setIsOpen(false)}>Cancel</button>
                            </Dialog.Panel>
                        </div>
                    </Dialog>
                </div>
            </div>

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
                                    Name
                                </th>
                                <th
                                    scope="col"
                                    className="sticky top-0 z-10 hidden border-b border-gray-300 bg-white bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:table-cell"
                                >
                                    Address
                                </th>
                                <th
                                    scope="col"
                                    className="sticky top-0 z-10 hidden border-b border-gray-300 bg-white bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:table-cell"
                                >
                                    City
                                </th>
                                <th
                                    scope="col"
                                    className="sticky top-0 z-10 hidden border-b border-gray-300 bg-white bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:table-cell"
                                >
                                    State
                                </th>
                                <th
                                    scope="col"
                                    className="sticky top-0 z-10 border-b border-gray-300 bg-white bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter"
                                >
                                    Zip Code
                                </th>
                                <th
                                    scope="col"
                                    className="sticky top-0 z-10 border-b border-gray-300 bg-white bg-opacity-75 px-3 py-3.5 text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter"
                                >
                                    Scheduled
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            {jobs.map((job, jobIdx) => (<tr key={job.locationAddress}>
                                <td
                                    className={classNames(jobIdx !== jobs.length - 1 ? 'border-b border-gray-200' : '', 'whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8')}
                                >
                                    {job.name}
                                </td>
                                <td
                                    className={classNames(jobIdx !== jobs.length - 1 ? 'border-b border-gray-200' : '', 'whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8')}
                                >
                                    {job.locationAddress}
                                </td>
                                <td
                                    className={classNames(jobIdx !== jobs.length - 1 ? 'border-b border-gray-200' : '', 'whitespace-nowrap hidden px-3 py-4 text-sm text-gray-500 sm:table-cell')}
                                >
                                    {job.locationCity}
                                </td>
                                <td
                                    className={classNames(jobIdx !== jobs.length - 1 ? 'border-b border-gray-200' : '', 'whitespace-nowrap hidden px-3 py-4 text-sm text-gray-500 lg:table-cell')}
                                >
                                    {job.locationState}
                                </td>
                                <td
                                    className={classNames(jobIdx !== jobs.length - 1 ? 'border-b border-gray-200' : '', 'whitespace-nowrap px-3 py-4 text-sm text-gray-500')}
                                >
                                    {job.locationZipCode}
                                </td>
                                <td
                                    className={classNames(jobIdx !== jobs.length - 1 ? 'border-b border-gray-200' : '', 'relative whitespace-nowrap py-4 pr-4 pl-3 text-right text-sm font-medium sm:pr-8 lg:pr-8')}
                                >
                                    <a href="#" className="text-indigo-600 hover:text-indigo-900">
                                        Schedule<span className="sr-only">, {job.name}</span>
                                    </a>
                                </td>
                            </tr>))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </>)
}