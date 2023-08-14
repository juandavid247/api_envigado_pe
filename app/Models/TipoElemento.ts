import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class TipoElemento extends BaseModel {
  public static table = 'planeacion.pe_tipo_elemento'

  @column({ isPrimary: true })
  public pe_tipo_elemento: number

  @column()
  public estado: number

  @column()
  public nombre: string

  @column()
  public obligatoriedad: string

  @column()
  public valor: number

  @column()
  public porcentaje: number

  @column()
  public valor_act: number

}
