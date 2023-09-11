"use client"
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';

const Auth = ({ children }) => {
    const router = useRouter();
    const datta = useSelector((state) => state.auth.iscollapse);
    console.log("datta", datta);

    // Your authentication logic here
    const isAuthenticated = datta; // Replace with your actual authentication check

    if (!isAuthenticated) {
        router.push('/auth/login'); // Redirect to login page if not authenticated
        return null;
    }

    return children;
};

export default Auth