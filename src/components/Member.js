const Member = (data) => {
    return (
        <div class="rounded-lg bg-slate-100">
            <div class="flex flex-col items-center p-5">
                <img class="w-48 h-48 mb-3 rounded-md" src={data.members.img} alt="avatar image"/>
                <h5 class="mb-1 text-xl font-medium text-gray-900">{data.members.name}</h5>
                <span class="text-sm text-gray-500">{data.members.role}</span>
                <div class="flex mt-4 space-x-3 md:mt-6">
                    <a href={data.members.github} target="_blank" rel="noopener" aria-label="github">
                        <i className="bi bi-github"></i>
                    </a>
                    <a href={data.members.linkedin} target="_blank" rel="noopener" aria-label="linkedin">
                        <i className="bi bi-linkedin"></i>
                    </a>
                    <a href={data.members.twitter} target="_blank" rel="noopener" aria-label="twitter">
                        <i className="bi bi-twitter"></i>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Member;