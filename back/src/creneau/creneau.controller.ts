import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { CreneauService } from './creneau.service';
import { Creneau } from 'src/creneau.interface';

@Controller('creneau')
export class CreneauController {
    constructor( private creneauservice: CreneauService) {}

    @Post()
  async create(@Body() body: any): Promise<Creneau> {
    const creneau: Creneau = await this.creneauservice.create(
        body.jours,
        body.horaire_ouverture,
        body.horaire_fermeture
    );
    return creneau;
  }

  @Get()
  async findAll() {
    const allCreneaux = await this.creneauservice.findAll();
    return allCreneaux;
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const OneCreneau = await this.creneauservice.findOne(id);
    return OneCreneau;
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() body: any) {
    const change = await this.creneauservice.update(id, body.jours, body.horaire_ouverture, body.horaire_fermeture);
    return change;
  }

  @Delete(':id')
    async delete(@Param('id') id: string) {
        const deleteCreneau = await this.creneauservice.delete(id);
        return deleteCreneau;
    }
}
