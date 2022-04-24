const authError=(errorCode)=>{
    switch(errorCode){
        case 'auth/invalid-email':
            return 'The provided value for the email user property is invalid. It must be a string email address.'
        case 'auth/email-already-exists':
            return 'The provided email is already in use by an existing user. Each user must have a unique email.'
        case 'auth/user-not-found':
            return 'There is no existing user record corresponding to the provided identifier.'
        case 'auth/wrong-password':
            return 'Wrong Password.'
        case 'auth/wrong-password':
            return 'Wrong Password.'

        default:
            return errorCode
    }
}


export default authError;