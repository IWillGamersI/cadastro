import Botao from "../components/Botao";
import Fomulario from "../components/Formulario";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import { useClientes } from "../hooks/useClientes";

export default function Home() {

  const { selecionadoCliente, 
          salvarCliente, 
          addCliente,
          excluirCliente,
          cliente,
          clientes,
          tableVisible,
          exibirTable
        } = useClientes()

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
        
        
        {tableVisible ?
            (<>
                <div className="flex justify-end">
                  <Botao onClick={addCliente}>Novo Cliente</Botao>
                </div>
                <Tabela clientes={clientes} 
                        clienteSelecionado={selecionadoCliente}
                        clienteExcluido={excluirCliente}
                        >                      
                </Tabela>
            </>):(
                 <Fomulario cliente={cliente}
                            cancelado={exibirTable}
                            clienteMudou={salvarCliente}

                 />          
            )
          }       
        
      </Layout>
    </div>
  )
}
