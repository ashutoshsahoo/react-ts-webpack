import { faAngleRight, faChartArea, faChartBar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { AreaChart } from "./AreaChart";
import { BarChart } from "./BarChart";

export default function Dashboard() {
  return (
    <div>
    <Header />
    <div id="layoutSidenav">
        <div id="layoutSidenav_content">
            <main>
                <div className="container-fluid">
                    <h1 className="mt-4">Dashboard</h1>
                    <ol className="breadcrumb mb-4">
                        <li className="breadcrumb-item active">Dashboard</li>
                    </ol>
                    <div className="row">
                        <div className="col-xl-3 col-md-6">
                            <div className="card bg-primary text-white mb-4">
                                <div className="card-body">Primary Card</div>
                                <div className="card-footer d-flex align-items-center justify-content-between">
                                    <a className="small text-white stretched-link" href="#">View Details</a>
                                    <div className="small text-white"><FontAwesomeIcon icon={faAngleRight} /></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6">
                            <div className="card bg-warning text-white mb-4">
                                <div className="card-body">Warning Card</div>
                                <div className="card-footer d-flex align-items-center justify-content-between">
                                    <a className="small text-white stretched-link" href="#">View Details</a>
                                    <div className="small text-white"><FontAwesomeIcon icon={faAngleRight} /></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6">
                            <div className="card bg-success text-white mb-4">
                                <div className="card-body">Success Card</div>
                                <div className="card-footer d-flex align-items-center justify-content-between">
                                    <a className="small text-white stretched-link" href="#">View Details</a>
                                    <div className="small text-white">
                                        <FontAwesomeIcon icon={faAngleRight} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6">
                            <div className="card bg-danger text-white mb-4">
                                <div className="card-body">Danger Card</div>
                                <div className="card-footer d-flex align-items-center justify-content-between">
                                    <a className="small text-white stretched-link" href="#">View Details</a>
                                    <div className="small text-white"><FontAwesomeIcon icon={faAngleRight} /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-6">
                            <div className="card mb-4">
                                <div className="card-header">
                                    <FontAwesomeIcon icon={faChartArea} className="mr-2" />
                                    Area Chart Example
                                </div>
                                <div className="card-body">
                                    <AreaChart />
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="card mb-4">
                                <div className="card-header">
                                    <FontAwesomeIcon icon={faChartBar} className="mr-2" />
                                    Bar Chart Example
                                </div>
                                <div className="card-body">
                                   <BarChart />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    </div>
    </div>
  );
}
