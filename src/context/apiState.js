import apiContext from "./apiContext";
import {useState} from "react";

const ApiState = (props) => {

	// Generate Random Number for Keys
	function randomNumber(length) {
		let result = '';
		const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
		const charactersLength = characters.length;
		for (let i = 0; i < length; i++ ) {
			result += characters.charAt(Math.floor(Math.random() * charactersLength));
		}
		return result;
	}

	//States
	let [hour, setHour] = useState(0);
	const [setSaveState, setSetSaveState] = useState(true);
	let [minute, setMinute] = useState(0);
	let [second, setSecond] = useState(0);
	let [millisecond, setMillisecond] = useState(0);
	let [title, setTitle] = useState('');
	let [desc, setDesc] = useState('');
	const [timer_id, setTimer_id] = useState(null);
	const [style, setStyle] = useState({
		opacity: "0", right: '30%', zIndex: "-1"
	});
	//Saved Task
	let [task, setTask] = useState([]);

	// Plays Timer
	function playTimer() {
		setSetSaveState(false)
		const timer = setInterval(() => {
			if (millisecond === 59) {
				setSecond(second += 1)
				setMillisecond(millisecond = 0)
			}
			if (second === 59) {
				setSecond(second = 0)
				setMinute(minute += 1)
			}
			if (minute === 59) {
				setMinute(minute = 0)
				setHour(hour += 1)
			}
			setMillisecond(millisecond += 1)
		}, 17)
		setTimer_id(timer)
	}

	//Stops Timer
	function stopTimer() {
		setTimer_id(null)
		clearInterval(timer_id)
	}


	//Opens the modal When clicked on save
	function openModal() {
		if (setSaveState) {
			setSetSaveState(false)
		} else {
			setSetSaveState(true)
		}
		setStyle({
			display: "1", right: '15%', zIndex: "1"
		})
	}

	//Cancel Modal
	function cancel(e) {
		e.preventDefault()
		setTitle('')
		setDesc('')
		setStyle({
			opacity: "0", right: '30%', zIndex: "-1"
		})
		setSetSaveState(false)
	}

	//Saves the task
	function saveTask(e) {
		e.preventDefault()
		const getHour = hour
		const getMinute = minute
		const getSecond = second
		setTask(task.concat({
			title, desc, getHour, getMinute, getSecond
		}))
		setTitle('')
		setDesc('')
	}

	// Handle Title
	function handleTitle(e) {
		setTitle(e.target.value)
	}

	// Handle Description
	function handleDesc(e) {
		setDesc(e.target.value)
	}

	// Reset Timer
	function reset() {
		clearInterval(timer_id)
		setMillisecond(millisecond = 0)
		setSecond(second = 0)
		setMinute(minute = 0)
		setHour(hour = 0)
		setTimer_id(false)
	}


	return (<apiContext.Provider
		value={{
			setSaveState,
			millisecond,
			timer_id,
			second,
			minute,
			style,
			title,
			desc,
			hour,
			task,
			randomNumber,
			handleTitle,
			handleDesc,
			playTimer,
			stopTimer,
			openModal,
			saveTask,
			cancel,
			reset,

		}}>
		{props.children}
	</apiContext.Provider>)

}

export default ApiState;