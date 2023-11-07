import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsObject,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Constant } from '../../../../common/constants/enum';

export class GetConstantRequest {
  @ApiProperty({ required: true, enum: Constant })
  @IsNotEmpty()
  @IsEnum(Constant)
  type: Constant;
}

export class _V15DTO {
  @ApiProperty({ required: false })
  @IsNumber()
  @IsOptional()
  _v15_2: number;
}

export class _V154DTO {
  @ApiProperty({ required: false })
  @IsNumber()
  @IsOptional()
  _v15: number;
}

export class AxeDTO {
  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  axe: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  modulo: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  plein: string;

  @ApiProperty({ required: false })
  @IsNumber()
  @IsOptional()
  vide: number;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  u: string;
}

export class CompatibiliteesDTO {
  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  compat: string;

  @ApiProperty({ required: false })
  @IsNumber()
  @IsOptional()
  code1: number;
}

export class ConvertDTO {
  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  litres: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  gramme: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  metre: string;

  @ApiProperty({ required: false })
  @IsNumber()
  @IsOptional()
  coef: number;
}

export class LongitudinalesDTO {
  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  longitudinales: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  modulo: string;

  @ApiProperty({ required: false })
  @IsNumber()
  @IsOptional()
  plein: number;

  @ApiProperty({ required: false })
  @IsNumber()
  @IsOptional()
  vide: number;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  u: string;
}

export class ModDTO {
  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  modulation1: string;

  @ApiProperty({ required: false })
  @IsNumber()
  @IsOptional()
  plein1: number;

  @ApiProperty({ required: false })
  @IsNumber()
  @IsOptional()
  vide1: number;
}

export class PSatDTO {
  @ApiProperty({ required: false })
  @IsNumber()
  @IsOptional()
  tempAir: number;

  @ApiProperty({ required: false })
  @IsNumber()
  @IsOptional()
  pSatu: number;
}

export class PrimaireDTO {
  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  primaires: string;

  @ApiProperty({ required: false })
  @IsNumber()
  @IsOptional()
  density: number;

  @ApiProperty({ required: false })
  @IsNumber()
  @IsOptional()
  conso: number;
}

export class ProdDTO {
  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  produit: string;
}

export class ProduitsTypeDTO {
  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  typo: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  colonne1: string;

  @ApiProperty({ required: false })
  @IsNumber()
  @IsOptional()
  dluo: number;
}

export class RecoDTO {
  @ApiProperty({ required: false })
  @IsNumber()
  @IsOptional()
  code: number;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  reco: string;
}

export class SupDTO {
  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  support: string;
}

export class TableauAngle2DTO {
  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  angles: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  bande: string;
}

export class TableauBillesDTO {
  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  marque: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  traitement: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  usage: string;
}

export class TableauBusesCaracteristiqueDTO {
  @ApiProperty({ required: false })
  @IsNumber()
  @IsOptional()
  orifice: number;

  @ApiProperty({ required: false })
  @IsNumber()
  @IsOptional()
  diametreBuse: number;

  @ApiProperty({ required: false })
  @IsNumber()
  @IsOptional()
  diametreBuseMM: number;

  @ApiProperty({ required: false })
  @IsNumber()
  @IsOptional()
  debitEau122bar: number;
}

export class TableauListeBusesDTO {
  @ApiProperty({ required: false })
  @IsNumber()
  @IsOptional()
  listeBuses: number;
}

export class TableauMarkDTO {
  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  tradeMark: string;
}

export class TableauMeshDTO {
  @ApiProperty({ required: false })
  @IsNumber()
  @IsOptional()
  mesh: number;

  @ApiProperty({ required: false })
  @IsNumber()
  @IsOptional()
  micrometre: number;
}

export class TableauPDTO {
  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  p: string;

  @ApiProperty({ required: false })
  @IsNumber()
  @IsOptional()
  passages: number;
}

export class TableauQDTO {
  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  q: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  mcd: string;
}

export class TableauRDTO {
  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  r: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  mcd: string;
}

export class TableauRRDTO {
  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  rr: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  mcd: string;
}

export class TableauRWDTO {
  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  rw: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  mcd: string;
}

export class TableauSDTO {
  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  s: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  coef: string;
}

export class TableauSelectDTO {
  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  selection: string;
}

export class Tableau12DTO {
  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  temperature: string;
}

export class Tableau11DTO {
  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  peroxyde: string;
}

export class Tableau1DTO {
  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  eaf: string;
}

export class TemporaireDTO {
  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  t: string;

  @ApiProperty({ required: false })
  @IsNumber()
  @IsOptional()
  passages: number;
}

export class TopoDTO {
  @ApiProperty({ required: false })
  @IsNumber()
  @IsOptional()
  echelle: number;

  @ApiProperty({ required: false })
  @IsNumber()
  @IsOptional()
  lecture: number;
}

export class TransversalesDTO {
  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  transversales: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  modulo: string;

  @ApiProperty({ required: false })
  @IsNumber()
  @IsOptional()
  plein: number;

