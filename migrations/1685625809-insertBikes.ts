import { Sql } from 'postgres';
import { bikes } from '../database/bikes';

export async function up(sql: Sql) {
  for (const bike of bikes) {
    await sql`

    INSERT INTO bikes
    ( name,
      type,
      price,
      material,
      weight,
      rating,
      description
    )
    VALUES
    (
      ${bike.name},
      ${bike.type},
      ${bike.price},
      ${bike.material},
      ${bike.weight},
      ${bike.rating},
      ${bike.description}
    )
    `;
  }
}

export async function down(sql: Sql) {
  for (const bike of bikes) {
    await sql`
    DELETE FROM bikes WHERE id = ${bike.id}
    `;
  }
}
