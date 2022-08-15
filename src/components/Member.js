import Github from '../icons/Github';
import LinkedIn from '../icons/LinkedIn';
import Twitter from '../icons/Twitter';

const Member = (data) => {
    return (
        <div className="flex flex-col">
            <img src={data.members.img} role="img" alt="" width="150" height="150" className="inline-flex m-0 rounded-md w-48 h-48 duration-300 hover:scale-105" />
            <h1 className="mt-4 mb-0 text-base">{data.members.name}</h1>
            <h2 className="text-xs text-gray-400">{data.members.role}</h2>
            <div className="flex flex-row space-x-2 mt-2">
                <a href={data.members.github} target="_blank" rel="noopener" aria-label="github">
                    <Github />
                </a>
                <a href={data.members.linkedin} target="_blank" rel="noopener" aria-label="linkedin">
                    <LinkedIn />
                </a>
                <a href={data.members.twitter} target="_blank" rel="noopener" aria-label="twitter">
                    <Twitter />
                </a>
            </div>
        </div>
    )
}

export default Member;