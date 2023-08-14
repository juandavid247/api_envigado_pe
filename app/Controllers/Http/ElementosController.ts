import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import Database from '@ioc:Adonis/Lucid/Database';


export default class ElementosController {
  public async index({ request }: HttpContextContract) {

    const { 
      numero_radicado, 
      numero_oficio,
      fecha_oficio, 
      fecha_radicado, 
      identificacion_cliente,
      page = 1, // Página por defecto es 1
      perPage = 7, // Cantidad de resultados por página 
    } = request.all();
    
    let consulta = Database.from('planeacion.vw_publicidad_exterior')
    if (numero_radicado) consulta.whereLike('numero_radicado', `%${numero_radicado}%`)
    if (numero_oficio) consulta.whereLike('numero_oficio', `%${numero_oficio}%`)
    if (fecha_oficio) consulta.where('fecha_oficio', '=', fecha_oficio)
    if (fecha_radicado) consulta.where('fecha_radicado', '=', fecha_radicado)
    if (identificacion_cliente) consulta.whereLike('identificacion_cliente', `%${identificacion_cliente}%`)

    let result = await consulta.paginate(page, perPage);
    
    return result
  }
  
  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}
  
  public async destroy({}: HttpContextContract) {}
}
