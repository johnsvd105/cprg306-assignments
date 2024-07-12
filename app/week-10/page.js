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
        <main className="bg-violet-950 h-screen">
            <div className="p-3 text-violet-50">
                    {user ? (
                        <div className="flex-col m-2">
                        <h1 className="font-bold text-xl"> Signed in as {user.displayName} ({user.email})</h1>
                        <h2 className="text-lg">
                            <a className="hover:underline" href="/week-8/shopping-list">continue to your shopping list</a>
                        </h2>
                        <button onClick={handleFirebaseSignOut} className="bg-blue-600 p-2 mt-4 rounded-lg hover:bg-blue-700"> Sign out</button>
                        </div>
                    ) : (
                        <div className="flex-col m-2"> 
                            <h1 className="font-bold text-xl">Sign in with github</h1>
                            <button onClick={handleGitHubSignIn} className="bg-blue-600 p-2 mt-4 rounded-lg hover:bg-blue-700"> Sign in</button>
                        </div>
                    )}
            </div>   
        </main>
    )
}

export default Page;