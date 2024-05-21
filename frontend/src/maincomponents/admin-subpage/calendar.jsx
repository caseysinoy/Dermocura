import React, {useState, useEffect} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FormLabel from 'react-bootstrap/esm/FormLabel';
import List from 'react-bootstrap/esm/ListGroup';
import Calendar from 'react-calendar';
import Container from 'react-bootstrap/Container';
import data from '../../assets/data.json'
import axios from 'axios';
import momemt from 'moment';
import '../style/calendar.scss';
import 'react-calendar/dist/Calendar.css';

function calendar(){

	const [item, setItem] = useState([]);
	const [datePick, setDatePick] = useState(new Date());
	const [firstInputHour, setFirstInputHour] = useState('');
	const [secondInputHour, setSecondInputHour] = useState('');
	const [radioValue, setRadioValue] = useState('');

	// There is a json file api that I am using to make fake data values called data.json
	useEffect(() =>{
		setItem(data);
	},[]);

	// this is for the admin to set up the time slots
	const onChangeF = (e) =>{
		setFirstInputHour(e.target.value);
	}

	const onChangeS = (e) =>{
		setSecondInputHour(e.target.value);
	}
	// admin can select which day value to add
	const handleRadioValue = (e) => {
		setRadioValue(e.target.value);
	  };

    const handleSubmit = (e) =>{
        e.preventDefault();

		const combine = firstInputHour + ' - ' + secondInputHour;

        const scheduling = {
            hours: combine,
            day: radioValue
        }
        axios.post("http://localhost:8081/schedule", scheduling)
        .then(res => console.log("data send" + res))
        .catch(err => console.log("data not send" + err))
    }

	let keys = Object.keys(item);
	console.log("Keys " + keys)
	let values = Object.values(item.map(dates => dates.dates)) // basically turns objects into value.
	console.log("dates " + values)

	return(
		<Container className='calendar-pad'>
			<h1>Calendar</h1>
			<Container className='calendar mb-5'>
				<Calendar 
					value={datePick}
					onChange={setDatePick}
					tileClassName={({ date }) => {
						const formatDate = momemt(date).format("M/D/YYYY");
						if (values.includes(formatDate)) {
							console.log("it is working")
						return 'hightlight';
						}
					}
					
				}
				
				/>

				<Container className='pSchedule mb-5'>
					{data.map(datas =>(
						<List  key={datas.id}>
							<List.Item>Id: {datas.id} <br /> 
							FirstName: {datas.first_name} <br />
							LastName:{datas.last_name} <br />
							date: {datas.dates}</List.Item>
						</List>
					))}
				</Container>
			</Container>

			<Form onSubmit={handleSubmit}>

				<Form.Group>
					<FormLabel>Time/Hours</FormLabel>
					<Form.Control type='time' value={firstInputHour} onChange={onChangeF} name="hour"/>
					<Form.Control type='time' value={secondInputHour} onChange={onChangeS} name="hour"/>
				</Form.Group>
				<Form.Group>
					<FormLabel>Check the days</FormLabel>
					<Form.Check type='radio' inline value="monday" checked={radioValue === 'monday'} onChange={handleRadioValue} label="Monday"/>
					<Form.Check	type='radio' inline value="tuesday" checked={radioValue === 'tuesday'} onChange={handleRadioValue} label="Tuesday"/>
					<Form.Check	type='radio' inline value="wednesday" checked={radioValue === 'wednesday'} onChange={handleRadioValue} label="Wednesday"/>
					<Form.Check	type='radio' inline value="thursday" checked={radioValue === 'thursday'} onChange={handleRadioValue} label="Thursday"/>
					<Form.Check	type='radio' inline value="friday" checked={radioValue === 'friday'} onChange={handleRadioValue} label="Friday"/>
					<Form.Check	type='radio' inline value="saturday" checked={radioValue === 'saturday'} onChange={handleRadioValue} label="Saturday"/>
					<Form.Check	type='radio' inline value="sunday" checked={radioValue === 'sunday'} onChange={handleRadioValue} label="Sunday"/>
				</Form.Group>
				<Button type='Submit'>Submit</Button>
			</Form>

		</Container>

	)
}

export default calendar;