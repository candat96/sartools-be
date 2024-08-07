import { ApiCode } from '@common/constants/api-code';
import { Constant } from '@common/constants/enum';
import { ErrorCode } from '@common/constants/error';
import { ApiException } from '@common/exception/api-exception';
import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AddConstantRequest, UpdateConstantRequest } from './dto/request';
import {
  Axe,
  Compatibilitees,
  Convert,
  Longitudinales,
  Mod,
  PSat,
  Primaire,
  Prod,
  ProduitsType,
  Reco,
  Sup,
  Tableau1,
  Tableau11,
  Tableau12,
  TableauAngle2,
  TableauBilles,
  TableauBusesCaracteristique,
  TableauListeBuses,
  TableauMark,
  TableauMesh,
  TableauP,
  TableauQ,
  TableauR,
  TableauRR,
  TableauRW,
  TableauS,
  TableauSelect,
  Temporaire,
  Topo,
  Transversales,
  TypeVoie,
  Voie,
  _V15,
  _V154,
} from '../../database/model/entities';

@Injectable()
export class ConstantService {
  constructor(
    @InjectRepository(_V15)
    private readonly _v15Repository: Repository<_V15>,
    @InjectRepository(_V154)
    private readonly _v154Repository: Repository<_V154>,
    @InjectRepository(Axe)
    private readonly axeRepository: Repository<Axe>,
    @InjectRepository(Compatibilitees)
    private readonly compatibiliteesRepository: Repository<Compatibilitees>,
    @InjectRepository(Convert)
    private readonly convertRepository: Repository<Convert>,
    @InjectRepository(Longitudinales)
    private readonly longitudinalesRepository: Repository<Longitudinales>,
    @InjectRepository(Mod)
    private readonly modRepository: Repository<Mod>,
    @InjectRepository(PSat)
    private readonly pSatRepository: Repository<PSat>,
    @InjectRepository(Primaire)
    private readonly primaireRepository: Repository<Primaire>,
    @InjectRepository(Prod)
    private readonly prodRepository: Repository<Prod>,
    @InjectRepository(ProduitsType)
    private readonly produitsTypeRepository: Repository<ProduitsType>,
    @InjectRepository(Reco)
    private readonly recoRepository: Repository<Reco>,
    @InjectRepository(Sup)
    private readonly supRepository: Repository<Sup>,
    @InjectRepository(TableauAngle2)
    private readonly tableauAngle2Repository: Repository<TableauAngle2>,
    @InjectRepository(TableauBilles)
    private readonly tableauBillesRepository: Repository<TableauBilles>,
    @InjectRepository(TableauBusesCaracteristique)
    private readonly tableauBusesCaracteristiqueRepository: Repository<TableauBusesCaracteristique>,
    @InjectRepository(TableauListeBuses)
    private readonly tableauListeBusesRepository: Repository<TableauListeBuses>,
    @InjectRepository(TableauMark)
    private readonly tableauMarkRepository: Repository<TableauMark>,
    @InjectRepository(TableauMesh)
    private readonly tableauMeshRepository: Repository<TableauMesh>,
    @InjectRepository(TableauP)
    private readonly tableauPRepository: Repository<TableauP>,
    @InjectRepository(TableauQ)
    private readonly tableauQRepository: Repository<TableauQ>,
    @InjectRepository(TableauR)
    private readonly tableauRRepository: Repository<TableauR>,
    @InjectRepository(TableauRR)
    private readonly tableauRRRepository: Repository<TableauRR>,
    @InjectRepository(TableauRW)
    private readonly tableauRWRepository: Repository<TableauRW>,
    @InjectRepository(TableauS)
    private readonly tableauSRepository: Repository<TableauS>,
    @InjectRepository(TableauSelect)
    private readonly tableauSelectRepository: Repository<TableauSelect>,
    @InjectRepository(Tableau12)
    private readonly tableau12Repository: Repository<Tableau12>,
    @InjectRepository(Tableau11)
    private readonly tableau11Repository: Repository<Tableau11>,
    @InjectRepository(Tableau1)
    private readonly tableau1Repository: Repository<Tableau1>,
    @InjectRepository(Temporaire)
    private readonly temporaireRepository: Repository<Temporaire>,
    @InjectRepository(Topo)
    private readonly topoRepository: Repository<Topo>,
    @InjectRepository(Transversales)
    private readonly transversalesRepository: Repository<Transversales>,
    @InjectRepository(TypeVoie)
    private readonly typeVoieRepository: Repository<TypeVoie>,
    @InjectRepository(Voie)
    private readonly voieRepository: Repository<Voie>,
  ) {}

