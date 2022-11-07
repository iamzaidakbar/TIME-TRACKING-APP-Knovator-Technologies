import './form.css'
import {useContext} from "react";
import apiContext from "../../context/apiContext";

export default function Form() {

	const {
		title,
		desc,
		style,
		cancel,
		saveTask,
		handleTitle,
		handleDesc,
	} = useContext(apiContext)

	return (<>
			{/* FORM */}
			<form style={style}>
				<div className="form-group py-2">
					<label>Title</label>
					<input id="title" type="text" onChange={handleTitle} className="form-control form-control-sm"
					       placeholder="Title" value={title}/>
				</div>
				<div className="form-group py-2">
					<label>Description</label>
					<input id="description" type="text" onChange={handleDesc} className=" form-control form-control-sm"
					       placeholder="Description" value={desc}/>
				</div>
				<div className="d-flex pt-2 gap-2">
					<button disabled={title.length < 1 || desc.length < 1}
					        className="btn btn-sm rounded-0 btn-primary w-100"
					        onClick={saveTask}>Save
					</button>
					<button className="btn btn-sm btn-danger rounded-0 w-100" onClick={cancel}>Cancel</button>
				</div>
			</form>
			{/* FORM */}
		</>)
}