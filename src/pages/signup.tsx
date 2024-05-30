import { Input, chakra } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import {  Box } from '@chakra-ui/react'
import { Checkbox } from '@chakra-ui/react'
import { Text, Link} from '@chakra-ui/react'
// import { PhoneIcon, AddIcon, WarningIcon } from '@chakra-ui/icons'
import '../App.css'
import React from 'react'



const SignUp: React.FC = () => {
    return (
        <>  
            <Text fontSize='xl' mt={'5vh'} mb={'2vh'} textAlign={'center'}><b>Sign Up</b></Text>
        
            <Box mt={'8vh'} gap={'2.5vh'} display={'flex'} flexDirection={'column'}>
                <Input placeholder='Enter your name' h='6dvh' />
                <Input placeholder='Enter your password' h='6dvh'/>
                <Input placeholder='Enter your password' h='6dvh'/>
            </Box>
            
                
                
            <Box mt={'4dvh'} display='flex' justifyContent='center'>
                <Checkbox alignItems='start'>
                    I agree to the healthcare <Link color='blue.500'>Terms of Service</Link> and <Link color='blue.500'>Privacy Policy</Link>
                </Checkbox>
            </Box>
                    
                    
           
            <Button colorScheme='blue' size='lg' rounded={'full'} mt={'31dvh'} w={'75dvw'} h= '6dvh'>Sign In</Button>
            <Box display='flex' justifyContent='center' mt={'1rem'} width={'75dvw'}>
                <Text>Dont have an account? <Link color='blue.500'>Sign up</Link></Text>
            </Box>
        </>

        
    )
}

export default SignUp;