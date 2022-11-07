import './heading.css'

export default function Heading(props){
	return(
		<>
			<div className="text-center py-2">
				<h3>{props.text}</h3>
			</div>
		</>
	)
}