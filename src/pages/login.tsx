import { Input } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import { Divider, AbsoluteCenter, Box } from '@chakra-ui/react'
import { Text, Link } from '@chakra-ui/react'
import { PhoneIcon, AddIcon, WarningIcon } from '@chakra-ui/icons'
import '../App.css'
import React from 'react'

const Login: React.FC = () => {
    return (
        <>  
            <Text fontSize='xl' mt={'5vh'} mb={'2vh'} textAlign={'center'}><b>Sign In</b></Text>
        
            <Box mt={'8vh'} gap={'3vh'} display={'flex'} flexDirection={'column'}>
                <Input placeholder='Enter your email' h='6dvh' />
                <Input placeholder='Enter your password' h='6dvh'/>
            </Box>
            <Box display='flex' justifyContent='flex-end' mt={'1rem'}>
                <Text color='blue.500'>Forgot password?</Text>
            </Box>
            <Button colorScheme='blue' size='lg' rounded={'full'} mt={'9vh'} w={'75dvw'} h= '6dvh'>Sign In</Button>
            <Box display='flex' justifyContent='center' mt={'1rem'} width={'75dvw'}>
                <Text>Dont have an account? <Link color='blue.500'>Sign up</Link></Text>
            </Box>

            <Box position='relative' padding='10' mt={'4dvh'}>
                <Divider />
                <AbsoluteCenter bg='white' px='4'>
                    <Text color={'gray.500'}>OR</Text>
                </AbsoluteCenter>
            </Box>

            <Box display={'flex'} flexDirection={'column'} position={'relative'} >
                <Button  className='login-oauth-button' bg='white' h= '6dvh'>Sign in with Google</Button>
                <Button  className='login-oauth-button' bg='white' h={'6dvh'}>Sign in with Facebook</Button>
            </Box>
        </>

        
    )
}

export default Login