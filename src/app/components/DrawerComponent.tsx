import React from 'react';
import { Drawer, Button, Input, Table } from 'antd';

// Define the types for the ticketData
interface Attachment {
  name: string;
  details: string;
}

interface TicketData {
  ticketNo: string;
  attachments: Attachment[];
}

// Define the types for the props passed to TicketDrawer
interface TicketDrawerProps {
  visible: boolean;
  onClose: () => void;
  ticketData: TicketData | null; // If no ticket data, it can be null
}

const TicketDrawer: React.FC<TicketDrawerProps> = ({ visible, onClose, ticketData }) => {
  if (!ticketData) return null; // If there's no ticketData, don't render the drawer.

  return (
    <Drawer
      title={`${ticketData.ticketNo}`}
      placement="right"
      onClose={onClose}
      visible={visible}
      width={500}
      className='py-3 px-5 flex flex-row-reverse justify-between'
    >
      <div className='flex flex-col gap-[40px]'>
        <div className='flex flex-col gap-2'>
          <strong>Description</strong>
          <p>
            Lorem ipsum dolor sit amet consectetur. Ut cras ante turpis non aenean libero. Nisl luctus urna neque nec scelerisque. Lorem ipsum dolor sit amet consectetur. Ut cras ante turpis non aenean libero. Nisl luctus urna neque nec scelerisque.
          </p>
        </div>
        <div className='border-dashed border-[1px] border-[#D3D9EB]'/>
        <div className='flex flex-col gap-[14px]'>
          <strong>Comments</strong>
          <div className='flex flex-col gap-[4px]'>
            <h1 className='text-[14px] font-semibold'>Ronald Richards</h1>
            <p className='text-[12px]'>
              Lorem ipsum dolor sit amet consectetur. Scelerisque a molestie urna
              porttitor ut sed dignissim.
            </p>
          </div>

          <div className='flex flex-col gap-[4px]'>
            <h1 className='text-[14px] font-semibold'>Ronald Richards</h1>
            <p className='text-[12px]'>
              Lorem ipsum dolor sit amet consectetur. Scelerisque a molestie urna
              porttitor ut sed dignissim.
            </p>
          </div>
          <Input.TextArea placeholder="Enter Description" rows={3} className=' !bg-[#f3f3f4] '/>
        </div>
        <div className='border-dashed border-[1px] border-[#D3D9EB]'/>

        <div>

        <h3 className='mb-3'>Attachments</h3>
        <Table
          columns={[
            { title: 'Attachment Name', dataIndex: 'name',      
              // sorter: (a: string, b: string) => a.ticketNo.localeCompare(b.ticketNo),
            },
            { title: 'Attachment Details', dataIndex: 'details' },
            { title: 'Action', render: () => <Button>Download</Button> },
          ]}
          dataSource={ticketData.attachments}
          pagination={false}
          className='!bg-[#667085]'
        />
      </div>
      </div>
     
    </Drawer>
  );
};

export default TicketDrawer;
