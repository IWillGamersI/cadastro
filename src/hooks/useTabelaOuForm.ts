import { useState } from "react";

export default function useTabelaOuForm(){
   const [visible,setVisible] = useState<'table'|'form'>('table')

   const exibirTable = () => setVisible('table')
   const exibirForm = () => setVisible('form')

   
   return{
        formVisible: visible === 'form',
        tableVisible: visible === 'table',
        exibirForm,
        exibirTable
   }
   
}