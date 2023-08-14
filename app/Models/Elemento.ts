
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Elemento extends BaseModel {
  public static table = 'planeacion.pe_elemento'

  @column({ isPrimary: true })
  public id_elemento: number

  @column()
  public id_tipo_elemento: number

  @column()
  public fecha_fin: string

  @column()
  public fecha_inicio: string

  @column()
  public direccion: string

  @column()
  public registro: string

  @column()
  public sujeto: string

  @column()
  public contenido: string

  @column()
  public valor: number

  @column()
  public dimension: string

  @column()
  public observaciones: string

  @column()
  public ubicacion: string

  @column()
  public archivo: string

  @column()
  public foto1: string

  @column()
  public foto2: string

  @column()
  public foto3: string

  @column()
  public foto4: string

  @column()
  public foto5: string

  @column()
  public numero_solicitud: number

}
