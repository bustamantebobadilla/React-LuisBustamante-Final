
export function Titulo({ titulo, subTitulo = "Bienvenido" }) {
    return (
        <div>
            <h1>{titulo}</h1>
            <h3>{subTitulo}</h3>
        </div>
    );
}
