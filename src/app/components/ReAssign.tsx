'use client'

import React from 'react'
import { Button, Modal, Select, SelectProps } from "antd"

type LabelRender = SelectProps['labelRender'];

const categoryOptions = [
    { label: 'Najibullah Siddiqui', value: 'Najibullah Siddiqui' },
    { label: 'Najibullah Siddiqui', value: 'Najibullah Siddiqui' },
    { label: 'Najibullah Siddiqui', value: 'Najibullah Siddiqui' },
];

const categoryLabelRender: LabelRender = (props) => {
    const { label, value } = props;

    if (label) {
        return value;
    }
    return <span>Select Category</span>;
};
const ReAssignModal = ({ assignModal, setAssignModal }: { assignModal?: any; setAssignModal?: any }) => {

    return (
        <div className='max-w-[530px] !p-0'>
            <Modal 
            title='Re-Assign Ticket' 
            open={assignModal} 
            onCancel={() => setAssignModal(false)} 
            onSave={() => setAssignModal(false)}
            cancelButtonProps={{
                className: 'bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded',
            }} 
            
            >
                <div className='flex flex-col items-start gap-5 bg-[#f3f3f4] w-full p-5'>
                    
            
                    <div className='flex flex-col items-start gap-2 w-full'>
                        <div>Assign To</div>
                        <div className='flex flex-row justify-between items-center gap-4 bg-white w-full border-none'>
                            <Select 
                                labelRender={categoryLabelRender} 
                                style={{ width: '100%', border: 'none' }} 
                                options={categoryOptions} 
                                defaultValue={`Najibullah Siddiqui`}
                            />
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default ReAssignModal
