import React from 'react'

interface Props {
	orderByField: String
	setOrderByField: any,
	setSearchTerm: any,
	setUseListStyle: any,
	useListStyle: boolean
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
				<span className='form-label'>Name</span>
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
				<span className='form-label'>Office</span>
			</label>
			<label>
				<input
					type="checkbox"
					value="List"
					checked={ props.useListStyle }
					onChange={ () => {
						props.setUseListStyle(!props.useListStyle)
					} }
				/>
				<span className='form-label'>List style</span>
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
