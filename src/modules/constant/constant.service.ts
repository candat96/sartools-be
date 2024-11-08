import { Constant } from '@common/constants/enum';
import { ConstantService as AdminConstantService } from '@modules/admin/constant/constant.service';
import { GetAllConstantResponseDto } from '@modules/constant/dto/get-all-constant.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ConstantService {
  constructor(private readonly adminConstantService: AdminConstantService) {}

  async getAll() {
    const data: GetAllConstantResponseDto = {
      _v15: await this.adminConstantService.getConstant(Constant._V15),
      _v154: await this.adminConstantService.getConstant(Constant._V154),
      axe: await this.adminConstantService.getConstant(Constant.AXE),
      compatibilitees: await this.adminConstantService.getConstant(
        Constant.COMPATIBILITIEES,
      ),
      convert: await this.adminConstantService.getConstant(Constant.CONVERT),
      longitudinales: await this.adminConstantService.getConstant(
        Constant.LONGITUDINALES,
      ),
      mod: await this.adminConstantService.getConstant(Constant.MOD),
      pSat: await this.adminConstantService.getConstant(Constant.P_SAT),
      primaire: await this.adminConstantService.getConstant(Constant.PRIMAIRE),
      prod: await this.adminConstantService.getConstant(Constant.PROD),
      produitsType: await this.adminConstantService.getConstant(
        Constant.PRODUITS_TYPE,
      ),
      reco: await this.adminConstantService.getConstant(Constant.RECO),
      sup: await this.adminConstantService.getConstant(Constant.SUP),
      tableauAngle2: await this.adminConstantService.getConstant(
        Constant.TABLEAU_ANGLE_2,
      ),
      tableauBilles: await this.adminConstantService.getConstant(
        Constant.TABLEAU_BILLES,
      ),
      tableauBusesCaracteristique: await this.adminConstantService.getConstant(
        Constant.TABLEAU_BUSES_CARACTERISTIQUE,
      ),
      tableauListeBuses: await this.adminConstantService.getConstant(
        Constant.TABLEAU_LISTE_BUSES,
      ),
      tableauMark: await this.adminConstantService.getConstant(
        Constant.TABLEAU_MARK,
      ),
      tableauMesh: await this.adminConstantService.getConstant(
        Constant.TABLEAU_MESH,
      ),
      tableauP: await this.adminConstantService.getConstant(Constant.TABLEAU_P),
      tableauQ: await this.adminConstantService.getConstant(Constant.TABLEAU_Q),
      tableauR: await this.adminConstantService.getConstant(Constant.TABLEAU_R),
      tableauRR: await this.adminConstantService.getConstant(
        Constant.TABLEAU_RR,
      ),
      tableauRW: await this.adminConstantService.getConstant(
        Constant.TABLEAU_RW,
      ),
      tableauS: await this.adminConstantService.getConstant(Constant.TABLEAU_S),
      tableauSelect: await this.adminConstantService.getConstant(
        Constant.TABLEAU_SELECT,
      ),
      tableau12: await this.adminConstantService.getConstant(
        Constant.TABLEAU1_2,
      ),
      tableau11: await this.adminConstantService.getConstant(
        Constant.TABLEAU1_1,
      ),
      tableau1: await this.adminConstantService.getConstant(Constant.TABLEAU1),
      temporaire: await this.adminConstantService.getConstant(
        Constant.TEMPORAIRE,
      ),
      topo: await this.adminConstantService.getConstant(Constant.TOPO),
      transversales: await this.adminConstantService.getConstant(
        Constant.TRANSVERSALES,
      ),
      typeVoie: await this.adminConstantService.getConstant(Constant.TYPE_VOIE),
      voie: await this.adminConstantService.getConstant(Constant.VOIE),
    };

    return data;
  }
}
