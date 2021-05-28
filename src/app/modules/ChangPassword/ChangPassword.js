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
			<Grid item xs={12} lg={3}>
          <FormikTextField
            formik={formik}
            name="test"
            label="Test"
            required
          />
        </Grid>
			<FormikCheckBox></FormikCheckBox>
			<ViewButton></ViewButton>
		</Grid>
	)
}

export default ChangPassword
