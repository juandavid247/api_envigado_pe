import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'

export default class ElementosController {
  public async index({}: HttpContextContract) {
    let sql = `select
    s.id_solicitud_publicidad,
    s.numero_oficio,
    s.numero_radicado,
    to_char(s.fecha_oficio,'yyyy-mm-dd') fecha_oficio,
    to_char(s.fecha_radicado,'yyyy-mm-dd') fecha_radicado,
    s.empresa_cliente,
    s.identificacion_cliente,
    case
      when s.estado = 1 then 'inactivo'
      when s.estado = 2 then 'desmontado'
      else 'activo'
    end as estado
  from envii.pe_solicitud s
    join (select min(e.fecha_fin) fecha_fin, e.id_solicitud from envii.pub_ext_elemento e group by e.id_solicitud) e on (s.id_solicitud_publicidad = e.id_solicitud)
    join (select count(*)
   total, e2.id_solicitud from envii.pub_ext_elemento e2 group by e2.id_solicitud) e2 on (s.id_solicitud_publicidad = e2.id_solicitud)
  where e2.total>0`
    let result = await Database.rawQuery(sql) 
    return result.rows
  }

  public async store({}: HttpContextContract) {}
  
  public async show({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
