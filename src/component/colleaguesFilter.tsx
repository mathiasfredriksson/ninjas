import React from 'react'

interface Props {
	orderByField:String
	setOrderByField:any,
	setSearchTerm:any
}

const Filter = (props:Props) => {

	return <div className='colleague-filter'>
		<form>
			<label>
				<input
					className='radio'
					type="radio"
					value="Name"
					checked={ props.orderByField === 'name' }
					onChange={ () => {
						props.setOrderByField('name')
					} }
				/>
				<span className='radio-label'>Name</span>
			</label>
			<label>
				<input
					type="radio"
					value="Email"
					checked={ props.orderByField === 'office' }
					onChange={ () => {
						props.setOrderByField('office')
					} }
				/>
				<span className='radio-label'>Office</span>
			</label>
			<label>
				<input
					className='search'
					placeholder='Search'
					type="text"
					name="name"
					onChange={ e => {
						props.setSearchTerm(e.target.value)
					} }
				/>
			</label>
		</form>
	</div>
}

export default Filter;
