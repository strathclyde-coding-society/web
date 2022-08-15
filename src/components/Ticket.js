const Member = (data) => {
    return (
        <div className="flex flex-col p-10 border rounded-md bg-gray-550 bg-opacity-[0.15] bg-purple-900 border-purple-900">
            <div className="flex flex-col space-y-4">
                <h2 className="font-semibold text-xl text-gray-50">
                    {data.tickets.title}
                </h2>
                <p className="">
                    {data.tickets.description}
                </p>
                <button type="button" className="inline-flex items-center justify-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 w-24 text-center">
                    Buy now!
                </button>
            </div>
        </div>
    )
}

export default Member;