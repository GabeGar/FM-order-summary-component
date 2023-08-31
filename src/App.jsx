import illustrationHero from "./assets/images/illustration-hero.svg";
import musicIcon from "./assets/images/icon-music.svg";

const App = () => {
    return (
        <div className="min-h-screen flex justify-center bg-mobileBg bg-contain bg-no-repeat px-8 py-12 sm:flex-col sm:items-center sm:bg-deskopBg bg-blue-primary-pale">
            <main className="max-h-[41.6875rem] max-w-xs sm:min-h-[41.6875rem] sm:max-w-[26rem] sm:[&>:not(:first-child)]:p-10 flex flex-col justify-between rounded-2xl [&>:first-child]:rounded-t-2xl bg-blue-neutral-pale text-center">
                <img
                    src={illustrationHero}
                    alt="Girl dancing while listening to music, with headphones on."
                />
                <section className="flex flex-col h-full justify-around p-6 sm:flex-auto">
                    <h2 className="text-2xl font-black">Order Summary</h2>
                    <p className="text-base font-medium text-blue-neutral-unsaturated">
                        You can now listen to millions of songs, audiobooks, and
                        podcasts on any device anywhere you like!
                    </p>
                    <section className="flex items-center flex-wrap gap-3 rounded-lg p-3 bg-blue-primary-pale/60">
                        <img src={musicIcon} alt="Music Note" />
                        <div className="grow justify-self-start text-left">
                            <p className="font-black">Annual Plan</p>
                            <p className="font-medium text-blue-neutral-unsaturated">
                                $59.99/year
                            </p>
                        </div>
                        <button className="transition ease-in-out duration-150 font-bold underline text-blue-primary-bright hover:text-blue-primary-bright/60 hover:no-underline">
                            Change
                        </button>
                    </section>
                    <button className="transition ease-in-out duration-150 p-4 font-extrabold rounded-xl shadow-3xl bg-blue-primary-bright hover:bg-blue-primary-bright/60 text-blue-neutral-pale">
                        Proceed To Payment
                    </button>
                    <button className="transition ease-in-out duration-150 flex flex-col items-center font-black hover:text-blue-neutral-dark text-blue-neutral-unsaturated">
                        Cancel Order
                    </button>
                </section>
            </main>
        </div>
    );
};

export default App;
