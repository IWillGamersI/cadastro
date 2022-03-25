interface BotaoProps{
    cor?: 'blue' | 'green' | 'gray' | 'red'
    children: any
    className?:string
    onClick?: () => void
}

export default function Botao(props:BotaoProps){

    const cor = props.cor ?? 'gray'

    return(
        <button onClick={props.onClick} className={`
                            bg-gradient-to-r 
                            from-${cor}-400 
                            to-${cor}-900                            
                            text-white
                            p-2
                            rounded full
                            mb-4
                            ${props.className}
                            `}>
            {props.children}
        </button>
    )
}