  async getConstant(type: Constant) {
    let data = null;
    switch (type) {
      case Constant._V15:
        data = await this._v15Repository.find();
        break;
      case Constant._V154:
        data = await this._v154Repository.find();
        break;
      case Constant.AXE:
        data = await this.axeRepository.find();
        break;
      case Constant.COMPATIBILITIEES:
        data = await this.compatibiliteesRepository.find();
        break;
      case Constant.CONVERT:
        data = await this.convertRepository.find();
        break;
      case Constant.LONGITUDINALES:
        data = await this.longitudinalesRepository.find();
        break;
      case Constant.MOD:
        data = await this.modRepository.find();
        break;
      case Constant.P_SAT:
        data = await this.pSatRepository.find();
        break;
      case Constant.PRIMAIRE:
        data = await this.primaireRepository.find();
        break;
      case Constant.PROD:
        data = await this.prodRepository.find();
        break;
      case Constant.PRODUITS_TYPE:
        data = await this.produitsTypeRepository.find();
        break;
      case Constant.RECO:
        data = await this.recoRepository.find();
        break;
      case Constant.SUP:
        data = await this.supRepository.find();
        break;
      case Constant.TABLEAU_ANGLE_2:
        data = await this.tableauAngle2Repository.find();
        break;
      case Constant.TABLEAU_BILLES:
        data = await this.tableauBillesRepository.find();
        break;
      case Constant.TABLEAU_BUSES_CARACTERISTIQUE:
        data = await this.tableauBusesCaracteristiqueRepository.find();
        break;
      case Constant.TABLEAU_LISTE_BUSES:
        data = await this.tableauListeBusesRepository.find();
        break;
      case Constant.TABLEAU_MARK:
        data = await this.tableauMarkRepository.find();
        break;
      case Constant.TABLEAU_MESH:
        data = await this.tableauMeshRepository.find();
        break;
      case Constant.TABLEAU_P:
        data = await this.tableauPRepository.find();
        break;
      case Constant.TABLEAU_Q:
        data = await this.tableauQRepository.find();
        break;
      case Constant.TABLEAU_R:
        data = await this.tableauRRepository.find();
        break;
      case Constant.TABLEAU_RR:
        data = await this.tableauRRRepository.find();
        break;
      case Constant.TABLEAU_RW:
        data = await this.tableauRWRepository.find();
        break;
      case Constant.TABLEAU_S:
        data = await this.tableauSRepository.find();
        break;
      case Constant.TABLEAU_SELECT:
        data = await this.tableauSelectRepository.find();
        break;
      case Constant.TABLEAU1_2:
        data = await this.tableau12Repository.find();
        break;
      case Constant.TABLEAU1_1:
        data = await this.tableau11Repository.find();
        break;
      case Constant.TABLEAU1:
        data = await this.tableau1Repository.find();
        break;
      case Constant.TEMPORAIRE:
        data = await this.temporaireRepository.find();
        break;
      case Constant.TOPO:
        data = await this.topoRepository.find();
        break;
      case Constant.TRANSVERSALES:
        data = await this.transversalesRepository.find();
        break;
      case Constant.TYPE_VOIE:
        data = await this.typeVoieRepository.find();
        break;
      case Constant.VOIE:
        data = await this.voieRepository.find();
        break;
      default:
        break;
    }

    return {
      status: HttpStatus.OK,
      data,
      pagination: null,
      message: null,
      code: ApiCode.SUCCESS,
    };
  }

