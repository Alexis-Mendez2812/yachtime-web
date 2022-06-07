import axios from "axios";

export const getAllProducts = () => {
	return (dispatch) => {
		axios("/product/all")
			.then((ans) => {
				return dispatch({ type: "ALL_YATES", payload: ans.data });
			})
			.catch((err) => console.log(err));
	};
};

export const getProductById = (id) => {
	return (dispatch) => {
		axios(`/products/detail/${id}`)
			.then((ans) => {
				return dispatch({ type: "GET_YATE_DETAIL", payload: ans.data });
			})
			.catch((err) => console.log(err));
	};
};

export const deleteYacht = (yateID) => {
	return (dispatch) => {
		axios
			.delete(`http://localhost:3000/products`, yateID)
			.then((data) => data.data)
			.catch((err) => console.log(err));
	};
};
