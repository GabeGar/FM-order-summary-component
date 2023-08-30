import illustrationHero from "./assets/images/illustration-hero.svg";
import musicIcon from "./assets/images/icon-music.svg";

const App = () => {
    return (
        <div className="min-h-screen flex justify-center bg-mobileBg bg-contain bg-no-repeat px-8 py-12 bg-blue-primary-pale">
            <main className="max-h-[667px] max-w-xs flex flex-col justify-between rounded-2xl [&>:first-child]:rounded-t-2xl bg-blue-neutral-pale text-center">
                <img
                    src={illustrationHero}
                    alt="Girl dancing while listening to music, with headphones on."
                />
                <section className="flex flex-col h-full justify-around p-6">
                    <h2 className="text-2xl font-black">Order Summary</h2>
                    <p className="text-base">
                        You can now listen to millions of songs, audiobooks, and
                        podcasts on any device anywhere you like!
                    </p>
                    <section className="flex items-center gap-3 rounded-lg p-3 bg-blue-primary-pale/60">
                        <img src={musicIcon} alt="Music Note" />
                        <div className="grow justify-self-start text-left">
                            <p className="font-black">Annual Plan</p>
                            <p className="font-medium text-blue-neutral-unsaturated">
                                $59.99/year
                            </p>
                        </div>
                        <button className="font-bold underline text-blue-primary-bright">
                            Change
                        </button>
                    </section>
                    <button className="p-4 font-extrabold rounded-xl shadow-3xl bg-blue-primary-bright text-blue-neutral-pale">
                        Proceed To Payment
                    </button>
                    <span className="flex flex-col justify-center font-black text-blue-neutral-unsaturated">
                        Cancel Order
                    </span>
                </section>
            </main>
        </div>
    );
};

export default App;
