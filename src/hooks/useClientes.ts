import { useEffect, useState } from "react"
import ColecaoCliente from "../backend/db/ColecaoCliente"
import Cliente from "../core/Cliente"
import ClienteRepositorio from "../core/ClienteRepositorio"
import useTabelaOuForm from "./useTabelaOuForm"

export function useClientes(){
    const repositorio: ClienteRepositorio = new ColecaoCliente()
  
  const {   
            tableVisible,
            exibirForm,
            exibirTable
        } = useTabelaOuForm()

  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio)
  const [clientes, setClientes] = useState<Cliente[]>([])
   
  useEffect(obterTodos, [])

 function obterTodos(){
      repositorio.obterTodos().then(clientes =>{
      setClientes(clientes)
      exibirTable()
    })
  }

  function selecionadoCliente(cliente:Cliente){
    setCliente(cliente)
    exibirForm()

  }

  async function excluirCliente(cliente:Cliente){
    await repositorio.excluir(cliente)
    obterTodos()
  }
  
  function salvarCliente(cliente:Cliente){
    repositorio.salvar(cliente)
    obterTodos()
  }

  function addCliente(){
    setCliente(Cliente.vazio())
    exibirForm()
  }

  return{
      tableVisible,
      exibirTable,
      cliente,
      clientes,
      salvarCliente,
      excluirCliente,
      addCliente,
      selecionadoCliente,
      obterTodos,
  }

}