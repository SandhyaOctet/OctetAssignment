import { Dropdown, Input, Badge } from "antd";
import Image from 'next/image';
import icon1 from '@/app/assets/images/icon1.svg'
import logo from '@/app/assets/images/logo.svg'
import bell from '@/app/assets/images/bell.svg'
import home from '@/app/assets/images/home.svg'
import Ellipse from '@/app/assets/images/Ellipse.svg'
import settings from '@/app/assets/images/settings.svg'
import search from '@/app/assets/images/search.svg'
import octeticon from '@/app/assets/images/octeticon.svg'
import { DownOutlined } from "@ant-design/icons";
import { useState } from "react";

const Navbar = () => {
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  
    const handleDropdownChange = (key: string, isOpen: boolean) => {
      setOpenDropdown(isOpen ? key : null);
    };

    const menuItems = [
        { key: "1", label: "Option 1" },
        { key: "2", label: "Option 2" },
    ];

    return (
        <header className="flex items-center justify-between px-4 h-16 bg-white shadow-md">
            {/* Logo Section */}
            <div className="flex items-center">
                <div className="flex items-center gap-2.5 px-4 py-[7px]">
                    <Image src={icon1} alt='icon' />
                    <Image src={logo} alt='logo' />
                </div>
                <div className="flex items-center gap-4">
                <Image src={home} alt='home icon' height={35} width={35} className="p-2 aspect-[15/15]"/>

                <Dropdown
                        menu={{ items: menuItems }}
                        trigger={['click']}
                    >
                        <div className="cursor-pointer text-[#273142] text-[13px] font-medium">My Routine<DownOutlined
              className={`ml-1 text-xs transition-transform duration-200 ${
                openDropdown === "quick-actions" ? "rotate-180" : "rotate-0"
              }`}
            /></div>
                    </Dropdown>
                    <Dropdown
                        menu={{ items: menuItems }}
                        trigger={['click']}
                    >
                        <div className="cursor-pointer text-[#273142] text-[13px] font-medium">Quick Actions
                        <DownOutlined
              className={`ml-1 text-xs transition-transform duration-200 ${
                openDropdown === "quick-actions" ? "rotate-180" : "rotate-0"
              }`}
            /></div>
                    </Dropdown>
                </div>
                
            </div>



            {/* Search Section */}


            {/* Icons Section */}
            <div className="flex items-center gap-4">
                <div className="flex-grow mx-4 relative">
                <Image src={search} alt='search icon' className='absolute z-10 flex top-2 left-1' />

                    <Input
                        placeholder="Search all in administration..."
                        prefix={<i className="anticon anticon-search"></i>}
                        className="rounded-lg ml-1"
                    />
                </div>

                <Image src={bell} alt='bell icon' className='relative' />
                <Image src={Ellipse} alt='Ellipse' className='absolute top-[10px]' />

                <Image src={settings} alt='settings' />
                <Image src={octeticon} alt='octeticon' />
            </div>
        </header>
    );
};

export default Navbar;
