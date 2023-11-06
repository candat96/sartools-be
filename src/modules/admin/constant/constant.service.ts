import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AddConstantRequest } from './dto/request';
import { ApiCode } from '../../../common/constants/api-code';
import { Constant } from '../../../common/constants/enum';
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
        data = await this._v15Repository.findBy({ deletedAt: null });
        break;
      case Constant._V154:
        data = await this._v154Repository.findBy({ deletedAt: null });
        break;
      case Constant.AXE:
        data = await this.axeRepository.findBy({ deletedAt: null });
        break;
      case Constant.COMPATIBILITIEES:
        data = await this.compatibiliteesRepository.findBy({ deletedAt: null });
        break;
      case Constant.CONVERT:
        data = await this.convertRepository.findBy({ deletedAt: null });
        break;
      case Constant.LONGITUDINALES:
        data = await this.longitudinalesRepository.findBy({ deletedAt: null });
        break;
      case Constant.MOD:
        data = await this.modRepository.findBy({ deletedAt: null });
        break;
      case Constant.P_SAT:
        data = await this.pSatRepository.findBy({ deletedAt: null });
        break;
      case Constant.PRIMAIRE:
        data = await this.primaireRepository.findBy({ deletedAt: null });
        break;
      case Constant.PROD:
        data = await this.prodRepository.findBy({ deletedAt: null });
        break;
      case Constant.PRODUITS_TYPE:
        data = await this.produitsTypeRepository.findBy({ deletedAt: null });
        break;
      case Constant.RECO:
        data = await this.recoRepository.findBy({ deletedAt: null });
        break;
      case Constant.SUP:
        data = await this.supRepository.findBy({ deletedAt: null });
        break;
      case Constant.TABLEAU_ANGLE_2:
        data = await this.tableauAngle2Repository.findBy({ deletedAt: null });
        break;
      case Constant.TABLEAU_BILLES:
        data = await this.tableauBillesRepository.findBy({ deletedAt: null });
        break;
      case Constant.TABLEAU_BUSES_CARACTERISTIQUE:
        data = await this.tableauBusesCaracteristiqueRepository.findBy({ deletedAt: null });
        break;
      case Constant.TABLEAU_LISTE_BUSES:
        data = await this.tableauListeBusesRepository.findBy({ deletedAt: null });
        break;
      case Constant.TABLEAU_MARK:
        data = await this.tableauMarkRepository.findBy({ deletedAt: null });
        break;
      case Constant.TABLEAU_MESH:
        data = await this.tableauMeshRepository.findBy({ deletedAt: null });
        break;
      case Constant.TABLEAU_P:
        data = await this.tableauPRepository.findBy({ deletedAt: null });
        break;
      case Constant.TABLEAU_Q:
        data = await this.tableauQRepository.findBy({ deletedAt: null });
        break;
      case Constant.TABLEAU_R:
        data = await this.tableauRRepository.findBy({ deletedAt: null });
        break;
      case Constant.TABLEAU_RR:
        data = await this.tableauRRRepository.findBy({ deletedAt: null });
        break;
      case Constant.TABLEAU_RW:
        data = await this.tableauRWRepository.findBy({ deletedAt: null });
        break;
      case Constant.TABLEAU_S:
        data = await this.tableauSRepository.findBy({ deletedAt: null });
        break;
      case Constant.TABLEAU_SELECT:
        data = await this.tableauSelectRepository.findBy({ deletedAt: null });
        break;
      case Constant.TABLEAU1_2:
        data = await this.tableau12Repository.findBy({ deletedAt: null });
        break;
      case Constant.TABLEAU1_1:
        data = await this.tableau11Repository.findBy({ deletedAt: null });
        break;
      case Constant.TABLEAU1:
        data = await this.tableau1Repository.findBy({ deletedAt: null });
        break;
      case Constant.TEMPORAIRE:
        data = await this.temporaireRepository.findBy({ deletedAt: null });
        break;
      case Constant.TOPO:
        data = await this.topoRepository.findBy({ deletedAt: null });
        break;
      case Constant.TRANSVERSALES:
        data = await this.transversalesRepository.findBy({ deletedAt: null });
        break;
      case Constant.TYPE_VOIE:
        data = await this.typeVoieRepository.findBy({ deletedAt: null });
        break;
      case Constant.VOIE:
        data = await this.voieRepository.findBy({ deletedAt: null });
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
        data = input._v154 ? await this._v154Repository.save(input._v154) : null;
        break;
      case Constant.AXE:
        data = input.axe ? await this.axeRepository.save(input.axe) : null;
        break;
      case Constant.COMPATIBILITIEES:
        data = input.compatibilitees ? await this.compatibiliteesRepository.save(input.compatibilitees) : null;
        break;
      case Constant.CONVERT:
        data = input.convert ? await this.convertRepository.save(input.convert) : null;
        break;
      case Constant.LONGITUDINALES:
        data = input.longitudinales ? await this.longitudinalesRepository.save(input.longitudinales) : null;
        break;
      case Constant.MOD:
        data = input.mod ? await this.modRepository.save(input.mod) : null;
        break;
      case Constant.P_SAT:
        data = input.pSat ? await this.pSatRepository.save(input.pSat) : null;
        break;
      case Constant.PRIMAIRE:
        data = input.primaire ? await this.primaireRepository.save(input.primaire) : null;
        break;
      case Constant.PROD:
        data = input.prod ? await this.prodRepository.save(input.prod) : null;
        break;
      case Constant.PRODUITS_TYPE:
        data = input.produitsType ? await this.produitsTypeRepository.save(input.produitsType) : null;
        break;
      case Constant.RECO:
        data = input.reco ? await this.recoRepository.save(input.reco) : null;
        break;
      case Constant.SUP:
        data = input.sup ? await this.supRepository.save(input.sup) : null;
        break;
      case Constant.TABLEAU_ANGLE_2:
        data = input.tableauAngle2 ? await this.tableauAngle2Repository.save(input.tableauAngle2) : null;
        break;
      case Constant.TABLEAU_BILLES:
        data = input.tableauBilles ? await this.tableauBillesRepository.save(input.tableauBilles) : null;
        break;
      case Constant.TABLEAU_BUSES_CARACTERISTIQUE:
        data = input.tableauBusesCaracteristique ? await this.tableauBusesCaracteristiqueRepository.save(input.tableauBusesCaracteristique) : null;
        break;
      case Constant.TABLEAU_LISTE_BUSES:
        data = input.tableauListeBuses ? await this.tableauListeBusesRepository.save(input.tableauListeBuses) : null;
        break;
      case Constant.TABLEAU_MARK:
        data = input.tableauMark ? await this.tableauMarkRepository.save(input.tableauMark) : null;
        break;
      case Constant.TABLEAU_MESH:
        data = input.tableauMesh ? await this.tableauMeshRepository.save(input.tableauMesh) : null;
        break;
      case Constant.TABLEAU_P:
        data = input.tableauP ? await this.tableauPRepository.save(input.tableauP) : null;
        break;
      case Constant.TABLEAU_Q:
        data = input.tableauQ ? await this.tableauQRepository.save(input.tableauQ) : null;
        break;
      case Constant.TABLEAU_R:
        data = input.tableauR ? await this.tableauRRepository.save(input.tableauR) : null;
        break;
      case Constant.TABLEAU_RR:
        data = input.tableauRR ? await this.tableauRRRepository.save(input.tableauRR) : null;
        break;
      case Constant.TABLEAU_RW:
        data = input.tableauRW ? await this.tableauRWRepository.save(input.tableauRW) : null;
        break;
      case Constant.TABLEAU_S:
        data = input.tableauS ? await this.tableauSRepository.save(input.tableauS) : null;
        break;
      case Constant.TABLEAU_SELECT:
        data = input.tableauSelect ? await this.tableauSelectRepository.save(input.tableauSelect) : null;
        break;
      case Constant.TABLEAU1_2:
        data = input.tableau12 ? await this.tableau12Repository.save(input.tableau12) : null;
        break;
      case Constant.TABLEAU1_1:
        data = input.tableau11 ? await this.tableau11Repository.save(input.tableau11) : null;
        break;
      case Constant.TABLEAU1:
        data = input.tableau1 ? await this.tableau1Repository.save(input.tableau1) : null;
        break;
      case Constant.TEMPORAIRE:
        data = input.temporaire ? await this.temporaireRepository.save(input.temporaire) : null;
        break;
      case Constant.TOPO:
        data = input.topo ? await this.topoRepository.save(input.topo) : null;
        break;
      case Constant.TRANSVERSALES:
        data = input.transversales ? await this.transversalesRepository.save(input.transversales) : null;
        break;
      case Constant.TYPE_VOIE:
        data = input.typeVoie ? await this.typeVoieRepository.save(input.typeVoie) : null;
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
}
