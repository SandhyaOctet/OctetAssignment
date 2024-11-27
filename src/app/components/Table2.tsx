import React, { useState } from 'react';
import { Button, Input, Table, Segmented, Pagination } from 'antd';
import Image from 'next/image';

import searchIcon from '@/app/assets/images/search.svg';
import filterIcon from '@/app/assets/images/filter.svg';
// import moreIcon from '@/app/assets/images/more.svg';

interface DataType {
  key: React.Key;
  ticketNo: string;
  empName: string;
  empId: string;
  title: string;
  status: string;
  priority: string;
  createdOn: string;
  department: string;
}

const columns = [
  {
    title: 'Ticket No.',
    dataIndex: 'ticketNo',
    key: 'ticketNo',
    sorter: (a: DataType, b: DataType) => a.ticketNo.localeCompare(b.ticketNo),
  },
  {
    title: 'EMP Name & ID',
    key: 'empName',
    render: (record: DataType) => (
      <div className="flex items-center gap-2">
        <Image
          src="/path-to-profile-image.jpg"
          alt="profile"
          width={32}
          height={32}
          className="rounded-full"
        />
        <div>
          <p className="text-sm font-medium">{record.empName}</p>
          <p className="text-xs text-gray-500">{record.empId}</p>
        </div>
      </div>
    ),
  },
  { title: 'Title', dataIndex: 'title', key: 'title' },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    render: (status: string) => (
      <span
        className={`px-2 py-1 rounded text-xs ${
          status === 'Closed'
            ? 'bg-red-100 text-red-600'
            : status === 'Open'
            ? 'bg-green-100 text-green-600'
            : 'bg-yellow-100 text-yellow-600'
        }`}
      >
        {status}
      </span>
    ),
  },
  {
    title: 'Priority',
    dataIndex: 'priority',
    key: 'priority',
    render: (priority: string) => (
      <div className="flex items-center gap-1">
        {priority === 'Critical' && <span className="text-red-500">⬆</span>}
        {priority === 'Medium' && <span className="text-yellow-500">⬅</span>}
        {priority}
      </div>
    ),
  },
  { title: 'Created on', dataIndex: 'createdOn', key: 'createdOn' },
  { title: 'Department', dataIndex: 'department', key: 'department' },
  {
    title: 'Actions',
    key: 'actions',
    render: () => (
      <Button type="text" icon={<Image src={filterIcon} alt="More" />} />
    ),
  },
];

const data: DataType[] = Array.from({ length: 50 }, (_, i) => ({
  key: i,
  ticketNo: `INC10${i + 1}`,
  empName: `Employee ${i + 1}`,
  empId: `22568${i}`,
  title: `Lorem ipsum dolor sit amet`,
  status: i % 2 === 0 ? 'Closed' : 'Open',
  priority: i % 3 === 0 ? 'Critical' : 'Medium',
  createdOn: `01/01/2022`,
  department: `HR`,
}));

const MyInboxTickets: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="flex">
      {/* Sidebar */}
      <aside className="w-60 bg-gray-100 p-4 border-r">
        <h3 className="text-lg font-bold mb-4">Tickets</h3>
        <ul className="space-y-2">
          <li className="text-blue-500 font-medium cursor-pointer">My Inbox Tickets</li>
          {/* Add other sidebar items here */}
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 bg-white">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-xl font-bold">My Inbox Tickets</h1>
          <Button className="flex items-center gap-2 border-gray-300">
            <Image src={filterIcon} alt="Filter" />
            Filter
          </Button>
        </div>

        {/* Search and Tabs */}
        <div className="flex items-center justify-between mb-4">
          <div className="relative w-1/2">
            <Input
              placeholder="Search Ticket..."
              className="pl-10 rounded-lg border-gray-300"
              prefix={<Image src={searchIcon} alt="Search" />}
            />
          </div>
          <Segmented
            options={['All (12)', 'Open (2)', 'Reopened (0)', 'Closed (9)', 'Hold (5)']}
            defaultValue="All (12)"
            className="rounded-md"
          />
        </div>

        {/* Table */}
        <Table
          columns={columns}
          dataSource={data}
          pagination={false}
          scroll={{ x: 'max-content' }}
          className="mb-4"
        />

        {/* Pagination */}
        <Pagination
          current={currentPage}
          total={data.length}
          pageSize={10}
          onChange={(page) => setCurrentPage(page)}
          className="text-center"
        />
      </main>
    </div>
  );
};

export default MyInboxTickets;
