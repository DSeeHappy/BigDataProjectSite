'use client'
import JobForm from "@/app/components/jobform";
import JobList from "@/app/components/joblist";
import useSWR from "swr";
import {useState} from "react";


export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">

            <JobList/>
        </main>
    )
}
