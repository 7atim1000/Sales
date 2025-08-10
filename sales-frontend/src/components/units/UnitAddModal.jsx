import React, {useState} from 'react' 
import {motion} from 'framer-motion'
import { IoCloseCircle } from 'react-icons/io5';
import { enqueueSnackbar } from 'notistack';

import { addUnit } from '../../https';
import { useMutation } from '@tanstack/react-query'

const UnitAddModal = ({setIsAddUnitModal}) => {
    
    const [formData, setFormData] = useState({
       unitName : ""
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData)

        UnitMutation.mutate(formData)
        window.location.reload()
        setIsAddUnitModal(false)
    }




    const UnitMutation = useMutation({
        mutationFn: (reqData) => addUnit(reqData),
        onSuccess: (res) => {

            const { data } = res;
            //console.log(data)
            enqueueSnackbar(data.message, { variant: "success" });
        },

        onError: (error) => {
            const { response } = error;
            enqueueSnackbar(response.data.message, { variant: "error" });

            console.log(error);
        },
    });

    const handleClose = () => {
        setIsAddUnitModal(false)
    };

    
    return(
       
        <div className='fixed inset-0 bg-opacity-50 flex items-center justify-center shadow-lg/10 z-50 ' style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}>
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ durayion: 0.3, ease: 'easeInOut' }}
                className='bg-[#1a1a1a] p-6 rounded-lg shadow-lg/30 w-120 md:mt-5 mt-5 h-[calc(100vh-5rem)]'
            >


                {/*Modal Header */}
                <div className="flex justify-between items-center mb-4">
                    <h2 className='text-sky-400 text-sm font-semibold'>Add Unit</h2>
                    <button onClick={handleClose} className='rounded-full  text-[#be3e3f] cursor-pointer'>
                        <IoCloseCircle size={25} />
                    </button>
                </div>

                {/*Modal Body*/}
                <form className='mt-3 space-y-6' onSubmit={handleSubmit}>
                    <div className='mt-5'>

                        <label className='text-sky-400 block mb-2 mt-3 px-4 text-sm font-medium'>Unit Name :</label>
                        <div className='mt-5 flex items-center justify-between gap-5'>
                            <div className='w-full flex items-center rounded-lg p-2 px-4 bg-[#1f1f1f] shadow-lg/30'>
                                <input
                                    type='text'
                                    name='unitName'
                                    value={formData.unitName}
                                    onChange={handleInputChange}

                                    placeholder='Enter unit name'
                                    className='bg-transparent text-[#1a1a1a] focus:outline-none text-white'
                                    required
                                    autoComplete='none'
                                />
                            </div>

                            <button
                                type='submit'
                                className='rounded-lg px-3 py-2 text-sm font-semibold bg-sky-400 text-[#1a1a1a] cursor-pointer'
                            >
                                Save
                            </button>

                        </div>

                    </div>

                </form>
            </motion.div>
        </div>

    );
};


export default UnitAddModal ;