import "./Sidebar.css";
import water from"../../assets/logomiyahuna.png"


const Sidebar= ({ sidebarOpen, closeSidebar}) => {
    return(
        <div className={sidebarOpen ? "sidebar-responsive" : ""} id="sidebar">
            <div className="sidebar__title">
                <div className="sidebar__logo">
                    <img src={water} alt="logo" />
                    </div>
                <i
                  className="fa fa-times"
                  id="sidebarIcon" 
                  onClick={() => closeSidebar()}
                  > </i>
            </div>
            
            <div className="sidebar__menu">
                <div className="sidebar__link active_menu_link">
                    <i className="fa fa-home"></i>
                    <a href="#">المؤشرات العامة</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-tint"></i>
                    <a href="#">مؤاشرات المياه</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-usd"></i>
                    <a href="#">فواتير الاستهلاك</a>
                </div>
            </div>
            <div className="sidebar__bottom">
                <p>CopyRight @مياهنا</p>
            </div>

        </div>
    );
};

export default Sidebar;