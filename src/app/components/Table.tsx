import React, { useState } from 'react';
import { Button, Flex, Input, Table } from 'antd';
import search from '@/app/assets/images/search.svg'

import type { TableColumnsType, TableProps } from 'antd';
import Image from 'next/image';
import filter from '@/app/assets/images/filter.svg'
import edit2 from '@/app/assets/images/edit-2.svg'
// import '@/globals.css'
import { Segmented } from 'antd';
import { TableRowSelection } from 'antd/es/table/interface';

type Align = 'start' | 'center' | 'end';

interface DataType {
  key: React.Key;
  ticketnumber: string;
  name: string;
  title: string;
  status: string,
  priority: string,
  Createdon: string,
  department: string,
  category: string,
  closedon: any,
  assignto:any,
  reopenreason: any,
  actions: any;
}

const columns: TableColumnsType<DataType> = [
  { title: 'Ticket Number', dataIndex: 'Ticket Number' },
  { title: 'Emp Name & ID', dataIndex: 'Emp Name & ID' },
  { title: 'Title', dataIndex: 'Title' },
  { title: 'Status', dataIndex: 'Status' },
  { title: 'Priority', dataIndex: 'Priority' },
  { title: 'Created on', dataIndex: 'Created on' },
  { title: 'Department', dataIndex: 'Department' },
  { title: 'Actions', dataIndex: 'Actions' },
];

const dataSource = Array.from<DataType>({ length: 46 }).map<DataType>((_, i) => ({
  key: i,
  ticketnumber: `INC100397 ${i}`,
  name: `Ankit Chahuan ${i}`,
  title: `Lorem ipsum dolor sit amet consectetur. ${i}`,
  status: i % 2 === 0 ? 'Opened' : 'Closed',
  priority: i % 3 === 0 ? 'High' : 'Low',
  Createdon: `2023-11-${10 + i}`,
  department: `HR ${i}`,
  category: `HR1 ${i}`,
  closedon: `button ${i}`,
  assignto:`Lorem ipsum dolor sit amet consectetur. ${i}`,
  reopenreason: `Lorem ipsum dolor sit amet consectetur. ${i}`,
  actions: 'Edit/Delete',
}));

const TableTab: React.FC = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [data, setData] = useState(dataSource);
  const [searchValue, setSearchValue] = useState('');
  const [filterStatus, setFilterStatus] = useState<string>('All');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    const filteredData = dataSource.filter(
      (item) =>
        item.ticketnumber.toLowerCase().includes(e.target.value.toLowerCase()) ||
        item.title.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setData(filteredData);
  };

  const handleTabChange = (value: string) => {
    setFilterStatus(value);
    if (value === 'All') {
      setData(dataSource);
    } else {
      const filteredData = dataSource.filter((item) => item.status === value);
      setData(filteredData);
    }
  };
  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    console.log('selectedRowKeys changed: ', newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection: TableRowSelection<DataType> = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const hasSelected = selectedRowKeys.length > 0;
  const [alignValue, setAlignValue] = React.useState<Align>();
  return (
    <div className="max-w-full md:max-w-[1156px] mx-auto">
      <div className="px-4 py-3 flex items-center text-lg font-semibold">
        My Inbox Tickets
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <div className='flex flex-row gap-2'>
            <div className="flex-shrink relative">
              <Image src={search} alt='search icon' className='absolute z-10 flex top-2 left-1' />
              <Input
                placeholder="Search Tickets..."
                prefix={<i className="anticon anticon-search"></i>}
                className="rounded-lg"
              />
            </div>
            <Button className='flex items-center justify-center gap-1 border-[#EAECF0] '>
              <Image src={filter} alt='filter' />
              Filter
            </Button>


          </div>
          <div className='flex flex-row gap-2'>
            <Button className='flex items-center justify-center gap-1 '>
              <Image src={edit2} alt='edit' />
              Edit
            </Button>
            <Segmented
              value={alignValue}
              style={{ marginBottom: 8 }}
              options={['All', 'Opened', 'Reopen', 'Draft', 'Closed', 'Hold']}
              onChange={handleTabChange}
              defaultValue="All"

            />

          </div>
          {hasSelected ? `Selected ${selectedRowKeys.length} items` : null}
        </div>
        <div>

          <Table<DataType>
            rowSelection={rowSelection}
            columns={columns}
            dataSource={dataSource}
            pagination={{ pageSize: 10 }}
            scroll={{ x: 'max-content' }}          />
        </div>
      </div>
    </div>
  );
};

export default TableTab;