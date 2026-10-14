import lunaSprites from '../assets/luna-sprites.webp'

export default function Luna(){
    return(
        <div className="luna-sprite" style={{ backgroundImage: `url(${lunaSprites})` }} role="img" aria-label="Luna, personagem do meu jogo, em pixel art"></div>
    )
}