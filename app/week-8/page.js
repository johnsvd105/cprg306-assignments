import { useUserAuth } from "./_utils/auth-context";
 



const Page = () => {
const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

    return (
        <div>
            <p>test</p>
        </div>
    )
}

export default Page;