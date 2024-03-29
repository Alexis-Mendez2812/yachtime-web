import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box, Button } from '@mui/material';
import swal from 'sweetalert';
import {
   getAllUsers,
   filterByRole,
   getAllProducts,
   deleteYate,
   filterByStats,
   authorize,
   desauthorize,
   banned,
   filterByStatsYach,
   filterByModelYach,
} from '../../Redux/Actions/actions';
import { Displayer } from './styledComponents';
import { Link } from 'react-router-dom';
import { Table } from 'semantic-ui-react';
import Fab from '@material-ui/core/Fab';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
// import ArrowCircleDown from "@material-ui/icons/ArrowCircleDown";
// import AdminPanelSettings from "@material-ui/icons/AdminPanelSettings";
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import DeleteIcon from '@material-ui/icons/Block';

const Admin = () => {
   const dispatch = useDispatch();

   const users = useSelector((state) => state.copyUsers);
   // let usersAll = usersList.ComicsReducer.copyUsers;
   const [statsNewUsers, setStatsNewUsers] = React.useState(0);
   const [, setStatsNewpayedUsers] = React.useState(0);
   const [statsInvoicing, setStatsInvoicing] = React.useState(0);

   const [showUsers, setShowUsers] = React.useState(false);
   let comics = useSelector((state) => state.copyYates);
   const [showComics, setShowComics] = React.useState(false);
   const createdComics = comics;

   const options = [
      { key: 'standar', text: 'Monthly', value: 1 },
      { key: 'premium', text: 'Annual', value: 2 },
      { key: 'inactive', text: 'Inactive', value: '' },
   ];

   useEffect(() => {
      dispatch(getAllUsers());
      dispatch(getAllProducts());
   }, [dispatch]);

   const handleFilter = (e) => {
      e.preventDefault();
      setShowUsers(true);
      dispatch(filterByRole(e.target.value));
   };
   const handleAll = (e) => {
      e.preventDefault();
      dispatch(getAllUsers());
      setShowUsers(!showUsers);
   };

   const handleShowComics = (e) => {
      e.preventDefault();
      setShowComics(!showComics);
   };

   const handledeleteYate = (id) => {
      dispatch(deleteYate(id));
   };
   const handleChangeUser = (email, action) => {
      switch (action) {
         case 'admin':
            return dispatch(authorize(email));

         case 'user':
            return dispatch(desauthorize(email));

         case 'banned':
            return dispatch(banned(email));

         default:
            return console.log('z');
      }
   };

   const invoice = () => {
      let planArr = users.filter((user) => user.plan_id);
      for (let i = 0; i < planArr.length; i++) {
         if (planArr[i].plan_id === 1) {
            setStatsInvoicing(statsInvoicing + 7);
         } else if (planArr[i].plan_id === 2) {
            setStatsInvoicing(statsInvoicing + 70);
         }
      }
      return statsInvoicing;
   };

   const handleFilterModel = (e) => {
      e.preventDefault();
      dispatch(filterByModelYach(e.target.value));
   };
   const handleFilterMonthYach = (e) => {
      e.preventDefault();
      dispatch(filterByStatsYach(e.target.value));
   };
   const handleFilterMonth = (e) => {
      e.preventDefault();
      dispatch(filterByStats(e.target.value));
      setStatsNewUsers(users.length);
      console.log(
         'en el habndler filter!!!!',
         users,
         e.target.value,
         typeof e.target.value
      );
      setStatsNewpayedUsers(
         users.filter((user) => user.role === 'ROLE_PRIME').length
      );
      setStatsInvoicing(invoice());
   };
   const handleFilterRole = (e) => {
      e.preventDefault();
      dispatch(filterByRole(e.target.value));
      setStatsNewUsers(users.length);
      console.log(
         'en el habndler filter!!!!',
         users,
         e.target.value,
         typeof e.target.value
      );
      setStatsNewpayedUsers(
         users.filter((user) => user.role === 'ROLE_PRIME').length
      );
      setStatsInvoicing(invoice());
   };

   return (
      <div
         style={{ backgroundColor: 'white', width: '100vw' }}
         class='ui teal header'
      >
         <Link to='/'>
            <Button
               style={{
                  backgroundColor: 'black',
                  color: 'white',
                  marginTop: '2rem',
                  marginLeft: '2rem',
               }}
            >
               HOME
            </Button>
         </Link>

         <h1 style={{ margin: '4rem', width: '40%' }} class='ui teal header'>
            Welcome to DASHBOARD
         </h1>

         <div>
            <h2 style={{ margin: '4rem', width: '40%' }} class='ui teal header'>
               USERS MENU
            </h2>

            <div>
               <div>
                  <select
                     onChange={handleFilterMonth}
                     style={{
                        fontSize: '22px',
                        margin: '1rem',
                        borderRadius: '20px',

                        boxShadow: '10px, white',
                        width: '40%',
                        padding: '1rem',
                     }}
                  >
                     <option value='all'>Filter by Month</option>
                     <option value='01'>January</option>
                     <option value='02'>February</option>
                     <option value='03'>March</option>
                     <option value='04'>April</option>
                     <option value='05'>May</option>
                     <option value='06'>June</option>
                     <option value='07'>July</option>
                     <option value='08'>Agost</option>
                     <option value='09'>September</option>
                     <option value='10'>October</option>
                     <option value='11'>November</option>
                     <option value='12'>December</option>
                  </select>
                  <select
                     onChange={handleFilterRole}
                     style={{
                        fontSize: '22px',
                        margin: '1rem',
                        borderRadius: '20px',

                        boxShadow: '10px, white',
                        width: '40%',
                        padding: '1rem',
                     }}
                  >
                     <option value='all'>Filter by Role</option>
                     <option value='ADMIN'>ADMIN</option>
                     <option value='PRIME'>PRIME</option>
                     <option value='USER'>USER</option>
                     <option value='BANNED'>BANNED</option>
                  </select>
               </div>
            </div>
            <Button
               onClick={handleAll}
               style={{
                  fontSize: '20px',
                  margin: '1rem',
                  width: '30%',
                  borderRadius: '20px',
                  borderColor: 'orange',
                  boxShadow: '10px, white',
               }}
            >
               Show all users
            </Button>

            <Table
               style={{ margin: '1rem', width: '70%' }}
               celled
               options={options}
               onChange={handleFilter}
            >
               <Table.Header>
                  <Table.Row>
                     <Table.HeaderCell>Firts Name</Table.HeaderCell>
                     <Table.HeaderCell>Last Name</Table.HeaderCell>
                     <Table.HeaderCell>User Name</Table.HeaderCell>
                     <Table.HeaderCell>email</Table.HeaderCell>
                     <Table.HeaderCell>Role</Table.HeaderCell>
                     <Table.HeaderCell>Create at</Table.HeaderCell>
                  </Table.Row>
               </Table.Header>

               {users === 'tabla vacía'
                  ? swal({
                       title: 'Not users yet',
                       icon: 'success',
                    })
                  : showUsers &&
                    users?.map((user) => {
                       return (
                          <Table.Row key={user.id}>
                             <Table.Cell>{user.firtsName}</Table.Cell>
                             <Table.Cell>{user.lastName}</Table.Cell>
                             <Table.Cell>{user.userName}</Table.Cell>
                             <Table.Cell>{user.email}</Table.Cell>
                             <Table.Cell>{user.role}</Table.Cell>
                             <Table.Cell>
                                {user.createdAt.substring(0, 10)}
                             </Table.Cell>
                             <Table.Cell>
                                <Fab color='primary' aria-label='delete'>
                                   <AdminPanelSettingsIcon
                                      onClick={() => {
                                         handleChangeUser(user.email, 'admin');
                                      }}
                                   />
                                </Fab>
                                <Fab color='secondary' aria-label='delete'>
                                   <ArrowCircleDownIcon
                                      onClick={() => {
                                         handleChangeUser(user.email, 'user');
                                      }}
                                   />
                                </Fab>
                                <Fab color='error' aria-label='delete'>
                                   <DeleteIcon
                                      onClick={() => {
                                         handleChangeUser(user.email, 'banned');
                                      }}
                                   />
                                </Fab>
                             </Table.Cell>
                          </Table.Row>
                       );
                    })}
            </Table>
         </div>

         <br />
         <br />
         <br />

         <Displayer>
            <div>
               <h2
                  style={{ margin: '4rem', width: '40%' }}
                  class='ui teal header'
               >
                  YACHTS MENU
               </h2>
               <div>
                  <select
                     onChange={handleFilterMonthYach}
                     style={{
                        fontSize: '22px',
                        margin: '1rem',
                        borderRadius: '20px',

                        boxShadow: '10px, white',
                        width: '40%',
                        padding: '1rem',
                     }}
                  >
                     <option value='all'>Filter by Month</option>
                     <option value='01'>January</option>
                     <option value='02'>February</option>
                     <option value='03'>March</option>
                     <option value='04'>April</option>
                     <option value='05'>May</option>
                     <option value='06'>June</option>
                     <option value='07'>July</option>
                     <option value='08'>Agost</option>
                     <option value='09'>September</option>
                     <option value='10'>October</option>
                     <option value='11'>November</option>
                     <option value='12'>December</option>
                  </select>
                  <select
                     onChange={handleFilterModel}
                     style={{
                        fontSize: '22px',
                        margin: '1rem',
                        borderRadius: '20px',

                        boxShadow: '10px, white',
                        width: '40%',
                        padding: '1rem',
                     }}
                  >
                     <option value='all'>Filter by Model</option>
                     <option value='49'>Up to 50'</option>
                     <option value='89'>50' to 90'</option>
                     <option value='90'>Over 90'</option>
                  </select>
               </div>

               <Button
                  onClick={handleShowComics}
                  style={{
                     fontSize: '20px',
                     margin: '1rem',
                     width: '30%',
                     borderRadius: '20px',
                     borderColor: 'orange',
                     boxShadow: '10px, white',
                  }}
               >
                  Show uploaded Yachts
               </Button>

               <Table
                  style={{ margin: '1rem', width: '70%' }}
                  celled
                  options={options}
               >
                  <Table.Header>
                     <Table.Row>
                        <Table.HeaderCell>Make</Table.HeaderCell>
                        <Table.HeaderCell>Model</Table.HeaderCell>
                        <Table.HeaderCell>Year</Table.HeaderCell>
                        <Table.HeaderCell>Cabins</Table.HeaderCell>
                        <Table.HeaderCell>Bathrooms</Table.HeaderCell>
                        <Table.HeaderCell>Guest</Table.HeaderCell>
                        <Table.HeaderCell>Length</Table.HeaderCell>
                        <Table.HeaderCell>Beam</Table.HeaderCell>
                        <Table.HeaderCell> Draft </Table.HeaderCell>
                        <Table.HeaderCell>FuelCap </Table.HeaderCell>
                        <Table.HeaderCell>WaterCap</Table.HeaderCell>
                        <Table.HeaderCell>CruiseVel</Table.HeaderCell>
                        <Table.HeaderCell>FuelType</Table.HeaderCell>
                        <Table.HeaderCell>CreateAt</Table.HeaderCell>
                     </Table.Row>
                  </Table.Header>

                  {!createdComics
                     ? alert('No yates yet')
                     : showComics &&
                       createdComics?.map((comic) => {
                          return (
                             <Table.Row key={comic.id}>
                                <Table.Cell>{`${comic.make}`}</Table.Cell>
                                <Table.Cell>{`${comic.model}'`}</Table.Cell>
                                <Table.Cell>{`${comic.year}`}</Table.Cell>
                                <Table.Cell>{`${comic.cabins}`}</Table.Cell>
                                <Table.Cell>{comic.bathrooms}</Table.Cell>
                                <Table.Cell>{`${comic.guests}`}</Table.Cell>
                                <Table.Cell>{`${comic.length[0]}' ${
                                   comic.length.length > 1 ? comic.length[1] : 0
                                }" `}</Table.Cell>
                                <Table.Cell>{`${comic.beam[0]}' ${
                                   comic.beam.length > 1 ? comic.beam[1] : 0
                                }"`}</Table.Cell>
                                <Table.Cell>{`${comic.draft[0]}' ${
                                   comic.draft.length > 1 ? comic.draft[1] : 0
                                }"`}</Table.Cell>
                                <Table.Cell>{`${comic.fuelCapacity} GAL`}</Table.Cell>
                                <Table.Cell>{`${comic.waterCapacity} GAL`}</Table.Cell>
                                <Table.Cell>{`${comic.cruiseVel} KNOTS`}</Table.Cell>
                                <Table.Cell>{`${
                                   comic.fuelType || 'gasoline'
                                }`}</Table.Cell>
                                <Table.Cell>
                                   {comic.createdAt.substring(0, 10)}
                                </Table.Cell>
                                <Table.Cell>
                                   <Fab color='secondary' aria-label='edit'>
                                      +
                                   </Fab>
                                   <Fab color='error' aria-label='delete'>
                                      <DeleteIcon
                                         onClick={() => {
                                            handledeleteYate(comic.id);
                                         }}
                                      />
                                   </Fab>
                                </Table.Cell>
                             </Table.Row>
                          );
                       })}
               </Table>
            </div>
         </Displayer>
      </div>
   );
};

export default Admin;
