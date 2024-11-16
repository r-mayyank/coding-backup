
export const Skeleton = () => {
    return <div role="status" className="animate-pulse flex justify-center">
        <div className="border-b border-slate-200 py-4 w-screen max-w-screen-md cursor-wait pr-10">

            <div className="flex pl-6">
                <div className="flex flex-col justify-center">
                    <div className="h-8 w-8 bg-gray-200 rounded-full mb-4"></div>
                </div>
                <div className="flex flex-col justify-center">
                    <div className="flex">
                        <div className="font-extralight px-2">
                            <div className="h-2.5 bg-gray-200 rounded-full w-28 mb-4"></div>
                        </div>
                        ·
                        <div className="text-slate-500 px-2 ">
                            <div className="h-2.5 bg-gray-200 rounded-full w-32 mb-4"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="text-2xl font-bold py-2 pl-6">
                <div className="h-2.5 bg-gray-200 rounded-full max-w-[330px] mb-2.5"></div>
            </div>

            <div className="text-lg text-slate-700 pl-6">
                <div className="h-2 bg-gray-200 rounded-full max-w-[360px] mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full max-w-[330px] mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full max-w-[300px] mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full max-w-[360px]"></div>

            </div>

            <div className="text-slate-600 text-sm pt-6 pl-6">
                <div className="h-2.5 bg-gray-200 rounded-full w-20 mb-4"></div>
            </div>
            <span className="sr-only">Loading...</span>
        </div>
        <br />
    </div>


}