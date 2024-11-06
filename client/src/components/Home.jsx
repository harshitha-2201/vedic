import vedicHome from  '../assets/vedic-home.jpeg';
import About from './About'
import Features from './Features'
import Contect from './Contect'
import {Link} from 'react-router-dom'


const Home = () => {
    return (
      <div >
        {/* Hero Section */}
        <div
          className="relative bg-cover bg-center h-screen"
          style={{
            backgroundImage: `url(${vedicHome})`,
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>
          <div className="relative z-10 flex flex-col items-center justify-center text-center text-white h-full px-6">
            <h1 className="text-5xl font-extrabold mb-4">Rediscover Natural Healing</h1>
            <p className="text-lg mb-6">
              Book appointments with top Ayurvedic doctors for a healthy lifestyle.
            </p>
          <Link>
          <button path="/contact" element={<Contect />}className="bg-green-600 hover:bg-green-500 px-8 py-3 rounded-lg text-lg" >
              Book Now
            </button>
          </Link>

          </div>
        </div>
  
        {/* Overlapping Features Section */}
        <div className="relative -mt-32 px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Feature Cards */}
            <div className="bg-white p-9 shadow-lg rounded-lg">
              <h2 className="text-xl font-bold text-green-700 mb-2">Expert Doctors</h2>
              <p className="text-gray-600">
                Consult with highly experienced Ayurvedic specialists.
              </p>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h2 className="text-xl font-bold text-green-700 mb-2">Customized Treatment</h2>
              <p className="text-gray-600">
                Get personalized plans based on your unique health needs.
              </p>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h2 className="text-xl font-bold text-green-700 mb-2">24/7 Support</h2>
              <p className="text-gray-600">
                Reach out to our team anytime for assistance.
              </p>
            </div>
          </div>
          <About/>
          <Features/>
          <Contect/>
        </div>       
      </div>
    );
  };
  
  export default Home;
  