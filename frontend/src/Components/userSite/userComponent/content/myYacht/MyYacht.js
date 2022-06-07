import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import NewProduct from "../../../../NewProduct/NewProduct";
import { CardYate } from "./cardYate/CardYate";
import { allYates } from "../../../../../Redux/Actions/actions";
import { Link } from "react-router-dom";

import "./myYacht.css";

export const MyYacht = () => {
	const dispatch = useDispatch();
	const yates = useSelector((state) => {
		return state.allYates;
	});

	useEffect(() => {
		dispatch(allYates());
	}, [dispatch]);

	return (
		<div>
			{yates.length > 0 ? (
				<div className="div-b">
					<Link to="/userSite/newproduct">
						<div className=" btn btn-success">Create new Yacht</div>
					</Link>
					<div className="yacht-main">
						<h2>My Active Yatch</h2>
						<div className="card_yates_container">
							{yates?.map((yate) => (
								<CardYate key={yate.id} yate={yate} />
							))}
						</div>
					</div>
				</div>
			) : (
				<div className="myYatchNoYacth">
					<h2>You don't have any yacht yet.</h2>
					<p> do you want to add one?</p>
					<Link to="/userSite/newproduct">
						<div className=" btnData passwordColor">
							Create new Yacht
						</div>
					</Link>
				</div>
			)}

			<div
				class="modal modal-xl fade"
				id="exampleModal2"
				tabIndex="-1"
				aria-labelledby="exampleModalLabel"
				aria-hidden="true"
			>
				<div class="modal-dialog">
					<div class="modal-content">
						<div class="modal-header">
							<h5 class="modal-title" id="exampleModalLabel">
								Modal title
							</h5>
							<button
								type="button"
								class="btn-close"
								data-bs-dismiss="modal"
								aria-label="Close"
							></button>
						</div>
						<div class="modal-body">
							<NewProduct />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
	// <Link to="/userSite/newproduct">Crear nuevo yate</Link>;
};