  async addConstant(dto: AddConstantRequest) {
    const { type, ...input } = dto;

    let data = null;
    switch (type) {
      case Constant._V15:
        data = input._v15 ? await this._v15Repository.save(input._v15) : null;
        break;
      case Constant._V154:
        data = input._v154
          ? await this._v154Repository.save(input._v154)
          : null;
        break;
      case Constant.AXE:
        data = input.axe ? await this.axeRepository.save(input.axe) : null;
        break;
      case Constant.COMPATIBILITIEES:
        data = input.compatibilitees
          ? await this.compatibiliteesRepository.save(input.compatibilitees)
          : null;
        break;
      case Constant.CONVERT:
        data = input.convert
          ? await this.convertRepository.save(input.convert)
          : null;
        break;
      case Constant.LONGITUDINALES:
        data = input.longitudinales
          ? await this.longitudinalesRepository.save(input.longitudinales)
          : null;
        break;
      case Constant.MOD:
        data = input.mod ? await this.modRepository.save(input.mod) : null;
        break;
      case Constant.P_SAT:
        data = input.pSat ? await this.pSatRepository.save(input.pSat) : null;
        break;
      case Constant.PRIMAIRE:
        data = input.primaire
          ? await this.primaireRepository.save(input.primaire)
          : null;
        break;
      case Constant.PROD:
        data = input.prod ? await this.prodRepository.save(input.prod) : null;
        break;
      case Constant.PRODUITS_TYPE:
        data = input.produitsType
          ? await this.produitsTypeRepository.save(input.produitsType)
          : null;
        break;
      case Constant.RECO:
        data = input.reco ? await this.recoRepository.save(input.reco) : null;
        break;
      case Constant.SUP:
        data = input.sup ? await this.supRepository.save(input.sup) : null;
        break;
      case Constant.TABLEAU_ANGLE_2:
        data = input.tableauAngle2
          ? await this.tableauAngle2Repository.save(input.tableauAngle2)
          : null;
        break;
      case Constant.TABLEAU_BILLES:
        data = input.tableauBilles
          ? await this.tableauBillesRepository.save(input.tableauBilles)
          : null;
        break;
      case Constant.TABLEAU_BUSES_CARACTERISTIQUE:
        data = input.tableauBusesCaracteristique
          ? await this.tableauBusesCaracteristiqueRepository.save(
              input.tableauBusesCaracteristique,
            )
          : null;
        break;
      case Constant.TABLEAU_LISTE_BUSES:
        data = input.tableauListeBuses
          ? await this.tableauListeBusesRepository.save(input.tableauListeBuses)
          : null;
        break;
      case Constant.TABLEAU_MARK:
        data = input.tableauMark
          ? await this.tableauMarkRepository.save(input.tableauMark)
          : null;
        break;
      case Constant.TABLEAU_MESH:
        data = input.tableauMesh
          ? await this.tableauMeshRepository.save(input.tableauMesh)
          : null;
        break;
      case Constant.TABLEAU_P:
        data = input.tableauP
          ? await this.tableauPRepository.save(input.tableauP)
          : null;
        break;
      case Constant.TABLEAU_Q:
        data = input.tableauQ
          ? await this.tableauQRepository.save(input.tableauQ)
          : null;
        break;
      case Constant.TABLEAU_R:
        data = input.tableauR
          ? await this.tableauRRepository.save(input.tableauR)
          : null;
        break;
      case Constant.TABLEAU_RR:
        data = input.tableauRR
          ? await this.tableauRRRepository.save(input.tableauRR)
          : null;
        break;
      case Constant.TABLEAU_RW:
        data = input.tableauRW
          ? await this.tableauRWRepository.save(input.tableauRW)
          : null;
        break;
      case Constant.TABLEAU_S:
        data = input.tableauS
          ? await this.tableauSRepository.save(input.tableauS)
          : null;
        break;
      case Constant.TABLEAU_SELECT:
        data = input.tableauSelect
          ? await this.tableauSelectRepository.save(input.tableauSelect)
          : null;
        break;
      case Constant.TABLEAU1_2:
        data = input.tableau12
          ? await this.tableau12Repository.save(input.tableau12)
          : null;
        break;
      case Constant.TABLEAU1_1:
        data = input.tableau11
          ? await this.tableau11Repository.save(input.tableau11)
          : null;
        break;
      case Constant.TABLEAU1:
        data = input.tableau1
          ? await this.tableau1Repository.save(input.tableau1)
          : null;
        break;
      case Constant.TEMPORAIRE:
        data = input.temporaire
          ? await this.temporaireRepository.save(input.temporaire)
          : null;
        break;
      case Constant.TOPO:
        data = input.topo ? await this.topoRepository.save(input.topo) : null;
        break;
      case Constant.TRANSVERSALES:
        data = input.transversales
          ? await this.transversalesRepository.save(input.transversales)
          : null;
        break;
      case Constant.TYPE_VOIE:
        data = input.typeVoie
          ? await this.typeVoieRepository.save(input.typeVoie)
          : null;
        break;
      case Constant.VOIE:
        data = input.voie ? await this.voieRepository.save(input.voie) : null;
        break;
      default:
        break;
    }

    return {
      status: HttpStatus.OK,
      data,
      pagination: null,
      message: null,
      code: ApiCode.SUCCESS,
    };
  }

