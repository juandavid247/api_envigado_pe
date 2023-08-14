import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Solicitud extends BaseModel {

  public static table = 'planeacion.pe_solicitud'

  @column({ isPrimary: true })
  public id_solicitud_publicidad: number

  @column({ isPrimary: true })
  public objectid: number

  @column()
  public numero_oficio: string

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public fecha_oficio: DateTime

  @column() 
  public nomero_radicado: string

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public fecha_radicado: DateTime

  @column() 
  public identificacion_cliente: string

  @column() 
  public direccion_cobro_cliente: string

  @column() 
  public telefono_cliente: string

  @column() 
  public correo_electronico_cliente: string

  @column() 
  public empresa_cliente: string

  @column() 
  public cruce_vial: string
}
 