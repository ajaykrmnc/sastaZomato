import React from 'react'
import { useState } from 'react';
import {
    Flex,
    Box,
    Button,
  } from '@chakra-ui/react';

function CategoriesItems(props) {
    
    
    const [cateogry,setCateogry]= useState(props.exactCateogry);

    return (
        <Flex flexWrap='wrap' justifyContent='center' alignItems='center' m='5'>
          {props.uniqueCategory.map((item,index) =>(
        <Box key={index} m={1} p={1} >
             <Button color={'white'} onClick={()=>props.switchCateogry({item})} bg={props.styleAColorHex}>
        {item}  
        </Button>
       
       
         </Box>    
          ))} 
        </Flex>
    )
}

export default CategoriesItems