  async updateConstant(id: number, dto: UpdateConstantRequest) {
    try {
      const { type, ...input } = dto;

      let data = null;
      switch (type) {
        case Constant._V15:
          data = input._v15
            ? await this._v15Repository.update(id, input._v15)
            : null;
          break;
        case Constant._V154:
          data = input._v154
            ? await this._v154Repository.update(id, input._v154)
            : null;
          break;
        case Constant.AXE:
          data = input.axe
            ? await this.axeRepository.update(id, input.axe)
            : null;
          break;
        case Constant.COMPATIBILITIEES:
          data = input.compatibilitees
            ? await this.compatibiliteesRepository.update(
                id,
                input.compatibilitees,
              )
            : null;
          break;
        case Constant.CONVERT:
          data = input.convert
            ? await this.convertRepository.update(id, input.convert)
            : null;
          break;
        case Constant.LONGITUDINALES:
          data = input.longitudinales
            ? await this.longitudinalesRepository.update(
                id,
                input.longitudinales,
              )
            : null;
          break;
        case Constant.MOD:
          data = input.mod
            ? await this.modRepository.update(id, input.mod)
            : null;
          break;
        case Constant.P_SAT:
          data = input.pSat
            ? await this.pSatRepository.update(id, input.pSat)
            : null;
          break;
        case Constant.PRIMAIRE:
          data = input.primaire
            ? await this.primaireRepository.update(id, input.primaire)
            : null;
          break;
        case Constant.PROD:
          data = input.prod
            ? await this.prodRepository.update(id, input.prod)
            : null;
          break;
        case Constant.PRODUITS_TYPE:
          data = input.produitsType
            ? await this.produitsTypeRepository.update(id, input.produitsType)
            : null;
          break;
        case Constant.RECO:
          data = input.reco
            ? await this.recoRepository.update(id, input.reco)
            : null;
          break;
        case Constant.SUP:
          data = input.sup
            ? await this.supRepository.update(id, input.sup)
            : null;
          break;
        case Constant.TABLEAU_ANGLE_2:
          data = input.tableauAngle2
            ? await this.tableauAngle2Repository.update(id, input.tableauAngle2)
            : null;
          break;
        case Constant.TABLEAU_BILLES:
          data = input.tableauBilles
            ? await this.tableauBillesRepository.update(id, input.tableauBilles)
            : null;
          break;
        case Constant.TABLEAU_BUSES_CARACTERISTIQUE:
          data = input.tableauBusesCaracteristique
            ? await this.tableauBusesCaracteristiqueRepository.update(
                id,
                input.tableauBusesCaracteristique,
              )
            : null;
          break;
        case Constant.TABLEAU_LISTE_BUSES:
          data = input.tableauListeBuses
            ? await this.tableauListeBusesRepository.update(
                id,
                input.tableauListeBuses,
              )
            : null;
          break;
        case Constant.TABLEAU_MARK:
          data = input.tableauMark
            ? await this.tableauMarkRepository.update(id, input.tableauMark)
            : null;
          break;
        case Constant.TABLEAU_MESH:
          data = input.tableauMesh
            ? await this.tableauMeshRepository.update(id, input.tableauMesh)
            : null;
          break;
        case Constant.TABLEAU_P:
          data = input.tableauP
            ? await this.tableauPRepository.update(id, input.tableauP)
            : null;
          break;
        case Constant.TABLEAU_Q:
          data = input.tableauQ
            ? await this.tableauQRepository.update(id, input.tableauQ)
            : null;
          break;
        case Constant.TABLEAU_R:
          data = input.tableauR
            ? await this.tableauRRepository.update(id, input.tableauR)
            : null;
          break;
        case Constant.TABLEAU_RR:
          data = input.tableauRR
            ? await this.tableauRRRepository.update(id, input.tableauRR)
            : null;
          break;
        case Constant.TABLEAU_RW:
          data = input.tableauRW
            ? await this.tableauRWRepository.update(id, input.tableauRW)
            : null;
          break;
        case Constant.TABLEAU_S:
          data = input.tableauS
            ? await this.tableauSRepository.update(id, input.tableauS)
            : null;
          break;
        case Constant.TABLEAU_SELECT:
          data = input.tableauSelect
            ? await this.tableauSelectRepository.update(id, input.tableauSelect)
            : null;
          break;
        case Constant.TABLEAU1_2:
          data = input.tableau12
            ? await this.tableau12Repository.update(id, input.tableau12)
            : null;
          break;
        case Constant.TABLEAU1_1:
          data = input.tableau11
            ? await this.tableau11Repository.update(id, input.tableau11)
            : null;
          break;
        case Constant.TABLEAU1:
          data = input.tableau1
            ? await this.tableau1Repository.update(id, input.tableau1)
            : null;
          break;
        case Constant.TEMPORAIRE:
          data = input.temporaire
            ? await this.temporaireRepository.update(id, input.temporaire)
            : null;
          break;
        case Constant.TOPO:
          data = input.topo
            ? await this.topoRepository.update(id, input.topo)
            : null;
          break;
        case Constant.TRANSVERSALES:
          data = input.transversales
            ? await this.transversalesRepository.update(id, input.transversales)
            : null;
          break;
        case Constant.TYPE_VOIE:
          data = input.typeVoie
            ? await this.typeVoieRepository.update(id, input.typeVoie)
            : null;
          break;
        case Constant.VOIE:
          data = input.voie
            ? await this.voieRepository.update(id, input.voie)
            : null;
          break;
        default:
          break;
      }

      return {
        status: HttpStatus.OK,
        data: null,
        pagination: null,
        message: data ? 'Success' : 'Failed',
        code: ApiCode.SUCCESS,
      };
    } catch (err) {
      throw new ApiException(
        HttpStatus.BAD_REQUEST,
        ErrorCode.INVALID_UPDATE_CONSTANT_INPUT,
      );
    }
  }

