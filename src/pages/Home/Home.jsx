import { useNavigate } from "react-router-dom";
import CardNoticia from "../../components/HomeComponents/CardNoticia/CardNoticia"
import { useState, useEffect } from "react";
import { getAll } from "../../services/web";

function Home() {
    const [noticias, setNoticias] = useState([])
    
    useEffect(() => {
        async function fetchAll() {
            const data = await getAll()
            setNoticias(data)
        }
        
        fetchAll()

    }, [])

    const temNoticia = true;
      
    const renderizarQtdNoticias = () => {
        if (temNoticia) {
            return <span>Tem {noticias.length} notícias não lidas</span>
        } 
        return <span>Não existe notícia.</span>
    }
    
    return (
        <>
            <h1>Home</h1>
            
            {renderizarQtdNoticias()}

            {noticias.map(noticia => {
                return <CardNoticia key={noticia.id} 
                            titulo={noticia.titulo} srcImage={noticia.imagem.src} />
            })}

            {/* {temNoticia ? (
                <CardNoticia
                    titulo={tituloNoticia}
                    srcImage={srcImage} />
            ) : (
                <span>Não existem notícias.</span>
            )} */}


            {/* {temNoticia && 
                <CardNoticia
                    titulo={tituloNoticia}
                    srcImage={srcImage} />
            } */}

            {/* <CardNoticia
                titulo={tituloNoticia}
                srcImage={srcImage} /> */}

            {/* <ComponenteFilho callback={handleComponenteFilho} /> */}

        </>
    )
}

export default Home