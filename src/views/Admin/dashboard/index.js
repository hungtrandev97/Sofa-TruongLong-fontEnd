import React from 'react'

export default function index() {
  return (
    <div>
      câcsc
    </div>
  )
}


// import React from 'react';
// import { withRouter, Switch, Route, Redirect } from 'react-router-dom';
// import { TransitionGroup, CSSTransition } from 'react-transition-group';
// import Base from '../../components/Layout/Base';
// import BasePage from '../../components/Layout/BasePage';
// import SingleView from '../../components/SingleView/SingleView';
// import SubMenu from '../../components/SubMenu/SubMenu';
// import Dashboard from './dashboard/index'

// const listofPages = [
// ];

// const Routes = ({ location }) => {
//     const currentKey = location.pathname.split('/')[1] || '/';
//     const timeout = { enter: 500, exit: 500 };
//     const animationName = 'rag-fadeIn'
//     if(listofPages.indexOf(location.pathname) > -1) {
//         return (
//             <BasePage>
//                 <Switch location={location}>
//                 </Switch>
//             </BasePage>
//         )
//     }
//     else {
//         return (
//             <Base>
//               <TransitionGroup>
//                 <CSSTransition key={currentKey} timeout={timeout} classNames={animationName} exit={false}>
//                     <div>
//                         <Switch location={location}>
//                             <Route path="/" exact component={SingleView}/>
//                             <Route path="/submenu" component={SubMenu}/>
//                         </Switch>
//                     </div>
//                 </CSSTransition>
//               </TransitionGroup>
//             </Base>
//         )
//     }
// }

// export default withRouter(Routes);