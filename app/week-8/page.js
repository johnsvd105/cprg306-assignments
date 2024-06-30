"use client"
import { useUserAuth } from "./_utils/auth-context";

 



const Page = () => {
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
    const handleGitHubSignIn = async () => {
        try {
            console.log("testing")
            await gitHubSignIn();
        } catch(error) {
            console.error("Error singing in with github:", error)
        }
    }



    return (
        <main className="bg-violet-950 flex-1">
            <div>
                {user ? (
                    <p>Hello, {user.displayName}</p>
                ) : (
                    <div>
                        <h1>Sign in with github</h1>
                        <button onClick={handleGitHubSignIn} className="p-2"> Sign in</button>
                    </div>
                )}
            </div>   
        </main>
    )
}

export default Page;