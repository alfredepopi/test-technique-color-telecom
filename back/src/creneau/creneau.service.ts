import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { Creneau } from 'src/creneau.interface';

@Injectable()
export class CreneauService {
    prisma = new PrismaClient();

    async create(
        jours : string,
        horaire_ouverture: string,
        horaire_fermeture
    ): Promise<Creneau> {
        return this.prisma.creneau.create({
            data: {
                jours: jours,
          horaire_ouverture: horaire_ouverture,
          horaire_fermeture: horaire_fermeture

            },
        });
    }

    async findAll() {
      return await this.prisma.creneau.findMany();
    }


    async findOne(id: string): Promise<Creneau | undefined> {
      return await this.prisma.creneau.findFirst({
        where: {
          id: id,
        }
      });
    }

    async update(id: string, jours: string, horaire_ouverture: string, horaire_fermeture: string) {
      return await this.prisma.creneau.update({
        where: {
          id: id
        },
        data: {
          jours: jours,
          horaire_ouverture: horaire_ouverture,
          horaire_fermeture: horaire_fermeture
        }
      })
    }

    async delete(id: string) {
      return await this.prisma.creneau.delete({
        where: {
          id: id
        }
      })
    }
}
