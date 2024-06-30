"use client"
import { useUserAuth } from "./_utils/auth-context";

 



const Page = () => {
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
    const handleGitHubSignIn = async () => {
        try {
            await gitHubSignIn();
        } catch(error) {
            console.error("Error singing in with github:", error)
        }
    }

    const handleFirebaseSignOut = async () => {
        try {
            await firebaseSignOut();
        } catch(error) {
            //this shouldn't happen I believe, unless somehow someone tries to log out without being logged in
            console.error("Error signing out:", error)
        }
    }



    return (
        <main className="bg-violet-950 flex-1">
            <div className="p-3 text-violet-50">
                {user ? (
                    <div>
                    <h1> Hello, {user.displayName}</h1>
                    <button onClick={handleFirebaseSignOut} className="p-2"> Sign out</button>
                    </div>
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