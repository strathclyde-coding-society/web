import Github from '../icons/Github';
import LinkedIn from '../icons/LinkedIn';
import Twitter from '../icons/Twitter';

import { motion } from "framer-motion";

const Member = (data) => {
    return (
        <div className="flex flex-col">
            <img src={data.members.img} role="img" alt="" width="150" height="150" className="inline-flex m-0 rounded-md w-48 h-48 duration-300 hover:scale-105" />
            <motion.h1 initial={{opacity: 0, y:-15}} animate={{opacity: 1, y:0}} transition={{type: "spring", stiffness: 150, duration: 0.78}} className="mt-4 mb-0 text-base">{data.members.name}</motion.h1>
            <motion.h2 initial={{opacity: 0, y: -15}}  animate={{opacity: 1, y:0}} transition={{type: "spring", stiffness: 175, duration: 0.83}} className="text-xs text-gray-400">{data.members.role}</motion.h2>
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