'use client'
import Image from 'next/image'
import chevronsup from '@/app/assets/images/chevrons-up.svg'
import chevronupsingle from '@/app/assets/images/chevron-up-single.svg'
import equal from '@/app/assets/images/equal.svg'
import chevrondown from '@/app/assets/images/chevron-down.svg'

import React from 'react'
import { Button, Modal, Select, SelectProps } from "antd"

type LabelRender = SelectProps['labelRender'];
type LabelsRender = SelectProps['labelRender'];

const departments = [
    { label: 'Finance', value: 'Finance' },
    { label: 'Marketing', value: 'Marketing' },
    { label: 'Developement', value: 'Developement' },
];

const departmentLabelRender: LabelsRender = (props: { label: any; value: any }) => {
    const { label, value } = props;

    if (label) {
        return value;
    }
    return <span>Select Departrment</span>;
};
const categoryOptions = [
    { label: 'HR', value: 'HR' },
    { label: 'Developer', value: 'Developer' },
    { label: 'Content Strategist', value: 'Content Strategist' },
    { label: 'Designer', value: 'Designer' },
];

const categoryLabelRender: LabelRender = (props) => {
    const { label, value } = props;

    if (label) {
        return value;
    }
    return <span>Select Category</span>;
};
const EditModal = ({ showModal, setShowModal }: { showModal?: any; setShowModal?: any }) => {

    return (
        <div className='max-w-[530px] !p-0'>
            <Modal title='Edit Ticket' open={showModal} onCancel={() => setShowModal(false)} onOk={() => setShowModal(false)} className=''>
                <div className='flex flex-col items-start gap-5 bg-[#f3f3f4] w-full p-5'>
                    <div className='flex flex-col items-start gap-2 w-full'>
                        <div>Priority</div>
                        <div className='flex flex-row gap-4'>
                            <Button>
                                <Image src={chevronsup} alt='up' />
                                Critical</Button>
                            <Button>
                                <Image src={chevronupsingle} alt='up' />

                                High</Button>

                            <Button>
                                <Image src={equal} alt='up' />
                                Medium</Button>
                            <Button>
                                <Image src={chevrondown} alt='up' />

                                Low</Button>

                        </div>
                    </div>
                    {/* Department Select */}
                    <div className='flex flex-col items-start gap-2 w-full'>
                        <div>Department</div>
                        <div className='flex flex-row justify-between items-center gap-4 bg-white w-full'>
                            <Select 
                                labelRender={departmentLabelRender} 
                                style={{ width: '100%', border: 'none' }} 
                                options={departments} 
                            />
                        </div>
                    </div>

                    {/* Category Select */}
                    <div className='flex flex-col items-start gap-2 w-full'>
                        <div>Category</div>
                        <div className='flex flex-row justify-between items-center gap-4 bg-white w-full border-none'>
                            <Select 
                                labelRender={categoryLabelRender} 
                                style={{ width: '100%', border: 'none' }} 
                                options={categoryOptions} 
                            />
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default EditModal
