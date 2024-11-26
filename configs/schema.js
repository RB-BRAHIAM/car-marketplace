import { integer, json, pgTable,serial,varchar } from "drizzle-orm/pg-core";

export const CarListing=pgTable('carListing',{
    id:serial('id').primaryKey(),
    brand:varchar('brand').notNull(),
    modelo:varchar('modelo').notNull(),
    a_o:varchar('a_o').notNull(),
    kilometraje:varchar('kilometraje').notNull(),
    cilindraje:varchar('cilindraje').notNull(),
    puertas:varchar('puertas').notNull(),
    tipo_combustible:varchar('tipo_combustible').notNull(),
    tipo_carroceria:varchar('tipo_carroceria').notNull(),
    estado:varchar('estado').notNull(),
    descripcion:varchar('descripcion').notNull(),
    features:json('features'),
    creadorPor:varchar('createdBy').notNull(),
    publicadoPor:varchar('postedOn').notNull(),
})

export const CarImages=pgTable('carImages',{
    id:serial('id').primaryKey(),
    imageURL:varchar('imageURL').notNull(),
    carListingId:integer('carListingId').notNull().references(()=>CarListing.id)
})