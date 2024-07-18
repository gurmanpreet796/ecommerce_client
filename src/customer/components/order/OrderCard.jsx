// OrderCard.jsx
import { Grid } from '@mui/material';
import React from 'react';
import AdjustIcon from '@mui/icons-material/Adjust';
import { useNavigate } from 'react-router-dom';

const OrderCard = () => {
    const navigate=useNavigate()
  return (
    <div  onClick={()=>navigate(`/account/order/${5}`)} className='p-5 shadow-md shadow-black hover:shadow-2xl border mb-4'>
        <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
            <Grid item xs={6}>
                <div className='flex cursor-pointer'>
                    <img
                        className='w-[5rem] h-[5rem] object-cover object-top'
                        src="https://rukminim2.flixcart.com/image/612/612/xif0q/trouser/c/3/q/28-kttwomenspant514-kotty-original-imahybw2zgywu6kj.jpeg?q=70"
                        alt=""
                    />
                    <div className='ml-5 space-y-2'>
                        <p className='font-semibold'>Men Slim Mid Rise Black Jeans</p>
                        <p className='opacity-50 text-xs font-semibold'>Size: M</p>
                        <p className='opacity-50 text-xs font-semibold'>Color: Black</p>
                    </div>
                </div>
            </Grid>
            <Grid item xs={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <p className='font-semibold'>₹1099</p>
                {true &&
                <div>
                    <p className='flex items-center text-sm'>
                        <AdjustIcon sx={{ width: "15px", height: "15px" }} className='text-green-600 mr-2' />
                        <span>Delivered on March 02</span>
                    </p>
                    <p className='text-xs opacity-50'>
                        Your Item Has Been Delivered
                    </p>
                </div>}
            </Grid>
        </Grid>
    </div>
  );
}

export default OrderCard;
