import React from "react";
import NewProduct from "../../../../../NewProduct/NewProduct";

export const ButtonEdit = ({ yate }) => {
	return (
		<>
			<button
				type="button"
				class="btn btn-primary"
				data-bs-toggle="modal"
				data-bs-target="#exampleModal"
			>
				Editar
			</button>
			<div
				class="modal modal-xl fade"
				id="exampleModal"
				tabindex="-1"
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
							<NewProduct
								make={yate.make}
								model={yate.model}
								year={yate.year}
								cabins={yate.cabins}
								bathrooms={yate.bathrooms}
								guest={yate.guest}
								length={yate.length}
								lengthUno={yate.lengthUno}
								lengthDos={yate.lengthDos}
								beam={yate.beam}
								beamUno={yate.beamUno}
								beamDos={yate.beamDos}
								draft={yate.draft}
								draftUno={yate.draftUno}
								draftDos={yate.draftDos}
								fuelCapacity={yate.fuelCapacity}
								waterCapacity={yate.waterCapacity}
								cruiseVel={yate.cruiseVel}
								location={yate.location}
								fuelType={yate.fuelType}
								description={yate.description}
								pictures={yate.pictures}
								isEdit={true}
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
