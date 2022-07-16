import Analytics from "./Analytics";
import Hero from "./Hero";


const Dashboard = () => {
    return (
        <>
            <main className="h-screen overflow-y-scroll scroll-style">
                <div className="w-10/12 lg:w-11/12 mr-auto ml-auto mt-[13vh]">
                    <Hero />
                    <Analytics totalNFTsSupply={'100'} totalClaimedSupply={'50'} totalUnClaimedSupply={'50'} />
                </div>
            </main>
        </>
    );
};

export default Dashboard;