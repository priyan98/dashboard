import "./Main.css";
/*import hello from "../../image";*/
import Chart from "../charts/Chart";


const Main =() => {
    return(
        <Main>
            <div className="main__container">
                <div className=" main__title">
                    
                    <div className="main__greeting">
                        <h1>Hello Users</h1>
                        <p>Welcom to your Dashboard</p>
                    </div>
                </div>

                <div className="main__cards">
                    <div className="card">
                        <i className="fa fa-user-o fa-2x text-lightblue"></i>
                        <div className="card_inner">
                            <p className="text-primary-p">Number of Students</p>
                            <span className="font-bold text-title">100</span>
                        </div>
                    </div>

                    <div className="card">
                        <i className="fa fa-calendar fa-2x text-red"></i>
                        <div className="card_inner">
                            <p className="text-primary-p">Times of watching</p>
                            <span className="font-bold text-title">233</span>
                        </div>
                    </div>

                    <div className="card">
                        <i className="fa fa-video-camera fa-2x text-yellow"></i>
                        <div className="card_inner">
                            <p className="text-primary-p">Number of video</p>
                            <span className="font-bold text-title">111</span>
                        </div>
                    </div>
                    
                    <div className="card">
                        <i className="fa fa fa-video-camera fa-2x text-green"></i>
                        <div className="card_inner">
                            <p className="text-primary-p">No.of Likes</p>
                            <span className="font-bold text-title">124</span>
                        </div>
                    </div> 

                </div>

                <div className="charts">
                    <div className="charts__left">
                        <div className="charts__left__title">
                            <div>
                                <h1>Daily Reports</h1>
                                <p>Hyderabad</p>
                            </div>
                            <i className="fa fa-usd"></i>
                        </div>
                        <Chart />
                    </div>

                    <div className="charts__right">
                        <div className="charts__rights__title">
                            <div>
                                <h1>Stats Reports</h1>
                                <p>Hyderabad</p>
                            </div>
                            <i className="fa fa-use"></i>
                        </div>

                        <div className="charts__right__cards">
                            <div className="card1">
                            <h1>Task perfomance</h1>
                            <p>60%</p>
                            </div>

                            <div className="card2">
                            <h1>Regular Activity</h1>
                            <p>48%</p>
                            </div>

                            <div className="card3">
                            <h1>Daily Working perfomance</h1>
                            <p>58%</p>
                            </div>

                            <div className="card4">
                            <h1>overall perfomance</h1>
                            <p>48%</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </Main>
    )
}

export default Main;