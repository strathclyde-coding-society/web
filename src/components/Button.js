const Button = (props) => {
    const size = ['small', 'medium', 'large'].includes(props.size.toLowerCase()) ? props.size.toLowerCase() : 'medium';
    const sizing = {'small': 'px-4 py-2', 'medium': 'px-6 py-2.5', 'large': 'px-8 py-3'}[size];
    if (props.newPage){
        return (
            <a className={sizing + ' inline-flex items-center text-sm font-medium text-slate-50 bg-indigo-800 rounded-lg border border-indigo-600 hover:bg-indigo-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-indigo-600'} href={props.href}  target="_blank" rel="noopener noreferrer">{props.content}</a>
            )
    }else{
        return (
            <a className={sizing + ' inline-flex items-center text-sm font-medium text-slate-50 bg-indigo-800 rounded-lg border border-indigo-600 hover:bg-indigo-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-indigo-600'} href={props.href}>{props.content}</a>
            )
    }
}

export default Button;