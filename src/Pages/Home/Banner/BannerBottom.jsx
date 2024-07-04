
const BannerBottom = () => {
    return (
        <div className="font-customFont grid grid-cols-2 md:grid-cols-4 py-16 gap-10 px-24 bg-amber-50 text-yellow-950">
            <div className="space-y-3">
                <img src="/public/images/icons/1.png" alt="   " />
                <h1 className="text-xl font-bold ">Awesome Aroma</h1>
                <p>You will definitely be a fan of the design & aroma of your coffee</p>
            </div>
            <div className="space-y-3">
                <img src="/public/images/icons/2.png" alt="   " />
                <h1 className="text-xl font-bold ">High Quality</h1>
                <p>We served the coffee to you maintaining the best quality</p>
            </div>
            <div className="space-y-3">
                <img src="/public/images/icons/3.png" alt="   " />
                <h1 className="text-xl font-bold ">Pure Grades</h1>
                <p>The coffee is made of the green coffee beans which you will love</p>
            </div>
            <div className="space-y-3">
                <img src="/public/images/icons/4.png" alt="   " />
                <h1 className="text-xl font-bold text-yellow-950">Proper Roasting</h1>
                <p>Your coffee is brewed by first roasting the green coffee beans</p>
            </div>
        </div>
    );
};

export default BannerBottom;