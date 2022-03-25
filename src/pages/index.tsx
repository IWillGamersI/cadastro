import { prependOnceListener } from "process";
import { useEffect, useState } from "react";
import ColecaoCliente from "../backend/db/ColecaoCliente";
import Botao from "../components/Botao";
import Fomulario from "../components/Formulario";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Cliente from "../core/Cliente";
import ClienteRepositorio from "../core/ClienteRepositorio";

export default function Home() {

  const repositorio: ClienteRepositorio = new ColecaoCliente()
  
  const [visible, setVisible] = useState< 'table' | 'form' >('table')
  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio)
  const [clientes, setClientes] = useState<Cliente[]>([])
   
  useEffect(()=>{
    repositorio.obterTodos().then(setClientes)
  },[])

  function clienteSelecionadoIndex(cliente:Cliente){
    setCliente(cliente)
    setVisible('form')

  }

  function clienteExcluidoIndex(cliente:Cliente){
    alert(cliente.nome)
  }
  
  function salvarCliente(cliente:Cliente){
    setVisible('table')
  }

  function novoCliente(){
    setCliente(Cliente.vazio())
    setVisible('form')
  }


  return (
    <div className={`
                    flex 
                    justify-center 
                    items-center 
                    h-screen
                    bg-gradient-to-r from-blue-600 to-purple-700
                    text-white
                    `} >
      <Layout titulo="Cadastro Simples" >
        
        
        {visible ==='table' ?
            (<>
                <div className="flex justify-end">
                  <Botao onClick={novoCliente}>Novo Cliente</Botao>
                </div>
                <Tabela clientes={clientes} 
                        clienteSelecionado={clienteSelecionadoIndex}
                        clienteExcluido={clienteExcluidoIndex}
                        >                      
                </Tabela>
            </>):(
                 <Fomulario cliente={cliente}
                            cancelado={()=>setVisible('table')}
                            clienteMudou={salvarCliente}

                 />          
            )
          }       
        
      </Layout>
    </div>
  )
}
