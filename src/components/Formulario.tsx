import { useState } from "react";
import Cliente from "../core/Cliente";
import Botao from "./Botao";
import Input from "./Input";

interface FormularioProps{
    cliente?:Cliente
    cancelado?:()=> void
    clienteMudou?: (cliente: Cliente)=>void
}

export default function Fomulario(props:FormularioProps){

    const id = props.cliente?.id

    const [nome, setNome] = useState(props.cliente?.nome ?? '')
    const [idade, setIdade] = useState(props.cliente?.idade ?? 0)

    

    return(
        <div className="bg-purple-200 p-10 rounded-lg">
            {id?(
                <Input
                    somenteLeitura 
                    texto="Codigo" 
                    valor= {id}
                    />
                ): false
            }

            <Input 
                texto="Nome" 
                valor={nome}
                valorMudou={setNome}
                />

            <Input 
                texto="Idade" 
                tipo="number"
                valor={idade}
                valorMudou={setIdade} 
                />

                <div className="flex justify-end mt-3 ">

                    <Botao cor="blue" 
                    className="mr-2 pl-5 pr-5" 
                    onClick={()=>props.clienteMudou?.
                            (new Cliente(nome,+idade,id))} 
                            >
                        {id ? 'Alterar' : 'Salvar' } 
                    </Botao>

                    <Botao cor="red" 
                    className="ml-2 pl-5 pr-5" 
                    onClick={props.cancelado}
                    >
                        Cancelar
                    </Botao>
                </div>

        </div>
    )
}