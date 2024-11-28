import React from 'react';
import Image from 'next/image';
import { Modal } from 'antd';
import tick from '@/app/assets/images/tick.gif';

interface TicketClosedModalProps {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  ticketNo: string | number; // Accept ticketNo as string or number
}

const TicketClosedModal: React.FC<TicketClosedModalProps> = ({ showModal, setShowModal, ticketNo }) => {
  return (
    <div className="max-w-[530px] !p-0">
      <Modal
        title=""
        open={showModal}
        onClose={close}
        footer={null}
        className=""
      >
        <div className="flex flex-col items-center gap-5  p-5">
          <div className="flex flex-col items-center gap-2 ">
            <Image src={tick} alt="tick" height={100} width={100} />
            <div className='flex flex-col gap-3'>
              {/* Additional content goes here */}
              <p>Ticket closed successfully!</p>
              <p>You Closed Ticket {ticketNo}</p>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default TicketClosedModal;
