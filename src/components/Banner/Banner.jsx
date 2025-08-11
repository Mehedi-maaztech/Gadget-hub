import './Banner.css'
import bannerImg from '../../assets/banner.jpg';
const Banner = () => {
    return (
        <div>
            <div className="hero bg-purple-800 min-h-[60vh] text-white">
                <div className="text-center relative">
                    <div className="flex flex-col items-center">
                        <h1 className="text-5xl font-bold">Upgrade Your Tech Accesorize With gadget Heaven</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                        <button className="btn btn-white">Shop Now</button>
                        <div className="card glass-card rounded-3xl w-[700px] absolute top-50">
                            <figure className='w-11/12 mx-auto py-5'>
                                <img
                                    src={bannerImg}
                                    alt="Shoes" 
                                    className='rounded-3xl'/>
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
            <div className="min-h-96"></div>
        </div>
    );
};

export default Banner;