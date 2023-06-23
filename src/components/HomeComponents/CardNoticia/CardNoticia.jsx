import './styles.css'

function CardNoticia({ titulo, srcImage }) {
    return (
        <div className="card-noticia">
            <img alt={titulo} 
                src={srcImage} />
            <h3>{titulo}</h3>     
        </div>
    )
}

export default CardNoticia