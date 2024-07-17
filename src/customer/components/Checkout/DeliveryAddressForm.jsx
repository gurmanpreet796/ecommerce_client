import React from 'react';
import { Grid, Button, TextField, Box } from '@mui/material';
import AddressCard from '../AddressCard/AddressCard'; // Adjust path if necessary

const DeliveryAddressForm = () => {
  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log("address")
    const data =new FormData(e.currentTarget);
    const address={
      firstName:data.get("firstName"),
      lastName:data.get("lastName"),
        streetAddress:data.get("address"),
        city:data.get("city"),
        state:data.get("state"),
        zipCode:data.get("zip"),
        mobile:data.get("phoneNumber")
    }
    console.log("addresss",data)

  }
  return (
    <div>
      <Grid container spacing={4}>
        {/* Left Grid for AddressCard and Deliver Here Button */}
        <Grid item xs={12} lg={5}>
          <Box className="border rounded-e-md shadow-md h-full overflow-y-scroll">
            <div className="p-5 py-7 border-b cursor-pointer">
              <AddressCard />
              <Button
                sx={{ mt: 2, bgcolor: 'RGB(145 85 253)' }}
                size="large"
                variant="contained"
              >
                Deliver Here
              </Button>
            </div>
          </Box>
        </Grid>

        {/* Right Grid for Form Fields */}
        <Grid item xs={12} lg={7}>
          <Box className="border rounded-s-md shadow-md p-5 h-full">
            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="firstName"
                    name="firstName"
                    label="First Name"
                    fullWidth
                    autoComplete="given-name"
                    sx={{ mb: 2 }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="lastName"
                    name="lastName"
                    label="Last Name"
                    fullWidth
                    autoComplete="family-name"
                    sx={{ mb: 2 }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    id="address"
                    name="address"
                    label="Address"
                    fullWidth
                    autoComplete="shipping street-address"
                    multiline
                    rows={4}
                    sx={{ mb: 2 }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="city"
                    name="city"
                    label="City"
                    fullWidth
                    autoComplete="shipping address-level2"
                    sx={{ mb: 2 }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="state"
                    name="state"
                    label="State"
                    fullWidth
                    autoComplete="shipping address-level1"
                    sx={{ mb: 2 }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="zip"
                    name="zip"
                    label="Zip/Postal Code"
                    fullWidth
                    autoComplete="shipping postal-code"
                    sx={{ mb: 2 }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="phoneNumber"
                    name="phoneNumber"
                    label="Phone Number"
                    fullWidth
                    autoComplete="tel"
                    sx={{ mb: 2 }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Button
                    sx={{ mt: 2, bgcolor: 'RGB(145 85 253)' }}
                    size="large"
                    variant="contained"
                    type="submit"
                  >
                    Deliver Here
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default DeliveryAddressForm;
