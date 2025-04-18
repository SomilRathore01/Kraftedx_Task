import { SignedIn } from "@clerk/nextjs"

const Dashboard = () => {
    return (
        <SignedIn>
            <div className='h-screen w-full flex items-center justify-center'>
                <h2 className='font-bold text-3xl'>
                    Dashboard
                </h2>
            </div>
        </SignedIn>
    )
}

export default Dashboard