  @ApiProperty({ required: false })
  @IsNumber()
  @IsOptional()
  vide: number;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  u: string;
}

export class TypeVoieDTO {
  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  type: string;

  @ApiProperty({ required: false })
  @IsNumber()
  @IsOptional()
  u: number;
}

export class VoieDTO {
  @ApiProperty({ required: false })
  @IsNumber()
  @IsOptional()
  road: number;

  @ApiProperty({ required: false })
  @IsNumber()
  @IsOptional()
  bandes1: number;

  @ApiProperty({ required: false })
  @IsNumber()
  @IsOptional()
  bandes2: number;

  @ApiProperty({ required: false })
  @IsNumber()
  @IsOptional()
  bandes3: number;
}

export class AddConstantRequest extends GetConstantRequest {
  @ApiProperty({ required: false })
  @IsOptional()
  @IsObject()
  @Type(() => _V15DTO)
  @ValidateNested()
  _v15: _V15DTO;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsObject()
  @Type(() => _V154DTO)
  @ValidateNested()
  _v154: _V154DTO;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsObject()
  @Type(() => AxeDTO)
  @ValidateNested()
  axe: AxeDTO;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsObject()
  @Type(() => CompatibiliteesDTO)
  @ValidateNested()
  compatibilitees: CompatibiliteesDTO;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsObject()
  @Type(() => ConvertDTO)
  @ValidateNested()
  convert: ConvertDTO;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsObject()
  @Type(() => LongitudinalesDTO)
  @ValidateNested()
  longitudinales: LongitudinalesDTO;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsObject()
  @Type(() => ModDTO)
  @ValidateNested()
  mod: ModDTO;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsObject()
  @Type(() => PSatDTO)
  @ValidateNested()
  pSat: PSatDTO;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsObject()
  @Type(() => PrimaireDTO)
  @ValidateNested()
  primaire: PrimaireDTO;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsObject()
  @Type(() => ProdDTO)
  @ValidateNested()
  prod: ProdDTO;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsObject()
  @Type(() => ProduitsTypeDTO)
  @ValidateNested()
  produitsType: ProduitsTypeDTO;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsObject()
  @Type(() => RecoDTO)
  @ValidateNested()
  reco: RecoDTO;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsObject()
  @Type(() => SupDTO)
  @ValidateNested()
  sup: SupDTO;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsObject()
  @Type(() => TableauAngle2DTO)
  @ValidateNested()
  tableauAngle2: TableauAngle2DTO;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsObject()
  @Type(() => TableauBillesDTO)
  @ValidateNested()
  tableauBilles: TableauBillesDTO;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsObject()
  @Type(() => TableauBusesCaracteristiqueDTO)
  @ValidateNested()
  tableauBusesCaracteristique: TableauBusesCaracteristiqueDTO;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsObject()
  @Type(() => TableauListeBusesDTO)
  @ValidateNested()
  tableauListeBuses: TableauListeBusesDTO;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsObject()
  @Type(() => TableauMarkDTO)
  @ValidateNested()
  tableauMark: TableauMarkDTO;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsObject()
  @Type(() => TableauMeshDTO)
  @ValidateNested()
  tableauMesh: TableauMeshDTO;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsObject()
  @Type(() => TableauPDTO)
  @ValidateNested()
  tableauP: TableauPDTO;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsObject()
  @Type(() => TableauQDTO)
  @ValidateNested()
  tableauQ: TableauQDTO;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsObject()
  @Type(() => TableauRDTO)
  @ValidateNested()
  tableauR: TableauRDTO;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsObject()
  @Type(() => TableauRRDTO)
  @ValidateNested()
  tableauRR: TableauRRDTO;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsObject()
  @Type(() => TableauRWDTO)
  @ValidateNested()
  tableauRW: TableauRWDTO;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsObject()
  @Type(() => TableauSDTO)
  @ValidateNested()
  tableauS: TableauSDTO;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsObject()
  @Type(() => TableauSelectDTO)
  @ValidateNested()
  tableauSelect: TableauSelectDTO;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsObject()
  @Type(() => Tableau12DTO)
  @ValidateNested()
  tableau12: Tableau12DTO;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsObject()
  @Type(() => Tableau11DTO)
  @ValidateNested()
  tableau11: Tableau11DTO;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsObject()
  @Type(() => Tableau1DTO)
  @ValidateNested()
  tableau1: Tableau1DTO;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsObject()
  @Type(() => TableauSelectDTO)
  @ValidateNested()
  temporaire: TemporaireDTO;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsObject()
  @Type(() => TopoDTO)
  @ValidateNested()
  topo: TopoDTO;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsObject()
  @Type(() => TransversalesDTO)
  @ValidateNested()
  transversales: TransversalesDTO;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsObject()
  @Type(() => TypeVoieDTO)
  @ValidateNested()
  typeVoie: TypeVoieDTO;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsObject()
  @Type(() => VoieDTO)
  @ValidateNested()
  voie: VoieDTO;
}

export class UpdateConstantRequest extends AddConstantRequest {}

export class DeleteConstantRequest extends GetConstantRequest {}
