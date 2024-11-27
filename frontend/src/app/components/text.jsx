const Sidebar = () => {
    const [sidebar, setSidebar] = useState(false);
 
    const showSidebar = () => setSidebar(!sidebar);
 
    return (
        <>
            <IconContext.Provider value={{ color: "#fff" }}>
                <Nav>
                    <NavIcon to="#">
                        <FaIcons.FaBars
                            onClick={showSidebar}
                        />
                    </NavIcon>
                    <h1
                        style={{
                            textAlign: "center",
                            marginLeft: "200px",
                            color: "green",
                        }}
                    >
                        GeeksforGeeks
                    </h1>
                </Nav>
                <SidebarNav sidebar={sidebar}>
                    <SidebarWrap>
                        <NavIcon to="#">
                            <AiIcons.AiOutlineClose
                                onClick={showSidebar}
                            />
                        </NavIcon>
                        {SidebarData.map((item, index) => {
                            return (
                                <SubMenu
                                    item={item}
                                    key={index}
                                />
                            );
                        })}
                    </SidebarWrap>
                </SidebarNav>
            </IconContext.Provider>
        </>
    );
};
 

export const SidebarData = [
    {
        title: "About Us",
        path: "/about-us",
        icon: <AiIcons.AiFillHome />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
 
        subNav: [
            {
                title: "Our Aim",
                path: "/about-us/aim",
                icon: <IoIcons.IoIosPaper />,
            },
            {
                title: "Our Vision",
                path: "/about-us/vision",
                icon: <IoIcons.IoIosPaper />,
            },
        ],
    },
    {
        title: "Services",
        path: "/services",
        icon: <IoIcons.IoIosPaper />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
 
        subNav: [
            {
                title: "Service 1",
                path: "/services/services1",
                icon: <IoIcons.IoIosPaper />,
                cName: "sub-nav",
            },
            {
                title: "Service 2",
                path: "/services/services2",
                icon: <IoIcons.IoIosPaper />,
                cName: "sub-nav",
            },
            {
                title: "Service 3",
                path: "/services/services3",
                icon: <IoIcons.IoIosPaper />,
            },
        ],
    },
    {
        title: "Contact",
        path: "/contact",
        icon: <FaIcons.FaPhone />,
    },
    {
        title: "Events",
        path: "/events",
        icon: <FaIcons.FaEnvelopeOpenText />,
 
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
 
        subNav: [
            {
                title: "Event 1",
                path: "/events/events1",
                icon: <IoIcons.IoIosPaper />,
            },
            {
                title: "Event 2",
                path: "/events/events2",
                icon: <IoIcons.IoIosPaper />,
            },
        ],
    },
    {
        title: "Support",
        path: "/support",
        icon: <IoIcons.IoMdHelpCircle />,
    },
];

const SubMenu = ({ item }) => {
    const [subnav, setSubnav] = useState(false);
 
    const showSubnav = () => setSubnav(!subnav);
 
    return (
        <>
            <SidebarLink
                to={item.path}
                onClick={item.subNav && showSubnav}
            >
                <div>
                    {item.icon}
                    <SidebarLabel>
                        {item.title}
                    </SidebarLabel>
                </div>
                <div>
                    {item.subNav && subnav
                        ? item.iconOpened
                        : item.subNav
                        ? item.iconClosed
                        : null}
                </div>
            </SidebarLink>
            {subnav &&
                item.subNav.map((item, index) => {
                    return (
                        <DropdownLink
                            to={item.path}
                            key={index}
                        >
                            {item.icon}
                            <SidebarLabel>
                                {item.title}
                            </SidebarLabel>
                        </DropdownLink>
                    );
                })}
        </>
    );
};
