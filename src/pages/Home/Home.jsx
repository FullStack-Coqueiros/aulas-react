import CardNoticia from "../../components/HomeComponents/CardNoticia/CardNoticia"

function Home() {

    const tituloNoticia = 'Grêmio vence América MG'
    const srcImage = "https://s2.glbimg.com/QxgfZZ0KaNp-BRgg_Pfile-2-WM=/0x468:1536x1332/fit-in/629x354/middle/smart/filters:strip_icc():strip_exif():format(webp)/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2023/3/8/IFfzYCRkGLGL7jqP5YAg/fzqkz10wwaqujd6.jfif"
    return (
        <>
            <h1>Home</h1>
            <CardNoticia
                titulo={tituloNoticia}
                srcImage={srcImage} />
        </>
    )
}

export default Home