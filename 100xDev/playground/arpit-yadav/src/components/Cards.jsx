export const Cards = ({ title, desc, img, ifReg }) => {
    return (
        <div className='gap-8 py-10'>
            <div className='bg-[#1e3a8a] rounded-2xl text-white p-5 text-center h-52 max-w-sm mx-auto py-2'>
                <div className='text-3xl font-bold '>{title}</div>
                <div className='text-sm'>{desc}</div>
            </div>
            {/* <div className='bg-white p-2 text-center shadow-lg rounded-md max-w-xs mx-auto transform -translate-y-24'>
                <img src={img} alt="img" className='w-full h-60 object-cover rounded' />
                <div className='pt-2'>
                {ifReg ? <div className='bg-yellow-500 text-center p-4'>
                    <button className="bg-transparent text-black font-bold text-lg">
                        Register Here
                    </button>
                </div> : <div className='bg-yellow-500 text-center p-10'>
                    <button className="bg-transparent text-black font-bold text-lg">
                        Apply Here
                    </button>
                </div>}
                </div>
            </div> */}
        </div>
    )
}