'use client';
import React, { useState } from "react";
import {
  Button,
  notification,
  Input,
  Table,
  Segmented,
  Pagination,
  Dropdown,
  Menu,
} from "antd";
import filter from "@/app/assets/images/filter.svg";
import edit2 from "@/app/assets/images/edit-2.svg";

import { EllipsisOutlined } from "@ant-design/icons";
import Image from "next/image";
import EditModal from "@/app/components/EditTicket";
import TicketClosedModal from "./TicketClosed";

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
  category: string;
  closedon: string;
  assignto: string;
  reopenreason: string;
}




const MyInboxTickets: React.FC = () => {
  const handleCloseClick = (action: string) => {
    if (action === "close") {
      setIsShowModal(true);
    }
  };
  const columns: any = [
    {
      title: "Ticket No.",
      dataIndex: "ticketNo",
      key: "ticketNo",
      sorter: (a: DataType, b: DataType) => a.ticketNo.localeCompare(b.ticketNo),
    },
    {
      title: "EMP Name & ID",
      key: "empName",
      sorter: (a: DataType, b: DataType) => a.ticketNo.localeCompare(b.ticketNo),
  
      render: (record: DataType) => (
        <div className="flex items-center gap-2">
          {/* <Image
            src="/path-to-profile-image.jpg"
            alt="profile"
            width={32}
            height={32}
            className="rounded-full"
          /> */}
          <div>
            <p className="text-sm font-medium">{record.empName}</p>
            <p className="text-xs text-gray-500">{record.empId}</p>
          </div>
        </div>
      ),
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      sorter: (a: DataType, b: DataType) => a.ticketNo.localeCompare(b.ticketNo),
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status: string) => (
        <span
          className={`px-2 py-1 rounded text-xs ${
            status === "Closed"
              ? "bg-orange-200"
              : status === "Open"
              ? "bg-blue-100"
              : status === "Hold"
              ? "bg-green-100"
              : status === "Reopen"
              ? "bg-red-200"
              : ""
          }`}
        >
          {status}
        </span>
      ),
    },
    {
      title: "Priority",
      dataIndex: "priority",
      key: "priority",
      sorter: (a: DataType, b: DataType) => a.ticketNo.localeCompare(b.ticketNo),
      render: (priority: string) => (
        <div className="flex items-center gap-1">
          {priority === "Critical" && <span className="">⬆</span>}
          {priority === "Medium" && <span className="">⬅</span>}
          {priority}
        </div>
      ),
    },
    {
      title: "Created on",
      dataIndex: "createdOn",
      key: "createdOn",
      sorter: (a: DataType, b: DataType) => a.ticketNo.localeCompare(b.ticketNo),
    },
    {
      title: "Department",
      dataIndex: "department",
      key: "department",
      sorter: (a: DataType, b: DataType) => a.ticketNo.localeCompare(b.ticketNo),
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
      sorter: (a: DataType, b: DataType) => a.ticketNo.localeCompare(b.ticketNo),
    },
    {
      title: "Closed On",
      dataIndex: "closedon",
      key: "closedon",
      sorter: (a: DataType, b: DataType) => a.ticketNo.localeCompare(b.ticketNo),
    },
    {
      title: "Assigned To",
      dataIndex: "assignto",
      key: "assignto",
      sorter: (a: DataType, b: DataType) => a.ticketNo.localeCompare(b.ticketNo),
    },
    { title: "Reopen Reason", dataIndex: "reopenreason", key: "reopenreason" },
    {
      title: "Actions",
      key: "actions",
      fixed: "right",
      render: () => {
        
        const menu = (
          
          <Menu
          
            items={[
              { label: "Close", onClick: () => handleCloseClick("close"), key: "close" },
              { label: "Put On Hold", key: "put_on_hold" },
              { label: "Re-Assign", key: "re_assign" },
            ]}
          />
        );
        return (
          <Dropdown overlay={menu} trigger={["click"]}>
            <Button type="text" icon={<EllipsisOutlined />} />
          </Dropdown>
        );
      },
    },
  ];
  const originalData: DataType[] = Array.from({ length: 22 }, (_, i) => ({
    key: i,
    ticketNo: `INC10${i + 1}`,
    empName: `Employee ${i + 1}`,
    empId: `22568${i}`,
    title: `Lorem ipsum dolor sit amet`,
    status: i % 4 === 0 ? 'Closed' : i % 4 === 1 ? 'Open' : i % 4 === 2 ? 'Reopened' : 'Hold', 
    priority: i % 3 === 0 ? 'Critical' : 'Medium',
    createdOn: `01/01/2022`,
    department: `HR`,
    category: `HR1 ${i}`,
    closedon: `01/01/2022`,
    assignto: `Lorem ipsum dolor sit amet consectetur. ${i}`,
    reopenreason: `Lorem ipsum dolor sit amet consectetur. ${i}`,
  }));
 
  const [showModal, setShowModal] = useState(false);
  const [isshowModal, setIsShowModal] = useState(false);

  const [selectedStatus, setSelectedStatus] = useState("all");
  const [filteredData, setFilteredData] = useState<DataType[]>(originalData);

    // Function to get the count of items for each status
  // Calculate count for each status
  const getCountForStatus = (status: string) => {
    if (status === 'all') {
      return filteredData.length; // Count based on filtered data
    }
    return filteredData.filter((item) => item.status.toLowerCase() === status).length;
  };
    
  const handleStatusChange = (value: string) => {
    setSelectedStatus(value);
  
    if (value === 'all') {
      setFilteredData(originalData); // Show all data
    } else {
      setFilteredData(originalData.filter((item) => item.status.toLowerCase() === value.toLowerCase()));
    }
    setPagination((prev) => ({ ...prev, current: 1 }));
  };
  
  const options = [
    { label: `All (${originalData.length})`, value: 'all' },
    { label: `Open (6)`, value: 'open' },
    { label: `Reopened (5)`, value: 'reopened' },
    { label: `Closed (6)`, value: 'closed' },
    { label: `Hold (5)`, value: 'hold' },
  ];
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 10,
  });
  const onTableChange = (paginationInfo: any) => {
    setPagination({
      current: paginationInfo.current,
      pageSize: paginationInfo.pageSize,
    });
  };


  return (
    <>

    <div className="flex">
      {/* Sidebar */}
      <div className="w-[170px] bg-gray-100 p-4 border-r">
        <h3 className="text-lg font-bold mb-4">Tickets</h3>
        <ul className="space-y-2">
          <li className="text-blue-500 font-medium cursor-pointer">
            My Inbox Tickets
          </li>
          {/* Add other sidebar items here */}
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 bg-white overflow-scroll">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-xl font-bold">My Inbox Tickets</h1>
        </div>
        <div className="flex flex-row justify-between items-center">
          {/* Search and Tabs */}
          <div className="flex items-center justify-between mb-4 flex-row gap-2">
            <Input
              placeholder="Search Tickets..."
              prefix={<i className="anticon anticon-search"></i>}
              className="rounded-lg"
            />
            <Button className="flex items-center justify-center gap-1 border-[#EAECF0] ">
              <Image src={filter} alt="filter" />
              Filter
            </Button>
          </div>
          <div className="flex flex-row gap-2">
            <Button
              className="flex items-center justify-center gap-1 "
              onClick={() => setShowModal(true)}
            >
              <Image src={edit2} alt="edit" />
              Edit
            </Button>
            <Segmented
              options={options}
              value={selectedStatus}
              onChange={(value) => handleStatusChange(value as string)}
              className="rounded-md"
            />
          </div>
        </div>
        {/* Table */}
        <Table
          columns={columns}
          dataSource={filteredData}
          className="home-table mb-4"
          pagination={{
            showSizeChanger: false,
            defaultPageSize: 10,
          }}
          footer={() => {
            const start = (pagination.current - 1) * pagination.pageSize + 1;
            const end = Math.min(
              pagination.current * pagination.pageSize,
              filteredData.length
            );
            const visibleCount = end - start + 1;
            return `Showing ${visibleCount} of ${filteredData.length} entries`;
          }}
          onChange={onTableChange}
        />
      </div>
      <EditModal showModal={showModal} setShowModal={setShowModal} />
      <TicketClosedModal showModal={isshowModal} setShowModal={setIsShowModal} ticketNo='INC100397' />

      {/* {isTicketClosedVisible && <TicketClosedModal />} */}
    </div>
    </>
  );
};

export default MyInboxTickets;
