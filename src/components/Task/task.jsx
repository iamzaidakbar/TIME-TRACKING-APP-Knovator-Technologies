import './task.css'

export default function Task(props){
	return(
		<>
			<div className="task-modal">
				<p>Title : {props.item.title}</p>
				<p>Description : {props.item.desc}</p>
				<span className="d-flex">
						<p>Time: </p>
					{props.item.getHour > 0 && <p>{props.item.getHour} Hours</p>}
					{props.item.getMinute > 0 && <p>{props.item.getMinute} Minutes</p>}
					{props.item.getSecond > 0 && <p>{props.item.getSecond} Seconds</p>}
						</span>
			</div>
		</>
	)
}