  async deleteConstant(id: number, type: Constant) {
    let data = null;
    switch (type) {
      case Constant._V15:
        data = await this._v15Repository.delete(id);
        break;
      case Constant._V154:
        data = await this._v154Repository.delete(id);
        break;
      case Constant.AXE:
        data = await this.axeRepository.delete(id);
        break;
      case Constant.COMPATIBILITIEES:
        data = await this.compatibiliteesRepository.delete(id);
        break;
      case Constant.CONVERT:
        data = await this.convertRepository.delete(id);
        break;
      case Constant.LONGITUDINALES:
        data = await this.longitudinalesRepository.delete(id);
        break;
      case Constant.MOD:
        data = await this.modRepository.delete(id);
        break;
      case Constant.P_SAT:
        data = await this.pSatRepository.delete(id);
        break;
      case Constant.PRIMAIRE:
        data = await this.primaireRepository.delete(id);
        break;
      case Constant.PROD:
        data = await this.prodRepository.delete(id);
        break;
      case Constant.PRODUITS_TYPE:
        data = await this.produitsTypeRepository.delete(id);
        break;
      case Constant.RECO:
        data = await this.recoRepository.delete(id);
        break;
      case Constant.SUP:
        data = await this.supRepository.delete(id);
        break;
      case Constant.TABLEAU_ANGLE_2:
        data = await this.tableauAngle2Repository.delete(id);
        break;
      case Constant.TABLEAU_BILLES:
        data = await this.tableauBillesRepository.delete(id);
        break;
      case Constant.TABLEAU_BUSES_CARACTERISTIQUE:
        data = await this.tableauBusesCaracteristiqueRepository.delete(id);
        break;
      case Constant.TABLEAU_LISTE_BUSES:
        data = await this.tableauListeBusesRepository.delete(id);
        break;
      case Constant.TABLEAU_MARK:
        data = await this.tableauMarkRepository.delete(id);
        break;
      case Constant.TABLEAU_MESH:
        data = await this.tableauMeshRepository.delete(id);
        break;
      case Constant.TABLEAU_P:
        data = await this.tableauPRepository.delete(id);
        break;
      case Constant.TABLEAU_Q:
        data = await this.tableauQRepository.delete(id);
        break;
      case Constant.TABLEAU_R:
        data = await this.tableauRRepository.delete(id);
        break;
      case Constant.TABLEAU_RR:
        data = await this.tableauRRRepository.delete(id);
        break;
      case Constant.TABLEAU_RW:
        data = await this.tableauRWRepository.delete(id);
        break;
      case Constant.TABLEAU_S:
        data = await this.tableauSRepository.delete(id);
        break;
      case Constant.TABLEAU_SELECT:
        data = await this.tableauSelectRepository.delete(id);
        break;
      case Constant.TABLEAU1_2:
        data = await this.tableau12Repository.delete(id);
        break;
      case Constant.TABLEAU1_1:
        data = await this.tableau11Repository.delete(id);
        break;
      case Constant.TABLEAU1:
        data = await this.tableau1Repository.delete(id);
        break;
      case Constant.TEMPORAIRE:
        data = await this.temporaireRepository.delete(id);
        break;
      case Constant.TOPO:
        data = await this.topoRepository.delete(id);
        break;
      case Constant.TRANSVERSALES:
        data = await this.transversalesRepository.delete(id);
        break;
      case Constant.TYPE_VOIE:
        data = await this.typeVoieRepository.delete(id);
        break;
      case Constant.VOIE:
        data = await this.voieRepository.delete(id);
        break;
      default:
        break;
    }

    return {
      status: HttpStatus.OK,
      data: null,
      pagination: null,
      message: data ? 'Success' : 'Failed',
      code: ApiCode.SUCCESS,
    };
  }
}
