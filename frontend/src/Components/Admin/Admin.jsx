import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import swal from 'sweetalert';
import {
  getAllUsers,
  filterByRole,
  getAllProducts,
  deleteYate,
  filterByStats,
} from "../../Redux/Actions/actions";
import { Link } from "react-router-dom";
import { Table, Button } from "semantic-ui-react";
import Fab from "@material-ui/core/Fab";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import AddIcon from "@material-ui/icons/Add";


const Admin = () => {
  //CRUD COMICS

  
  const dispatch = useDispatch();

  const users  = useSelector((state) => state.copyUsers);
 // let usersAll = usersList.ComicsReducer.copyUsers;
  const [statsNewUsers, setStatsNewUsers] = React.useState(0);
  const [, setStatsNewpayedUsers] = React.useState(0);
  const [statsInvoicing, setStatsInvoicing] = React.useState(0);

  const [showUsers, setShowUsers] = React.useState(false);
  let comics = useSelector((state) => state.allYates);
  const [showComics, setShowComics] = React.useState(false);
  const createdComics = comics?.filter((comic) => comic.id === null);

  const options = [
    { key: "standar", text: "Monthly", value: 1 },
    { key: "premium", text: "Annual", value: 2 },
    { key: "inactive", text: "Inactive", value: "" },
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
    dispatch(getAllUsers())
    setShowUsers(!showUsers);
  };

  const handleShowComics = (e) => {
    e.preventDefault();
    setShowComics(!showComics);
  };

  const handledeleteYate = (id) => {
    dispatch(deleteYate(id));
    setShowComics(!showComics);
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

  const handleFilterMonth = (e) => {
    e.preventDefault();
    dispatch(filterByStats(e.target.value));
    setStatsNewUsers(users.length);
  console.log('en el habndler filter!!!!', users , e.target.value, typeof(e.target.value))  
    setStatsNewpayedUsers(
      users.filter((user) => user.role === "ROLE_PRIME").length
    );
    setStatsInvoicing(invoice());
  };

  return (
    <div style={{ backgroundColor:"white" }} class="ui teal header">
    
      <Button className="button">
        <Link to="/">
          HOME
        </Link>
      </Button>

      

      <h1 style={{ margin: "4rem", width: "40%" }} class="ui teal header">
        Welcome to DASHBOARD
      </h1>

      <div>
        <select
          onChange={handleFilterMonth}
          style={{
            fontSize: "22px",
            margin: "1rem",
            borderRadius: "20px",

            boxShadow: "10px, white",
            width: "40%",
            padding: "1rem",
          }}
        >
          <option value="all">Filter by Month</option>
          <option value="1">January</option>
          <option value="2">February</option>
          <option value="3">March</option>
          <option value="4">April</option>
          <option value="5">May</option>
          <option value="6">June</option>
          <option value="7">July</option>
          <option value="8">Agost</option>
          <option value="9">September</option>
          <option value="10">October</option>
          <option value="11">November</option>
          <option value="12">December</option>
        </select>
      </div>

      <div>
        <h2 style={{ margin: "4rem", width: "40%" }} class="ui teal header">
          USERS MENU
        </h2>

        <div>
          <select
            onChange={handleFilter}
            style={{
              fontSize: "22px",
              margin: "1rem",
              borderRadius: "20px",

              boxShadow: "10px, white",
              width: "40%",
              padding: "1rem",
            }}
          >
            <option value="all">Filter by Plan</option>
            <option value="1">Monthly</option>
            <option value="2">Annual</option>
            <option value="">Canceled</option>
          </select>
        </div>
        <Button
          onClick={handleAll}
          style={{
            fontSize: "20px",
            margin: "1rem",
            width: "30%",
            borderRadius: "20px",
            borderColor: "orange",
            boxShadow: "10px, white",
          }}
        >
          Show all users
        </Button>

        <Table
          style={{ margin: "1rem", width: "70%" }}
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
              <Table.HeaderCell>Id</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          {users === "tabla vacía"
            ?  swal({
              title:"Not users yet",
              icon: "success",
            })
            : showUsers &&
              users?.map((user) => {
                return (
                  <Table.Row  key ={user.id}>
                    <Table.Cell>
                      {user.name}
                    </Table.Cell>
                    <Table.Cell>{user.email}</Table.Cell>
                    <Table.Cell>{user.role}</Table.Cell>
                    <Table.Cell>{user.plan_id}</Table.Cell>
                    <Table.Cell>
                      <Fab color="secondary" aria-label="edit">
                       
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

      <div>
        <h2 style={{ margin: "4rem", width: "40%" }} class="ui teal header">
        YACHTS MENU
        </h2>

        <Button
          onClick={handleShowComics}
          style={{
            fontSize: "20px",
            margin: "1rem",
            width: "30%",
            borderRadius: "20px",
            borderColor: "orange",
            boxShadow: "10px, white",
          }}
        >
          Show uploaded Yachts
        </Button>

      

        <Table
          style={{ margin: "1rem", width: "70%" }}
          celled
          options={options}
        >
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>ID</Table.HeaderCell>
              <Table.HeaderCell>Make</Table.HeaderCell>
              <Table.HeaderCell>Model</Table.HeaderCell>
              <Table.HeaderCell>Year</Table.HeaderCell>
              <Table.HeaderCell>Cabins</Table.HeaderCell>
              <Table.HeaderCell>Bathrooms</Table.HeaderCell>
              <Table.HeaderCell>Guest</Table.HeaderCell>
              <Table.HeaderCell>Length</Table.HeaderCell>
              <Table.HeaderCell>Beam</Table.HeaderCell>
              <Table.HeaderCell>Draft</Table.HeaderCell>
              <Table.HeaderCell>Fuel Cap</Table.HeaderCell>
              <Table.HeaderCell>Water Cap</Table.HeaderCell>
              <Table.HeaderCell>Cruise Vel</Table.HeaderCell>
              <Table.HeaderCell>Location</Table.HeaderCell>
              <Table.HeaderCell>Fuel Type</Table.HeaderCell>
              <Table.HeaderCell>Description</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          {!createdComics
            ? alert("No yates yet")
            : showComics &&
              createdComics?.map((comic) => {
                return (
                  <Table.Row key={comic.idPrincipal}>
                    <Table.Cell>{comic.idPrincipal}</Table.Cell>
                    <Table.Cell>{comic.title}</Table.Cell>
                    <Table.Cell>{comic.img}</Table.Cell>
                    <Table.Cell>{comic.banner}</Table.Cell>
                    <Table.Cell>
                      <Fab color="secondary" aria-label="edit">
                       
                      </Fab>
                      <Fab color="error" aria-label="delete">
                        <DeleteIcon
                          onClick={() => {
                            handledeleteYate(comic.idPrincipal);
                          }}
                        />
                      </Fab>
                      
                     
                    </Table.Cell>
                  </Table.Row>
                );
              })}
        </Table>
      </div>
    </div>
  );
};

export default Admin;
