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
					type="radio"
					value="Name"
					checked={ props.orderByField === 'name' }
					onChange={ () => {
						props.setOrderByField('name')
					} }
				/>
				Name
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
				Office
			</label>
			<label>
				Search:
				<input type="text" name="name" onChange={ e => {
					props.setSearchTerm(e.target.value)
				} } />
			</label>
		</form>
	</div>
}

export default Filter;
