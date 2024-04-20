import React from 'react'

export const Layout = () => {
    return (
        <div className="wrapper">
            <nav className="sidebar">
                <div className="sidebar-content">
                    <div className="scrollbar-container ps">
                        <a href="/" className="sidebar-brand">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="20px" height="20px" viewBox="0 0 20 20" enableBackground="new 0 0 20 20" xmlSpace="preserve" fill="#2871e7"><path fill="#84aef2" d="M19.4,4.1l-9-4C10.1,0,9.9,0,9.6,0.1l-9,4C0.2,4.2,0,4.6,0,5s0.2,0.8,0.6,0.9l9,4C9.7,10,9.9,10,10,10s0.3,0,0.4-0.1l9-4     C19.8,5.8,20,5.4,20,5S19.8,4.2,19.4,4.1z"></path><path d="M10,15c-0.1,0-0.3,0-0.4-0.1l-9-4c-0.5-0.2-0.7-0.8-0.5-1.3c0.2-0.5,0.8-0.7,1.3-0.5l8.6,3.8l8.6-3.8c0.5-0.2,1.1,0,1.3,0.5     c0.2,0.5,0,1.1-0.5,1.3l-9,4C10.3,15,10.1,15,10,15z"></path><path d="M10,20c-0.1,0-0.3,0-0.4-0.1l-9-4c-0.5-0.2-0.7-0.8-0.5-1.3c0.2-0.5,0.8-0.7,1.3-0.5l8.6,3.8l8.6-3.8c0.5-0.2,1.1,0,1.3,0.5     c0.2,0.5,0,1.1-0.5,1.3l-9,4C10.3,20,10.1,20,10,20z"></path></svg>
                            <span className="align-middle me-3">AppStack</span>
                        </a>
                        <ul className="sidebar-nav">
                            <li className="sidebar-header">Pages</li>
                            <li className="sidebar-item active">
                                <a className="sidebar-link " data-bs-toggle="collapse" aria-expanded="true" depth="0">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather align-middle"><line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line><line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line><line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line><line x1="1" y1="14" x2="7" y2="14"></line><line x1="9" y1="8" x2="15" y2="8"></line><line x1="17" y1="16" x2="23" y2="16"></line></svg>
                                    <span className="align-middle" depth="0">Dashboards</span>
                                    <span size="18" className="badge-sidebar-primary badge">5</span>
                                    <div></div>
                                </a>
                                <ul className="sidebar-dropdown list-unstyled collapse show">
                                    <li className="sidebar-item">
                                        <a depth="1" activeclassname="active" className="sidebar-link" href="/dashboard/default">
                                            <span className="align-middle" depth="1">Default</span>
                                        </a>
                                    </li>
                                    <li className="sidebar-item">
                                        <a depth="1" activeclassname="active" aria-current="page" className="sidebar-link active" href="/dashboard/analytics">
                                            <span className="align-middle" depth="1">Analytics</span>
                                        </a>
                                    </li>
                                    <li className="sidebar-item">
                                        <a depth="1" activeclassname="active" className="sidebar-link" href="/dashboard/saas">
                                            <span className="align-middle" depth="1">SaaS</span>
                                        </a>
                                    </li>
                                    <li className="sidebar-item">
                                        <a depth="1" activeclassname="active" className="sidebar-link" href="/dashboard/social">
                                            <span className="align-middle" depth="1">Social</span>
                                        </a>
                                    </li>
                                    <li className="sidebar-item">
                                        <a depth="1" activeclassname="active" className="sidebar-link" href="/dashboard/crypto">
                                            <span className="align-middle" depth="1">Crypto</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="main">main</div>
        </div>
    )
}
