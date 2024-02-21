import "./Sidebar.css";
import logo from "../../image/img.logo.png"


const Sidebar = ({ sidebarOpen, closeSidebar}) => {
    return(
        <div className={sidebarOpen ? "sidebar-responsive":""} id="sidebar">
            <div className="sidebar__title">
                <div className="sidebar__image"> 
                 <img src={logo} alt="logo"/>
                 <h1>studyLeaf</h1>
            </div>
                 <i className="fa fa-times" id="sidebarIcon" onClick={() => closeSidebar()}> </i>
                </div>

               <div className="sidebar__menu">
                  <div className="sidebar__link active_menu_link"> 
                     <i className="fa fa-home"></i>
                     <a href="#">Dashboard</a>
                  </div>

                   <h2>Management</h2>
                   <div className="sidebar__link">
                      <i className="fa fa-user-secret"></i>
                      <a href="#">Admin Management</a>
                   </div>

                   <div className="sidebar__link">
                     <i className="fa fa-building-o"></i>
                     <a href="#">Student Management</a>
                   </div>

                   <div className="sidebar__link">
                     <i className="fa fa-wrench"></i>
                     <a href="#">Staff Management</a>
                   </div>

                   <div className="sidebar__link">
                     <i className="fa fa-archive"></i>
                     <a href="#">Book store</a>
                   </div>

                   <div className="sidebar__link">
                     <i className="fa fa-handshake-o"></i>
                     <a href="#">Courses</a>
                   </div>
                 <h2>Leave</h2>
                      <div className="sidebar__link">
                         <i className="fa fa-question"></i>
                         <a href="#">Request</a>
                      </div>
                      <div className="sidebar__link">
                         <i className="fa fa-sign-out"></i>
                         <a href="#">Leave Policy</a>
                      </div>
                      <div className="sidebar__link">
                         <i className="fa fa-calendar-check-o"></i>
                         <a href="#">Holiydays</a>
                      </div>
                      <div className="sidebar__link">
                         <i className="fa fa-files-o"></i>
                         <a href="#">apply for leave</a>
                      </div>
                      <h2>Student</h2>
                      <div className="sidebar__link">
                         <i className="fa fa-sign-up"></i>
                         <a href="#">Account Creation</a>
                      </div>
                      <div className="sidebar__link">
                         <i className="fa fa-file"></i>
                         <a href="#">Task</a>
                      </div>
                      <div className="sidebar__link">
                         <i className="fa fa-file"></i>
                         <a href="#">Daily Activity</a>
                      </div>
               </div>
        </div>
    )
}

export default Sidebar;