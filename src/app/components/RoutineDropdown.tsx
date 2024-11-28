import React, { useState } from "react";
import { Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";

interface MenuItem {
    label: string;
    icon?: string;
}

interface RoutineDropdownProps {
    data: {
        category: {
            id: number;
            title: string;
            items: MenuItem[];
        };
    }[];
}

const RoutineDropdown: React.FC<RoutineDropdownProps> = ({ data }) => {
    const [isOpen, setIsOpen] = useState(false);

    // Handle Dropdown visibility
    const handleMenuClick = () => {
        setIsOpen(!isOpen);
    };

    // Map routine data into Ant Design's dropdown menu format
    const menuItems = data.map(({ category }) => ({
        key: category.id.toString(),
        label: (
            <div>
                <div className="font-bold text-xs text-gray-600 uppercase mb-2">{category.title}</div>
                <ul>
                    {category.items.map((item, index) => (
                        <li key={index} className="text-sm text-gray-800 mb-1">
                            {item.icon && <img src={item.icon} alt="" className="inline-block mr-2" />}
                            {item.label}
                        </li>
                    ))}
                </ul>
            </div>
        ),
    }));

    return (
        <Dropdown
            menu={{ items: menuItems }}
            trigger={["click"]}
            onOpenChange={handleMenuClick}
        >
            <div
                className="cursor-pointer text-[#273142] text-[13px] font-medium flex items-center"
            >
                My Routine
                <DownOutlined
                    className={`ml-1 text-xs transition-transform duration-200 ${
                        isOpen ? "rotate-180" : "rotate-0"
                    }`}
                />
            </div>
        </Dropdown>
    );
};

export default RoutineDropdown;
