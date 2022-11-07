import {useContext} from "react";
import Task from "../Task/task";
import apiContext from "../../context/apiContext";
import Form from "../Form/form";
import Time from "../Time/time";

export default function Container() {

	const {
		randomNumber,
		task,
	} = useContext(apiContext)


	return (<>
		{/*TIME*/}
		<Time/>
		{/*TIME*/}

		{/* FORM */}
		<Form/>
		{/* FORM */}

		{/*TASKS*/}
		<div className="d-flex gap-4 mt-5 justify-content-center flex-wrap">
			{task.length === 0 && <h2>No Saved Tasks!</h2>}
			{task.map(item => {
				return <Task key={randomNumber(12)} item={item}/>
			})}
		</div>
		{/*TASKS*/}
	</>)
}