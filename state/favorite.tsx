import { createContext, useState } from "react";

interface Context {
    state: {
        favorites: string[]
    };
    actions: {
        toggleFavorite: (image:string) => void
    }
}

interface Props {
    children: React.ReactNode
}


const FavoriteContext = createContext({} as Context)

const FavoriteProvider = ({children}: Props) => {
    const [favorites, setFavorites] = useState<string[]>([])

    function toggleFavorite(image:string) {
        if (favorites.includes(image)) {
            setFavorites((favorites) => favorites.filter((favorite) => favorite !== image))
        } else {
            setFavorites((favorites) => [...favorites, image]);
        }
        }
    }

    return (
        <FavoriteContext.Provider value={{state: {favorites}, actions: {toggleFavorite}}}>
            {children}
        </FavoriteContext.Provider>
    )
}

export {FavoriteProvider as Provider};