import React from 'react'
import { Grid } from '@material-ui/core'
import FormikTextField from '../Common/components/CustomFormik/FormikTextField'
import FormikCheckBox from '../Common/components/CustomFormik/FormikCheckBox'
import ViewButton from '../Common/components/Buttons/ViewButton'

function ChangPassword() {
	return (
		<Grid
			container
			direction="row"
			justify="center"
			alignItems="center"
		>
			<FormikTextField></FormikTextField>
				<FormikTextField
					formik={formik}
					name="test7841254"
					label="Test"
					required
				/>
			<FormikCheckBox></FormikCheckBox>
			<ViewButton>View</ViewButton>
		</Grid>
	)
}

export default ChangPassword
