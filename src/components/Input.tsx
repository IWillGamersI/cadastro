interface InputProps{
    tipo?: 'text' | 'number'
    texto: string
    valor: any
    somenteLeitura?: boolean
    valorMudou?:(valor:any) => void
}

export default function Input(props:InputProps){
    return(
        <div className="flex flex-col">
            <label className="pt-4 pb-0.5">
                {props.texto}
            </label>
            <input type={props.tipo ?? 'text'}
                    value={props.valor}
                    readOnly={props.somenteLeitura}
                    onChange={e=> props.valorMudou?.(e.target.value)}
                    className={`
                    border 
                    border-purple-500
                    rounded-lg
                    p-2
                    focus:outline-none
                    bg-gray-50
                    ${props.somenteLeitura ? '' : 'focus:bg-white'}
                    
                    `}
            />
        </div>
    )
}