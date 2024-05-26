import './Card.css'
export default function Card(props) {
    
    return (
        <div className="card">
            <h1>{props.name}</h1>
            < img src={props.imagem} width="100" />
        </div>
    )

}