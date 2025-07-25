import { FaPlay } from 'react-icons/fa';
import { BsMouse } from 'react-icons/bs';

const WatchDemoButton = () => {
    return (
        <div className="flex flex-col items-center gap-6">
            {/* Watch Demo Button */}
            <button className="flex items-center gap-2 px-6 py-2 rounded-full border border-white/30 text-white font-light backdrop-blur-md bg-white/10 transition-all duration-300 hover:backdrop-blur-2xl hover:bg-gray-400/30 hover:text-black">
                <FaPlay className="transition-colors duration-300" />
                <span>Watch Demo</span>
            </button>

            {/* Bouncing Mouse Icon */}
            <div className="animate-bounce">
                <BsMouse className="text-white text-2xl" />
            </div>
        </div>
    );
}

export default WatchDemoButton;