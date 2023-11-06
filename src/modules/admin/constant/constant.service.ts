import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
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
}
