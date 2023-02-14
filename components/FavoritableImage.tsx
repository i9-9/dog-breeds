import {AiOutlineHeart} from 'react-icons/ai';

const FavoritableImage = ({src} : {src : string}) => {
    return (
        <div className="relative">
            <img className="w-full h-64 object-cover" src={src} />
            <button className="absolute bottom-4 right-4  flex items-center justify-center bg-white rounded-full shadow hover:bg-black hover:text-white w-8 h-8">
            <AiOutlineHeart size={20} />
            </button>
      </div>
    )
}

export default FavoritableImage;