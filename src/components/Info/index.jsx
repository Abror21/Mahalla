

const Info = ({ title, count, increase, decrease, subtitle, img }) => {
    let percent = null;
    if (increase && decrease) {
        percent = <div className="text-base mr-[9px]">
            <span className="text-[#4aff1d]"><i className="far fa-arrow-circle-up"></i> {increase}</span>
            <span className="text-[#ff3a3a]"><i className="far fa-arrow-circle-down"></i> {decrease}</span>
        </div>
    }else if(!increase && !decrease){
        percent = null
    }else if(increase && !decrease){
            percent = <span className="text-[#4aff1d]"><i className="far fa-arrow-circle-up"></i> {increase}</span>
    }else if(!increase && decrease){
        percent = <span className="text-[#ff3a3a]"><i className="far fa-arrow-circle-down"></i> {decrease}</span>
    }
    
    return (
        <div className="max-w-[441px] hover:bg-[#3C3971] transition-all flex-1 min-w-[310px] border border-[#3c3971] p-6 font-['Roboto']">
            <h3 className="font-semibold text-lg text-[#a2a0b3] mb-4">{title}</h3>
            <div className="flex justify-between">
                <div>
                    <h5 className="font-bold text-[32px] text-[#4dcaff] mb-[6px]">{count}</h5>
                    <div className="flex items-center gap-2">
                        <span>{percent}</span> <span className="text-sm text-[#747474]">{subtitle}</span>
                    </div>
                </div>
                <div>
                    <div className="max-w-[55px]">{img}</div>
                </div>
            </div>
        </div>
    )
}

export default Info