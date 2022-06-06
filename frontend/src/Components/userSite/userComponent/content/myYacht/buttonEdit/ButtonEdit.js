import React from "react";
import NewProduct from "../../../../../NewProduct/NewProduct";

export const ButtonEdit = ({ yate }) => {
	return (
		<>
			<button
				type="button"
				class="btn btn-primary"
				data-bs-toggle="modal"
				data-bs-target={`#${yate.id}`}
			>
				Editar
			</button>
			<div
				class="modal modal-xl fade"
				id={yate.id}
				tabindex="-1"
				aria-labelledby="exampleModalLabel"
				aria-hidden="true"
			>
				<div class="modal-dialog">
					<div class="modal-content">
						<div class="modal-header">
							<h5 class="modal-title" id="exampleModalLabel">
								Edit Yacht
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
								editId={yate.id}
								editmake={yate.make}
								editmodel={yate.model}
								edityear={yate.year}
								editcabins={yate.cabins}
								editbathrooms={yate.bathrooms}
								editguest={yate.guest}
								editlength={yate.length}
								editlengthUno={yate.lengthUno}
								editlengthDos={yate.lengthDos}
								editbeam={yate.beam}
								editbeamUno={yate.beamUno}
								editbeamDos={yate.beamDos}
								editdraft={yate.draft}
								editdraftUno={yate.draftUno}
								editdraftDos={yate.draftDos}
								editfuelCapacity={yate.fuelCapacity}
								editwaterCapacity={yate.waterCapacity}
								editcruiseVel={yate.cruiseVel}
								editlocation={yate.location}
								editfuelType={yate.fuelType}
								editdescription={yate.description}
								editpictures={yate.pictures}
								isEdit={true}
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
