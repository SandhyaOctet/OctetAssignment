import React from 'react';
import Image from 'next/image';
import { Modal } from 'antd';
import tick from '@/app/assets/images/tick.gif';

interface TicketOnHoldModalProps {
  holdModal: boolean;
  setHoldModal: React.Dispatch<React.SetStateAction<boolean>>;
  ticketNo: string | number; // Accept ticketNo as string or number
}

const TicketOnHoldModal: React.FC<TicketOnHoldModalProps> = ({ holdModal, setHoldModal, ticketNo }) => {
  return (
    <div className="max-w-[530px] !p-0">
      <Modal
        title=""
        open={holdModal}
        onCancel={() => setHoldModal(false)}
        footer={null}
        className=""
      >
        <div className="flex flex-col items-center gap-5  p-5">
          <div className="flex flex-col items-center gap-2 ">
            <Image src={tick} alt="tick" height={100} width={100} />
            <div className='flex flex-col items-center gap-3'>
              {/* Additional content goes here */}
              <p>Ticket Put On Hold!</p>
              <p>You Put Ticket: {ticketNo} On Hold</p>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default TicketOnHoldModal;
