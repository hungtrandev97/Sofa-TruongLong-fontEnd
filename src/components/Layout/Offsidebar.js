import React, { Component } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';

import ToggleState from '../Common/ToggleState';
import LoadTheme from '../Common/LoadTheme';

class Offsidebar extends Component {

    state = {
        activeTab: 'settings',
        offsidebarReady: false
    }

    componentDidMount() {
        // When mounted display the offsidebar
        this.setState({ offsidebarReady: true });
    }

    toggle = tab => {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }

    handleCheckboxState = node => {
        if(!node) return;
        // use element 'name' attribute to check if a class was added to body
        // to activate checkbox or deactivate accordingly
        node.checked = document.body.className.indexOf(node.name) > -1
    }

    render() {

        return (
            this.state.offsidebarReady &&
            <aside className="offsidebar">
                { /* START Off Sidebar (right) */ }
                <nav>
                    <div>
                        { /* Nav tabs */ }
                        <Nav tabs justified>
                            <NavItem>
                                <NavLink href="#settingsapp" className={ this.state.activeTab === 'settings' ? 'active':'' }
                                    onClick={() => { this.toggle('settings'); }}
                                >
                                    <em className="icon-equalizer fa-lg"></em>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#chatapp" className={ this.state.activeTab === 'chat' ? 'active':'' }
                                    onClick={() => { this.toggle('chat'); }}
                                >
                                    <em className="icon-user fa-lg"></em>
                                </NavLink>
                            </NavItem>
                        </Nav>
                        { /* Tab panes */ }
                        <TabContent activeTab={this.state.activeTab}>
                            <TabPane tabId="settings">
                                <h3 className="text-center text-thin mt-4">Settings</h3>
                                <div className="p-2">
                                    <h4 className="text-muted text-thin">Themes</h4>
                                    <div className="row row-flush mb-2">
                                        <div className="col mb-2">
                                            <div className="setting-color">
                                                <LoadTheme theme="A">
                                                    <label>
                                                        <input type="radio" name="setting-theme"/>
                                                        <span className="icon-check"></span>
                                                        <span className="split">
                                                            <span className="color bg-info"></span>
                                                            <span className="color bg-info-light"></span>
                                                        </span>
                                                        <span className="color bg-white"></span>
                                                    </label>
                                                </LoadTheme>
                                            </div>
                                        </div>
                                        <div className="col mb-2">
                                            <div className="setting-color">
                                                <LoadTheme theme="B">
                                                    <label>
                                                        <input type="radio" name="setting-theme"/>
                                                        <span className="icon-check"></span>
                                                        <span className="split">
                                                            <span className="color bg-green"></span>
                                                            <span className="color bg-green-light"></span>
                                                        </span>
                                                        <span className="color bg-white"></span>
                                                    </label>
                                                </LoadTheme>
                                            </div>
                                        </div>
                                        <div className="col mb-2">
                                            <div className="setting-color">
                                                <LoadTheme theme="C">
                                                    <label>
                                                        <input type="radio" name="setting-theme"/>
                                                        <span className="icon-check"></span>
                                                        <span className="split">
                                                            <span className="color bg-purple"></span>
                                                            <span className="color bg-purple-light"></span>
                                                        </span>
                                                        <span className="color bg-white"></span>
                                                    </label>
                                                </LoadTheme>
                                            </div>
                                        </div>
                                        <div className="col mb-2">
                                            <div className="setting-color">
                                                <LoadTheme theme="D">
                                                    <label>
                                                        <input type="radio" name="setting-theme"/>
                                                        <span className="icon-check"></span>
                                                        <span className="split">
                                                            <span className="color bg-danger"></span>
                                                            <span className="color bg-danger-light"></span>
                                                        </span>
                                                        <span className="color bg-white"></span>
                                                    </label>
                                                </LoadTheme>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row row-flush mb-2">
                                        <div className="col mb-2">
                                            <div className="setting-color">
                                                <LoadTheme theme="E">
                                                    <label>
                                                        <input type="radio" name="setting-theme"/>
                                                        <span className="icon-check"></span>
                                                        <span className="split">
                                                            <span className="color bg-info-dark"></span>
                                                            <span className="color bg-info"></span>
                                                        </span>
                                                        <span className="color bg-gray-dark"></span>
                                                    </label>
                                                </LoadTheme>
                                            </div>
                                        </div>
                                        <div className="col mb-2">
                                            <div className="setting-color">
                                                <LoadTheme theme="F">
                                                    <label>
                                                        <input type="radio" name="setting-theme"/>
                                                        <span className="icon-check"></span>
                                                        <span className="split">
                                                            <span className="color bg-green-dark"></span>
                                                            <span className="color bg-green"></span>
                                                        </span>
                                                        <span className="color bg-gray-dark"></span>
                                                    </label>
                                                </LoadTheme>
                                            </div>
                                        </div>
                                        <div className="col mb-2">
                                            <div className="setting-color">
                                                <LoadTheme theme="G">
                                                    <label>
                                                        <input type="radio" name="setting-theme"/>
                                                        <span className="icon-check"></span>
                                                        <span className="split">
                                                            <span className="color bg-purple-dark"></span>
                                                            <span className="color bg-purple"></span>
                                                        </span>
                                                        <span className="color bg-gray-dark"></span>
                                                    </label>
                                                </LoadTheme>
                                            </div>
                                        </div>
                                        <div className="col mb-2">
                                            <div className="setting-color">
                                                <LoadTheme theme="H">
                                                    <label>
                                                        <input type="radio" name="setting-theme"/>
                                                        <span className="icon-check"></span>
                                                        <span className="split">
                                                            <span className="color bg-danger-dark"></span>
                                                            <span className="color bg-danger"></span>
                                                        </span>
                                                        <span className="color bg-gray-dark"></span>
                                                    </label>
                                                </LoadTheme>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-2">
                                    <h4 className="text-muted text-thin">Layout</h4>
                                    <div className="clearfix">
                                        <p className="float-left">Fixed</p>
                                        <div className="float-right">
                                            <label className="switch">
                                                <ToggleState state="layout-fixed">
                                                    <input id="chk-fixed" type="checkbox" name="layout-fixed" ref={this.handleCheckboxState}/>
                                                </ToggleState>
                                                <span></span>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="clearfix">
                                        <p className="float-left">Boxed</p>
                                        <div className="float-right">
                                            <label className="switch">
                                                <ToggleState state="layout-boxed">
                                                    <input id="chk-boxed" type="checkbox" name="layout-boxed" ref={this.handleCheckboxState}/>
                                                </ToggleState>
                                                <span></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-2">
                                    <h4 className="text-muted text-thin">Aside</h4>
                                    <div className="clearfix">
                                        <p className="float-left">Collapsed</p>
                                        <div className="float-right">
                                            <label className="switch">
                                                <ToggleState state="aside-collapsed">
                                                    <input id="chk-collapsed" type="checkbox" name="aside-collapsed" ref={this.handleCheckboxState}/>
                                                </ToggleState>
                                                <span></span>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="clearfix">
                                        <p className="float-left">Collapsed Text</p>
                                        <div className="float-right">
                                            <label className="switch">
                                                <ToggleState state="aside-collapsed-text">
                                                    <input id="chk-collapsed-text" type="checkbox" name="aside-collapsed-text" ref={this.handleCheckboxState}/>
                                                </ToggleState>
                                                <span></span>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="clearfix">
                                        <p className="float-left">Float</p>
                                        <div className="float-right">
                                            <label className="switch">
                                                <ToggleState state="aside-float">
                                                    <input id="chk-float" type="checkbox" name="aside-float" ref={this.handleCheckboxState}/>
                                                </ToggleState>
                                                <span></span>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="clearfix">
                                        <p className="float-left">Hover</p>
                                        <div className="float-right">
                                            <label className="switch">
                                                <ToggleState state="aside-hover">
                                                    <input id="chk-hover" type="checkbox" name="aside-hover" ref={this.handleCheckboxState}/>
                                                </ToggleState>
                                                <span></span>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="clearfix">
                                        <p className="float-left">Show Scrollbar</p>
                                        <div className="float-right">
                                            <label className="switch">
                                                <ToggleState state="show-scrollbar" target=".sidebar">
                                                    <input id="chk-hover" type="checkbox" name="show-scrollbar" ref={this.handleCheckboxState}/>
                                                </ToggleState>
                                                <span></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </TabPane>
                            <TabPane tabId="chat">
                                <h3 className="text-center text-thin mt-4">Connections</h3>
                                <div className="list-group">
                                    { /* START list title */ }
                                    <div className="list-group-item border-0">
                                        <small className="text-muted">ONLINE</small>
                                    </div>
                                    { /* END list title */ }
                                    <div className="list-group-item list-group-item-action border-0">
                                        <div className="media">
                                            <img className="align-self-center mr-3 rounded-circle thumb48" src="img/user/05.jpg" alt="User avatar" />
                                            <div className="media-body text-truncate">
                                                <a href="">
                                                    <strong>Juan Sims</strong>
                                                </a>
                                                <br/>
                                                <small className="text-muted">Designeer</small>
                                            </div>
                                            <div className="ml-auto">
                                                <span className="circle bg-success circle-lg"></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="list-group-item list-group-item-action border-0">
                                        <div className="media">
                                            <img className="align-self-center mr-3 rounded-circle thumb48" src="img/user/06.jpg" alt="User avatar" />
                                            <div className="media-body text-truncate">
                                                <a href="">
                                                    <strong>Maureen Jenkins</strong>
                                                </a>
                                                <br/>
                                                <small className="text-muted">Designeer</small>
                                            </div>
                                            <div className="ml-auto">
                                                <span className="circle bg-success circle-lg"></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="list-group-item list-group-item-action border-0">
                                        <div className="media">
                                            <img className="align-self-center mr-3 rounded-circle thumb48" src="img/user/07.jpg" alt="User avatar" />
                                            <div className="media-body text-truncate">
                                                <a href="">
                                                    <strong>Billie Dunn</strong>
                                                </a>
                                                <br/>
                                                <small className="text-muted">Designeer</small>
                                            </div>
                                            <div className="ml-auto">
                                                <span className="circle bg-danger circle-lg"></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="list-group-item list-group-item-action border-0">
                                        <div className="media">
                                            <img className="align-self-center mr-3 rounded-circle thumb48" src="img/user/08.jpg" alt="User avatar" />
                                            <div className="media-body text-truncate">
                                                <a href="">
                                                    <strong>Tomothy Roberts</strong>
                                                </a>
                                                <br/>
                                                <small className="text-muted">Designeer</small>
                                            </div>
                                            <div className="ml-auto">
                                                <span className="circle bg-warning circle-lg"></span>
                                            </div>
                                        </div>
                                    </div>
                                    { /* START list title */ }
                                    <div className="list-group-item border-0">
                                        <small className="text-muted">OFFLINE</small>
                                    </div>
                                    { /* END list title */ }
                                    <div className="list-group-item list-group-item-action border-0">
                                        <div className="media">
                                            <img className="align-self-center mr-3 rounded-circle thumb48" src="img/user/09.jpg" alt="User avatar" />
                                            <div className="media-body text-truncate">
                                                <a href="">
                                                    <strong>Lawrence Robinson</strong>
                                                </a>
                                                <br/>
                                                <small className="text-muted">Designeer</small>
                                            </div>
                                            <div className="ml-auto">
                                                <span className="circle bg-warning circle-lg"></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="list-group-item list-group-item-action border-0">
                                        <div className="media">
                                            <img className="align-self-center mr-3 rounded-circle thumb48" src="img/user/10.jpg" alt="User avatar" />
                                            <div className="media-body text-truncate">
                                                <a href="">
                                                    <strong>Tyrone Owens</strong>
                                                </a>
                                                <br/>
                                                <small className="text-muted">Designeer</small>
                                            </div>
                                            <div className="ml-auto">
                                                <span className="circle bg-warning circle-lg"></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="px-3 py-4 text-center">
                                    { /* Optional link to list more users */ }
                                    <a className="btn btn-purple btn-sm" href="" title="See more contacts">
                                        <strong>Load more..</strong>
                                    </a>
                                </div>
                                { /* Extra items */ }
                                <div className="px-3 py-2">
                                    <p>
                                        <small className="text-muted">Tasks completion</small>
                                    </p>
                                    <div className="progress progress-xs m-0">
                                        <div className="progress-bar bg-success" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{width: '80%'}}>
                                            <span className="sr-only">80% Complete</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="px-3 py-2">
                                    <p>
                                        <small className="text-muted">Upload quota</small>
                                    </p>
                                    <div className="progress progress-xs m-0">
                                        <div className="progress-bar bg-warning" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style={{width: '40%'}}>
                                            <span className="sr-only">40% Complete</span>
                                        </div>
                                    </div>
                                </div>
                            </TabPane>
                        </TabContent>
                    </div>
                </nav>
                { /* END Off Sidebar (right) */ }
            </aside>
        );
    }

}

export default Offsidebar;
