import conexao from "../config/conexao"
import Calibracao from "../model/Calibracao.js"

export async function criarCalibracao(calibracao) {
    const sql = "insert into calibracoes values ?"
    const [resultado] = await conexao.execute(sql,[equipamentoId, dataCalibracao, resultado, responsavel])
}

export async function listarCalibracoes() {
    const sql = "select * from calibracoes"
    return sql
}

export async function listarCalibracoesDetalhadas() {
}

export async function buscarCalibracaoPorId(id) {
    const sql = "select * from calibracoes where id = (?)"
    const [resultado] = await conexao.execute(sql)
    return sql(id)
}

export async function atualizarCalibracao(id, calibracao) {
    const sql = "update calibracoes set equipamentoId = equipamentoId, dataCalibracao = dataCalibracao, resultado = resultado, responsavel = responsavel"
    const [resultado] = await conexao.execute(sql)
    return sql;
}

export async function excluirCalibracao(id) {
    const sql = "delete from calibracoes where id = ?"
    return sql;
}
