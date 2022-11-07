import './time.css'
import {useContext} from "react";
import apiContext from "../../context/apiContext";

export default function Time() {

	const {
		hour,
		setSaveState,
		minute,
		second,
		millisecond,
		timer_id,
		playTimer,
		stopTimer,
		openModal,
		reset,
	} = useContext(apiContext)

	return (<>
			<h1>{hour < 10 ? '0' + hour : hour} : {minute < 10 ? '0' + minute : minute}: {second < 10 ? '0' + second : second}: {millisecond < 10 ? '0' + millisecond : millisecond}</h1>
			<div className="buttons d-flex justify-content-center py-4 gap-3">
				<button disabled={!!timer_id} className="btn btn-sm btn-dark" onClick={playTimer}>Play</button>
				<button disabled={!timer_id} className="btn btn-sm btn-dark" onClick={stopTimer}>Pause</button>
				<button disabled={setSaveState} className="btn btn-sm btn-warning" onClick={openModal}>Save</button>
				<button disabled={setSaveState} className="btn btn-sm btn-danger" onClick={reset}>Reset</button>
			</div>
		</>)
}