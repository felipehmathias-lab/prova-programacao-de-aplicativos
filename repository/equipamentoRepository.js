import conexao from "../config/conexao"
import Equipamento from "../model/Equipamento.js"

export async function criarEquipamento(equipamento) {
    const sql = "insert into calibracoes values ?"
    const [resultado] = await conexao.execute(sql,[codigoPatrimonio, nome, setor])
}

export async function listarEquipamentos() {
    const sql = "select * from calibracoes"
    return sql
}

export async function buscarEquipamentoPorId(id) {
    const sql = "select * from equipamentos where id = (?)"
    const [resultado] = await conexao.execute(sql)
    return sql(id)
}

export async function atualizarEquipamento(id, equipamento) {
    const sql = "update equipamentos set codigoPatrimonio = codigoPatrimonio, nome = nome, setor = setor"
    const [resultado] = await conexao.execute(sql)
    return sql;
}

export async function excluirEquipamento(id) {
    const sql = "delete from equipamentos where id = ?"
    return sql;
}
