import React from "react";
import NewProduct from "../../../../../NewProduct/NewProduct";

export const ButtonEdit = ({ yate }) => {
	return (
		<>
			
			<div
				className="modal modal-xl fade"
				id={yate.id}
				tabindex="-1"
				aria-labelledby="exampleModalLabel"
				aria-hidden="true"
			>
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title" id="exampleModalLabel">
								Edit Yacht
							</h5>
							<button
								type="button"
								className="btn-close"
								data-bs-dismiss="modal"
								aria-label="Close"
							></button>
						</div>
						
							<NewProduct
								yate={yate}
							/>
						
					</div>
				</div>
			</div>
		</>
	);
};
