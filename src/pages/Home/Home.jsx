import { useNavigate } from "react-router-dom";

import CardNoticia from "../../components/HomeComponents/CardNoticia/CardNoticia"
import ComponenteFilho from "../../components/HomeComponents/ComponenteFilho/ComponenteFilho"

function Home() {

    const navigate = useNavigate()

    const temNoticia = true;
    // condicao ? <VERDADEIRA> : <FALSA>
    const tituloNoticia = 'Grêmio vence América MG'
    const srcImage = "https://s2.glbimg.com/QxgfZZ0KaNp-BRgg_Pfile-2-WM=/0x468:1536x1332/fit-in/629x354/middle/smart/filters:strip_icc():strip_exif():format(webp)/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2023/3/8/IFfzYCRkGLGL7jqP5YAg/fzqkz10wwaqujd6.jfif"

    const handleComponenteFilho = (message) => {
        console.log('Mensagem do filho: ', message)
    }

    const renderizarQtdNoticias = () => {
        if (temNoticia) {
            return <span>Tem 1 notícia não lida</span>
        } 
        return <span>Não existe notícia.</span>
    }
    

    const handleClick = () => {
        navigate('/empresa/senai')
    }

    const handleClick2 = () => {
        navigate('/empresa/audaces')
    }
    
    return (
        <>
            <h1>Home</h1>

            <button onClick={handleClick}>Ver Senai</button>
            <button onClick={handleClick2}>Ver Audaces</button>

            {renderizarQtdNoticias()}

            {temNoticia ? (
                <CardNoticia
                    titulo={tituloNoticia}
                    srcImage={srcImage} />
            ) : (
                <span>Não existem notícias.</span>
            )}


            {/* {temNoticia && 
                <CardNoticia
                    titulo={tituloNoticia}
                    srcImage={srcImage} />
            } */}

            {/* <CardNoticia
                titulo={tituloNoticia}
                srcImage={srcImage} /> */}

            <ComponenteFilho callback={handleComponenteFilho} />

        </>
    )
}

export default Home