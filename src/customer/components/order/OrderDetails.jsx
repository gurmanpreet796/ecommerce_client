import React from 'react';
import AddressCard from '../AddressCard/AddressCard';
import OrderTracker from './OrderTracker';
import { Grid, Box } from '@mui/material';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { deepPurple } from '@mui/material/colors';

const OrderDetails = () => {
  return (
    <div className='px-5 lg:px-20 pb-10'>
      <div>
        <h1 className='font-bold text-xl py-7'>Delivery Address</h1>
        <AddressCard />
      </div>

      <div className='py-10'>
        <OrderTracker activeStep={3} />
      </div>

      <Grid container spacing={2}>
        {[1, 1, 1, 1, 1].map((item, index) => (
          <Grid
            key={index}
            item
            container
            className='shadow-xl rounded-md p-5 border mb-5'
            sx={{ alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}
          >
            <Grid item xs={6}>
              <div className='flex items-center space-x-4'>
                <img
                  className='w-[5rem] h-[5rem] object-cover object-top'
                  src="https://rukminim2.flixcart.com/image/612/612/xif0q/trouser/c/3/q/28-kttwomenspant514-kotty-original-imahybw2zgywu6kj.jpeg?q=70"
                  alt=""
                />
                <div className='space-y-2 ml-5'>
                  <p className='font-semibold'>Lorem ipsum dolor sit amet.</p>
                  <p className='space-x-5 opacity-50 text-xs font-semibold'>
                    <span>Color: pink</span> <span>Size: M</span>
                  </p>
                  <p>Seller: linaria</p>
                </div>
              </div>
            </Grid>
            <Grid item>
              <Box sx={{ color: deepPurple[500] }}>
                <StarBorderIcon sx={{ fontSize: "2rem" }} className='px-2' />
                <span>Rate & Review Product</span>
              </Box>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default OrderDetails;
