import React, { useState } from 'react';
import { Button, Flex, Input, Table } from 'antd';
import search from '@/app/assets/images/search.svg'

import type { TableColumnsType, TableProps } from 'antd';
import Image from 'next/image';
// import '@/globals.css'

type TableRowSelection<T extends object = object> = TableProps<T>['rowSelection'];

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}

const columns: TableColumnsType<DataType> = [
  { title: 'Name', dataIndex: 'name' },
  { title: 'Age', dataIndex: 'age' },
  { title: 'Address', dataIndex: 'address' },
];

const dataSource = Array.from<DataType>({ length: 46 }).map<DataType>((_, i) => ({
  key: i,
  name: `Edward King ${i}`,
  age: 32,
  address: `London, Park Lane no. ${i}`,
}));

const TableTab: React.FC = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [loading, setLoading] = useState(false);

  const start = () => {
    setLoading(true);
    // ajax request after empty completing
    setTimeout(() => {
      setSelectedRowKeys([]);
      setLoading(false);
    }, 1000);
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

  return (
    <div className="max-w-full md:max-w-[1156px] mx-auto">
      <div className="px-4 py-3 flex items-center text-lg font-semibold">
        My Inbox Tickets
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <div>
          <div className="flex-shrink relative">
            <Image src={search} alt='search icon' className='absolute z-10 flex top-2 left-1' />
            <Input
              placeholder="Search Tickets..."
              prefix={<i className="anticon anticon-search"></i>}
              className="rounded-lg"
            />
          </div>
          <div>
            Filter
          </div>
          </div>
          <div>
            
          </div>
          {hasSelected ? `Selected ${selectedRowKeys.length} items` : null}
        </div>
        <div>
          <Table<DataType>
            rowSelection={rowSelection}
            columns={columns}
            dataSource={dataSource}
            scroll={{ x: '100%' }} // Ensures horizontal scrolling for the table if needed
          />
        </div>
      </div>
    </div>
  );
};

export default TableTab;