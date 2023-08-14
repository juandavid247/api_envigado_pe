import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database';
import Elemento from 'App/Models/Elemento';
import Solicitud from 'App/Models/Solicitud';

export default class SolicitudesController {
  public async index({}: HttpContextContract) {}

  public async create({}: HttpContextContract) {}

  public async store({ request, response }: HttpContextContract) {
    let data = request.all()
    await Database.transaction(async(trx) => {
     try {
       let solicitud = new Solicitud()
       solicitud.fill(data)
       await solicitud.useTransaction(trx).save()
       await trx.commit()
       response.status(200)
       response.send({
         status: 200,
         success: solicitud.$isPersisted,
         id: solicitud.id_solicitud_publicidad,
         message: 'Solicitud guardada exiosamente',
       })
 
     } catch (error) {
       await trx.rollback()
       response.send({
         status: 200,
         success: false,
         messagge: error.message,
       })
     }
    })
   }
  
   public async show({params, response}: HttpContextContract) {
     let  id_solicitud_publicidad = params.id
     try {
       let solicitud = await Solicitud.findOrFail(id_solicitud_publicidad)
 
       try {
         let elemento = await Elemento.query().where('id_solicitud',id_solicitud_publicidad)
         response.status(200)
         response.send({solicitud,elemento})
   
       } catch (error) {
         response.status(404)
         response.send({
           status: 404,
           messagge: 'Elemento no encontrado'
         })
       }
 
     } catch (error) {
       response.status(404)
       response.send({
         status: 404,
         messagge: 'Solicitud no encontrado'
       })
     }
 
   }

   public async edit({ params, request, response }: HttpContextContract) {
    let id_solicitud_publicidad = params.id;
    let data = request.all();
  
    try {
      const solicitud = await Solicitud.findOrFail(id_solicitud_publicidad);
  
      solicitud.merge(data);
      await solicitud.save();
  
      response.status(200);
      response.send({
        status: 200,
        success: solicitud.$isPersisted,
        id: solicitud.id_solicitud_publicidad,
        message: 'Solicitud actualizada exitosamente',
      });
  
    } catch (error) {
      response.status(404);
      response.send({
        status: 404,
        message: 'Solicitud no encontrada',
      });
    }
  }
  
  public async update({ params, request, response }: HttpContextContract) {
    let id_solicitud_publicidad = params.id;
    let data = request.all();
  
    try {
      const solicitud = await Solicitud.findOrFail(id_solicitud_publicidad);
  
      // Actualizar la solicitud con nuevos datos
      solicitud.merge(data);
      await solicitud.save();
  
      response.status(200);
      response.send({
        status: 200,
        success: solicitud.$isPersisted,
        id: solicitud.id_solicitud_publicidad,
        message: 'Solicitud actualizada exitosamente',
      });
  
    } catch (error) {
      response.status(404);
      response.send({
        status: 404,
        message: 'Solicitud no encontrada',
      });
    }
  }
  
  public async destroy({ params, response }: HttpContextContract) {
    let id_solicitud_publicidad = params.id;
  
    try {
      const solicitud = await Solicitud.findOrFail(id_solicitud_publicidad);
  
      await solicitud.delete();
  
      response.status(200);
      response.send({
        status: 200,
        success: true,
        message: 'Solicitud eliminada exitosamente',
      });
  
    } catch (error) {
      response.status(404);
      response.send({
        status: 404,
        message: 'Solicitud no encontrada',
      });
    }
  }
  }
